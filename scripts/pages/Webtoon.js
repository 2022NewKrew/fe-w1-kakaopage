import {Carousel, Category, Banner, WeekDays} from "../components";

export default async function Webtoon () {
    const $contentsWrapper = document.createElement('div');
    $contentsWrapper.classList.add("contents-wrapper");

    const $navGroupWrapper = document.createElement('nav');
    $navGroupWrapper.classList.add('toon-genre-nav-group');

    const $ul = document.createElement('ul');
    const $docFragment = document.createDocumentFragment();

    const getIndexData = () => {
        const response = fetch("../../data/webtoon/index.json");
        return response.then(res => res.json());
    }

    const getContentsData = nav => {
        const response = fetch(`../../data/webtoon/${nav}.json`);
        return response.then(res => res.json());
    }

    const indexData = await getIndexData();

    let $currentNav;
    const changeCurrentNav = $a => {
        $currentNav.classList.remove("toon-nav-selected");
        $currentNav = $a;
        $currentNav.classList.add("toon-nav-selected");
    }

    indexData.forEach(data => {
        const { nav, className, text } = data;
        const $li = document.createElement('li');
        const $a = document.createElement('a');
        $a.classList.add(className);
        $a.textContent = text;
        $a.href = "#";

        if(className === "toon-home"){
            $currentNav = $a;
            $currentNav.classList.add("toon-nav-selected");
        }

        //TODO: home을 제외한 나머지 페이지 레이아웃 구성 완료시 수정
        $a.addEventListener("click", async e => {
            changeCurrentNav($a);
            if(className === "toon-home"){
                const contentsData = await getContentsData(nav);
                const $contentFragment = document.createDocumentFragment();
                contentsData.map(data => {
                    const { type } = data;
                    switch (type) {
                        case "carousel":
                            $contentFragment.appendChild(Carousel(data));
                            break;
                        case "category":
                            $contentFragment.appendChild(Category(data));
                            break;
                        case "banner":
                            $contentFragment.appendChild(Banner(data));
                            break;
                    }
                })

                $contentsWrapper.appendChild($contentFragment);
            }
        })

        $li.appendChild($a);
        $docFragment.appendChild($li);
    })
    $ul.appendChild($docFragment);
    $navGroupWrapper.appendChild($ul);

    $contentsWrapper.appendChild($navGroupWrapper);

    return $contentsWrapper;
};