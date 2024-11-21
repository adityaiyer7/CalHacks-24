from db_crud import *




new_username = "Batman"
user_email = "batman@gothamcity.com"
update_user(new_username, user_email)



parent_user_id = get_user_id_by_email(user_email)
# print(parent_user_id)
baby_name = 'Elon'
dob ='2002-11-05'
dob = datetime.strptime(dob, "%Y-%m-%d")

update_baby(parent_user_id, baby_name, dob)