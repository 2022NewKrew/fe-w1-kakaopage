const kakao_content_nav = document.querySelector("nav");
const kakao_header = document.querySelector("header");
const kakao_content = document.querySelector("#main_content>div.content");
const kakao_content_nav_ul = document.querySelector("nav.content_nav>ul");

let cur_content_nav_li = document.querySelector("li.clicked") || null;

function init() {
    kakao_content_nav_ul.addEventListener("click", (e) => {
        console.dir(e.target.parentNode);
        if (cur_content_nav_li) {
            cur_content_nav_li.classList.remove("clicked");
        }
        cur_content_nav_li = e.target.parentNode;
        cur_content_nav_li.classList.add("clicked");
    });
}
