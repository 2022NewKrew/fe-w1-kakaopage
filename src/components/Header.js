import { HeaderNavigator } from "./navigators/HeaderNavigator.js";

export const Header = () => {
  const $root = document.createElement("header");
  $root.className = "app-header";

  $root.appendChild(HeaderActionWrapper().$root);
  $root.appendChild(HeaderNavigator().$root);

  return { $root };
};

const HeaderActionWrapper = () => {
  const $root = document.createElement("div");
  $root.className = "header-action-wrapper";

  const render = () => {
    $root.innerHTML = `
      <a class="logo" href="https://page.kakao.com/main">
        <img
          src="https://static-page.kakao.com/static/common/logo-kakaopage.svg?e0dffe87c45ca42b47399538391a1954"
          alt="kakaopage logo"
        />
      </a>

      <div class="searchbar-container">
        <input />
        <div>
          <img
            class="searchbar-submit-btn"
            src="https://static-page.kakao.com/static/pc/btn_search.png?a8ce9e4eba0250e52d4570c605f79f9a"
            alt="검색 버튼"
          />
        </div>
      </div>

      <div class="pagestage-wapper">
        <a target="_blank" href="https://pagestage.kakao.com">
          <img
            src="https://static-page.kakao.com/static/common/pc-logo-stage.svg?67473e9acf34aa0425a982b16f882f5f"
            alt="스테이지"
          />
        </a>
        <img
          src="https://static-page.kakao.com/static/common/stage-tooltip.svg?e37d1bc523d4daad835b7ea0620ec658"
          alt="tool-tip"
          class="tool-tip"
        />
      </div>

      <div class="flex">
        <div class="text-btn">캐시충전</div>
        <div class="separator"></div>
        <div class="text-btn">로그인</div>
      </div>
    `;
  };

  render();

  return { $root };
};
