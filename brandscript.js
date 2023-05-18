const brandsContainer = document.getElementById('brands-container');

fetch('brands.json')
  .then(response => response.json())
  .then(data => {
    data.brands.forEach(brand => {
      const brandLink = document.createElement('a');
      brandLink.href = brand.link;
      brandLink.target = '_blank';

      const brandImage = document.createElement('img');
      brandImage.src = brand.image;
      brandImage.alt = brand.name;
      brandImage.className = 'brand-image';

      brandLink.appendChild(brandImage);
      brandsContainer.appendChild(brandLink);
    });
  })
  .catch(error => {
    console.error('Error fetching brands:', error);
  });
