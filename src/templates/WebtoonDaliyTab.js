import { ContentGridListBox } from "../components/contents/ContentGridListBox.js";
import { ContentToolbar } from "../components/contents/ContentToolbar.js";
import { SlideBannerBox } from "../components/contents/SlideBannerBox.js";
import { DayNavigator } from "../components/navigators/DayNavigator.js";
import { State } from "../core/State.js";
import { setupContentsMockups } from "../utils/mockups.js";
import { getToday } from "../utils/Time.js";

export const WebtoonDaliyTab = () => {
  const $root = document.createElement("div");

  $root.appendChild(TopBannerSection());
  $root.appendChild(ContentSection());

  return $root;
};

const TopBannerSection = () => {
  const $root = document.createElement("section");
  $root.appendChild(SlideBannerBox());
  return $root;
};

const ContentSection = () => {
  const $root = document.createElement("section");
  const contentList = setupContentsMockups();

  const dayState = State({ day: getToday() });
  const typeState = State({ type: "전체" });
  const contentsState = State({ list: contentList });

  $root.appendChild(DayNavigator({ dayState }));
  $root.appendChild(ContentToolbar({ typeState }));
  $root.appendChild(ContentGridListBox({ contentsState }));

  const filterContentList = () => {
    const { day } = dayState;
    const { type } = typeState;

    contentsState.list = contentList.filter((v) => {
      if (day && day !== v.updateDay) return false;
      if (
        type !== "전체" &&
        ((type === "유료" && v.isFree) || (type === "무료" && !v.isFree))
      )
        return false;
      return true;
    });
  };

  // init
  dayState.subscribe(filterContentList);
  typeState.subscribe(filterContentList);

  return $root;
};
