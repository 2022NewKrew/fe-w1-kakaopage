import toonInit from "./toon/init.js";

function defaultInit() {
    const mainContentDiv = document.getElementById("main-contents");
    mainContentDiv.innerHTML = `<div class="dummy-content"></div>`;
}

function categoryNavigationClick(event) {
    const target = event.target.closest("li");
    if (target.classList.contains("selected")) return; // 현재 페이지

    // navigation css 변경
    event.currentTarget.querySelector(".selected").classList.remove("selected");
    target.classList.add("selected");

    // main content 변경
    const categoryId = target.dataset.category;
    if(categoryId === "toon") toonInit();
    else defaultInit();
}

export default function init() {
    // 초기 페이지 구성
    defaultInit();

    // 카테고리 이동 이벤트 리스너 삽입
    const ul = document.querySelector("#header-category > ul");
    ul.addEventListener("click", categoryNavigationClick);
}

init();