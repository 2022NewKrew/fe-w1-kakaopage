import { ContentRowListItem } from "./ContentRowListItem.js";

export const ContentRowList = ({ contentList }) => {
  const $root = document.createElement("ul");
  $root.className = "contentRowListBox";

  const render = () => {
    $root.innerHTML = "";
    $root.append(...contentList.map((_) => ContentRowListItem()));
  };

  render();

  return $root;
};
