from fastapi import FastAPI, APIRouter
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

# Define a global router to be used across other files
router = APIRouter()

import audioinput
import main


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # You can restrict this to specific domains
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Include the router into the FastAPI app
app.include_router(router)
