import { img_src_array } from "../../lists.js";

export const DummyPage = function ({ $parent, nav_id }) {

    this.render = () => {
        console.log("dummy page render()")
        $parent.innerHTML = `
            <div class="center-container">
                <div class="column-container">
                    <div class="white-wrapper genre">
                        ${img_src_array[nav_id][1]}
                    </div>
                </div>
            </div>
        `
    }
    this.render();
}