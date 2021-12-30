import { GenreTab } from "../components/GenreTab.js";
import { MainContents } from "../components/MainContents.js";


export const WebtoonPage = () => {
    let state = { selected_genre_id: 0 };

    const setState = (nextState) => {
        state = {...state, ...nextState};
        render();
    }
    
    const target = document.createElement("div");

    const render = () => {
        target.innerHTML = "";
        const genreTab = GenreTab({
            selected_genre_id : state.selected_genre_id, 
            selectCallback: (genre_id) => setState({selected_genre_id: genre_id})
        })
        target.appendChild(genreTab);
        target.appendChild(MainContents({ genre_id: state.selected_genre_id }));
        return target;
    }
    
    return render();
}