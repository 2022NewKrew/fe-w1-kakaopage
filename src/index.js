import createHeader from "./layout/header.js";
import createNav from "./layout/nav.js";
import createMain from "./components/main.js";
import createDownlink from "./layout/downlink.js";
import createFooter from "./layout/footer.js";

function init() {
  // 헤더 영역
  createHeader();
  // 네비 영역
  createNav();

  // 메인 생성
  const main = document.createElement("main");
  document.body.appendChild(main);
  createMain();

  // 앱 다운로드 링크
  createDownlink();
  // 푸터 영역
  createFooter();
}

init();
