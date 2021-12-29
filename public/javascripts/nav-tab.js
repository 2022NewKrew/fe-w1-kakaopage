import contentJson from '../json/content.json' assert { type: 'json' }
import { drawComponents } from './component-creator.js'
import { removeAllChild } from './common.js'

const categoryDatas = JSON.parse(JSON.stringify(contentJson))

window.addEventListener('DOMContentLoaded', () => {
    const contentContainerEl = document.querySelector('.content-container')
    const contentNavEl = document.querySelector('.content-nav')
    const contentNavItemEls = []
    const contentObjects = {}
    
    let currentShowedObjects
    
    const showTab = (navItemEl, categoryData) => {
        if (contentObjects[categoryData.name] === undefined) {
            contentObjects[categoryData.name] = drawComponents(categoryData.content)
        }
    
        if (currentShowedObjects !== undefined) {
            removeAllChild(contentContainerEl)
            currentShowedObjects.forEach((componentObject) => {
                console.log(componentObject)
        
                if (componentObject.stopEl !== undefined) {
                    componentObject.stopEl()
                }
            })
        }
    
        currentShowedObjects = contentObjects[categoryData.name]
        currentShowedObjects.forEach((componentObject) => {
            contentContainerEl.appendChild(componentObject.element)
    
            if (componentObject.startEl !== undefined) {
                componentObject.startEl()
            }
        })
    
        contentNavItemEls.forEach((navItemEl) => {
            navItemEl.classList.remove('selected-content-nav-item')
        })
    
        navItemEl.classList.add('selected-content-nav-item')
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