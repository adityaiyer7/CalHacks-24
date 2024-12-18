import os
from dotenv import load_dotenv
from fastapi import FastAPI, UploadFile, File
from app import router
import requests
from deepgram import DeepgramClient
import uvicorn
import json
import time
import google.generativeai as genai
from text_filter import post_processing
from db_crud import update_food


# load Deepgram API key

load_dotenv()

# Load Deepgram API key and set up server
DEEPGRAM_API_KEY = os.getenv("DEEPGRAM_API_KEY")

FILE_PATH = "tempaudio/recording.wav"
baby_id = os.getenv("BABYID")


@router.post("/transcribe")
def transcribe():
   print("I entered here")
   # Define the URL and headers
   url = "https://api.deepgram.com/v1/listen"
   headers = {
      "Authorization": f"Token {DEEPGRAM_API_KEY}",
      "Content-Type": "audio/wav"
   }
   # Open and send the audio file
   with open(FILE_PATH, "rb") as audio_file:
      response = requests.post(url, headers=headers, data=audio_file)

   # Get the response
   json_output = response.json()
   transcription = json_output["results"]["channels"][0]["alternatives"][0]["transcript"]
   creation_time_stamp = json_output["metadata"]["created"]

   # Delete the audio file
   # os.remove(FILE_PATH)

   # Return response
   return transcription, creation_time_stamp

# Getting Gemini API key
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
genai.configure(api_key=os.environ["GEMINI_API_KEY"])

# Get image and process foods and amounts eaten
@router.post("/processimage")
def processimage():
   # Choosing model
   model = genai.GenerativeModel("gemini-1.5-pro")

   # Getting before and after images
   BEFOREIMG_FILE_PATH = "testimage/beforeimg.jpg.webp"
   AFTERIMG_FILE_PATH = "testimage/afterimg.jpg.webp"

   beforeimg = genai.upload_file(BEFOREIMG_FILE_PATH)
   afterimg = genai.upload_file(AFTERIMG_FILE_PATH)

   #prompt = "What are the two pictures showing?"
   prompt = """Analyze two images of a baby's plate of food: the first shows the plate before eating, and the second shows it after. 
   Identify each food item and estimate how much was eaten, assigning a rating from 1 to 5 for each, where 1 means 'none eaten' and 5 means 'completely finished.' 
   Return the result as a clean JSON object without any escape characters or extra formatting. The output should follow this format exactly: {"black beans": 5, "enchiladas": 3, "eggs": 2}. 
   Do not add any extra characters or line breaks, and avoid using escape characters in the JSON format."""

   result = model.generate_content(
      [prompt, beforeimg, afterimg]
   )
   intm_result = result.text
   result = json.loads(intm_result)
   for food, food_score in result.items():
      update_food(baby_id, food, food_score)
   print("fooddb has been updated")
   #processed_result = post_processing(intm_result)
   return result


# @router.post("/generate_recipe")
# def recipe_generator(food_lst, food_score_lst):
#    # Choosing model
#    model = genai.GenerativeModel("gemini-1.5-pro")

#    prompt = """You are a helpful assistant to a new mother. Here is some food data: f{food_lst} and here is the food score f{food_score_lst}.
#    A higher food score means that the baby has eaten more of that food item. Based on this information, generate a recipe such that all nutrients that the baby needs are covered.
#    Give me 3 recipes. Format it as json so you have the recipe number as the key and recipe as the value. Do not add anything else in your output. 
#    """

#    result = model.generate_content(prompt)
#    intm_result = result.text
#    result = json.loads(intm_result)
   
#    print(result)
#    #processed_result = post_processing(intm_result)
#    return result