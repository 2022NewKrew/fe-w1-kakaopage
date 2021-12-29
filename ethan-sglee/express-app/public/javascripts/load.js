function loadContentTab(id, nameArray) {
    const component = document.querySelector(`#${id}`)
    const ul = document.createElement('ul')
    ul.classList.add('ul-tab')
    for (tabName of nameArray) {
        const li = document.createElement('li')
        li.classList.add("li-content")
        li.innerText = tabName
        ul.appendChild(li)
    }
    component.appendChild(ul)
}

function loadMainImage(id, imgSrcUrl) {
    const component = document.querySelector(`#${id}`)
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

function loadDayTab(id, nameArray) {
    const component = document.querySelector(`#${id}`)

    const div = document.createElement('div')
    div.classList.add('main-container',  'mt-11')
    const ul = document.createElement('ul')
    ul.classList.add('ul-tab')
    for (tabName of nameArray) {
        const li = document.createElement('li')
        li.classList.add("li-content")
        li.innerText = tabName
        ul.appendChild(li)
    }
    div.appendChild(ul)
    component.appendChild(div)
}

function loadGenreTab(id, nameArray) {
    const component = document.querySelector(`#${id}`)

    const div = document.createElement('div')
    div.classList.add('main-container',  'justify-content-between')
    const ul = document.createElement('ul')
    ul.classList.add('ul-side')
    const itemNameArray = ['전체', '웹툰', '웹툰2']
    for (tabName of nameArray) {
        const li = document.createElement('li')
        li.classList.add("li-side")
        li.innerText = tabName
        ul.appendChild(li)
    }
    div.appendChild(ul)

    const innerDiv = document.createElement('div')
    div.classList.add('side-container')
    const genreDropdown = document.createElement('div')
    genreDropdown.innerText = '전체 ㅜ'
    innerDiv.appendChild(genreDropdown)
    div.appendChild(innerDiv)

    component.appendChild(div)
}

function loadCards(id, cardNum) {
    const component = document.querySelector(`#${id}`)

    const cardContainer = document.createElement('div')
    cardContainer.classList.add('card-container')

    for (let i = 0; i < cardNum; i += 1) {
        console.log(i)
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
        text.innerText = '웹툰'
        card.appendChild(text)

        cardContainer.appendChild(card)
    }

    component.appendChild(cardContainer)
}