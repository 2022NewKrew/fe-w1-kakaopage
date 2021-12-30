import { DummyPage } from "../pages/DummyPage.js";
import { WebtoonPage } from "../pages/WebtoonPage.js";

const renderContents = (nav_id) => {
    return nav_id === 1 ? WebtoonPage() : DummyPage({ nav_id });
}

export const MainTemplate = ({ nav_id }) => {
    const target = document.createElement("article");

    const render = () => {
        target.innerHTML = `
            <div class="center-container">
                <div class="column-container"></div>
            </div>
        `
        target.querySelector(".column-container").appendChild(renderContents(nav_id));
        return target;
    }

    return render();
}