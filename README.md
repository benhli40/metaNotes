# 🧠 MetaNotes

**MetaNotes** is a full-stack, single-page web app for tracking notes and reflecting on their long-term value.  
Unlike a standard note-taker, MetaNotes encourages you to revisit your thoughts and decide what’s still relevant — and what’s ready to be archived.

---

## 🚀 Features

- 📓 Add and tag personal notes
- 🔍 Live search filtering
- 🔁 Review mode for reflecting on old notes
- 🗃️ Archive notes that no longer serve you
- 🌗 Light/Dark theme toggle with persistence
- 🔄 SPA-style navigation (Vanilla JS)
- 💾 Backend powered by FastAPI + SQLite (or PostgreSQL via Render)
- 🔐 Data stored securely via RESTful API

---

## 🛠️ Tech Stack

### Frontend
- HTML, CSS, JavaScript (Vanilla)
- Modular components and views
- Hash-based SPA routing
- Theme + LocalStorage persistence

### Backend
- FastAPI (Python)
- SQLAlchemy ORM
- SQLite (dev) / PostgreSQL (prod on Render)
- REST API endpoints (CRUD + review)

---

## 📂 Project Structure

metanotes/ 
├── index.html 
├── css/ 
├── js/ 
│    ├── app.js 
│    ├── api.js 
│    ├── components/ 
│    └── pages/ 
└── backend/ 
     ├── main.py 
     ├── models.py 
     ├── database.py 
     ├── routes/ 
     └── requirements.txt


---

## 🌐 Live Demo

> (https://benhli40.github.io/metaNotes/)

---

## 📄 License

MIT — Free to use, modify, or fork.

---

## 👤 Author
Built by [Benjamin Liles](https://github.com/benhli40) — because your thoughts deserve a second look.
