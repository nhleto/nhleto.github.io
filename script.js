const scrollButton = document.querySelector('.scroll')

function onScroll() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    scrollButton.classList.remove("hidden");
  } else {
    scrollButton.classList.add("hidden");
  }
};

window.addEventListener("scroll", onScroll);

function topFunction(){
  document.body.scrollTo({top: 0, behavior: 'smooth'});
  document.documentElement.scrollTo({top: 0, behavior: 'smooth'});
}


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

function about(){
  const aboutMe = document.querySelector('.about-me')
  aboutMe.scrollIntoView({ behavior: 'smooth' });
}

function contact(){
  const contactMe = document.querySelector('.contact-me')
  contactMe.scrollIntoView({ behavior: 'smooth' });
}