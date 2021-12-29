import { DummyPage } from "./pages/DummyPage.js";
import { WebtoonPage } from "./pages/WebtoonPage.js";

export const MainContents = function({ $page, nav_id }) {

    this.$target = document.createElement("article");
    $page.appendChild(this.$target);

    this.renderMain = () => {
        let page;
        if (nav_id === 1)
            page = new WebtoonPage({ $parent : this.$target });
        else
            page = new DummyPage({ $parent : this.$target, nav_id });
    }

    this.render = () => {
        this.renderMain();
    }

    this.render();
}