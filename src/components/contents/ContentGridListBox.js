import { ContentGridListItem } from "./ContentGridListItem.js";

export const ContentGridListBox = () => {
  const $root = document.createElement("div");
  $root.className = "contentGridListBox";

  [...Array(20)].forEach((_) => {
    $root.appendChild(ContentGridListItem().$root);
  });

  return { $root };
};
