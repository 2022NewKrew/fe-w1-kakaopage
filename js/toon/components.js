import jsonWeekdayTop from "../../data/weekday-top.json" assert { type: "json" };

// carousel (현재는 더미 출력)
export function topBannerComponent(jsonData) {
    const div = document.createElement("div");
    div.innerHTML = 
        `<div class="carousel">
            <div class="carousel-item-container">
                <div class="carousel-item">
                    <img src="//dn-img-page.kakao.com/download/resource?kid=bAYteK/hyLjeklaKq/3MkwMK6CJ1zOUfgAw7JbyK">
                    <div class="item-info">
                        <div class="img-inside">
                            <div class="title">트리거</div>
                            <div class="tag">
                                <img src="https://static-page.kakao.com/static/pc/badge-bigthum-up.svg" class="badge">
                                <img src="https://static-page.kakao.com/static/pc/ico-bigthum-wait.svg" class="ico-bigthum-wait">
                                <div class="css-10tchww">웹툰</div>
                                <img src="https://static-page.kakao.com/static/common/line_top_banner.png" alt="Seperator" class="seperator">
                                <img src="https://static-page.kakao.com/static/pc/ico-bigthum-person.svg" class="ico-bigthum-person">
                                <div class="css-13yoxln">53.8만명</div>
                            </div>
                        </div>
                        <div class="bottom">
                            <span>내 안의 화끈한 방아쇠를 당겨라!</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
    return div.firstChild;
}

// 요일별로 웹툰 컨텐츠 업데이트
function contentUpdate(dom, weekday) {
    const fetchedData = jsonWeekdayTop["weekday-items"][weekday];
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

export function weeklyTopComponent() {
    const fetchedData = jsonWeekdayTop;
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