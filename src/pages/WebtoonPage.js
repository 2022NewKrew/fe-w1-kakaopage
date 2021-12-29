import { GenreTab } from "../components/GenreTab.js";
import { MainContents } from "../components/MainContents.js";

export const WebtoonPage = () => {
    const target = document.createElement("div");

    const render = () => {
        target.appendChild(GenreTab());
        target.appendChild(MainContents());
        return target;
    }
    
    return render();
}