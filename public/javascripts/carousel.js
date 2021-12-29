let carouselEl
let carouselBannerEl

window.addEventListener('DOMContentLoaded', () => {
    carouselEl = document.querySelector('.carousel')
    carouselBannerEl = document.querySelector('.carousel-banner')
    
    const componentContainerEl = document.querySelector('.component-container')
    const carouselBannerPartEl = document.querySelector('.carousel-banner-part')
    
    componentContainerEl.removeChild(carouselEl)
    carouselBannerPartEl.removeChild(carouselBannerEl)
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

export function createCarousel(data) {
    const BANNER_WIDTH = 720
    
    const newCarouselEl = carouselEl.cloneNode(true)
    const newCarouselBannerPartEl = newCarouselEl.querySelector('.carousel-banner-part')
    const pageNumberEl = newCarouselEl.querySelector('.carousel-page-number')
    const btnEls = newCarouselEl.querySelectorAll('.carousel-side-btn')
    const leftBtnEl = btnEls[0]
    const rightBtnEl = btnEls[1]
    
    let bannerIdx = 1
    
    pageNumberEl.innerText = `1 / ${data.length}`
    
    newCarouselBannerPartEl.appendChild(createBanner(data[data.length - 1]))
    data.forEach((content, index) => {
        newCarouselBannerPartEl.appendChild(createBanner(content))
    })
    newCarouselBannerPartEl.appendChild(createBanner(data[0]))
    
    newCarouselBannerPartEl.style.width = (data.length + 2) * BANNER_WIDTH + 'px'
    newCarouselBannerPartEl.style.transform = `translateX(-${bannerIdx * BANNER_WIDTH}px)`
    
    leftBtnEl.addEventListener('click', () => {
        if (bannerIdx > 0) {
            bannerIdx--
            newCarouselBannerPartEl.style.transform = `translateX(-${bannerIdx * BANNER_WIDTH}px)`
            newCarouselBannerPartEl.style.transitionDuration = '500ms'
    
            if (bannerIdx === 0) {
                pageNumberEl.innerText = `${data.length} / ${data.length}`
            } else {
                pageNumberEl.innerText = `${bannerIdx} / ${data.length}`
            }
        }
    })
    
    rightBtnEl.addEventListener('click', () => {
        if (bannerIdx < data.length + 1) {
            bannerIdx++
            newCarouselBannerPartEl.style.transform = `translateX(-${bannerIdx * BANNER_WIDTH}px)`
            newCarouselBannerPartEl.style.transitionDuration = '500ms'
    
            if (bannerIdx === data.length + 1) {
                pageNumberEl.innerText = `1 / ${data.length}`
            } else {
                pageNumberEl.innerText = `${bannerIdx} / ${data.length}`
            }
        }
    })
    
    newCarouselBannerPartEl.addEventListener('transitionend', () => {
        newCarouselBannerPartEl.style.transitionDuration = '0ms'
        
        if (bannerIdx <= 0) {
            bannerIdx = data.length
        } else if (bannerIdx >= data.length + 1) {
            bannerIdx = 1
        }
    
        newCarouselBannerPartEl.style.transform = `translateX(-${bannerIdx * BANNER_WIDTH}px)`
    })
    
    return newCarouselEl
}