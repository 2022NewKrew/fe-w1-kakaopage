export const ContentToolbar = () => {
    const $root = document.createElement("div");
    $root.className = "contentToolbar";
  
    $root.innerHTML = `
      <ul class="contentToolbar__nav">
        <li class="contentToolbar__navItem">
          <p class="contentToolbar__text contentToolbar__text--selected">전체</p>
        </li>
        <div class="contentToolbar__separator"></div>
        <li class="contentToolbar__navItem">
          <p class="contentToolbar__text">웹툰</p>
        </li>
        <div class="contentToolbar__separator"></div>
        <li class="contentToolbar__navItem">
          <img class="contentToolbar__clock" alt="실시간" src="https://static-page.kakao.com/static/common/ico_wait-off.svg?cb16228c070950e8b1bb33d712ac8b7a">
          <p class="contentToolbar__text">웹툰</p>
        </li>
      </ul>

      <div class="contentToolbar__dropdown">
        <span class="contentToolbar__dropdownText">전체 (163)</span>
        <img class="contentToolbar__dropdownIcon" alt="버튼다운" src="https://static-page.kakao.com/static/common/ico_sorting_arrow.svg?167b1295f93ba9f9d84cac7a5b830345">
      </div>
    `;
  
    return { $root };
  };
  