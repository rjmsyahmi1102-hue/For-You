const button = document.getElementById('surpriseBtn');
const message = document.getElementById('message');

button.addEventListener('click', () => {
  message.classList.remove('hidden');
  button.disabled = true;
  button.innerText = "Yay! 💖";
});
