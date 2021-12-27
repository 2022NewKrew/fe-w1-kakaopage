function removeAllChild(element) {
    while (element.hasChildNodes()) {
        element.removeChild(element.firstChild)
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const homeNavBtnEl = document.querySelector('#low-header-nav-home')
    const webtoonNavBtnEl = document.querySelector('#low-header-nav-webtoon')
    const webnovelNavBtnEl = document.querySelector('#low-header-nav-webnovel')
    const movieNavBtnEl = document.querySelector('#low-header-nav-movie')
    const broadcastNavBtnEl = document.querySelector('#low-header-nav-broadcast')
    const bookNavBtnEl = document.querySelector('#low-header-nav-book')
    
    const mainContainerEl = document.querySelector('.main-container')
    const homeContentEl = document.querySelector('.home-content')
    const webtoonContentEl = document.querySelector('.webtoon-content')
    const webnovelContentEl = document.querySelector('.webnovel-content')
    const movieContentEl = document.querySelector('.movie-content')
    const broadcastContentEl = document.querySelector('.broadcast-content')
    const bookContentEl = document.querySelector('.book-content')
    
    let selectedNavEl = homeNavBtnEl;
    
    mainContainerEl.removeChild(webtoonContentEl)
    mainContainerEl.removeChild(webnovelContentEl)
    mainContainerEl.removeChild(movieContentEl)
    mainContainerEl.removeChild(broadcastContentEl)
    mainContainerEl.removeChild(bookContentEl)
    
    homeNavBtnEl.addEventListener('click', () => {
        selectedNavEl.classList.remove('selected-low-header-nav-item')
        homeNavBtnEl.classList.add('selected-low-header-nav-item')
        selectedNavEl = homeNavBtnEl
        
        removeAllChild(mainContainerEl)
        mainContainerEl.appendChild(homeContentEl)
    })
    
    webtoonNavBtnEl.addEventListener('click', () => {
        selectedNavEl.classList.remove('selected-low-header-nav-item')
        webtoonNavBtnEl.classList.add('selected-low-header-nav-item')
        selectedNavEl = webtoonNavBtnEl
        
        removeAllChild(mainContainerEl)
        mainContainerEl.appendChild(webtoonContentEl)
    })
    
    webnovelNavBtnEl.addEventListener('click', () => {
        selectedNavEl.classList.remove('selected-low-header-nav-item')
        webnovelNavBtnEl.classList.add('selected-low-header-nav-item')
        selectedNavEl = webnovelNavBtnEl
        
        removeAllChild(mainContainerEl)
        mainContainerEl.appendChild(webnovelContentEl)
    })
    
    movieNavBtnEl.addEventListener('click', () => {
        selectedNavEl.classList.remove('selected-low-header-nav-item')
        movieNavBtnEl.classList.add('selected-low-header-nav-item')
        selectedNavEl = movieNavBtnEl
        
        removeAllChild(mainContainerEl)
        mainContainerEl.appendChild(movieContentEl)
    })
    
    broadcastNavBtnEl.addEventListener('click', () => {
        selectedNavEl.classList.remove('selected-low-header-nav-item')
        broadcastNavBtnEl.classList.add('selected-low-header-nav-item')
        selectedNavEl = broadcastNavBtnEl
        
        removeAllChild(mainContainerEl)
        mainContainerEl.appendChild(broadcastContentEl)
    })
    
    bookNavBtnEl.addEventListener('click', () => {
        selectedNavEl.classList.remove('selected-low-header-nav-item')
        bookNavBtnEl.classList.add('selected-low-header-nav-item')
        selectedNavEl = bookNavBtnEl
        
        removeAllChild(mainContainerEl)
        mainContainerEl.appendChild(bookContentEl)
    })
})