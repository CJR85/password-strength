const pass = document.getElementById('password'),
  msg = document.getElementById('message'),
  str = document.getElementById('strength');

pass.addEventListener('input', () => {
  if (pass.value.length > 0) {
    msg.style.display = 'block';
  } else {
    msg.style.display = 'none';
  }
});
