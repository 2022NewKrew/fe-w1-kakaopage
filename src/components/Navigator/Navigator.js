import { img_src_array } from "../../lists.js";
import { NavLi } from "./NavLi.js";

export const Navigator = ({ selected_id, selectCallback }) => {
    const target = document.createElement("div");
    target.className = "fix second";

    const renderList = (nav) => {
        const ul = document.createElement("ul");
        img_src_array.forEach((li_data, i) => { // TODO: i 사용하지 않고 img_src_array 안에 id 함께 넣기
            const li = NavLi({li_data, selected_id, nav_id: i, selectCallback});
            ul.appendChild(li);
        })
        nav.appendChild(ul);
    }

    const render = () => {
        const nav = document.createElement("nav");
        renderList(nav);
        target.appendChild(nav);
        return target;
    }

    return render();
}