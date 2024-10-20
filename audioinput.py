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


# load Deepgram API key

load_dotenv()

# Load Deepgram API key and set up server
DEEPGRAM_API_KEY = os.getenv("DEEPGRAM_API_KEY")

FILE_PATH = "tempaudio/Record (online-voice-recorder.com).wav"



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
   os.remove(FILE_PATH)

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
   #processed_result = post_processing(intm_result)
   return result

# if __name__ == "__main__":
#     uvicorn.run(app, host="127.0.0.1", port=8000)