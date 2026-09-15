const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Remove external tracking parameters such as ?utm_source=chatgpt.com
// so the public portfolio URL stays clean.
if (window.location.search) {
  const params = new URLSearchParams(window.location.search);
  const trackingParams = [...params.keys()].filter((key) => key.toLowerCase().startsWith('utm_'));

  if (trackingParams.length) {
    trackingParams.forEach((key) => params.delete(key));
    const cleanQuery = params.toString();
    const cleanUrl = `${window.location.pathname}${cleanQuery ? `?${cleanQuery}` : ''}${window.location.hash}`;
    window.history.replaceState({}, document.title, cleanUrl);
  }
}

document.querySelector('#year').textContent = new Date().getFullYear();
