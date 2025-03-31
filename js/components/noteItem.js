// noteItem.js – Renders an individual note card

export function noteItemCard(note, onDelete = null) {
  const card = document.createElement('div');
  card.className = 'card';

  const header = document.createElement('div');
  header.className = 'card-header';

  const tag = document.createElement('span');
  tag.className = 'tag';
  tag.textContent = note.tag || 'note';

  const delBtn = document.createElement('button');
  delBtn.className = 'delete-btn';
  delBtn.innerHTML = '✖';
  delBtn.title = 'Archive Note';

  if (onDelete) {
    delBtn.addEventListener('click', () => {
      if (confirm('Archive this note?')) {
        onDelete(note.id);
      }
    });
  }

  header.append(tag, delBtn);

  const body = document.createElement('p');
  body.textContent = note.text;

  const footer = document.createElement('div');
  footer.className = 'card-footer';
  footer.textContent = `Last reviewed: ${new Date(note.last_reviewed).toLocaleString()}`;

  card.append(header, body, footer);
  return card;
}