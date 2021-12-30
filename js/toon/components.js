// carousel
function prevButtonClick(event) {
    console.log("prev");
    const carousel = event.target.closest(".carousel");
    const container = carousel.querySelector(".carousel-item-container");
    const size = carousel.clientWidth;
    const index = Number(container.dataset.index);

    carousel.querySelector(".counter .current").innerText = index <= 1 ? container.children.length - 2 : index - 1;
    container.style.transition = "transform 0.4s ease-in-out";
    container.style.transform = `translateX(${-size * (index - 1)}px)`;
    container.dataset.index = index - 1;
}

function nextButtonClick(event) {
    console.log("next");
    const carousel = event.target.closest(".carousel");
    const container = carousel.querySelector(".carousel-item-container");
    const size = carousel.clientWidth;
    const index = Number(container.dataset.index);

    carousel.querySelector(".counter .current").innerText = index >= container.children.length - 2 ? 1 : index + 1;
    container.style.transition = "transform 0.4s ease-in-out";
    container.style.transform = `translateX(${-size * (index + 1)}px)`;
    container.dataset.index = index + 1;
}

function transitionEnd(event) {
    const carousel = event.target.closest(".carousel");
    const container = carousel.querySelector(".carousel-item-container");
    const size = carousel.clientWidth;
    const index = Number(container.dataset.index);

    if (index <= 0){
        container.style.transition = "none"; // 트랜지션 효과 없애기
        container.dataset.index = container.children.length-2; // couter 초기화
        container.style.transform = `translateX(${-size * (container.children.length-2)}px)`;
    } else if (index >= container.children.length-1) {
        container.style.transition = "none";
        container.dataset.index = 1;
        container.style.transform = `translateX(${-size}px)`;
    }
}

export async function topBannerComponent() {
    const div = document.createElement("div");
    div.classList.add("carousel");
    div.innerHTML = 
        `<div class="carousel-item-container" data-index="1" style="transform:translateX(-720px);"></div>
        <img class="prev-button"
            src="https://static-page.kakao.com/static/pc/ic-banner-paging-back-nor.svg">
        <img class="next-button"
            src="https://static-page.kakao.com/static/pc/ic-banner-paging-next-nor.svg">
        <div class="counter">
            <span class="current">1</span>
            /
            <span class="total"></span>
        </div>`
    
    // 캐러셀 내부 아이템 삽입
    const container = div.querySelector(".carousel-item-container");
    const fetchedData = await fetch("data/top-banner-item.json").then(res => res.json());
    // 양쪽 끝의 자연스러운 이동을 위해 앞뒤요소 복사
    const gen = [fetchedData[fetchedData.length-1], ...fetchedData, fetchedData[0]];
    // 캐러셀 아이템 템플릿 적용
    container.innerHTML = gen.map(item => 
        `<div class="carousel-item">
            <img src="${item.imageUrl}">
            <div class="item-info">
                <div class="img-inside">
                    <div class="title">트리거</div>
                    <div class="tag">
                        <img src="${item.tag.badgeImageUrl}" class="badge">
                        ${ item.tag.waitfree
                            ? `<img src="https://static-page.kakao.com/static/pc/ico-bigthum-wait.svg" class="ico-bigthum-wait">
                                <div>웹툰</div>
                                <img src="https://static-page.kakao.com/static/common/line_top_banner.png" alt="Seperator" class="seperator">`
                            : ""
                        }
                        <img src="https://static-page.kakao.com/static/pc/ico-bigthum-person.svg" class="ico-bigthum-person">
                        <div>${item.tag.number}</div>
                    </div>
                </div>
                <div class="bottom">
                    <span>${item.sentence}</span>
                </div>
            </div>
        </div>`
    ).join("");
    div.querySelector(".counter .total").innerHTML = fetchedData.length;

    // 버튼 클릭 이벤트 삽입
    div.querySelector(".prev-button").addEventListener("click", prevButtonClick);
    div.querySelector(".next-button").addEventListener("click", nextButtonClick);
    container.addEventListener("transitionend", transitionEnd);
    return div;
}

// 요일별로 웹툰 컨텐츠 업데이트
async function contentUpdate(dom, weekday) {
    const fetchedData = await fetch("data/weekday-top.json")
        .then(res => res.json())
        .then(json => json["weekday-items"][weekday]);
    
    dom.innerHTML = fetchedData.map(item => 
        `<a href="${item.anchorUrl}">
            <li class="webtoon-item-box">
                <div class="webtoon-image">
                    <img src="${item.imageUrl}"
                        alt="${item.title}">
                    <div class="webtoon-image-info">
                        <div class="left">${item.leftTag}</div>
                        <div class="seperator"></div>
                        <img class="right"
                            src="https://static-page.kakao.com/static/common/bmbadge_${ item.waitfree ? "waitfree" : "webtoon"}.svg">
                    </div>
                </div>
                <div class="webtoon-title">${item.title}</div>
                <div class="webtoon-tags">
                    ${ item.up
                        ? `<img class="icon-up"
                                src="https://static-page.kakao.com/static/common/icon_up.svg"
                                alt="업데이트">`
                        : ""
                    }
                    <img class="icon-read-count"
                        src="https://static-page.kakao.com/static/common/icon_read_count.png">
                    <div>${item.number}</div>
                </div>
            </li>
        </a>`
    ).join("");
}

function weekDayNavigationClick(event) {
    const target = event.target.closest("li");
    if (target.classList.contains("selected")) return;

    event.currentTarget.querySelector(".selected").classList.remove("selected");
    target.classList.add("selected");

    contentUpdate(document.querySelector(".toon-home-weekly-top-webtoon-container"), target.dataset.weekday);
}

export async function weeklyTopComponent() {
    const fetchedData = await fetch("data/weekday-top.json")
        .then(res => res.json())
    const div = document.createElement("div");
    div.classList.add("toon-home-top");
    div.innerHTML = 
        `<div class="toon-home-top-title">
            <div class="name">
                <h3 class="toon-h3">${fetchedData.title}</h3>
                <div class="number">(${fetchedData.number})</div>
            </div>
            <div class="more-button">
                <div>더보기</div>
                <img src="https://static-page.kakao.com/static/common/ic-more-gray.svg">
            </div>
        </div>
        <ul class="toon-home-weekday-nav">
            <li data-weekday="0" class="selected">월</li>
            <li data-weekday="1">화</li>
            <li data-weekday="2">수</li>
            <li data-weekday="3">목</li>
            <li data-weekday="4">금</li>
            <li data-weekday="5">토</li>
            <li data-weekday="6">일</li>
            <li data-weekday="10">완결</li>
        </ul>
        <ul class="toon-home-weekly-top-webtoon-container">
        </ul>`;
    // 월요일 컨텐츠 삽입
    contentUpdate(div.lastChild, "0");
    
    // 일별 탭 ui 적용을 위한 이벤트 리스너 삽입
    const ul = div.querySelector(".toon-home-weekday-nav");
    ul.addEventListener("click", weekDayNavigationClick);
    
    return div;
}