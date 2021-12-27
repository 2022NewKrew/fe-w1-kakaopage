const kakao_content_nav = document.querySelector("nav");
const kakao_header = document.querySelector("header");
const kakao_content = document.querySelector("#main_content>div.content");
const kakao_content_nav_ul = document.querySelector("nav.content_nav>ul");
const kakao_content_sub_nav_ul = document.querySelector(
    "div.content_sub_nav>ul"
);

let cur_content_nav_li = document.querySelector("li.clicked") || null;
let cur_content_sub_nav_li = document.querySelector("li.selected") || null;
function init() {
    kakao_content_nav_ul.addEventListener("click", nav_list_toggle_clicked, {
        capture: true,
    });
    kakao_content_sub_nav_ul.addEventListener(
        "click",
        nav_list_toggle_selected,
        { capture: true }
    );
}

function nav_list_toggle_clicked(e) {
    if (e.target.parentNode.tagName !== "LI") return;
    if (cur_content_nav_li) {
        cur_content_nav_li.classList.remove("clicked");
    }
    cur_content_nav_li = e.target.parentNode;
    cur_content_nav_li.classList.add("clicked");
}

function nav_list_toggle_selected(e) {
    console.log(e.target);
    if (e.target.tagName !== "LI") return;
    if (cur_content_sub_nav_li) {
        cur_content_sub_nav_li.classList.remove("selected");
    }
    cur_content_sub_nav_li = e.target;
    cur_content_sub_nav_li.classList.add("selected");
}
