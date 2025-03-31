// notebook.js – Create + view active notes

import { fetchNotes, createNote, archiveNote } from '../api.js';
import { createNoteForm } from '../components/noteForm.js';
import { noteItemCard } from '../components/noteItem.js';
import { createSearchBar } from '../components/searchBar.js';

export async function renderNotebook(container) {
  const section = document.createElement('section');
  section.className = 'notebook-section';

  const title = document.createElement('h1');
  title.textContent = '📓 Notebook';

  const sub = document.createElement('p');
  sub.className = 'subtext';
  sub.textContent = 'Capture thoughts, quotes, ideas, and reflections.';

  const list = document.createElement('div');
  list.className = 'note-list';

  let notes = await fetchNotes();
  notes = notes.filter(n => !n.archived);

  const form = createNoteForm(async (newNote) => {
    const added = await createNote(newNote);
    if (added) renderNotebook(container); // re-render
  });

  const searchBar = createSearchBar((query) => {
    const filtered = notes.filter(n =>
      n.text.toLowerCase().includes(query) ||
      (n.tag && n.tag.toLowerCase().includes(query))
    );

    list.innerHTML = '';
    filtered.forEach(note => {
      list.appendChild(noteItemCard(note, handleArchive));
    });
  });

  function handleArchive(id) {
    archiveNote(id).then(() => renderNotebook(container));
  }

  notes.forEach(note => {
    list.appendChild(noteItemCard(note, handleArchive));
  });

  section.append(title, sub, form, searchBar, list);
  container.appendChild(section);
}