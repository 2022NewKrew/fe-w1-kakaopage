import { createCarousel } from './carousel.js'

export function drawComponent(data) {
    const contentWrapperEl = document.createElement('div')
    
    data.forEach((component, idx) => {
        switch (component.type) {
            case 'carousel':
                contentWrapperEl.appendChild(createCarousel(component.content))
                break;
        }
    })
    
    return contentWrapperEl
}