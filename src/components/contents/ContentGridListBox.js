import { setupContentsMockups } from "../../utils/mockups.js";
import { ContentGridListItem } from "./ContentGridListItem.js";

export const ContentGridListBox = ({ state }) => {
  const $root = document.createElement("div");
  $root.className = "contentGridListBox";

  const contentList = setupContentsMockups();

  const render = () => {
    $root.innerHTML = "";

    const _contentList = contentList.filter((v) => {
      if (state.day && state.day !== v.updateDay) return false;
      if (
        state.type !== "전체" &&
        ((state.type === "유료" && v.isFree) ||
          (state.type === "무료" && !v.isFree))
      )
        return false;

      return true;
    });

    $root.append(
      ..._contentList.map((content) => ContentGridListItem(content))
    );
  };

  // init
  state.subscribe(render);
  render();

  return $root;
};
