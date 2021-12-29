import { ContentGridListItem } from "./ContentGridListItem.js";

export const ContentGridListBox = ({ state }) => {
  const $root = document.createElement("div");
  $root.className = "contentGridListBox";

  const render = () => {
    $root.innerHTML = "";

    // console.log(currentDay.getValue(), webtoonType.getValue());

    [...Array(20)].forEach((_) => {
      $root.appendChild(ContentGridListItem());
    });
  };

  // init
  state.subscribe(render);
  render();

  return $root;
};
