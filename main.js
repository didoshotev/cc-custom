function initializeCustomElements() {
  // Create container
  const container = document.createElement('div');
  container.className = 'custom-container';

  // Create button
  const button = document.createElement('button');
  button.className = 'custom-button';
  button.textContent = 'Custom Button';
  button.onclick = function () {
    alert('Custom button works!');
  };

  // Add button to container
  container.appendChild(button);

  // Find a suitable place to inject our container
  // Adjust this selector based on your CloudCart page structure
  const productContainer = document.querySelector('.product-details, .product-container');
  if (productContainer) {
    productContainer.appendChild(container);
  } else {
    console.error('Could not find product container');
  }
}

// Run initialization when DOM is fully loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeCustomElements);
} else {
  initializeCustomElements();
}