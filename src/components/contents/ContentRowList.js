import { ContentRowListItem } from "./ContentRowListItem.js";

export const ContentRowList = ({ contentsState }) => {
  const $root = document.createElement("ul");
  $root.className = "contentRowListBox";

  const render = () => {
    $root.innerHTML = "";
    $root.append(...contentsState.list.map(ContentRowListItem));
  };

  contentsState.subscribe(render);
  render();

  return $root;
};
