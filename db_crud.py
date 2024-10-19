
import mysql.connector
from mysql.connector import Error
from dotenv import load_dotenv
import os
from datetime import datetime

# Load environment variables from .env file
load_dotenv() 

gemini_api_key = os.getenv("API_KEY")

# Define your connection details
host = os.getenv("HOST")
port = os.getenv("PORT")
username = os.getenv("USERNAME")
password = os.getenv("PASSWORD")
database = os.getenv("DATABASE")


def update_user(new_username, user_email):
    try:
        # Establish a connection to SingleStore
        connection = mysql.connector.connect(
            host=host,
            port=port,
            user=username,
            password=password,
            database=database
        )

        if connection.is_connected():
            print("Connected to SingleStore database")

            # Create a new cursor
            cursor = connection.cursor()

            # Check if the email already exists in the database
            check_email_query = '''
                SELECT user_id FROM users WHERE email = %s;
            '''
            cursor.execute(check_email_query, (user_email,))
            result = cursor.fetchone()

            # If email does not exist, insert the new user
            if result is None:
                insert_user_query = '''
                    INSERT INTO users (username, email)
                    VALUES (%s, %s);
                '''
                user_data = (new_username, user_email)
                cursor.execute(insert_user_query, user_data)

                # Commit the changes
                connection.commit()

                # Retrieve the newly inserted user_id
                user_id = cursor.lastrowid
                print(f"New user added with user_id: {user_id}")
            else:
                print(f"Email {user_email} already exists with user_id: {result[0]}")

            cursor.close()

    except Error as e:
        print(f"Error: {e}")


def update_baby(parent_user_id, baby_name, dob):

    try:
        # Establish a connection to SingleStore
        connection = mysql.connector.connect(
            host=host,
            port=port,
            user=username,
            password=password,
            database=database
        )

        if connection.is_connected():
            print("Connected to SingleStore database")

            # Create a new cursor
            cursor = connection.cursor()
            insert_baby_query = '''
                INSERT INTO baby (user_id, name, date_of_birth)
                VALUES (%s, %s, %s);
            '''

            baby_data = (parent_user_id, baby_name, dob)

            
            cursor.execute(insert_baby_query, baby_data)

            
            connection.commit()

        
            baby_id = cursor.lastrowid
            print(f"New baby added with baby_id: {baby_id}")


            # Commit changes
            connection.commit()

    except Error as e:
        print(f"Error: {e}")

def update_height(baby_id, height):

    try:
        # Establish a connection to SingleStore
        connection = mysql.connector.connect(
            host=host,
            port=port,
            user=username,
            password=password,
            database=database
        )

        if connection.is_connected():
            print("Connected to SingleStore database")

            # Create a new cursor
            cursor = connection.cursor()
            # Define the SQL query to insert height data
            insert_height_query = '''
                INSERT INTO height (baby_id, height)
                VALUES (%s, %s);
            '''

            # Values to insert (use the baby_id and the height value)
            height_data = (baby_id, height)

            # Execute the query
            cursor.execute(insert_height_query, height_data)

            # Commit the changes
            connection.commit()
            print("Height data added successfully")


            # Commit changes
            connection.commit()

    except Error as e:
        print(f"Error: {e}")
    

def update_weight(baby_id, weight):

    try:
        # Establish a connection to SingleStore
        connection = mysql.connector.connect(
            host=host,
            port=port,
            user=username,
            password=password,
            database=database
        )

        if connection.is_connected():
            print("Connected to SingleStore database")

            # Create a new cursor
            cursor = connection.cursor()
            # Define the SQL query to insert height data
            insert_weight_query = '''
                INSERT INTO weight (baby_id, weight)
                VALUES (%s, %s);
            '''

            # Values to insert (use the baby_id and the height value)
            weight_data = (baby_id, weight)

            # Execute the query
            cursor.execute(insert_weight_query, weight_data)

            # Commit the changes
            connection.commit()
            print("Weight data added successfully")


            # Commit changes
            connection.commit()

    except Error as e:
        print(f"Error: {e}")

def update_sleep(baby_id, sleep_duration):

    try:
        # Establish a connection to SingleStore
        connection = mysql.connector.connect(
            host=host,
            port=port,
            user=username,
            password=password,
            database=database
        )

        if connection.is_connected():
            print("Connected to SingleStore database")

            # Create a new cursor
            cursor = connection.cursor()
            # Define the SQL query to insert height data
            # Define the SQL query to insert sleep data
            insert_sleep_query = '''
                INSERT INTO sleep (baby_id, sleep_duration)
                VALUES (%s, %s);
            '''

            # Values to insert (use the baby_id and the sleep duration in hours)
            sleep_data = (baby_id, 6)

            # Execute the query
            cursor.execute(insert_sleep_query, sleep_data)

            # Commit the changes
            connection.commit()
            print("Sleep data added successfully")


            # Commit changes
            connection.commit()

    except Error as e:
        print(f"Error: {e}")



def extract_baby_id_from_name(user_id, baby_name):

    try:
        # Establish a connection to SingleStore
        connection = mysql.connector.connect(
            host=host,
            port=port,
            user=username,
            password=password,
            database=database
        )

        if connection.is_connected():
            print("Connected to SingleStore database")

            # Create a new cursor
            cursor = connection.cursor()
            # Define the query to get the baby_id based on parent_id (user_id) and baby_name
            get_baby_id_query = '''
                SELECT baby_id 
                FROM baby 
                WHERE user_id = %s AND name = %s;
            '''

            # Variables holding the parent (user) ID and baby's name
            parent_id = user_id  
            

            # Execute the query
            cursor.execute(get_baby_id_query, (parent_id, baby_name))

            # Fetch the result
            result = cursor.fetchone()

            if result:
                baby_id = result[0]  # Retrieve the baby_id from the result
                print(f"Baby ID for {baby_name} is {baby_id}")
            else:
                print(f"No baby found with name {baby_name} for user_id {parent_id}")


    except Error as e:
        print(f"Error: {e}")

def get_user_id_by_email(email):
    try:
        # Establish a connection to SingleStore
        connection = mysql.connector.connect(
            host=host,
            port=port,
            user=username,
            password=password,
            database=database
        )

        if connection.is_connected():
            print("Connected to SingleStore database")

            # Create a new cursor
            cursor = connection.cursor()

            # Query to get user_id by email
            get_user_id_query = '''
                SELECT user_id FROM users WHERE email = %s;
            '''

            # Execute the query with the given email
            cursor.execute(get_user_id_query, (email,))

            # Fetch the result
            result = cursor.fetchone()

            if result:
                user_id = result[0]  # Get the user_id from the result
                return user_id
            else:
                print(f"No user found with email {email}")
                return None

    except Error as e:
        print(f"Error: {e}")



# adding a sample user
new_username = "Batman"
user_email = "batman@gothamcity.com"
update_user(new_username, user_email)




parent_user_id = get_user_id_by_email(user_email)
print(parent_user_id)
baby_name = 'Elon'
dob ='2002-11-05'
dob = datetime.strptime(dob, "%Y-%m-%d")

update_baby(parent_user_id, baby_name, dob)

# update_user("batman", "iambatman@example.com")