
// Hamburger menu
document.getElementById('ham-btn').addEventListener('click', () => {
  document.getElementById('nav-bar').classList.toggle('show');
  document.getElementById('ham-btn').classList.toggle('show');
});



async function loadProducts() {
  try {
    const params = new URLSearchParams(window.location.search);
    const category = params.get('category');

    const response = await fetch('./data/db.json');
    if (!response.ok) throw new Error(`HTTP error! ${response.status}`);
    const data = await response.json();

    const container = document.getElementById('product-list');
    const titleEl = document.getElementById('category-title');

    let products = [];

    if (category === 'all') {
      titleEl.textContent = "All Products";
      // Merge all category arrays
      products = Object.values(data.categories).flat();
      // console.log(products)
    } else if (data.categories[category]) {
      titleEl.textContent = `${category} Products`;
      products = data.categories[category];
    } else {
      titleEl.textContent = "Products";
    }

    // Render products
    if (!products.length) {
      container.innerHTML = `<p>No products found.</p>`;
      return;
    }

    container.innerHTML = `
      <div class="products-grid">
        ${products.map(item => `
          <article class="product-card">
            <img src="images/${item.image}" alt="${item.title}" loading="lazy" width="200">
            <h3>${item.title}</h3>
            <p class="price">R${item.price.toFixed(2)}</p>
          </article>
        `).join('')}
      </div>
    `;
  } catch (error) {
    console.error("Error loading products:", error);
  }
}

loadProducts(); 




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
  

 