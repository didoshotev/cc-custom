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

  // Using the exact selector you provided
  const targetElement = document.querySelector('div._product-details-actions');

  if (targetElement) {
    targetElement.appendChild(container);
    console.log('Successfully injected custom elements');
  } else {
    console.error('Could not find target element');
  }
}

// Run initialization when DOM is fully loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeCustomElements);
} else {
  initializeCustomElements();
}