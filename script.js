const githubUser = "manav-ar";
const grid = document.getElementById("projects-grid");
document.getElementById("year").textContent = new Date().getFullYear();

async function loadRepos() {
  try {
    const res = await fetch(`https://api.github.com/users/${githubUser}/repos?per_page=100&sort=updated`);
    const repos = await res.json();

    const top = repos.slice(0, 9);

    grid.innerHTML = top
      .map(
        (r) => `
      <div class="p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg hover:border-accent transition">
        <h3 class="text-xl font-semibold mb-2">
          <a href="${r.html_url}" target="_blank" class="hover:text-accent">${r.name}</a>
        </h3>
        <p class="text-gray-400 text-sm mb-4">${r.description || "No description provided."}</p>
        <div class="flex justify-between text-gray-500 text-xs">
          <span>${r.language || "—"}</span>
          <span>${new Date(r.updated_at).toLocaleDateString()}</span>
        </div>
      </div>
    `
      )
      .join("");
  } catch (err) {
    console.log(err);
  }
}

loadRepos();
