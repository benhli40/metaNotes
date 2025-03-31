# models.py – Note schema for MetaNotes

from sqlalchemy import Column, Integer, String, Boolean, DateTime
from database import Base
from datetime import datetime

class Note(Base):
    __tablename__ = "notes"

    id = Column(Integer, primary_key=True, index=True)
    text = Column(String, nullable=False)
    tag = Column(String, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    last_reviewed = Column(DateTime, default=datetime.utcnow)
    is_relevant = Column(Boolean, default=True)
    archived = Column(Boolean, default=False)