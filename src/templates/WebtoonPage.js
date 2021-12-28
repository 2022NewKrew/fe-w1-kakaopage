import { SectionHeader } from "../components/commons/SectionHeader.js";
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

  $root.appendChild(
    SectionHeader({ title: "🔥HOT 최근 프로모션 진행작" }).$root
  );
  $root.appendChild(ContentRowList({ contentList: [...Array(5)] }).$root);

  return { $root };
};
