const scrollButton = document.querySelector('.scroll')

function onScroll() {
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
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

function projects() {
  const projects = document.querySelector('.projects')
  projects.scrollIntoView({ behavior: 'smooth' });
}

let roundtable = document.querySelector('#roundtable-desktop')
let center = document.querySelector('.center-pic')

let allchat = document.querySelector('#allchat-desktop')
let center1 = document.querySelector('.center-pic1')

center1.addEventListener('mouseover', ()=>{
  center1.style.opacity = '1'
 })

 allchat.addEventListener('mouseover', ()=>{
 center1.style.opacity = '1'
})

allchat.addEventListener('mouseout', ()=>{
  center1.style.opacity = '0'
  if (!allchat.classList.contains('picture-size')){
    allchat.insertAdjacentElement('afterend', center1)
  }
 })

 center1.addEventListener('mouseout', ()=>{
  center1.style.opacity = '0'
 })

 center1.addEventListener('click', ()=>{
  allchat.classList.toggle('picture-size')
  center1.remove()
 })

 allchat.addEventListener('click', ()=>{
  allchat.classList.toggle('picture-size')
  center1.remove()
})

window.addEventListener('click', (e)=>{
  if (e.target !== allchat && e.target !== center1){
    allchat.classList.remove('picture-size')
    allchat.insertAdjacentElement('afterend', center1)
  }
})

center.addEventListener('mouseover', ()=>{
  center.style.opacity = '1'
 })

roundtable.addEventListener('mouseover', ()=>{
 center.style.opacity = '1'
})

roundtable.addEventListener('mouseout', ()=>{
  center.style.opacity = '0'
  if (!roundtable.classList.contains('picture-size')){
    roundtable.insertAdjacentElement('afterend', center)
  }
 })

 center.addEventListener('mouseout', ()=>{
  center.style.opacity = '0'
 })

 center.addEventListener('click', ()=>{
  roundtable.classList.toggle('picture-size')
  center.remove()
 })

roundtable.addEventListener('click', ()=>{
  roundtable.classList.toggle('picture-size')
  center.remove()
})

window.addEventListener('click', (e)=>{
  if (e.target !== roundtable && e.target !== center){
    roundtable.classList.remove('picture-size')
    roundtable.insertAdjacentElement('afterend', center)
  }
})