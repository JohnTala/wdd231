
// Hamburger menu
document.getElementById('ham-btn').addEventListener('click', () => {
  document.getElementById('nav-bar').classList.toggle('show');
  document.getElementById('ham-btn').classList.toggle('show');
});


const urlParams = new URLSearchParams(window.location.search);

const fields = [
  'first-name',
  'last-name',
  'email',
  'mobile-number',
  'business-name',
  'timestamp'
];

fields.forEach(field => {
  const el = document.getElementById(field);
  if (el) {
    const value = urlParams.get(field);
    if (value) el.innerHTML = value;
  }
});

// === Animate membership cards ===
window.addEventListener('load', () => {
  const cards = document.querySelectorAll('.card');
  cards.forEach((card, index) => {
    card.style.transform = 'scale(1)';
    card.style.opacity = '1';
    card.style.transition = `transform 0.5s ease-in-out ${index * 0.2}s, opacity 0.5s ease-in-out ${index * 0.2}s`;
  });

  // === Set timestamp on join.html form ===
  const timestampInput = document.getElementById('timestamp');
  if (timestampInput) {
    timestampInput.value = new Date().toISOString();
  }

  // === Create and append fallback dialog close button ===
  const fallbackDialog = document.getElementById('fallback-dialog');
  if (fallbackDialog) {
    const closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.style.marginTop = '1rem';
    closeButton.style.padding = '0.5rem 1rem';
    closeButton.style.backgroundColor = '#3D405B';
    closeButton.style.color = 'white';
    closeButton.style.border = 'none';
    closeButton.style.borderRadius = '0.25rem';
    closeButton.style.cursor = 'pointer';

    closeButton.addEventListener('click', () => {
      fallbackDialog.close();
    });

    fallbackDialog.appendChild(closeButton);
  }
});


function openModal(modalId) {
  const modal = document.getElementById(modalId);
  const benefitsMessage = `<h3>Benefits of ${modalId} membership</h3>
  <p>These membership levels have increasing costs as well as increased benefits per level</p>
  <p> Benefits might include:</p>
  <li> special events</li>
  <li> training</li>
  <li> advertising (like spotlight positions on the home page)</li>
  <li>event discounts, etc.</li>`;

  if (modal) {
    modal.style.display = 'block';
  } else {
    const fallbackDialog = document.getElementById('fallback-dialog');
    if (fallbackDialog) {
      document.getElementById('fallback-message').innerHTML = benefitsMessage;
      fallbackDialog.showModal();
    }
  }
}

// === Close Modal ===
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = 'none';
  }
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
