// footer.js – Reusable site footer for MetaNotes

export function renderFooter() {
  const footer = document.querySelector('footer');

  const wrapper = document.createElement('div');
  wrapper.className = 'footer-content';

  const year = new Date().getFullYear();

  wrapper.innerHTML = `
    <p>© ${year} MetaNotes by Benjamin Liles</p>
    <p>
      <a href="#dashboard">Dashboard</a> •
      <a href="#notebook">Notebook</a> •
      <a href="#review">Review</a> •
      <a href="#archive">Archive</a>
    </p>
  `;

  footer.appendChild(wrapper);
}