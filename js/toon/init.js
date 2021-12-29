import homeInit from "./home.js";
import weekInit from "./week.js";


function defaultInit(contentDiv) {
    contentDiv.innerHTML = `<div class="dummy-content"></div>`;
}

function categoryNavigationClick(event) {
    const target = event.path.find(element => element.tagName === "LI");
    if (target.classList.contains("selected")) return; // 현재 페이지

    document.querySelector(".content-category .selected").classList.remove("selected");
    target.classList.add("selected");

    const contentDiv = document.getElementById("contents");
    switch(target.dataset.category) {
        case "toon-home":
            homeInit(contentDiv);
            break;
        case "toon-week":
            weekInit(contentDiv);
            break;
        default:
            defaultInit(contentDiv);
    }
}

async function categoryNavigationComponent() {
    const fetchedData = await fetch("data/toon.json").then(res => res.json());

    const elementUl = document.createElement("ul");
    elementUl.innerHTML = fetchedData.category.map(item => 
        `<li data-category="${item.id}"><a>${item.name}</a></li>`
    ).join("");
    elementUl.firstChild.classList.add("selected");
    
    const elementNav = document.createElement("nav");
    elementNav.appendChild(elementUl);
    elementNav.classList.add("content-category");

    elementNav.addEventListener("click", categoryNavigationClick);
    return elementNav;
}

export default async function init() {
    const mainContentDiv = document.getElementById("main-contents");
    mainContentDiv.innerHTML = "";

    // 상단 네비게이션 추가
    mainContentDiv.appendChild(await categoryNavigationComponent());
    mainContentDiv.insertAdjacentHTML("beforeend", `<section id="contents"></section>`);

    // 초기 페이지 출력
    homeInit(mainContentDiv.lastChild);
}