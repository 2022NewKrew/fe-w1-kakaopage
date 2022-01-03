import contentJson from '../json/content.json' assert { type: 'json' }
import { drawComponents } from './component-creator.js'
import { removeAllChild } from './common.js'

const categoryDatas = JSON.parse(JSON.stringify(contentJson))

const stateChangedEventListener = []

window.addEventListener('DOMContentLoaded', () => {
    const contentContainerEl = document.querySelector('.content-container')
    const contentNavEl = document.querySelector('.content-nav')
    const contentNavItemEls = []
    const contentComponents = {}
    
    let currentShowedComponents
    
    const showTab = (navItemToShowEl, categoryData) => {
        if (contentComponents[categoryData.name] === undefined) {
            contentComponents[categoryData.name] = drawComponents(categoryData.content)
        }
    
        if (currentShowedComponents !== contentComponents[categoryData.name]) {
            if (currentShowedComponents !== undefined) {
                removeAllChild(contentContainerEl)
                currentShowedComponents.forEach((componentEl) => {
                    stateChangedEventListener.forEach((eventListenerObj) => {
                        if (eventListenerObj.element === componentEl) {
                            eventListenerObj.eventListener(false)
                        }
                    })
                })
            }
    
            currentShowedComponents = contentComponents[categoryData.name]
            currentShowedComponents.forEach((componentEl) => {
                contentContainerEl.appendChild(componentEl)
                stateChangedEventListener.forEach((eventListenerObj) => {
                    if (eventListenerObj.element === componentEl) {
                        eventListenerObj.eventListener(true)
                    }
                })
            })
    
            contentNavItemEls.forEach((navItemEl) => {
                navItemEl.classList.remove('selected-content-nav-item')
            })
    
            navItemToShowEl.classList.add('selected-content-nav-item')
        }
    }
    
    categoryDatas.forEach((categoryData) => {
        const contentNavItemEl = document.createElement('li')
        
        contentNavItemEl.classList.add('content-nav-item')
        contentNavItemEl.innerText = categoryData.name
        
        contentNavItemEl.addEventListener('click', () => {
            showTab(contentNavItemEl, categoryData)
        })
        
        contentNavEl.appendChild(contentNavItemEl)
        contentNavItemEls.push(contentNavItemEl)
    })
    
    showTab(contentNavItemEls[0], categoryDatas[0])
})

export function addStateChangedEventListener(eventListener, element) {
    stateChangedEventListener.push({
        element: element,
        eventListener: eventListener
    })
}