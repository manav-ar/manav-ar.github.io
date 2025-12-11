// Basic client-side fetch to show your pinned projects (or top repos).
// Keeps the page automatically updated if you pin repos or change repo descriptions.
// Note: GitHub API allows unauthenticated GETs but rate limits apply (~60/hour per IP).
const githubUser = 'manav-ar';
const projectsGrid = document.getElementById('projects-grid');
const yearSpan = document.getElementById('year');
if (yearSpan) yearSpan.textContent = new Date().getFullYear();

async function fetchPinned() {
  try {
    // We'll fetch the user's public repos and then pick the pinned names known from the profile.
    const res = await fetch(`https://api.github.com/users/${githubUser}/repos?per_page=100&sort=updated`);
    if (!res.ok) throw new Error('GitHub API error');
    const repos = await res.json();

    // Choose a sensible subset: first 6 most recently updated public repos
    const chosen = repos.slice(0, 12);

    projectsGrid.innerHTML = chosen.map(r => {
      const desc = r.description ? r.description : 'Repository';
      const lang = r.language ? r.language : '—';
      return `
        <article class="project-card">
          <div>
            <h4><a href="${r.html_url}" target="_blank" rel="noopener">${r.name}</a></h4>
            <p>${escapeHtml(desc)}</p>
          </div>
          <div style="display:flex;justify-content:space-between;align-items:center;margin-top:0.75rem">
            <small class="muted">${lang}</small>
            <small class="muted">${new Date(r.updated_at).toLocaleDateString()}</small>
          </div>
        </article>`;
    }).join('');
  } catch (err) {
    projectsGrid.innerHTML = `<div class="project-card"><p class="muted">Could not load projects automatically. You can still add them manually to index.html. (${err.message})</p></div>`;
    console.error(err);
  }
}

function escapeHtml(text) {
  return text ? text.replace(/[&<>"']/g, (m) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m])) : '';
}

// Kick off
fetchPinned();
