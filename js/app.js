import { initTheme } from './components/themeToggle.js';
import { renderNavbar } from './components/nav.js';
import { renderFooter } from './components/footer.js';

// Lazy-load views
import { renderDashboard } from './pages/dashboard.js';
import { renderNotebook } from './pages/notebook.js';
import { renderReview } from './pages/review.js';
import { renderArchive } from './pages/archive.js';

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderNavbar();
  renderFooter();
  handleRoute();

  window.addEventListener('hashchange', handleRoute);
});

function handleRoute() {
  const route = location.hash.slice(1) || 'dashboard';
  const app = document.getElementById('app');
  app.innerHTML = ''; // Clear view

  switch (route) {
    case 'dashboard':
      renderDashboard(app);
      break;
    case 'notebook':
      renderNotebook(app);
      break;
    case 'review':
      renderReview(app);
      break;
    case 'archive':
      renderArchive(app);
      break;
    default:
      app.innerHTML = '<h2>404 – Page Not Found</h2>';
  }
}