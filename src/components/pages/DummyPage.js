import { img_src_array } from "../../lists.js";

export const DummyPage = ({ nav_id }) => {
    const target = document.createElement("article");

    const render = () => {
        target.innerHTML = `
            <div class="center-container">
                <div class="column-container">
                    <div class="white-wrapper genre">
                        ${img_src_array[nav_id][1]}
                    </div>
                </div>
            </div>
        `
        return target;
    }

    return render();
}