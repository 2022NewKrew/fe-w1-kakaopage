function removeAllChild(element) {
    while (element.hasChildNodes()) {
        element.removeChild(element.firstChild)
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const mainContainerEl = document.querySelector('.main-container')
    const navBtnEls = document.querySelectorAll('.low-header-nav-item')
    const contentEls = document.querySelectorAll('.content')
    
    let selectedIdx = 0
    
    removeAllChild(mainContainerEl)
    mainContainerEl.appendChild(contentEls[selectedIdx])
    navBtnEls[selectedIdx].classList.add('selected-low-header-nav-item')
    
    navBtnEls.forEach((navBtnEl, idx) => {
        navBtnEl.addEventListener('click', () => {
            navBtnEls[selectedIdx].classList.remove('selected-low-header-nav-item')
            navBtnEl.classList.add('selected-low-header-nav-item')
            selectedIdx = idx
            
            removeAllChild(mainContainerEl)
            mainContainerEl.appendChild(contentEls[idx])
        })
    })
})