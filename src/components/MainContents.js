import { BigCarousel } from "../components/BigCarousel.js";
import { LinkGrid } from "./LinkGrid.js";
import { BannerCarousel } from "./BannerCarousel.js";
import { ToonGrid } from "./ToonGrid.js";

export const MainContents = () => {
    const target = document.createElement("div");
    
    const render = () => {
        target.appendChild(BigCarousel());
        target.appendChild(LinkGrid());
        target.appendChild(BannerCarousel());
        target.appendChild(ToonGrid());
        return target;
    }

    return render();
}