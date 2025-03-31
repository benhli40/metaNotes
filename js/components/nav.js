// nav.js – MetaNotes Navbar

import { toggleTheme } from './themeToggle.js';

export function renderNavbar() {
  const header = document.querySelector('header');

  const nav = document.createElement('nav');
  nav.className = 'navbar';

  nav.innerHTML = `
    <div class="nav-left">
      <a href="#dashboard" class="logo">MetaNotes</a>
    </div>
    <div class="nav-center">
      <a href="#dashboard">Dashboard</a>
      <a href="#notebook">Notebook</a>
      <a href="#review">Review</a>
      <a href="#archive">Archive</a>
    </div>
    <div class="nav-right">
      <button id="theme-toggle" title="Toggle Theme">🌓</button>
    </div>
  `;

  header.appendChild(nav);

  document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
}