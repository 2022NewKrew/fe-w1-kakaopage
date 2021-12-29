import { BigCarousel } from "../components/BigCarousel.js";
import { LinkGrid } from "./LinkGrid.js";
import { BannerCarousel } from "./BannerCarousel.js";
import { ToonGrid } from "./ToonGrid.js";
import { nav_list, webtoon_genre_list } from "../lists.js";
import { fetchMainContentData } from "../api.js";

const NAV_WEBTOON = 1;

const fetchData = async (nav_id, genre_id, setState) => {
    const nav_title = nav_list[nav_id].title;
    const genre_title = webtoon_genre_list[genre_id].title;
    const data = await fetchMainContentData(nav_title, genre_title);
    setState({ data });
}

export const MainContents = ({ genre_id }) => {
    let state = { data: null }

    const setState = (nextState) => {
        state = {...state, ...nextState};
        console.log(state);
        render();
    }

    fetchData( NAV_WEBTOON, genre_id, setState);

    const target = document.createElement("div");
    
    const render = () => {
        if (!state.data) return target;
        target.appendChild(BigCarousel({ data: state.data.big_carousel }));
        target.appendChild(LinkGrid());
        target.appendChild(BannerCarousel());
        target.appendChild(ToonGrid());
        return target;
    }

    return render();
}