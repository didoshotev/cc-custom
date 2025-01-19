(function () {
  // Load CSS
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = 'https://didoshotev.github.io/cc-custom/styles.css';
  document.head.appendChild(link);

  // Load JS
  const script = document.createElement('script');
  script.src = 'https://didoshotev.github.io/cc-custom/main.js';
  document.head.appendChild(script);
})();