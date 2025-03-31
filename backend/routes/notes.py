# models.py – Note schema for MetaNotes
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from datetime import datetime

from database import get_db
from models import Note

router = APIRouter(prefix="/notes", tags=["Notes"])


@router.get("/")
def get_notes(db: Session = Depends(get_db)):
    return db.query(Note).filter(Note.archived == False).order_by(Note.created_at.desc()).all()


@router.post("/")
def create_note(data: dict, db: Session = Depends(get_db)):
    if "text" not in data:
        raise HTTPException(status_code=400, detail="Note text is required.")

    note = Note(
        text=data["text"],
        tag=data.get("tag"),
        created_at=datetime.utcnow(),
        last_reviewed=datetime.utcnow(),
        is_relevant=True,
        archived=False
    )
    db.add(note)
    db.commit()
    db.refresh(note)
    return note


@router.put("/{note_id}")
def update_note(note_id: int, data: dict, db: Session = Depends(get_db)):
    note = db.query(Note).filter(Note.id == note_id).first()
    if not note:
        raise HTTPException(status_code=404, detail="Note not found.")

    note.text = data.get("text", note.text)
    note.tag = data.get("tag", note.tag)
    note.last_reviewed = datetime.utcnow()
    db.commit()
    return note


@router.patch("/{note_id}/review")
def review_note(note_id: int, data: dict, db: Session = Depends(get_db)):
    note = db.query(Note).filter(Note.id == note_id).first()
    if not note:
        raise HTTPException(status_code=404, detail="Note not found.")

    note.is_relevant = data.get("is_relevant", note.is_relevant)
    note.last_reviewed = datetime.utcnow()
    db.commit()
    return note


@router.delete("/{note_id}")
def delete_note(note_id: int, db: Session = Depends(get_db)):
    note = db.query(Note).filter(Note.id == note_id).first()
    if not note:
        raise HTTPException(status_code=404, detail="Note not found.")

    note.archived = True
    db.commit()
    return {"message": "Note archived."}