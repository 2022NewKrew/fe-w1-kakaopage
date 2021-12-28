import { createCarousel } from './carousel.js'

const homeData = JSON.parse(JSON.stringify(homeJson));

window.addEventListener('DOMContentLoaded', () => {

})

function removeAllChild(element) {
    while (element.hasChildNodes()) {
        element.removeChild(element.firstChild)
    }
}

function drawComponent(data) {
    const componentBoxEl = document.querySelector('.component-box')
    
    removeAllChild(componentBoxEl)
    
    homeData.forEach((component, idx) => {
        switch (component.type) {
            case 'carousel':
                componentBoxEl.appendChild(createCarousel(component.content))
                break;
        }
    })
}