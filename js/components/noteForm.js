// noteForm.js – Add note form for MetaNotes

export function createNoteForm(onAdd) {
  const form = document.createElement('form');
  form.className = 'form';

  form.innerHTML = `
    <textarea placeholder="Write your thought..." required></textarea>
    <input type="text" placeholder="Tag (optional)" />
    <button type="submit">➕ Add Note</button>
  `;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = form.elements[0].value.trim();
    const tag = form.elements[1].value.trim();

    if (text) {
      onAdd({
        text,
        tag,
        created_at: new Date().toISOString(),
        last_reviewed: new Date().toISOString(),
        is_relevant: true,
        archived: false
      });
      form.reset();
    }
  });

  return form;
}