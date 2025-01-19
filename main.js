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
  const targetElement = document.querySelector('body > div._wrapper.js-wrapper._page-loaded > div._content > div:nth-child(2) > div > form > div > div:nth-child(2) > div > div > div._product-details-actions');

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