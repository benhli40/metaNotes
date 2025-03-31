from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from database import Base, engine
from routes import notes
import models  # Ensure models are registered

app = FastAPI(title="MetaNotes API")

# CORS: allow frontend to talk to backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://benhli40.github.io"]
,  # Replace with actual domain on deploy
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize database tables
Base.metadata.create_all(bind=engine)

# Route registration
app.include_router(notes.router)