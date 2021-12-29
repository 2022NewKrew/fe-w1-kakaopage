import { webtoon_genre_list } from "../lists.js";

const addLiEvent = (li, genre_id, is_selected, selectCallback) => {
    li.addEventListener("click", (e) => {
        e.preventDefault();
        if (!is_selected)
            selectCallback(genre_id);
    })
}

const createClassName = (is_selected) => {
    return is_selected ? "genre-link selected" : "genre-link";
}

const renderLi = ({ title }, className) => {
    const li = document.createElement("li");
    li.innerHTML = `<a class="${className}" href="">${title}</a>`
    return li;
}

const renderUl = (selected_genre_id, selectCallback) => {
    const ul = document.createElement("ul");
    ul.className = "genre-ul";
    webtoon_genre_list.forEach((genre_info) => {
        const is_selected = genre_info.genre_id === selected_genre_id;
        const li = renderLi(genre_info, createClassName(is_selected));
        addLiEvent(li, genre_info.genre_id, is_selected, selectCallback);
        ul.appendChild(li);
    })

    return ul;
}

export const GenreTab = ({selected_genre_id, selectCallback}) => {

    const target = document.createElement("div");
    target.className = "white-wrapper genre";

    const render = () => {
        const ul = renderUl(selected_genre_id, selectCallback);
        target.innerHTML = "";
        target.appendChild(ul);
        return target;
    }
    
    return render();
}