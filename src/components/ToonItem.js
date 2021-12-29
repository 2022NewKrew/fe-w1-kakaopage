export const ToonItem = () => {
    const target = document.createElement("div");
    target.className = "content-item";

    const render = () => {
        target.innerHTML = `
            <a href="">
                <div class="thumbnail-wrapper">
                    <img class="thumbnail" src="//dn-img-page.kakao.com/download/resource?kid=bfX1rP/hyZ8yn61br/1chxAoU3qzkhQjtcCK0yOk&filename=th2" alt="">
                    <div class="thumbnail-bottom">
                        <div>TOP</div>
                        <div>
                            <img src="https://static-page.kakao.com/static/common/bmbadge_waitfree.svg?53cf25c84253dee8d32e66da7524dbaf" alt="">
                        </div>
                    </div>
                </div>
                <div>악녀는 마리오네트</div>
                <div class="content-detail">
                    <div class="badges">
                        <img src="https://static-page.kakao.com/static/common/icon_up.svg?51cfaf512283ca0e1eaca53414e35a3f" alt="">
                        <img src="https://static-page.kakao.com/static/common/icon_15.png?ccf202bf79001052f43af077a0947e74" alt="">
                    </div>
                    <img src="https://static-page.kakao.com/static/common/icon_read_count.png?817b1f83aa0dd8de232a68ac82efd871" alt="">
                    <div>39.2만명</div>
                </div>
            </a>
        `
        return target;
    }

    return render();
}