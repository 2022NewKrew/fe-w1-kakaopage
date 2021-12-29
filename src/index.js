import createHeader from "./header.js";
import createNav from "./nav.js";
import createMain from "./main/index.js";
import createDownlink from "./downlink.js";
import createFooter from "./footer.js";

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
