import {Carousel, Category, Banner, WeekDays} from "../components";

const getGenreNavData = () => {
    const response = fetch("../../database/webtoon/genreNav.json");
    return response.then(res => res.json());
}

const getContentsData = genre => {
    const response = fetch(`../../database/webtoon/${genre}.json`);
    return response.then(res => res.json());
}

export default async function Webtoon () {
    const $contentsWrapper = document.createElement('div');
    const $subContentsWrapper = document.createElement('div');
    const $navGroupWrapper = document.createElement('nav');
    const $ul = document.createElement('ul');
    const $docFragment = document.createDocumentFragment();
    const genreNavData = await getGenreNavData();

    let $currentNav;

    const changeCurrentNav = $a => {
        $currentNav?.classList.remove("toon-nav-selected");
        $currentNav = $a;
        $currentNav.classList.add("toon-nav-selected");
    }

    const renderContents = async (genre) => {
        const contentsData = await getContentsData(genre);
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
                case "weekdays":
                    $contentFragment.appendChild(WeekDays(data));
                    break;
                default:
                    break;
            }
        })
        return $contentFragment;
    }

    const clickGenreNav = async ($a, genre) => {
        changeCurrentNav($a);
        $subContentsWrapper.innerHTML = '';
        $subContentsWrapper.appendChild(await renderContents(genre));
    }

    $contentsWrapper.classList.add("contents-wrapper");
    $subContentsWrapper.classList.add("sub-contents-wrapper");
    $navGroupWrapper.classList.add('toon-genre-nav-group');

    genreNavData.forEach(data => {
        const { genre, className, text } = data;
        const $li = document.createElement('li');
        const $a = document.createElement('a');
        $a.classList.add("genre-nav", className);
        $a.textContent = text;
        $a.dataset.genre = genre;
        $a.href = "#";

        if(className === "toon-home"){
            clickGenreNav($a, genre);
        }

        $li.appendChild($a);
        $docFragment.appendChild($li);
    })

    $navGroupWrapper.addEventListener("click", async e => {
        const {target} = e;
        if(target.classList.contains("genre-nav")){
            await clickGenreNav(target, target.dataset.genre);
        }
    })

    $ul.appendChild($docFragment);
    $navGroupWrapper.appendChild($ul);

    $contentsWrapper.append($navGroupWrapper, $subContentsWrapper);

    return $contentsWrapper;
};