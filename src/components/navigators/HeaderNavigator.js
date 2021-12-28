export const HeaderNavigator = () => {
  const $root = document.createElement("nav");
  $root.className = "header-nav";

  const render = () => {
    $root.innerHTML = `
          <nav class="header-nav">
              <ul>
              <li>
                  <a href="/홈">
                  <img
                      src="https://static-page.kakao.com/static/pc/menu_home.svg?156813c20605e12311c90bae39f38c31"
                      alt="홈"
                  />
                  </a>
              </li>
              <li class="selected">
                  <a href="/웹툰">
                  <img
                      src="https://static-page.kakao.com/static/pc/menu_toon.svg?fd6837bff2e823e13c693320961cc5a8"
                      alt="웹툰"
                  />
                  </a>
              </li>
              <li>
                  <a href="/웹소설">
                  <img
                      src="https://static-page.kakao.com/static/pc/menu_novel.svg?417f894a74c6cd5334b4a84cfa470d55"
                      alt="웹소설"
                  />
                  </a>
                  <div class="dot"></div>
              </li>
              <li>
                  <a href="/영화">
                  <img
                      src="https://static-page.kakao.com/static/pc/menu_vod.svg?549a6831d63d4b27a463c6cc2be7044f"
                      alt="영화"
                  />
                  </a>
              </li>
              <li>
                  <a href="/방송"
                  ><img
                      src="https://static-page.kakao.com/static/pc/menu_broadcast.svg?549cf0553505cda3d418aa684f358c18"
                      alt="방송"
                  />
                  </a>
                  <div class="dot"></div>
              </li>
              <li>
                  <a href="/책">
                  <img
                      src="https://static-page.kakao.com/static/pc/menu_book.svg?eb9b97c2528955f1e6cf788c6fe7e504"
                      alt="책"
                  />
                  </a>
                  <div class="dot"></div>
              </li>
              </ul>
          </nav>
      `;
  };

  render();

  return { $root };
};
