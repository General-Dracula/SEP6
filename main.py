import email
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
      hashed_password = hashlib.sha256(password.encode('utf-8')).hexdigest()
      data_user = (email, hashed_password)
      cursor.execute(SQL_add_user, data_user)
      mydb.commit()
      mydb.close()
      return
              

app = Flask(__name__)

@app.route("/")
def hello_world():
  add_user('muila@gmail.com', 'sugaciul99')
  
  return "<p>Hello World This time it should add users to the dbs</p>"

if __name__ == '__main__':
  app.run(host='127.0.0.1', port=8080, debug=True)