// api.js – Connects to FastAPI backend

const BASE_URL = "http://localhost:8000/notes"; // swap for your Render URL when deployed

export async function fetchNotes() {
  const res = await fetch(`${BASE_URL}/`);
  return res.ok ? res.json() : [];
}

export async function createNote(data) {
  const res = await fetch(`${BASE_URL}/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return res.ok ? res.json() : null;
}

export async function updateNote(id, data) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return res.ok;
}

export async function reviewNote(id, isRelevant) {
  const res = await fetch(`${BASE_URL}/${id}/review`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ is_relevant: isRelevant })
  });
  return res.ok;
}

export async function archiveNote(id) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE'
  });
  return res.ok;
}