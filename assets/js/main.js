// ========= SCROLL NAVIGATION ============ //
function onScroll() {
  if (scrollY > 0) {
    nav.classList.add('scroll')
  } else {
    nav.classList.remove('scroll')
  }
}

// ========= MENU MOBILE ============ //
const navMenu = document.getElementById('menu-mobile')

function toggleMenu() {
  const nav = document.getElementById('nav')
  nav.classList.toggle('active')
}

navMenu.addEventListener('click', toggleMenu)

// ========= REMOVE MENU MOBILE ============ //
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('active')
  })
}

// ========= SCROLL TOP ============ //
const backTopButton = document.querySelector('.back-top')
function backToTop() {
  if (window.scrollY >= 550) {
    backTopButton.classList.add('show')
  } else {
    backTopButton.classList.remove('show')
  }
}

window.addEventListener('scroll', function () {
  backToTop()
})

// ========= SCROLL REVEAL ============ //
 
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '50px',
  duration: 2000
})

scrollReveal.reveal('.topRevealSmall', { delay: 400 })
scrollReveal.reveal('.topRevealMedium', { delay: 600 })
scrollReveal.reveal('.topRevealLarge', { delay: 800 })


// SCROLL BOTTOM
const scrollRevealBottom = ScrollReveal({
  origin: 'bottom',
  distance: '50px',
  duration: 2000
})

scrollReveal.reveal('.bottomRevealSmall', { delay: 400 })
scrollReveal.reveal('.bottomRevealMedium', { delay: 600 })
scrollReveal.reveal('.bottomRevealLarge', { delay: 800 })
