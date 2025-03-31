// card.js – Generic reusable card component

export function createCard({ tag = '', content = '', footer = '', onDelete = null }) {
  const card = document.createElement('div');
  card.className = 'card';

  const header = document.createElement('div');
  header.className = 'card-header';

  if (tag) {
    const tagEl = document.createElement('span');
    tagEl.className = 'tag';
    tagEl.textContent = tag;
    header.appendChild(tagEl);
  }

  if (onDelete) {
    const delBtn = document.createElement('button');
    delBtn.className = 'delete-btn';
    delBtn.innerHTML = '✖';
    delBtn.title = 'Delete';
    delBtn.addEventListener('click', () => {
      if (confirm('Delete this note?')) {
        onDelete();
      }
    });
    header.appendChild(delBtn);
  }

  const body = document.createElement('p');
  body.textContent = content;

  const footerEl = document.createElement('div');
  footerEl.className = 'card-footer';
  footerEl.textContent = footer;

  card.append(header, body, footerEl);
  return card;
}