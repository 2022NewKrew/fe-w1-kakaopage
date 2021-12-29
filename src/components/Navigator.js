import { img_src_array } from "../lists.js";

export const Navigator = function({ $page, selected, selectCallback }) {
    this.state = { selected }

    this.$target = document.createElement("div");
    this.$target.className = "fix second";
    $page.appendChild(this.$target);

    this.renderList = ($nav) => {
        const $ul = document.createElement("ul");
        img_src_array.forEach(([src, alt], i) => {
            const $li = document.createElement("li");
            $li.className = "nav-link";
            $li.innerHTML = `<a href=""><img src=${src} alt=${alt}></a>`
            if (this.state.selected === i)
                $li.className = "nav-link selected";
            $li.addEventListener("click", (e) => {
                e.preventDefault();
                if (this.state.selected !== i)
                    selectCallback(i);
            })
            
            $ul.appendChild($li);
        })
        $nav.appendChild($ul);
    }

    this.render = () => {
        const $nav = document.createElement("nav");
        this.renderList($nav);
        this.$target.appendChild($nav);
    }

    this.render();
}