const renderUl = (link_items) => {
    const ul = document.createElement("ul");
    ul.className = "link-grid";
    link_items.forEach(({title, path}) => {
        const target = document.createElement('li');
        target.innerHTML = `
            <a href=${path}>
                <div><span>${title}</span></div>
            </a
        `;
        ul.appendChild(target);
    });
    return ul;
}

export const LinkGrid = ({ data }) => {
    const target = document.createElement("div");
    if (!data || data.length === 0) return target;
    target.className = "white-wrapper padding-wrapper";

    const render = () => {
        target.innerHTML = "";
        target.appendChild(renderUl(data));
        return target;
    }
    
    return render();
}