from pickle import FALSE, TRUE
from flask import Flask, request, jsonify, send_from_directory
from database_connection import *

app = Flask(__name__, static_url_path='', static_folder='frontend/build')

@app.route("/")
def main_app():
  user_visited_page() #DO NOT COMMENT
  #logs into the database when a user logs in, deletes logs older than 26 hours
  
  #print('Users visited in the last hour: ' + str(get_visit_numbers_last_24hr()))
  #add_user(random_char(7)+"@gmail.com", 'sugaciul99') #add an user to the dbs with a random email SHOULD CHECK EMAIL CORRECTEBILITY AND PASSWORD OR IF ALLREADY MADE
  #print(add_user('muila@gmail.com', 'sugaciul99')) #add an user to the dbs with a random email SHOULD CHECK EMAIL CORRECTEBILITY AND PASSWORD OR IF ALLREADY MADE
  #add_favorite_movie('69', 'muila@gmail.com')
  #print('Muila found at: ' + str(get_user_id("muila@gmail.com"))) 
  #print(get_user_id("muila@gmail.com")) works 
  #delete_user("muila@gmail.com") #works 
  #delete_favorite_movie('69', "muila@gmail.com")
  #print(get_favorite_movies("muila@gmail.com"))
  #if(check_password('muila@gmail.com', 'sugaciul99') == TRUE): # try password sugaciul99
  #  print("------Correct password")
  #else: 
  #  print("------False password or not made")
    
  return send_from_directory(app.static_folder, 'index.html')

@app.route('/signup', methods=['POST'])
def signup_user():
  data = request.json
  email = data['email']
  pwd = data['password']
  response = add_user(email, pwd)
  return jsonify(response)

@app.route('/login', methods=['POST'])
def login_user():
  data = request.json
  email = data['email']
  pwd = data['password']
  response = check_password(email, pwd)
  return jsonify(response)

@app.route('/favorite', methods=['POST'])
def add_to_fav():
  data = request.json
  email = data['email']
  movie_id = data['movieId']
  response = add_favorite_movie(movie_id, email)
  return jsonify(response)

@app.route('/favorite', methods=['DELETE'])
def remove_from_fav():
  data = request.json
  email = data['email']
  movie_id = data['movieId']
  response = delete_favorite_movie(movie_id, email)
  return jsonify(response)

@app.route('/favorite/list', methods=['POST'])
def get_fav():
  data = request.json
  email = data['email']
  response = get_favorite_movies(email)
  return jsonify(response)

@app.route('/stats', methods=['GET'])
def get_number_visited_last_24():
  nr_visitors_last_24 = get_visit_numbers_last_24hr()
  response = {
    'nr_visitors': nr_visitors_last_24
  }
  return jsonify(response)

if __name__ == '__main__':
  app.run(host='127.0.0.1', port=8080, debug=True)