export default function Category (data) {
    const { contents } = data;
    const $categoryGroupWrapper = document.createElement("div");
    $categoryGroupWrapper.classList.add("category-nav-group-wrapper");

    const $categoryGroup = document.createElement("div");
    $categoryGroup.classList.add("category-nav-group");

    $categoryGroup.innerHTML = contents.reduce((html, content) => {
        const { title, tag } = content;
        return html + `
            <a class="category" href="#">
                <div class="category-text">${title}</div>
                <div ${tag ? 'class="category-count">' + tag : '>'}</div>
            </a>`
    }, ``);

    $categoryGroupWrapper.appendChild($categoryGroup);

    return $categoryGroupWrapper;
}