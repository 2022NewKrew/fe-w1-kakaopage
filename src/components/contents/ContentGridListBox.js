import { ContentGridListItem } from "./ContentGridListItem.js";

export const ContentGridListBox = ({ contentsState }) => {
  const $root = document.createElement("div");
  $root.className = "contentGridListBox";

  const render = () => {
    $root.innerHTML = "";
    $root.append(...contentsState.list.map(ContentGridListItem));
  };

  // init
  contentsState.subscribe(render);
  render();

  return $root;
};
