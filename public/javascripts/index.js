const selected = "selected";
const clicked = "clicked";

function init() {
    const kakao_content_nav = document.querySelector("nav");
    const kakao_header = document.querySelector("header");
    const kakao_content = document.querySelector("#main_content>div.content");
    const kakao_content_nav_ul = document.querySelector("nav.content_nav>ul");
    const kakao_content_sub_nav_ul = document.querySelector(
        "div.content_sub_nav>ul"
    );
    const kakao_footer_companyInfo = document.querySelector("p.companyInfo");

    kakao_content_nav_ul.addEventListener("click", nav_list_toggle_clicked);
    kakao_content_sub_nav_ul.addEventListener(
        "click",
        nav_list_toggle_selected
    );
    kakao_footer_companyInfo.addEventListener(
        "click",
        footer_companyInfo_onoff
    );
}

function nav_list_toggle_clicked(e) {
    let cur_content_nav_li = document.querySelector("li.clicked");
    if (e.target.parentNode.tagName !== "LI") return;
    if (cur_content_nav_li) {
        cur_content_nav_li.classList.remove(clicked);
    }
    cur_content_nav_li = e.target.parentNode;
    cur_content_nav_li.classList.add(clicked);
}

function nav_list_toggle_selected(e) {
    let cur_content_sub_nav_li = document.querySelector("li.selected");
    if (e.target.tagName !== "LI") return;
    if (cur_content_sub_nav_li) {
        cur_content_sub_nav_li.classList.remove(selected);
    }
    cur_content_sub_nav_li = e.target;
    cur_content_sub_nav_li.classList.add(selected);
}

function footer_companyInfo_onoff(e) {
    let companyInfo = e.target;
    if (companyInfo.classList.contains("on")) {
        companyInfo.classList.replace("on", "off");
    } else if (companyInfo.classList.contains("off")) {
        companyInfo.classList.replace("off", "on");
    }
}
