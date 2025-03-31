// archive.js – View for archived notes

import { fetchNotes } from '../api.js';
import { noteItemCard } from '../components/noteItem.js';
import { createSearchBar } from '../components/searchBar.js';

export async function renderArchive(container) {
  const section = document.createElement('section');
  section.className = 'archive-section';

  const title = document.createElement('h1');
  title.textContent = '🗃️ Archived Notes';

  const subtext = document.createElement('p');
  subtext.className = 'subtext';
  subtext.textContent = 'These notes are no longer relevant, but saved for future reference.';

  const list = document.createElement('div');
  list.className = 'note-list';

  let notes = await fetchNotes();
  notes = notes.filter(note => note.archived);

  const searchBar = createSearchBar((query) => {
    const filtered = notes.filter(n =>
      n.text.toLowerCase().includes(query) ||
      (n.tag && n.tag.toLowerCase().includes(query))
    );

    list.innerHTML = '';
    filtered.forEach(note => list.appendChild(noteItemCard(note)));
  });

  notes.forEach(note => list.appendChild(noteItemCard(note)));

  section.append(title, subtext, searchBar, list);
  container.appendChild(section);
}