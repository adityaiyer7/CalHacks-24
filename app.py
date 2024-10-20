from fastapi import FastAPI, APIRouter

app = FastAPI()

# Define a global router to be used across other files
router = APIRouter()

import audioinput
import main


# Include the router into the FastAPI app
app.include_router(router)
