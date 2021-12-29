export function createGridBtn(btnContent) {
    const gridBtnEl = document.createElement('div')
    
    gridBtnEl.classList.add('grid-btn')
    
    btnContent.forEach((row) => {
        const gridRowEl = document.createElement('div')
        
        gridRowEl.classList.add('grid-row')
        gridBtnEl.appendChild(gridRowEl)
        
        row.forEach((content) => {
            const gridColEl = document.createElement('div')
            const gridColTextEl = document.createElement('span')
    
            gridColEl.classList.add('grid-col')
            gridRowEl.appendChild(gridColEl)
            
            gridColTextEl.classList.add('grid-col-text')
            gridColTextEl.innerText = content.text
            gridColEl.appendChild(gridColTextEl)
    
            if (content.highlight !== undefined && content.highlight !== '') {
                const gridColHighlightEl = document.createElement('span')
                
                gridColHighlightEl.classList.add('grid-col-highlight')
                gridColHighlightEl.innerText = content.highlight
                gridColEl.appendChild(gridColHighlightEl)
            }
        })
    })
    
    return { element: gridBtnEl }
}