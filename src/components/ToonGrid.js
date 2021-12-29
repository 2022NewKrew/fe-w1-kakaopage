import { ToonItem } from "./ToonItem.js";

const insertItem = (target) => {
    for (let i = 0; i < 10; i++) {
        target.appendChild(ToonItem());
    }
}

export const ToonGrid = () => {
    const target = document.createElement("div");
    target.className = "white-wrapper padding-wrapper";

    const render = () => {
        target.innerHTML = `
            <div class="h3-header">
                <div>
                    <h3>요일 연재 TOP</h3>
                    <span>(1,553)</span>
                </div>
                <div class="more">
                    <div>더보기</div>
                    <img src="https://static-page.kakao.com/static/common/ic-more-gray.svg?639494b81c8127013d0e627243aee94e" alt="">
                </div> 
            </div>   
            <div class="weekly-container">
                <div class="weekday">
                    <ul>
                        <li class="selected">
                            <div>월</div>
                        </li>
                        <li>
                            <div>화</div>
                        </li>
                        <li>
                            <div>수</div>
                        </li>
                        <li>
                            <div>목</div>
                        </li>
                        <li>
                            <div>금</div>
                        </li>
                        <li>
                            <div>토</div>
                        </li>
                        <li>
                            <div>일</div>
                        </li>
                        <li>
                            <div>완결</div>
                        </li>
                    </ul>
                </div>
                <div class="content-grid">
                </div>
            </div>
        `
        insertItem(target.querySelector(".content-grid"));
        return target;
    }

    return render();
}