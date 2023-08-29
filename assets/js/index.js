const tryBtn = document.getElementById('tryit-btn');
const tryForm = document.getElementById('tryit-form');

tryBtn.addEventListener('click', () => {
  tryBtn.style.display = 'none';
  tryForm.style.display = 'block';
});