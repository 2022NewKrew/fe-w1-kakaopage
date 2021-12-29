import { createCarousel } from './carousel.js'
import { createGridBtn } from './grid-btn.js'

export function drawComponents(data) {
    const componentObjects = []
    
    data.forEach((component, idx) => {
        let newComponentObject
        
        switch (component.type) {
            case 'carousel':
                newComponentObject = createCarousel(component.content)
                break
            
            case 'grid-btn':
                newComponentObject = createGridBtn(component.content)
                break
        }
        
        componentObjects.push(newComponentObject)
    })
    
    return componentObjects
}