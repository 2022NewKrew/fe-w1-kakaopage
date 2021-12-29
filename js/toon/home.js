import { topBannerComponent, weeklyTopComponent } from "./components.js";

export default function init(contentDiv) {
    contentDiv.innerHTML = "";
    
    contentDiv.appendChild(topBannerComponent());
    contentDiv.appendChild(weeklyTopComponent());
}