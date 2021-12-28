import assets from '../assets/assets.js'

const navBar = document.querySelector('nav')
assets.navbar.menus.forEach(menuImgSrc => {
  const menuDiv = document.createElement('img')
  menuDiv.classList.add('nav-menu')
  menuDiv.src = menuImgSrc
  navBar.appendChild(menuDiv)
})
