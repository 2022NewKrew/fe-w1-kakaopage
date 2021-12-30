import Webtoon from "./pages/Webtoon.js";

export default function App () {
    const $body = document.querySelector("body"),
        $nav = $body.querySelector("nav"),
        $main = $body.querySelector(".main-contents");

    const $dummyPage = document.createElement('h1');
    $dummyPage.textContent = "페이지 준비중입니다!"

    let $currentNav = $nav.querySelector(".nav-selected");

    $nav.addEventListener("click", async e => {
        const { target } = e;
        const $anchor = target.closest('a');
        if($anchor){
            const $li = target.closest('li');
            if(!$li.classList.contains('nav-selected')){
                $currentNav.classList.remove("nav-selected");
                $currentNav = $li;
                $currentNav.classList.add("nav-selected");

                if($anchor.classList.contains("nav-webtoon")){
                    const $webtoonPage = await Webtoon();
                    $main.replaceChild($webtoonPage, $main.firstElementChild);
                }else{
                    $main.replaceChild($dummyPage, $main.firstElementChild);
                }
            }
        }
    });
}

App();
