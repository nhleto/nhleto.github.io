document.querySelector('.copy').addEventListener('click', () => {
  const email = document.querySelector('.email')
  const successMessage = document.querySelector('.success-message')
  console.log(email)
  email.select();
  email.setSelectionRange(0, 99999);

  document.execCommand('copy');
  successMessage.classList.remove('hidden');
  setTimeout(() => {
    successMessage.classList.add('hidden')
  }, 2000);
});