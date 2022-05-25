from pickle import FALSE, TRUE
from flask import Flask, send_from_directory
from database_connection import *

app = Flask(__name__, static_url_path='', static_folder='frontend/build')

@app.route("/")
def main_app():
  add_user(random_char(7)+"@gmail.com", 'sugaciul99') #add an user to the dbs with a random email SHOULD CHECK EMAIL CORRECTEBILITY AND PASSWORD OR IF ALLREADY MADE
  print(add_user('muila@gmail.com', 'sugaciul99')) #add an user to the dbs with a random email SHOULD CHECK EMAIL CORRECTEBILITY AND PASSWORD OR IF ALLREADY MADE
  add_favorite_movie('69', 'muila@gmail.com')
  
  print('Muila found at: ' + str(get_user_id("muila@gmail.com"))) 
  #print(get_user_id("muila@gmail.com")) works
  
  #delete_user("muila@gmail.com") works
  
  if(check_password('muila@gmail.com', 'sugaciul99') == TRUE): # try password sugaciul99
    print("------Correct password")
  else: 
    print("------False password or not made")
    
  return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
  app.run(host='127.0.0.1', port=8080, debug=True)