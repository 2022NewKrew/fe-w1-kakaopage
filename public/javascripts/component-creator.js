import { createCarousel } from './carousel.js'
import { createGridBtn } from './grid-btn.js'

export function drawComponents(componentDataToDraw) {
    const componentEls = []
    
    componentDataToDraw.forEach((component, idx) => {
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