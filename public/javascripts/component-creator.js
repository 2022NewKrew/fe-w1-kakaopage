import { createCarousel } from './carousel.js'
import { createGridBtn } from './grid-btn.js'

export function drawComponents(data) {
    const componentEls = []
    
    data.forEach((component, idx) => {
        let newComponentEl
        
        switch (component.type) {
            case 'carousel':
                newComponentEl = createCarousel(component.content)
                break
            
            case 'grid-btn':
                newComponentEl = createGridBtn(component.content)
                break
        }
    
        componentEls.push(newComponentEl)
    })
    
    return componentEls
}