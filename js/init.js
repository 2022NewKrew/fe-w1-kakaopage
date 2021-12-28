import toonInit from "./toonPage.js";

function defaultInit() {
    const mainContentDiv = document.getElementById("main-contents");
    mainContentDiv.innerHTML = `<p class="dummy">dummy</p>`;
}

function categoryOnClick(event) {
    const target = event.path.find(element => element.tagName === "LI");
    if (target.classList.contains("selected")) return; // 현재 페이지

    // css 변경
    const liList = document.querySelectorAll(".category-element");
    liList.forEach(element => {
        if(element.classList.contains("selected")) element.classList.remove("selected");
    });
    target.classList.add("selected");

    // main content 변경
    const categoryId = target.dataset.num;
    if(categoryId === "toon") toonInit();
    else defaultInit();
}

export default function init() {
    // 초기 페이지 구성
    toonInit();

    // 카테고리 이동
    const ul = document.querySelector("#header-category > ul");
    ul.addEventListener("click", categoryOnClick);
}

init();