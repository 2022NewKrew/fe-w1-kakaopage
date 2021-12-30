export const HeaderNavigator = () => {
  const $root = document.createElement("nav");
  $root.className = "headerNav";

  const visitedList = JSON.parse(sessionStorage.getItem("visitedPath")) || [];
  const currentPath = decodeURI(window.location.pathname).substring(1);
  const visitedPath = new Set([...visitedList, currentPath]);
  sessionStorage.setItem("visitedPath", JSON.stringify([...visitedPath]));

  const renderNavItem = ({ path, img }) => `
    <li class="headerNav__item ${path === currentPath ? "headerNav__item--selected" : ""}">
      <a href="/${path}">
        <img
          src="${img}"
          alt="${path}"
        />
      </a>
      ${visitedPath.has(path) ? "" : '<div class="headerNav__dot" />'}
    </li>
  `;

  const render = () => {
    $root.innerHTML = `
        <nav class="headerNav">
          <ul>
            ${pathList.map(renderNavItem).join("")}
          </ul>
        </nav>
      `;
  };

  render();

  return $root;
};

const pathList = [
  {
    path: "홈",
    img: "https://static-page.kakao.com/static/pc/menu_home.svg?156813c20605e12311c90bae39f38c31",
  },
  {
    path: "웹툰",
    img: "https://static-page.kakao.com/static/pc/menu_toon.svg?fd6837bff2e823e13c693320961cc5a8",
  },
  {
    path: "웹소설",
    img: "https://static-page.kakao.com/static/pc/menu_novel.svg?417f894a74c6cd5334b4a84cfa470d55",
  },
  {
    path: "영화",
    img: "https://static-page.kakao.com/static/pc/menu_vod.svg?549a6831d63d4b27a463c6cc2be7044f",
  },
  {
    path: "방송",
    img: "https://static-page.kakao.com/static/pc/menu_broadcast.svg?549cf0553505cda3d418aa684f358c18",
  },
  {
    path: "책",
    img: "https://static-page.kakao.com/static/pc/menu_book.svg?eb9b97c2528955f1e6cf788c6fe7e504",
  },
];
