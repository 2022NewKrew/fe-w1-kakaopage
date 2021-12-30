import { webtoonList, weekdaysMap } from "../assets/data/data.js";
import { $, $$ } from './utils.js'

(function() {
    const $main = $(".main");
    let activeTabLink = 0, activeWeekdayTabLink = 0;

    const deleteMainElements = () => {
        while ($main.firstChild) {
            $main.removeChild($main.firstChild);
        }
    };

    const addMainElements = (target) => {
        const $target = $(target).content.children;
        [...$target].forEach(node => {
            $main.appendChild(node.cloneNode(true));
        });
    };

    const chkNotWebtoonTab = (node) => {
        return node.classList.contains("webtoon")
            ? false
            : true;
    };

    const chkDuplicatedWebtoonTab = () => {
        return activeTabLink === 1 
            ? true 
            : false;
    };

    const changeActiveTab = (node, idx) => {
        if (idx === activeTabLink) {
            return;
        }
        node.classList.add("active");
        $$(".sub_header_link")[activeTabLink].classList.remove("active");
        activeTabLink = idx;
    }; 

    const changeActiveWeekdayTab = (node, idx) => {
        if (idx == activeWeekdayTabLink) {
            return;
        }
        node.classList.add("active");
        $$(".weekdays_button")[activeWeekdayTabLink].classList.remove("active");
        activeWeekdayTabLink = idx;
    };

    const setEventWeekdaysButton = () => {
        $(".weekdays_buttons_wrap").addEventListener("click", (e) => {
                const $weekdayButton = e.target.closest("button");
                const weekday = $weekdayButton.dataset.weekday;
                changeActiveWeekdayTab($weekdayButton, weekdaysMap[weekday]);
                addWebtoonList(weekday);
        });
    };

    const addWebtoonList = (weekday) => {
        const template = webtoonList[weekday].map((webtoon) => {
            return `
                <li class="webtoon_list_inner_wrap">
                    <a href="#" class="webtoon_detail_link">
                        <img src="${webtoon.imgSrc}" alt="" width="120" height="120" class="webtoon_main_image">
                        <div class="webtoon_main_image_banner">
                            <span class="webtoon_main_image_banner_text">${webtoon.banner}</span>
                            ${webtoon.bannerImg === "clock" 
                                ? `<img src="https://static-page.kakao.com/static/common/bmbadge_waitfree.svg?53cf25c84253dee8d32e66da7524dbaf" alt="시계" width="16" height="16" class="webtoon_main_image_banner_image">`
                                : `<img src="https://static-page.kakao.com/static/common/bmbadge_webtoon.svg?f218f9d5ac717abcf43047ff23145119" alt="웹툰" width="26" height="16" class="webtoon_main_image_banner_image">`}
                        </div>
                        <div class="webtoon_title elip1">${webtoon.title}</div>
                        <div>
                            ${webtoon.up 
                                ? `<img src="https://static-page.kakao.com/static/common/icon_up.svg?51cfaf512283ca0e1eaca53414e35a3f" alt="업데이트" width="19" height="13">` 
                                : ""}
                            ${webtoon.upToFifteen 
                                ? `<img src="https://static-page.kakao.com/static/common/icon_15.png?ccf202bf79001052f43af077a0947e74" alt="15세 이상 이용가" width="14" height="13">` 
                                : ""}
                            ${webtoon.newWebtoon 
                                ? `<img src="https://static-page.kakao.com/static/common/icon_new.svg?4ae84a0f972e30119fb6fcfbb2f59bf9" alt="새로운 웹툰" width="13" height="13">` 
                                : ""}
                            <span class="num_webtoon_users">${webtoon.userNum}만명</span>
                        </div>
                    </a>
                </li>
            `;
        }).join("");
        $(".webtoon_list_outer_wrap").innerHTML = template;
    };

    $(".sub_header").addEventListener("click", (e) => {
        const $navTab = e.target.closest("a")
        const tabID = parseInt(e.target.dataset.tabId);
        if (chkNotWebtoonTab($navTab)) {
            changeActiveTab($navTab, tabID);
            deleteMainElements();
            addMainElements(".main_others");
            return;
        }
        if (chkDuplicatedWebtoonTab()) {
            return;
        }
        changeActiveTab($navTab, tabID);
        deleteMainElements();
        addMainElements(".main_webtoon");
        addWebtoonList("월");
        setEventWeekdaysButton();
    });  
})();
