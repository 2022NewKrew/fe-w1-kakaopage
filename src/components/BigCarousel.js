const renderCell = ({ thumbnail, description_title, tag_img, category, viewer, under_title}) => {
    const cell = document.createElement("div");
    cell.className = "carousel-cell";
    cell.innerHTML = `
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
    `
    return cell;
}

const renderContainer = (data) => {
    const container = document.createElement("div");
    container.className = "carousel-container";
    data.forEach(cell_data => container.appendChild(renderCell(cell_data)));
    // 캐로셀 왼쪽 버튼 동작시 매끄러운 애니메이션을 위해 last를 first로 옮김
    container.insertBefore(container.lastElementChild, container.firstElementChild);
    return container;
}

const renderWindow = () => {
    const carousel_window = document.createElement("div");
    carousel_window.className = "carousel-window";
    carousel_window.innerHTML = `
        <div class="btn-wrapper prev">
            <img class="prev-btn" src="https://static-page.kakao.com/static/pc/ic-banner-paging-back-nor.svg?85bef3b447d17ee7cbefa349c973fe56" />
        </div>
        <div class="btn-wrapper next">
            <img class="next-btn" src="https://static-page.kakao.com/static/pc/ic-banner-paging-next-nor.svg?cf6a870397c04c13add6c27f1f735d93" />
        </div>
    `
    return carousel_window;
}

const renderCarousel = (data) => {
    const carousel_window = renderWindow();
    const container = renderContainer(data);
    const prev_btn = carousel_window.querySelector(".prev-btn");
    const next_btn = carousel_window.querySelector(".next-btn");

    carousel_window.insertBefore(container, carousel_window.children[1]);

    const clickCallBack = (direction) => {
        return () => {
            container.style.transform = `translateX(${direction * 720}px)`;
            container.style.transitionDuration = "500ms";
            container.ontransitionend = () => {
                container.removeAttribute("style");
                (direction === 1) 
                    ?container.insertBefore(container.lastElementChild, container.firstElementChild)
                    :container.appendChild(container.firstElementChild);
            }
        }
    }
    prev_btn.addEventListener("click", clickCallBack(1));
    next_btn.addEventListener("click", clickCallBack(-1));
    
    return carousel_window;
}

export const BigCarousel = ({ data }) => {

    const target = document.createElement("div");
    target.className = "white-wrapper"

    const render = () => {
        if (!data || data.length === 0) return target;

        target.appendChild(renderCarousel(data));
        return target;
    }

    return render();
}