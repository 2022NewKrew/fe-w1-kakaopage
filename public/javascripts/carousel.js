const homeData = JSON.parse(JSON.stringify(homeJson));
let carouselEl
let carouselBannerEl

window.addEventListener('DOMContentLoaded', () => {
    carouselEl = document.querySelector('.carousel')
    carouselBannerEl = document.querySelector('.carousel-banner')
    
    const componentBoxEl = document.querySelector('.component-box')
    const carouselBannerPartEl = document.querySelector('.carousel-banner-part')
    
    componentBoxEl.removeChild(carouselEl)
    carouselBannerPartEl.removeChild(carouselBannerEl)
    
    componentBoxEl.appendChild(createCarousel(homeData[0].content))
})

function createBanner(content) {
    const newBannerEl = carouselBannerEl.cloneNode(true)
    const titleEl = newBannerEl.querySelector('.carousel-title')
    const subtitleEl = newBannerEl.querySelector('.carousel-subtitle')
    const bannerImgEl = newBannerEl.querySelector('.carousel-banner-img')
    const badgeIconEl = newBannerEl.querySelector('.carousel-badge-img')
    const categoryEl = newBannerEl.querySelector('.carousel-category-text')
    const nReaderEl = newBannerEl.querySelector('.carousel-number-of-reader-text')
    
    titleEl.innerHTML = content.title
    subtitleEl.innerText = content.subtitle
    bannerImgEl.src = content.bannerImgSrc
    badgeIconEl.src = content.badgeIconSrc
    categoryEl.innerText = content.category
    nReaderEl.innerText = content.nReader
    
    return newBannerEl
}

function createCarousel(data) {
    const newCarouselEl = carouselEl.cloneNode(true)
    const newCarouselBannerPartEl = newCarouselEl.querySelector('.carousel-banner-part')
    const btnEls = newCarouselEl.querySelectorAll('.carousel-side-btn')
    const leftBtnEl = btnEls[0]
    const rightBtnEl = btnEls[1]
    
    let idx = 1
    
    newCarouselBannerPartEl.appendChild(createBanner(data[data.length - 1]))
    data.forEach((content, index) => {
        newCarouselBannerPartEl.appendChild(createBanner(content))
    })
    newCarouselBannerPartEl.appendChild(createBanner(data[0]))
    
    newCarouselBannerPartEl.style.width = (data.length + 2) * 720 + 'px'
    newCarouselBannerPartEl.style.transform = `translateX(-${idx * 720}px)`
    
    leftBtnEl.addEventListener('click', () => {
        if (idx > 0) {
            idx--
            newCarouselBannerPartEl.style.transform = `translateX(${idx * -720}px)`
            newCarouselBannerPartEl.style.transitionDuration = '500ms'
        }
    })
    
    rightBtnEl.addEventListener('click', () => {
        if (idx < data.length + 1) {
            idx++
            newCarouselBannerPartEl.style.transform = `translateX(${idx * -720}px)`
            newCarouselBannerPartEl.style.transitionDuration = '500ms'
        }
    })
    
    newCarouselBannerPartEl.addEventListener('transitionend', () => {
        newCarouselBannerPartEl.style.transitionDuration = '0ms'
        
        if (idx <= 0) {
            idx = data.length
        } else if (idx >= data.length + 1) {
            idx = 1
        }
    
        newCarouselBannerPartEl.style.transform = `translateX(${idx * -720}px)`
    })
    
    return newCarouselEl
}