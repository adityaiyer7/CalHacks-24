import os
from dotenv import load_dotenv
from fastapi import FastAPI, UploadFile, File
from app import router
import requests
from deepgram import DeepgramClient
import uvicorn
import time
import google.generativeai as genai


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
   prompt = """Analyze these two images of a baby's plate of food. The first image shows the plate before eating, and the second image shows it after. Identify the foods and estimate how much was eaten. Provide a rating for each food from 1 to 5, where 1 means 'didn't eat any' and 5 means 'finished it completely.' Return the result as a dictionary where each food item is a key and its corresponding rating is the value."""

   result = model.generate_content(
      [prompt, beforeimg, afterimg]
   )
   return result.text

# if __name__ == "__main__":
#     uvicorn.run(app, host="127.0.0.1", port=8000)