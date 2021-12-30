import { topBannerComponent, weeklyTopComponent } from "./components.js";

export default async function init(contentDiv) {
    contentDiv.innerHTML = "";
    
    contentDiv.appendChild(await topBannerComponent());
    contentDiv.appendChild(await weeklyTopComponent());
}