import { ContentRowListItem } from "./ContentRowListItem.js";

export const ContentRowList = ({ contentList }) => {
  const $root = document.createElement("ul");
  $root.className = "contentRowListBox";

  const render = () => {
    contentList.forEach((_) => {
      $root.append(ContentRowListItem().$root);
    });
  };

  render();

  return { $root };
};
