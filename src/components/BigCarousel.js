export const BigCarousel = ({ data }) => {

    const target = document.createElement("div");
    target.className = "white-wrapper"

    const render = () => {
        if (!data || data.length === 0) return target;

        const { thumbnail, description_title, tag_img, category, viewer, under_title} = data[0];
        target.innerHTML = `
            <div class="carousel">
                <div>
                    <img class="carousel-big-image" src=${thumbnail} alt=${description_title} />
                    <div class="big-image-info">
                        <div class="big-image-description">
                            <div>${description_title}</div>
                            <div> 이벤트 | ${category} | ${viewer}만명</div>
                        </div>
                        <div class="big-image-title">
                            <span>${under_title}</span>
                        </div>
                    </div>
                </div>
            </div>
        `
        return target;
    }

    return render();
}