// ─── 1. Toggle Info Section Visibility ───
const toggleBtn = document.getElementById('toggle-section-btn');
const infoSection = document.getElementById('info-section');
toggleBtn.addEventListener('click', () => {
  // Toggle the 'hidden' class to show/hide the section
  infoSection.classList.toggle('hidden');
});

// ─── 2. Interactive Counter ───
let count = 0;
const counterDisplay = document.getElementById('counter');
const incrementBtn = document.getElementById('increment-btn');
incrementBtn.addEventListener('click', () => {
  count++;
  counterDisplay.textContent = count;
});

// ─── 3. Custom Form Validation ───
const form = document.getElementById('signup-form');

form.addEventListener('submit', function (e) {
  e.preventDefault(); // Stop default submission
  let isValid = true;

  // Validate username – must not be empty
  const username = document.getElementById('username');
  const email = document.getElementById('email');
  const password = document.getElementById('password');

  // Helper functions
  function setError(input, message) {
    const wrapper = input.parentElement;
    wrapper.classList.add('error');
    wrapper.classList.remove('success');
    wrapper.querySelector('.error-message').textContent = message;
    isValid = false;
  }

  function setSuccess(input) {
    const wrapper = input.parentElement;
    wrapper.classList.add('success');
    wrapper.classList.remove('error');
    wrapper.querySelector('.error-message').textContent = '';
  }

  // Username validation
  if (username.value.trim() === '') {
    setError(username, 'Username cannot be empty.');
  } else {
    setSuccess(username);
  }

  // Email validation using regex
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.value.trim() === '') {
    setError(email, 'Email cannot be empty.');
  } else if (!emailPattern.test(email.value.trim())) {
    setError(email, 'Please enter a valid email.');
  } else {
    setSuccess(email);
  }

  // Password validation: min 6 characters
  if (password.value.length < 6) {
    setError(password, 'Password must be at least 6 characters.');
  } else {
    setSuccess(password);
  }

  if (isValid) {
    alert('Form submitted successfully!');
    form.reset();
    document.querySelectorAll('.form-control').forEach(fc => {
      fc.classList.remove('success');
    });
  }
});
