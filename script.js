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

const particles = {
  "fpsLimit": 60,
  "particles": {
    "number": {
      "value": 40,
      "density": {
        "enable": true,
        "value_area": 900
      }
    },
    "color": {
      "value": "rgb(248, 239, 213)",
      "animation": {
        "enable": false,
        "speed": 20,
        "sync": true
      }
    },
    "shape": {
      "type": "star",
      "stroke": {
        "width": 2
      },
      "polygon": {
        "nb_sides": 6
      },
    },
    "opacity": {
      "value": 0.075,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 3,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 20,
        "size_min": 0.1,
        "sync": false
      }
    },
    "links": {
      "enable": true,
      "distance":75,
      "color": "#ffffff",
      "opacity": 0.2,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "down",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 0.8
      },
      "repulse": {
        "distance": 200
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true,
  "background": {
    "color": "rgb(43 39 39)",
    "image": "",
    "position": "50% 50%",
    "repeat": "no-repeat",
    "size": "cover"
  }
};

tsParticles.load('tsparticles', particles);