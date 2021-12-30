import { SectionHeader } from "../components/commons/SectionHeader.js";
import { ContentRowList } from "../components/contents/ContentRowList.js";
import { SlideBannerBox } from "../components/contents/SlideBannerBox.js";
import { DayNavigator } from "../components/navigators/DayNavigator.js";
import { State } from "../core/State.js";
import { getToday } from "../utils/Time.js";
import { setupContentsMockups } from "../../utils/mockups.js";

export const WebtoonWebtoonTab = () => {
  const $root = document.createElement("div");

  const dayState = State({ day: getToday() });

  $root.appendChild(TobBannerSection({ dayState }));
  $root.appendChild(WebtoonSection({ dayState }));
  $root.appendChild(HotPromotionSection());

  return $root;
};

const TobBannerSection = ({ dayState }) => {
  const $root = document.createElement("section");

  $root.appendChild(SlideBannerBox());
  $root.appendChild(DayNavigator({ dayState }));

  return $root;
};

const WebtoonSection = ({ dayState }) => {
  const $root = document.createElement("section");
  const contentList = setupContentsMockups();
  const contentsState = State({ list: contentList });

  $root.appendChild(ContentRowList({ contentsState }));

  const filterContentList = () => {
    contentsState.list = contentList.filter((v) => {
      if (dayState.day && dayState.day !== v.updateDay) return false;
      return true;
    });
  };

  // init
  dayState.subscribe(filterContentList);

  return $root;
};

const HotPromotionSection = () => {
  const $root = document.createElement("section");
  const contentList = setupContentsMockups().slice(0, 10);
  const contentsState = State({ list: contentList });

  $root.appendChild(SectionHeader({ title: "🔥HOT 최근 프로모션 진행작" }));
  $root.appendChild(ContentRowList({ contentsState }));

  return $root;
};
