document.addEventListener('DOMContentLoaded', function() {
    const filterLinks = document.querySelectorAll('.filter-link');
    const products = document.querySelectorAll('.product');
    const checkbox = document.querySelector('#active');
  
    filterLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        checkbox.checked = false; // cierra el menú
        e.preventDefault();
        const category = this.dataset.category;
  
        products.forEach(function(product) {
          if (category === 'all' || product.dataset.category === category) {
            product.style.display = 'block';
          } else {
            product.style.display = 'none';
          }
        });
      });
    });
  });
