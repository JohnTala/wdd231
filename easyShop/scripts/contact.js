// Hamburger menu
document.getElementById('ham-btn').addEventListener('click', () => {
  document.getElementById('nav-bar').classList.toggle('show');
  document.getElementById('ham-btn').classList.toggle('show');
});


document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");
  const fields = ["name", "email", "subject", "message"];

  // Load saved data from localStorage on page load
  fields.forEach(field => {
    const savedValue = localStorage.getItem(`contact_${field}`);
    if (savedValue) {
      document.getElementById(field).value = savedValue;
    }
  });

  // Save input changes to localStorage
  fields.forEach(field => {
    document.getElementById(field).addEventListener("input", (e) => {
      localStorage.setItem(`contact_${field}`, e.target.value);
    });
  });

  // On form submit, clear saved data and redirect to homepage
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent default form submission

    // Optional: Clear saved data
    fields.forEach(field => localStorage.removeItem(`contact_${field}`));

    // Redirect to homepage
    window.location.href = "index.html";
  });
});



window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("currentYear").textContent = new Date().getFullYear();

  const modified = new Date(document.lastModified);
  console.log(modified)
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
