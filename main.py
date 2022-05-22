from pickle import FALSE, TRUE
from flask import Flask

import mysql.connector   #pip3 install mysql-connector-python    
import random            #random generator
import string 
import hashlib           #sha256 hashing

def random_char(char_num):
       return ''.join(random.choice(string.ascii_letters) for _ in range(char_num))
     
def add_user(char_email, char_password):
      mydb = mysql.connector.connect(host='34.88.151.208',port=3306,user='root',passwd='MuieLuMuila',db='SEP6-DB')
      cursor =mydb.cursor()
      SQL_add_user = "INSERT INTO Users (Email, Password_Hash) VALUES (%s, %s)"
      hashed_password = hashlib.sha256(char_password.encode('utf-8')).hexdigest()
      data_user = (char_email, hashed_password)
      cursor.execute(SQL_add_user, data_user)
      mydb.commit()
      mydb.close()
      return
    
def check_password(email, password):
      mydb = mysql.connector.connect(host='34.88.151.208',port=3306,user='root',passwd='MuieLuMuila',db='SEP6-DB')
      cursor =mydb.cursor()
      SQL_getUserData = "SELECT * FROM Users WHERE Email = %s AND Password_Hash = %s"
      cursor.execute(SQL_getUserData, (email, hashlib.sha256(password.encode('utf-8')).hexdigest()))
      rows = cursor.fetchall()
      mydb.close()   
      for row in rows:
            return TRUE
      return FALSE

def get_user_id(email): #to be continued
      mydb = mysql.connector.connect(host='34.88.151.208',port=3306,user='root',passwd='MuieLuMuila',db='SEP6-DB')
      cursor =mydb.cursor()
      SQL_getUserData = "SELECT id FROM Users WHERE Email = %s"
      cursor.execute(SQL_getUserData, (email, ))
      rows = cursor.fetchall()
      for row in rows:
            print(row)
            print("-")
      mydb.close()
      return 
              

app = Flask(__name__)

@app.route("/")
def main_app():
  add_user(random_char(7)+"@gmail.com", 'sugaciul99') #add an user to the dbs with a random email SHOULD CHECK EMAIL CORRECTEBILITY AND PASSWORD OR IF ALLREADY MADE
  
  get_user_id("muila@gmail.com") 
  
  if(check_password('muila@gmail.com', 'sugaciul99') == TRUE): # try password sugaciul99
    print("------Correct password")
  else: 
    print("------False password or not made")
    
  return "<p>Hello World This time it should add users to the dbs</p>"

if __name__ == '__main__':
  app.run(host='127.0.0.1', port=8080, debug=True)