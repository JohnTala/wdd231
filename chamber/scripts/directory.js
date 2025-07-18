
// Hamburger menu
document.getElementById('ham-btn').addEventListener('click', () => {
  document.getElementById('nav-bar').classList.toggle('show');
  document.getElementById('ham-btn').classList.toggle('show');
});


// Toggle Directory View
const directory = document.getElementById('directory');
const gridBtn = document.getElementById('grid-view');
const listBtn = document.getElementById('list-view');

gridBtn.addEventListener('click', () => {
  directory.classList.add('grid');
  directory.classList.remove('list', 'hide-images');
  gridBtn.classList.add('active');
  listBtn.classList.remove('active');
  directory.style.marginBottom = '1rem';
});

listBtn.addEventListener('click', () => {
  directory.classList.add('list', 'hide-images');
  directory.classList.remove('grid');
  listBtn.classList.add('active');
  gridBtn.classList.remove('active');
  directory.style.marginBottom = '1rem';
});

// Load Directory Members
async function getMembers() {
  try {
    const response = await fetch('data/members.json');
    if (!response.ok) throw new Error('Failed to fetch data');
    const data = await response.json();
    displayMembers(data.members);
  } catch (error) {
    console.error('Error loading members:', error);
  }
}

function displayMembers(members) {
  directory.innerHTML = '';

  members.forEach(member => {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
      <img src="images/${member.photo}" alt="${member.name} logo" loading="lazy">
      <div><strong>${member.name}</strong></div>
      <div>${member.address}</div>
      <div>${member.phone}</div>
      <a href="${member.url}" target="_blank" rel="noopener">Visit Website</a>
      <div><strong>Membership Level:</strong> ${member.membership}</div>
    `;

    directory.appendChild(card);
  });
}

// Footer Date Logic
window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("currentYear").textContent = new Date().getFullYear();

  const modified = new Date(document.lastModified);
  const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  };
  document.getElementById("lastModified").textContent = modified.toLocaleString(undefined, options);
});

getMembers();

