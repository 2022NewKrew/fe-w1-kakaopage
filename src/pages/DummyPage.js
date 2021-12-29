import { img_src_array } from "../lists.js";

export const DummyPage = ({ nav_id }) => {
    const target = document.createElement("div");
    target.className = "white-wrapper genre";

    const render = () => {
        target.innerText = img_src_array[nav_id][1]
        return target;
    }

    return render();
}