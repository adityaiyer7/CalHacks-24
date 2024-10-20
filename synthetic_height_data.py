from db_crud import update_user, update_baby, update_height, update_weight, update_sleep, extract_baby_id_from_name, get_user_id_by_email, get_baby_ids_by_user_id
from db_ops import *

# Assuming you have your update_height function already defined
import mysql.connector
from datetime import datetime

# Synthetic data from the DataFrame (you can also load the DataFrame if you saved it)
babyid = 2251799813685249
height_data = [
    {'baby_id': babyid, 'height': 50.40, 'log_date': '2024-04-19 00:00:00'},  # Birth
    {'baby_id': babyid, 'height': 50.50, 'log_date': '2024-04-29 00:00:00'},  # Small growth in early days
    {'baby_id': babyid, 'height': 50.65, 'log_date': '2024-05-09 00:00:00'},  # Gradual growth
    {'baby_id': babyid, 'height': 50.80, 'log_date': '2024-05-19 00:00:00'},  # Growth starts to slow
    {'baby_id': babyid, 'height': 50.90, 'log_date': '2024-05-29 00:00:00'},  # Small increase
    {'baby_id': babyid, 'height': 51.05, 'log_date': '2024-06-08 00:00:00'},  # Steady growth
    {'baby_id': babyid, 'height': 51.15, 'log_date': '2024-06-18 00:00:00'},  # Growth slows further
    {'baby_id': babyid, 'height': 51.25, 'log_date': '2024-06-28 00:00:00'},  # Slight increase
    {'baby_id': babyid, 'height': 51.35, 'log_date': '2024-07-08 00:00:00'},  # Minor growth continues
    {'baby_id': babyid, 'height': 51.45, 'log_date': '2024-07-18 00:00:00'},  # Small growth, slower rate
    {'baby_id': babyid, 'height': 51.55, 'log_date': '2024-07-28 00:00:00'},  # Slow but steady growth
    {'baby_id': babyid, 'height': 51.65, 'log_date': '2024-08-07 00:00:00'},  # Very small increase
    {'baby_id': babyid, 'height': 51.70, 'log_date': '2024-08-17 00:00:00'},  # Growth slows considerably
    {'baby_id': babyid, 'height': 51.75, 'log_date': '2024-08-27 00:00:00'},  # Minor fluctuations
    {'baby_id': babyid, 'height': 51.85, 'log_date': '2024-09-06 00:00:00'},  # Small increase
    {'baby_id': babyid, 'height': 51.90, 'log_date': '2024-09-16 00:00:00'},  # Approaching the 2 cm total
    {'baby_id': babyid, 'height': 52.00, 'log_date': '2024-09-26 00:00:00'},  # Almost reaching 2 cm increase
    {'baby_id': babyid, 'height': 52.05, 'log_date': '2024-10-06 00:00:00'},  # Final push toward 2 cm
    {'baby_id': babyid, 'height': 52.10, 'log_date': '2024-10-16 00:00:00'},  # Total growth of ~2 cm over 6 months
]

# Function to ingest data into the database
def ingest_height_data(data):
    for row in data:
        baby_id = row['baby_id']
        height = row['height']
        log_date = row['log_date']  # Date is already in string format

        # Call the update_height function with baby_id, height, and the log_date as the timestamp
        update_height(baby_id, height, log_date)

# Ingest the data
ingest_height_data(height_data)
