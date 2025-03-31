// dashboard.js – Overview of notes

import { fetchNotes } from '../api.js';
import { noteItemCard } from '../components/noteItem.js';

export async function renderDashboard(container) {
  const section = document.createElement('section');
  section.className = 'dashboard-section';

  const title = document.createElement('h1');
  title.textContent = '📊 Dashboard';

  const sub = document.createElement('p');
  sub.className = 'subtext';
  sub.textContent = 'Your meta overview. Track what matters most.';

  const stats = document.createElement('div');
  stats.className = 'dashboard-stats';

  const insights = await fetchNotes();
  const activeNotes = insights.filter(n => !n.archived);
  const archivedNotes = insights.filter(n => n.archived);

  stats.innerHTML = `
    <div class="stat-card">
      <h2>${activeNotes.length}</h2>
      <p>Active Notes</p>
      <a href="#notebook">Go to Notebook →</a>
    </div>
    <div class="stat-card">
      <h2>${archivedNotes.length}</h2>
      <p>Archived</p>
      <a href="#archive">See Archive →</a>
    </div>
  `;

  const latestSection = document.createElement('div');
  latestSection.className = 'dashboard-latest';

  const latestTitle = document.createElement('h3');
  latestTitle.textContent = '🧠 Latest Notes';

  const noteList = document.createElement('div');
  noteList.className = 'note-list';

  activeNotes.slice(0, 3).forEach(note => {
    noteList.appendChild(noteItemCard(note));
  });

  latestSection.append(latestTitle, noteList);
  section.append(title, sub, stats, latestSection);
  container.appendChild(section);
}