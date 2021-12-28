export const Navigator = function({ $app, selected, selectCallback }) {
    this.state = { selected }

    this.$target = document.createElement("div");
    this.$target.className = "fix second";
    $app.appendChild(this.$target);

    const img_src_array = [
        ["https://static-page.kakao.com/static/pc/menu_home.svg?156813c20605e12311c90bae39f38c31", "홈"],
        ["https://static-page.kakao.com/static/pc/menu_toon.svg?fd6837bff2e823e13c693320961cc5a8", "웹툰"],
        ["https://static-page.kakao.com/static/pc/menu_novel.svg?417f894a74c6cd5334b4a84cfa470d55", "웹소설"],
        ["https://static-page.kakao.com/static/pc/menu_vod.svg?549a6831d63d4b27a463c6cc2be7044f", "영화"],
        ["https://static-page.kakao.com/static/pc/menu_broadcast.svg?549cf0553505cda3d418aa684f358c18", "방송"],
        ["https://static-page.kakao.com/static/pc/menu_book.svg?eb9b97c2528955f1e6cf788c6fe7e504", "책"]
    ]

    this.renderList = ($nav) => {
        const $ul = document.createElement("ul");
        img_src_array.forEach(([src, alt], i) => {
            const $li = document.createElement("li");
            $li.className = "nav-link";
            $li.innerHTML = `<a href=""><img src=${src} alt=${alt}></a>`
            if (this.state.selected === i)
                $li.className = "nav-link selected"; // TODO: nav-link-selected로 바꾸기(코드리뷰 반영)
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