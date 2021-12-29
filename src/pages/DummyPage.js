import { nav_list } from "../lists.js";

export const DummyPage = ({ nav_id }) => {
    const target = document.createElement("div");
    target.className = "white-wrapper genre";

    const render = () => {
        target.innerText = nav_list[nav_id].title
        return target;
    }

    return render();
}