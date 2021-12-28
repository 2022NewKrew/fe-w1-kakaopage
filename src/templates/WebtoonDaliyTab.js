import { SlideBannerBox } from "../components/contents/SlideBannerBox.js";
import { DayNavigator } from "../components/navigators/DayNavigator.js";

export const WebtoonDaliyTab = () => {
  const $root = document.createElement("div");

  $root.appendChild(TopBannerSection());
  $root.appendChild(ContentSection());

  return { $root };
};

const TopBannerSection = () => {
  const $root = document.createElement("section");
  $root.appendChild(SlideBannerBox().$root);
  return $root;
};

const ContentSection = () => {
  const $root = document.createElement("section");

  $root.appendChild(DayNavigator().$root);

  $root.innerHTML = `
    <div>
      <ul>
        <li>
          <span>전체</span>
        </li>
        <div></div>
        <li>
          <span>웹툰</span>
        </li>
        <div></div>
        <li>
          <img alt="실시간" src="https://static-page.kakao.com/static/common/ico_wait-off.svg?cb16228c070950e8b1bb33d712ac8b7a">
          <span>웹툰</span>
        </li>
      </ul>

      <div>
        <span>전체 (163)</span>
        <img alt="버튼다운" src="https://static-page.kakao.com/static/common/ico_sorting_arrow.svg?167b1295f93ba9f9d84cac7a5b830345">
      </div>
    </div>


    <div class="contentGridListBox">
      <div class="contentGridListItem">
        <div class="contentGridListItem__thumb">
          <div class="contentGridListItem__thumbWrapper">
            <img class="contentGridListItem__thumbImg" alt="묵향 다크레이디" draggable="false" src="//dn-img-page.kakao.com/download/resource?kid=9Eoo5/hyATyGp2En/pYYjRkJJIrpHEvDible6T0&amp;filename=th2">
            <div class="contentGridListItem__thumbOutline"></div>
          </div>
          <div class="contentGridListItem__thumbFooter">
            <img class="contentGridListItem__thumbStar" alt="star" src="https://static-page.kakao.com/static/common/badge-thumbnail-star.svg?c4d2181b65253b0259cfa219fe4506ac">
            <span class="contentGridListItem__thumbText">TOP</span>
            <img class="contentGridListItem__thumbClock" alt="clock" src="https://static-page.kakao.com/static/common/bmbadge_waitfree.svg?53cf25c84253dee8d32e66da7524dbaf">
          </div>
        </div>
        
        <div class="contentGridListItem__content">
          <p class="contentGridListItem__contentTitle">묵향 다크레이디</p>
          <div class="contentGridListItem__contentInfo">
            <img class="contentGridListItem__contentNew" alt="새 작품" src="https://static-page.kakao.com/static/common/icon_new.svg?4ae84a0f972e30119fb6fcfbb2f59bf9">
            <img class="contentGridListItem__contentPerson" alt="person" src="https://static-page.kakao.com/static/common/icon_read_count.png?817b1f83aa0dd8de232a68ac82efd871">
            <span>129.5만명</span>
          </div>
        </div>
      </div>
    <div>
  `;

  return $root;
};
