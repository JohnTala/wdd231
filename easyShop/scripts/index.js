// Hamburger menu
document.getElementById('ham-btn').addEventListener('click', () => {
  document.getElementById('nav-bar').classList.toggle('show');
  document.getElementById('ham-btn').classList.toggle('show');
});



//Dialogbox
document.addEventListener('DOMContentLoaded', () => {
  const dialog = document.getElementById('product-dialog');
  const closeBtn = document.getElementById('close-dialog');

  closeBtn.addEventListener('click', () => {
    dialog.close();
  });

  document.querySelectorAll('.products .product button').forEach(button => {
    button.addEventListener('click', (e) => {
      const product = e.target.closest('.product');
      if (!product) return;

      // Get product info from data attributes with fallbacks
      const title = product.dataset.title?.trim() || 'Product Details';
      const price = product.dataset.price?.trim() || 'N/A';
      const discount = product.dataset.discount?.trim() || '0';
      const image = product.dataset.image?.trim() || 'images/placeholder.webp';

      // Set dialog content
      dialog.querySelector('#dialog-title').textContent = title;
      dialog.querySelector('#dialog-price').textContent = `Price: R${price}`;
      dialog.querySelector('#dialog-discount').textContent = `Discount: ${discount}`;

      const img = dialog.querySelector('#dialog-image');
      img.src = image;
      img.alt = title;

      dialog.showModal();
    });
  });
});



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


