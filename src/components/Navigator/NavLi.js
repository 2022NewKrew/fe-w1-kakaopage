const createLi = ({src, title}, is_selected) => {
    const li = document.createElement("li");
    li.className = createClassName(is_selected);
    li.innerHTML = `<a href=""><img src=${src}} alt=${title}></a>`
    return li;
}

const createClassName = (is_selected) => {
    return is_selected ? "nav-link selected" : "nav-link";
}

export const NavLi = ({li_data, is_selected, selectCallback}) => {

    const render = () => {
        const li = createLi(li_data, is_selected);
        addEvent(li, li_data.nav_id);
        return li;
    }

    const addEvent = (li, nav_id) => {
        li.addEventListener("click", (e) => {
            e.preventDefault();
            if (!is_selected)
                selectCallback(nav_id);
        })
    }
    
    return render();
}