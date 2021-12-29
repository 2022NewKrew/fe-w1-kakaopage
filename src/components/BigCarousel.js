export const BigCarousel = () => {
    const target = document.createElement("div");
    target.className = "white-wrapper"

    const render = () => {
        target.innerHTML = `
            <div class="carousel">
                <div>
                    <img class="carousel-big-image" src="https://dn-img-page.kakao.com/download/resource?kid=bIkRze/hzmU03aZdy/nOK6kDHHj1mcGtoRR0eDik" alt="" />
                    <div class="big-image-info">
                        <div class="big-image-description">
                            <div>ㅋㅋㅋ웹툰 아카데미</div>
                            <div>이벤트 | 웹툰 | 23.7만명</div>
                        </div>
                        <div class="big-image-title">
                            <span>카카오 페이지 데뷔반 2월 7일 오픈</span>
                        </div>
                    </div>
                </div>
            </div>
        `
        return target;
    }

    return render();
}