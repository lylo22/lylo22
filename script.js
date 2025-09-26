// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
}

// Update footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Simple client-side validation
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    let valid = true;
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    const setErr = (el, msg) => {
      const errorEl = document.querySelector(`.error[data-for="${el.id}"]`);
      if (errorEl) errorEl.textContent = msg || '';
    };

    // Name
    if (!name.value.trim()) {
      setErr(name, 'Please enter your name');
      valid = false;
    } else setErr(name, '');

    // Email
    const emailVal = email.value.trim();
    if (!emailVal || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) {
      setErr(email, 'Please enter a valid email');
      valid = false;
    } else setErr(email, '');

    // Message
    if (!message.value.trim()) {
      setErr(message, 'Please enter a message');
      valid = false;
    } else setErr(message, '');

    if (!valid) e.preventDefault();
  });
}