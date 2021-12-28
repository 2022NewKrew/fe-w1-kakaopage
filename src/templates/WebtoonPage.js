import { ContentRowList } from "../components/contents/ContentRowList.js";
import { SlideBannerBox } from "../components/contents/SlideBannerBox.js";
import { DayNavigator } from "../components/navigators/DayNavigator.js";
import { GenreNavigator } from "../components/navigators/GenreNavigator.js";
import { AppDownloadSection } from "../components/sections/AppDownloadSection.js";

export const WebtoonPage = () => {
  const $root = document.createElement("main");

  $root.appendChild(GenreNavigator().$root);
  $root.appendChild(TobBannerSection().$root);
  $root.appendChild(WebtoonSection().$root);
  $root.appendChild(HotPromotionSection().$root);
  $root.appendChild(AppDownloadSection().$root);

  return { $root };
};

const TobBannerSection = () => {
  const $root = document.createElement("section");

  $root.appendChild(SlideBannerBox().$root);
  $root.appendChild(DayNavigator().$root);

  return { $root };
};

const WebtoonSection = () => {
  const $root = document.createElement("section");

  $root.appendChild(ContentRowList({ contentList: [...Array(10)] }).$root);

  return { $root };
};

const HotPromotionSection = () => {
  const $root = document.createElement("section");

  $root.appendChild(TmpSectionHeader().$root);
  $root.appendChild(
    ContentRowList({ contentList: [...Array(5)] }).$root
  );

  return { $root };
};

const TmpSectionHeader = () => {
  const $root = document.createElement("header");
  $root.className = "flex";

  $root.innerHTML = `
    <h5>🔥HOT 최근 프로모션 진행작</h5>
    <a
      href="https://page.kakao.com/theme/list?themeId=24424"
      class="show-more-btn"
    >
      <span>더보기</span>
      <img
        src="https://static-page.kakao.com/static/common/ic-more-gray.svg?639494b81c8127013d0e627243aee94e"
        alt="ic-more-gray"
      />
    </a>
  `;

  return { $root };
};
