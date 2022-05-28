import mysql.connector   #pip3 install mysql-connector-python    
import random            #random generator
import string 
import hashlib           #sha256 hashing

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

def get_user_id(email): #gives the user id as am int
      mydb = mysql.connector.connect(host='34.88.151.208',port=3306,user='root',passwd='MuieLuMuila',db='SEP6-DB')
      cursor = mydb.cursor()
      SQL_getUserData = "SELECT id FROM Users WHERE Email = %s"
      cursor.execute(SQL_getUserData, (email, ))
      rows = cursor.fetchone()
      mydb.close()
      for row in rows:
            return int(row)
      return -1

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