const BANNER_WIDTH = 720
const AUTO_SLIDE_PERIOD = 3000
const ANIMATION_DURATION = 500

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
    
    titleEl.innerText = content.title
    subtitleEl.innerText = content.subtitle
    bannerImgEl.src = content.bannerImgSrc
    badgeIconEl.src = content.badgeIconSrc
    categoryEl.innerText = content.category
    nReaderEl.innerText = content.nReader
    
    return newBannerEl
}

function getTranslateX(bannerIdx) {
    return `translateX(-${bannerIdx * BANNER_WIDTH}px)`
}

function moveLeft(bannerIdxObject, bannerPartEl, pageNumberEl, maxPageNumber) {
    if (bannerIdxObject.bannerIdx > 0) {
        bannerIdxObject.bannerIdx--
        bannerPartEl.style.transform = getTranslateX(bannerIdxObject.bannerIdx)
        bannerPartEl.style.transitionDuration = `${ANIMATION_DURATION}ms`
        
        if (bannerIdxObject.bannerIdx === 0) {
            pageNumberEl.innerText = `${maxPageNumber} / ${maxPageNumber}`
        } else {
            pageNumberEl.innerText = `${bannerIdxObject.bannerIdx} / ${maxPageNumber}`
        }
    }
}

function moveRight(bannerIdxObject, bannerPartEl, pageNumberEl, maxPageNumber) {
    if (bannerIdxObject.bannerIdx < maxPageNumber + 1) {
        bannerIdxObject.bannerIdx++
        bannerPartEl.style.transform = getTranslateX(bannerIdxObject.bannerIdx)
        bannerPartEl.style.transitionDuration = `${ANIMATION_DURATION}ms`
        
        if (bannerIdxObject.bannerIdx === maxPageNumber + 1) {
            pageNumberEl.innerText = `1 / ${maxPageNumber}`
        } else {
            pageNumberEl.innerText = `${bannerIdxObject.bannerIdx} / ${maxPageNumber}`
        }
    }
}

export function createCarousel(data) {
    const newCarouselEl = carouselEl.cloneNode(true)
    const newCarouselBannerPartEl = newCarouselEl.querySelector('.carousel-banner-part')
    const pageNumberEl = newCarouselEl.querySelector('.carousel-page-number')
    const btnEls = newCarouselEl.querySelectorAll('.carousel-side-btn')
    const leftBtnEl = btnEls[0]
    const rightBtnEl = btnEls[1]
    
    let bannerIdxObject = { bannerIdx: 1 }
    let timeId
    
    const stopAutoSlide = () => {
        clearInterval(timeId)
    }
    
    const startAutoSlide = () => {
        timeId = setInterval(() => {
            moveRight(bannerIdxObject, newCarouselBannerPartEl, pageNumberEl, data.length)
        }, AUTO_SLIDE_PERIOD)
    }
    
    const carouselObject = {
        element: newCarouselEl,
        stopEl: () => {
            stopAutoSlide()
        },
        startEl: () => {
            startAutoSlide()
        }
    }
    
    pageNumberEl.innerText = `1 / ${data.length}`
    
    newCarouselBannerPartEl.appendChild(createBanner(data[data.length - 1]))
    data.forEach((content, index) => {
        newCarouselBannerPartEl.appendChild(createBanner(content))
    })
    newCarouselBannerPartEl.appendChild(createBanner(data[0]))
    
    newCarouselBannerPartEl.style.width = (data.length + 2) * BANNER_WIDTH + 'px'
    newCarouselBannerPartEl.style.transform = `translateX(-${bannerIdxObject.bannerIdx * BANNER_WIDTH}px)`
    
    leftBtnEl.addEventListener('click', () => {
        moveLeft(bannerIdxObject, newCarouselBannerPartEl, pageNumberEl, data.length)
        stopAutoSlide()
        startAutoSlide()
    })
    
    rightBtnEl.addEventListener('click', () => {
        moveRight(bannerIdxObject, newCarouselBannerPartEl, pageNumberEl, data.length)
        stopAutoSlide()
        startAutoSlide()
    })
    
    newCarouselBannerPartEl.addEventListener('transitionend', () => {
        newCarouselBannerPartEl.style.transitionDuration = '0ms'
        
        if (bannerIdxObject.bannerIdx <= 0) {
            bannerIdxObject.bannerIdx = data.length
        } else if (bannerIdxObject.bannerIdx >= data.length + 1) {
            bannerIdxObject.bannerIdx = 1
        }
    
        newCarouselBannerPartEl.style.transform = getTranslateX(bannerIdxObject.bannerIdx)
    })
    
    return carouselObject
}