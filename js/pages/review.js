// review.js – Reflect on notes and mark relevance

import { fetchNotes, reviewNote, archiveNote } from '../api.js';
import { noteItemCard } from '../components/noteItem.js';
import { createSearchBar } from '../components/searchBar.js';

export async function renderReview(container) {
  const section = document.createElement('section');
  section.className = 'review-section';

  const title = document.createElement('h1');
  title.textContent = '🔁 Note Review';

  const sub = document.createElement('p');
  sub.className = 'subtext';
  sub.textContent = 'Review your thoughts. Decide what still matters.';

  const list = document.createElement('div');
  list.className = 'note-list';

  let notes = await fetchNotes();
  notes = notes.filter(n => !n.archived && !n.is_relevant);

  const searchBar = createSearchBar((query) => {
    const filtered = notes.filter(n =>
      n.text.toLowerCase().includes(query) ||
      (n.tag && n.tag.toLowerCase().includes(query))
    );

    list.innerHTML = '';
    filtered.forEach(note => list.appendChild(renderReviewCard(note)));
  });

  notes.forEach(note => list.appendChild(renderReviewCard(note)));

  section.append(title, sub, searchBar, list);
  container.appendChild(section);
}

function renderReviewCard(note) {
  const card = document.createElement('div');
  card.className = 'card';

  const header = document.createElement('div');
  header.className = 'card-header';

  const tag = document.createElement('span');
  tag.className = 'tag';
  tag.textContent = note.tag || 'note';

  const date = document.createElement('div');
  date.className = 'card-footer';
  date.textContent = `Last reviewed: ${new Date(note.last_reviewed).toLocaleString()}`;

  const body = document.createElement('p');
  body.textContent = note.text;

  const actions = document.createElement('div');
  actions.className = 'review-actions';

  const keepBtn = document.createElement('button');
  keepBtn.textContent = '✅ Still Relevant';
  keepBtn.addEventListener('click', () => {
    reviewNote(note.id, true).then(() => {
      card.remove();
    });
  });

  const archiveBtn = document.createElement('button');
  archiveBtn.textContent = '🗃️ Archive';
  archiveBtn.addEventListener('click', () => {
    archiveNote(note.id).then(() => {
      card.remove();
    });
  });

  actions.append(keepBtn, archiveBtn);
  header.appendChild(tag);

  card.append(header, body, date, actions);
  return card;
}