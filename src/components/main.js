import createGenres from "./genres.js";
import createBanner from "./banner.js";
import createMenu from "./menu.js";
import createEvent from "./event.js";
import createContentTop from "./content.js";

import menuData from "../../assets/json/menu.json" assert { type: "json" };
import eventData from "../../assets/json/event.json" assert { type: "json" };
import bannerData from "../../assets/json/banner.json" assert { type: "json" };

export default () => {
  // 장르 영역
  createGenres();
  // 배너 영역
  createBanner(bannerData.홈);
  // 메뉴 영역
  createMenu(menuData.홈);
  // 이벤트 배너
  createEvent(eventData.홈);
  // 컨텐츠 TOP 영역
  createContentTop();
};
