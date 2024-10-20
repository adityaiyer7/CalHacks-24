from db_crud import update_user, update_baby, update_height, update_weight, update_sleep, update_food, extract_baby_id_from_name, get_user_id_by_email, get_baby_ids_by_user_id
from db_ops import *

# Assuming you have your update_height function already defined
import mysql.connector
from datetime import datetime

# Synthetic data from the DataFrame (you can also load the DataFrame if you saved it)
babyid = 2251799813685249
food_data = [
    {'baby_id': babyid, 'food': 'Pureed carrots', 'food_score': 3, 'log_date': '2024-04-19 00:00:00'},
    {'baby_id': babyid, 'food': 'Pureed sweet potatoes', 'food_score': 5, 'log_date': '2024-04-29 00:00:00'},
    {'baby_id': babyid, 'food': 'Pureed peas', 'food_score': 4, 'log_date': '2024-05-09 00:00:00'},
    {'baby_id': babyid, 'food': 'Mashed bananas', 'food_score': 5, 'log_date': '2024-05-19 00:00:00'},
    {'baby_id': babyid, 'food': 'Pureed apples', 'food_score': 4, 'log_date': '2024-05-29 00:00:00'},
    {'baby_id': babyid, 'food': 'Pureed sweet potatoes', 'food_score': 5, 'log_date': '2024-06-08 00:00:00'},
    {'baby_id': babyid, 'food': 'Mashed avocado', 'food_score': 5, 'log_date': '2024-06-18 00:00:00'},
    {'baby_id': babyid, 'food': 'Mashed bananas', 'food_score': 5, 'log_date': '2024-06-28 00:00:00'},
    {'baby_id': babyid, 'food': 'Pureed pears', 'food_score': 4, 'log_date': '2024-07-08 00:00:00'},
    {'baby_id': babyid, 'food': 'Pureed peas', 'food_score': 4, 'log_date': '2024-07-18 00:00:00'},
    {'baby_id': babyid, 'food': 'Pureed carrots', 'food_score': 3, 'log_date': '2024-07-28 00:00:00'},
    {'baby_id': babyid, 'food': 'Oatmeal cereal', 'food_score': 4, 'log_date': '2024-08-07 00:00:00'},
    {'baby_id': babyid, 'food': 'Mashed avocado', 'food_score': 5, 'log_date': '2024-08-17 00:00:00'},
    {'baby_id': babyid, 'food': 'Pureed sweet potatoes', 'food_score': 5, 'log_date': '2024-08-27 00:00:00'},
    {'baby_id': babyid, 'food': 'Mashed bananas', 'food_score': 5, 'log_date': '2024-09-06 00:00:00'},
    {'baby_id': babyid, 'food': 'Pureed apples', 'food_score': 4, 'log_date': '2024-09-16 00:00:00'},
    {'baby_id': babyid, 'food': 'Pureed spinach', 'food_score': 3, 'log_date': '2024-09-26 00:00:00'},
    {'baby_id': babyid, 'food': 'Pureed pumpkin', 'food_score': 4, 'log_date': '2024-10-06 00:00:00'},
    {'baby_id': babyid, 'food': 'Mashed avocado', 'food_score': 5, 'log_date': '2024-10-16 00:00:00'},
]


# Function to ingest data into the database
def ingest_food_data(data):
    for row in data:
        baby_id = row['baby_id']
        food = row['food']
        food_score = row['food_score']
        log_date = row['log_date']  # Date is already in string format

        # Call the update_height function with baby_id, height, and the log_date as the timestamp
        update_food(baby_id, food, food_score, log_date)

# Ingest the data
ingest_food_data(food_data)
