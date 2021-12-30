import assets from '../assets/assets.js'

const navBar = document.querySelector('nav')
assets.navbar.menus.forEach(menuImgSrc => {
  const menuImg = document.createElement('img')
  menuImg.classList.add('nav-menu')
  menuImg.src = menuImgSrc
  navBar.appendChild(menuImg)
})

const webtoonMenus = document.querySelector('.webtoon-menus')
assets.section.menus.forEach(sectionMenu => {
  const menuDiv = document.createElement('li')
  menuDiv.classList.add('webtoon-menu')
  menuDiv.innerText = sectionMenu
  if (sectionMenu === '홈') menuDiv.style = 'color: black;'
  webtoonMenus.appendChild(menuDiv)
})

const webtoonCarouselContainer = document.querySelector('.webtoon-carousel')
assets.section.carousel.forEach(carouselImgSrc => {
  const carouselImg = document.createElement('img')
  carouselImg.src = carouselImgSrc
  carouselImg.width = 750
  carouselImg.height = 480
  webtoonCarouselContainer.prepend(carouselImg)
})

const webtoonDayList = document.querySelector('.days-list')
const today = new Date()
let checkedDate = (today.getDay() + 6) % 7
const clickWebtoonDate = function (event) {
  const beforeClickedDate = webtoonDayList.querySelector(`div:nth-child(${checkedDate + 1})`)
  console.log(beforeClickedDate)
  beforeClickedDate.classList.remove('checked-date')
  checkedDate = Number(event.target.dataset.date)
  event.target.classList.add('checked-date')
}

assets.article.days.forEach((day, idx) => {
  const dayDiv = document.createElement('div')
  dayDiv.innerText = day
  dayDiv.dataset.date = idx
  if (checkedDate === idx) dayDiv.classList.add('checked-date')
  dayDiv.addEventListener('click', clickWebtoonDate)
  webtoonDayList.appendChild(dayDiv)
})

assets.article.daysWebtoonList.forEach(webtoonInfo => {
  const webtoonInfoDiv = document.createElement('div')
  const webtoonImg = document.createElement('img')
})
