import { createCarousel } from './carousel.js'

export function drawComponents(data) {
    const componentObjects = []
    
    data.forEach((component, idx) => {
        let newComponentObject
        
        switch (component.type) {
            case 'carousel':
                newComponentObject = createCarousel(component.content)
                break;
        }
    
        componentObjects.push(newComponentObject)
    })
    
    return componentObjects
}