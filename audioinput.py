import os
from dotenv import load_dotenv
from fastapi import FastAPI, UploadFile, File
import requests
from deepgram import DeepgramClient
import uvicorn


# load Deepgram API key

load_dotenv()
DEEPGRAM_API_KEY = os.getenv("DEEPGRAM_API_KEY")
FILE_PATH = "tempaudio/test.wav"

app = FastAPI()

@app.post("/transcribe")
def transcribe():
   # Define the URL and headers
   url = "https://api.deepgram.com/v1/listen"
   headers = {
      "Authorization": f"Token {DEEPGRAM_API_KEY}",
      "Content-Type": "audio/wav"
   }

   # Open and send the audio file
   with open(FILE_PATH, "rb") as audio_file:
      response = requests.post(url, headers=headers, data=audio_file)

   # Output the response
   json_output = response.json()
   transcription = json_output["results"]["channels"][0]["alternatives"][0]["transcript"]
   creation_time_stamp = json_output["metadata"]["created"]
   return transcription, creation_time_stamp


if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000)