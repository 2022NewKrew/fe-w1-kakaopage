import createGenres from "./genres.js";
import createBanner from "./banner.js";
import createMenu from "./menu.js";
import createEvent from "./event.js";
import createContentTop from "./content.js";

import data from "../../assets/json/menu.json" assert { type: "json" };

export default () => {
  // 장르 영역
  createGenres();
  // 배너 영역
  createBanner();
  // 메뉴 영역
  createMenu(data.홈);
  // 이벤트 배너
  createEvent();
  // 컨텐츠 TOP 영역
  createContentTop();
};
