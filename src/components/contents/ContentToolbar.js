export const ContentToolbar = ({ typeState }) => {
  const $root = document.createElement("div");
  $root.className = "contentToolbar";
  $root.innerHTML = `
      <ul class="contentToolbar__nav">
        <li class="contentToolbar__navItem" data-type="전체">
          <p class="contentToolbar__text">전체</p>
        </li>
        <div class="contentToolbar__separator" ></div>
        <li class="contentToolbar__navItem" data-type="무료">
          <p class="contentToolbar__text">웹툰</p>
        </li>
        <div class="contentToolbar__separator"></div>
        <li class="contentToolbar__navItem" data-type="유료">
          <img class="contentToolbar__clock" alt="시계" src="https://static-page.kakao.com/static/common/ico_wait-off.svg?cb16228c070950e8b1bb33d712ac8b7a">
          <p class="contentToolbar__text">웹툰</p>
        </li>
      </ul>

      <div class="contentToolbar__dropdown">
        <span class="contentToolbar__dropdownText">전체 (163)</span>
        <img class="contentToolbar__dropdownIcon" alt="버튼다운" src="https://static-page.kakao.com/static/common/ico_sorting_arrow.svg?167b1295f93ba9f9d84cac7a5b830345">
      </div>
    `;
  const $itemList = $root.querySelectorAll(".contentToolbar__navItem");

  $root.addEventListener("click", (e) => {
    const $navItem = e.target.closest(".contentToolbar__navItem");
    if (!$navItem) return;

    typeState.type = $navItem.dataset.type;
  });

  const render = () => {
    $itemList.forEach((el) => {
      const $text = el.querySelector(".contentToolbar__text");

      if (typeState.type === el.dataset.type)
        $text.classList.add("contentToolbar__text--selected");
      else $text.classList.remove("contentToolbar__text--selected");
    });
  };

  typeState.subscribe(render);
  render();

  return $root;
};
