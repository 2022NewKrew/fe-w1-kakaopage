import { ContentGridListBox } from "../components/contents/ContentGridListBox.js";
import { ContentToolbar } from "../components/contents/ContentToolbar.js";
import { SlideBannerBox } from "../components/contents/SlideBannerBox.js";
import { DayNavigator } from "../components/navigators/DayNavigator.js";
import { State } from "../core/State.js";
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
  const state = State({ day: getToday(), type: "전체" });

  $root.appendChild(DayNavigator({ state }));
  $root.appendChild(ContentToolbar({ state }));
  $root.appendChild(ContentGridListBox({ state }));

  return $root;
};
