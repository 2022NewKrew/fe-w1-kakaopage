function loadNavTab (selector, nameArray) {
  const component = document.querySelector(`${selector}`)
  const ul = document.createElement('ul')
  ul.classList.add('ul-tab')
  for (tabName of nameArray) {
    const li = document.createElement('li')
    li.classList.add("li-tab")
    if (tabName === '웹툰') {
        li.classList.add("tab-selected")
    }
    li.innerText = tabName
    ul.appendChild(li)
  }
  component.appendChild(ul)

  ul.addEventListener('click', (e) => {
    e.preventDefault()

    const prevSelected = document.querySelector('#nav > ul > li.tab-selected')
    prevSelected.classList.remove('tab-selected')
    e.target.classList.add('tab-selected')
    
    const mainTab = document.querySelector('#main-tab')
    mainTab.innerHTML = ``
    const mainContents = document.querySelector('#main-contents')
    mainContents.innerHTML = ``
    const mainCards = document.querySelector('#main-cards')
    mainCards.innerHTML = ``
    if (e.target.innerText === '웹툰') {
      loadContentTab('#main-tab', contentNameArray)
      loadContents()
      loadCards('#main-cards', cardNum)
    }
    else {
      loadDummy('#main-contents')
    }
  })
}

function loadContentTab(selector, nameArray) {
  const component = document.querySelector(`${selector}`)
  const ul = document.createElement('ul')
  ul.classList.add('ul-tab')
  for (tabName of nameArray) {
    const li = document.createElement('li')
    li.classList.add("li-content")
    if (tabName === '요일연재') {
        li.classList.add("content-selected")
    }
    li.innerText = tabName
    ul.appendChild(li)
  }
  component.appendChild(ul)

  ul.addEventListener('click', (e) => {
    e.preventDefault()

    const prevSelected = document.querySelector('#main-tab > ul > li.content-selected')
    prevSelected.classList.remove('content-selected')
    e.target.classList.add('content-selected')
    
    const mainContents = document.querySelector('#main-contents')
    mainContents.innerHTML = ``
    const mainCards = document.querySelector('#main-cards')
    mainCards.innerHTML = ``
    if (e.target.innerText === '요일연재') {
      loadContents()
      loadCards('#main-cards', cardNum)
    }
    else {
      loadDummy('main-contents')
    }
  })
}

function loadMainImage(selector, imgSrcUrl) {
  const component = document.querySelector(`${selector}`)
  const div = document.createElement('div')
  div.classList.add('main-container')
  div.classList.add('mt-11')
  
  const img = document.createElement('img')
  img.src = imgSrcUrl
  img.alt = 'sample'
  img.classList.add('main-img')
  
  div.appendChild(img)
  component.appendChild(div)
}

function loadDayTab(selector, nameArray) {
  const component = document.querySelector(`${selector}`)

  const div = document.createElement('div')
  div.classList.add('main-container', 'mt-11')
  const ul = document.createElement('ul')
  ul.classList.add('ul-tab')
  ul.id = 'day-tab'
  for (tabName of nameArray) {
    const li = document.createElement('li')
    li.classList.add("li-content")
    if (tabName === selectedDay) {
        li.classList.add('content-selected')
    }
    li.innerText = tabName
    ul.appendChild(li)
  }
  div.appendChild(ul)
  component.appendChild(div)

  ul.addEventListener('click', (e) => {
    e.preventDefault()

    const prevSelected = document.querySelector('#day-tab > li.content-selected')
    prevSelected.classList.remove('content-selected')
    e.target.classList.add('content-selected')

    selectedDay = e.target.innerText
    const mainCards = document.querySelector('#main-cards')
    mainCards.innerHTML = ``
    loadCards('#main-cards', cardNum)
  })
}

function loadGenreTab(selector, nameArray) {
  const component = document.querySelector(`${selector}`)

  const div = document.createElement('div')
  div.classList.add('main-container',  'justify-content-between')
  const ul = document.createElement('ul')
  ul.classList.add('ul-side')
  const itemNameArray = ['전체', '웹툰', '웹툰2']
  for (tabName of itemNameArray) {
    const li = document.createElement('li')
    li.classList.add("li-side")
    if (tabName === '웹툰2') {
      const img = document.createElement('img')
      img.src = 'https://static-page.kakao.com/static/common/ico_wait-off.svg?cb16228c070950e8b1bb33d712ac8b7a'
      img.height = '14';
      li.appendChild(img)
      const span = document.createElement('span')
      span.innerText = '웹툰'
      li.appendChild(span)
    } else {
      li.innerText = tabName
    }
    ul.appendChild(li)
  }
  div.appendChild(ul)

  const innerDiv = document.createElement('div')
  div.classList.add('side-container')
  const genreDropdown = document.createElement('div')
  genreDropdown.classList.add('flex')

  const curDropdown = document.createElement('div')
  curDropdown.innerText = '전체'
  genreDropdown.appendChild(curDropdown)
  
  const arrow = document.createElement('div')
  const img = document.createElement('img')
  img.src = 'https://static-page.kakao.com/static/common/ico_sorting_arrow.svg?167b1295f93ba9f9d84cac7a5b830345'
  arrow.appendChild(img)
  genreDropdown.appendChild(arrow)

  innerDiv.appendChild(genreDropdown)

  div.appendChild(innerDiv)

  component.appendChild(div)
}

function loadCards(selector, cardNum) {
  const component = document.querySelector(`${selector}`)

  const cardContainer = document.createElement('div')
  cardContainer.classList.add('card-container')

  for (let i = 0; i < cardNum; i += 1) {
    const card = document.createElement('div')
    card.classList.add('card')

    const img = document.createElement('img')
    const imgUrl = 'images/sample2.jpeg'
    img.src = imgUrl
    img.alt = "sample2"
    img.classList.add('card-img')
    card.appendChild(img)

    const text = document.createElement('p')
    text.classList.add('text-center', 'my-0')
    if (selectedDay === '완결') {
      text.innerText = selectedDay + '웹툰'
    } else {
      text.innerText = selectedDay + '요웹툰'
    }
    card.appendChild(text)

    cardContainer.appendChild(card)
  }

  component.appendChild(cardContainer)
}

function loadDummy(selector) {
  const component = document.querySelector(`${selector}`)
  const div = document.createElement('div')
  div.classList.add('dummy')
  const h1 = document.createElement('h1')
  h1.innerText = '더미 페이지입니다'
  div.appendChild(h1)
  component.appendChild(div)
}

function loadContents() {

  loadMainImage('#main-contents', 'images/sample.jpeg')

  loadDayTab('#main-contents', dayArray)

  loadGenreTab('#main-contents', genreNameArray)
}