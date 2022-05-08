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


