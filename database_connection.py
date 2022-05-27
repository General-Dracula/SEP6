import mysql.connector   #pip3 instal   l mysql-connector-python    
import random            #random generator
import string 
import hashlib           #sha256 hashing
import datetime

def random_char(char_num):
       return ''.join(random.choice(string.ascii_letters) for _ in range(char_num))
     
def add_user(char_email, char_password): #return false if user allready created
      mydb = mysql.connector.connect(host='34.88.151.208',port=3306,user='root',passwd='MuieLuMuila',db='SEP6-DB')
      cursor = mydb.cursor()
      SQL_checkMultipleUsers = "SELECT * FROM Users WHERE Email = %s"
      cursor.execute(SQL_checkMultipleUsers, (char_email, ))
      rows = cursor.fetchall()  
      for row in rows:
            mydb.close()
            print('User allready created')
            return False
      SQL_add_user = "INSERT INTO Users (Email, Password_Hash) VALUES (%s, %s)"
      hashed_password = hashlib.sha256(char_password.encode('utf-8')).hexdigest()
      data_user = (char_email, hashed_password)
      cursor.execute(SQL_add_user, data_user)
      mydb.commit()
      mydb.close()
      return
    
def check_password(email, password): #returns true or false
      mydb = mysql.connector.connect(host='34.88.151.208',port=3306,user='root',passwd='MuieLuMuila',db='SEP6-DB')
      cursor = mydb.cursor()
      SQL_getUserData = "SELECT * FROM Users WHERE Email = %s AND Password_Hash = %s"
      cursor.execute(SQL_getUserData, (email, hashlib.sha256(password.encode('utf-8')).hexdigest()))
      rows = cursor.fetchall()
      mydb.close()   
      for row in rows:
            return True
      print('User not found')
      return False

def delete_user(email): #deletes both user and his favorite movies
      mydb = mysql.connector.connect(host='34.88.151.208',port=3306,user='root',passwd='MuieLuMuila',db='SEP6-DB')
      cursor = mydb.cursor()
      user_id = get_user_id(email)
      SQL_deleteFavMov = "DELETE FROM FavoriteMovies WHERE UserId = %s"
      cursor.execute(SQL_deleteFavMov, (user_id, ))
      SQL_deleteUserWithID = "DELETE FROM Users WHERE id = %s"
      cursor.execute(SQL_deleteUserWithID, (user_id, ))
      mydb.commit()
      mydb.close()
      return

def get_user_id(email): #gives the user id as an int for the given email
      mydb = mysql.connector.connect(host='34.88.151.208',port=3306,user='root',passwd='MuieLuMuila',db='SEP6-DB')
      cursor = mydb.cursor()
      SQL_getUserData = "SELECT id FROM Users WHERE Email = %s"
      cursor.execute(SQL_getUserData, (email, ))
      rows = cursor.fetchone()
      mydb.close()
      for row in rows:
            return int(row)
      return -1

def delete_favorite_movie(movie_id, user_email): #deletes favorite movie
      mydb = mysql.connector.connect(host='34.88.151.208',port=3306,user='root',passwd='MuieLuMuila',db='SEP6-DB')
      cursor = mydb.cursor()
      SQL_checkMultipleUsers = "SELECT * FROM Users WHERE Email = %s"
      cursor.execute(SQL_checkMultipleUsers, (user_email, ))
      rows = cursor.fetchall()  
      checkUser = 0
      for row in rows:
            checkUser = 1
      if(checkUser == 0):
            mydb.close()
            print('User inexistant')
            return False
      
      SQL_delete_fav_mov = "DELETE FROM FavoriteMovies WHERE MovieId = %s AND UserId = %s"
      cursor.execute(SQL_delete_fav_mov, (int(movie_id), get_user_id(user_email)))
      mydb.commit()
      mydb.close()
      print('Fav movie deleted')
      return
      

def add_favorite_movie(movie_id, user_email): #returns false if movie allready added or user not existing
      mydb = mysql.connector.connect(host='34.88.151.208',port=3306,user='root',passwd='MuieLuMuila',db='SEP6-DB')
      cursor = mydb.cursor()
      SQL_checkMultipleUsers = "SELECT * FROM Users WHERE Email = %s"
      cursor.execute(SQL_checkMultipleUsers, (user_email, ))
      rows = cursor.fetchall()  
      checkUser = 0
      for row in rows:
            checkUser = 1
      if(checkUser == 0):
            mydb.close()
            print('User inexistant')
            return False
      
      SQL_checkMultipleMovies = "SELECT * FROM FavoriteMovies WHERE MovieId = %s AND UserId = %s"
      cursor.execute(SQL_checkMultipleMovies, (movie_id, get_user_id(user_email)))
      rows = cursor.fetchall()  
      for row in rows:
            mydb.close()
            print('Movie allready favorite')
            return False
      
      SQL_add_user = "INSERT INTO FavoriteMovies (MovieId, UserId) VALUES (%s, %s)"
      favMovData = (movie_id, get_user_id(user_email))
      cursor.execute(SQL_add_user, favMovData)
      mydb.commit()
      mydb.close()  
      return
      
def get_favorite_movies(user_email): #gives a vector of the id of the favorite movies of a user 
      mydb = mysql.connector.connect(host='34.88.151.208',port=3306,user='root',passwd='MuieLuMuila',db='SEP6-DB')
      cursor = mydb.cursor()
      SQL_checkMultipleUsers = "SELECT MovieId FROM FavoriteMovies WHERE UserId = %s"
      cursor.execute(SQL_checkMultipleUsers, (get_user_id(user_email), ))
      rows = cursor.fetchall()
      return_list = []
      for row in rows:
            return_list.append(int(row[0]))
      mydb.close()
      return return_list

def user_visitted_page(): #adds a record to the dbs of a user logging in and deleted logs older than 26 hours
      mydb = mysql.connector.connect(host='34.88.151.208',port=3306,user='root',passwd='MuieLuMuila',db='SEP6-DB')
      cursor = mydb.cursor()
      now = datetime.datetime.now()
      SQL_user_logged_in = "INSERT INTO UserLogged (date) VALUES (%s)"
      cursor.execute(SQL_user_logged_in, (now.strftime("%Y/%m/%d %H:%M:%S"), ))
      SQL_delete_old_records = "DELETE FROM UserLogged WHERE UserLogged.date < DATE_SUB(NOW(), INTERVAL 26 HOUR)"
      cursor.execute(SQL_delete_old_records)
      mydb.commit()
      mydb.close() 
      return

def get_visit_numbers_last_24hr(): #does what it sounds like, should subtract current one
      mydb = mysql.connector.connect(host='34.88.151.208',port=3306,user='root',passwd='MuieLuMuila',db='SEP6-DB')
      cursor = mydb.cursor()
      SQL_Users_last_24h = "SELECT * FROM UserLogged WHERE UserLogged.date > DATE_SUB(NOW(), INTERVAL 24 HOUR)"
      cursor.execute(SQL_Users_last_24h, ())
      rows = cursor.fetchall()
      mydb.close() 
      return len(rows)
      
      