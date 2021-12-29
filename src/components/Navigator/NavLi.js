const createLi = (li_data, is_selected) => {
    const li = document.createElement("li");
    li.className = createClassName(is_selected);
    li.innerHTML = `<a href=""><img src=${li_data[0]} alt=${[li_data[1]]}></a>`
    return li;
}

const createClassName = (is_selected) => {
    return is_selected ? "nav-link selected" : "nav-link";
}

export const NavLi = ({li_data, selected_id, nav_id, selectCallback}) => {

    const render = () => {
        const li = createLi(li_data, selected_id === nav_id);
        addEvent(li, nav_id);
        return li;
    }

    const addEvent = (li, nav_id) => {
        li.addEventListener("click", (e) => {
            e.preventDefault();
            if (selected_id !== nav_id)
                selectCallback(nav_id);
        })
    }
    
    return render();
}