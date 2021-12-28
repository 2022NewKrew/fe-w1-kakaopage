import { createCarousel } from './carousel.js'
import { removeAllChild } from './common.js'

const homeData = JSON.parse(JSON.stringify(homeJson));

window.addEventListener('DOMContentLoaded', () => {
    drawComponent(homeData)
})

function drawComponent(data) {
    const componentBoxEl = document.querySelector('.component-box')
    
    removeAllChild(componentBoxEl)
    
    data.forEach((component, idx) => {
        switch (component.type) {
            case 'carousel':
                componentBoxEl.appendChild(createCarousel(component.content))
                break;
        }
    })
}