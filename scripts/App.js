import Webtoon from "./pages/Webtoon.js";

export default function App () {
    const $body = document.querySelector("body"),
        $nav = $body.querySelector("nav"),
        $main = $body.querySelector(".main-contents"),
        $dummyPage = document.createElement('h1');

    let $currentNav = $nav.querySelector(".nav-selected");

    const changeCurrentNav = $li => {
        $currentNav?.classList.remove("nav-selected");
        $currentNav = $li;
        $currentNav.classList.add("nav-selected");
    }

    const clickNav = async e => {
        const { target } = e;
        const $anchor = target.closest('a');
        if($anchor){
            const $li = target.closest('li');
            if(!$li.classList.contains('nav-selected')){
                changeCurrentNav($li);
                if($anchor.classList.contains("nav-webtoon")){
                    const $webtoonPage = await Webtoon();
                    $main.replaceChild($webtoonPage, $main.firstElementChild);
                }else{
                    $main.replaceChild($dummyPage, $main.firstElementChild);
                }
            }
        }
    }

    $dummyPage.textContent = "페이지 준비중입니다!";

    // 웹 시작시 '웹툰' 페이지가 바로 메인에 노출
    (async function () {
        const $webtoonPage = await Webtoon();
        $main.replaceChild($webtoonPage, $main.firstElementChild);
    })();

    $nav.addEventListener("click", async e => {clickNav(e)});
}

App();
