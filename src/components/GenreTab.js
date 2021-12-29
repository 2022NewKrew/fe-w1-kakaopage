export const GenreTab = () => {
    const target = document.createElement("div");
    target.className = "white-wrapper genre";

    const render = () => {
        target.innerHTML = `
            <ul class="genre-ul">
                <li><a class="genre-link" href="">홈</a></li>
                <li><a class="genre-link" href="">요일연재</a></li>
                <li><a class="genre-link" href="">웹툰</a></li>
                <li><a class="genre-link" href="">소녀</a></li>
                <li><a class="genre-link" href="">드라마</a></li>
                <li><a class="genre-link" href="">로맨스</a></li>
                <li><a class="genre-link" href="">로판</a></li>
                <li><a class="genre-link" href="">액션무협</a></li>
                <li><a class="genre-link" href="">BL</a></li>
            </ul>
        `
        return target;
    }
    
    return render();
}