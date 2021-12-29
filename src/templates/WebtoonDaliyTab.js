import { ContentGridListBox } from "../components/contents/ContentGridListBox.js";
import { ContentToolbar } from "../components/contents/ContentToolbar.js";
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
  $root.appendChild(ContentToolbar().$root);
  $root.appendChild(ContentGridListBox().$root);

  return $root;
};
