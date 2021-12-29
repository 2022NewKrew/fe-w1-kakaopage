import contentJson from '../json/content.json' assert { type: 'json' }
import { drawComponent } from './component-creator.js'
import { removeAllChild } from './common.js'

const contentData = JSON.parse(JSON.stringify(contentJson))

window.addEventListener('DOMContentLoaded', () => {
    const contentContainerEl = document.querySelector('.content-container')
    const contentNavEl = document.querySelector('.content-nav')
    const contentNavItemEls = []
    const wrapperElObject = {}
    
    function showTab(navItemEl, categoryData) {
        if (wrapperElObject[categoryData.name] === undefined) {
            wrapperElObject[categoryData.name] = drawComponent(categoryData.content)
        }
    
        removeAllChild(contentContainerEl)
        contentContainerEl.appendChild(wrapperElObject[categoryData.name])
    
        contentNavItemEls.forEach((navItemEl) => {
            navItemEl.classList.remove('selected-content-nav-item')
        })
    
        navItemEl.classList.add('selected-content-nav-item')
    }
    
    contentData.forEach((categoryData) => {
        const contentNavItemEl = document.createElement('li')
        
        contentNavItemEl.classList.add('content-nav-item')
        contentNavItemEl.innerText = categoryData.name
        
        contentNavItemEl.addEventListener('click', () => {
            showTab(contentNavItemEl, categoryData)
        })
        
        contentNavEl.appendChild(contentNavItemEl)
        contentNavItemEls.push(contentNavItemEl)
    })
    
    showTab(contentNavItemEls[0], contentData[0])
})