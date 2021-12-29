import toonData from "../../data/toon.json" assert { type: "json" };
import { topBannerComponent } from "./components.js";

function weekdayNavComponent() {
    const element = document.createElement("ul");
    element.classList.add("toon-week-weekday-nav");
    element.innerHTML = `
        <li data-weekday="0" class="selected">월</li>
        <li data-weekday="1">화</li>
        <li data-weekday="2">수</li>
        <li data-weekday="3">목</li>
        <li data-weekday="4">금</li>
        <li data-weekday="5">토</li>
        <li data-weekday="6">일</li>
        <li data-weekday="10">완결</li>
    `;
    return element;
}

export default function weekInit(contentDiv) {
    contentDiv.innerHTML = "";

    contentDiv.appendChild(topBannerComponent());
    contentDiv.appendChild(weekdayNavComponent());
}