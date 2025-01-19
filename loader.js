(function () {
  // Load CSS
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = 'https://YOUR-USERNAME.github.io/cloudcart-custom/styles.css';
  document.head.appendChild(link);

  // Load JS
  const script = document.createElement('script');
  script.src = 'https://YOUR-USERNAME.github.io/cloudcart-custom/main.js';
  document.head.appendChild(script);
})();