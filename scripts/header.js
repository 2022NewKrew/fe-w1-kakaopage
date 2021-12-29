import { isActive } from "./util.js";
import { getAPI } from "./api.js";

/********* create navbar html  **********/
const initNavActiveIndex = 0;

const createNavEle = (title, index) => {
  return `<li class="nav-list ${isActive(index, initNavActiveIndex)}" 
      data-idx=${index}>${title}</li>`;
};

const createNavBar = async () => {
  try {
    const navData = await getAPI("data/nav.json");
    return navData.map((nav, index) => createNavEle(nav.title, index)).join("");
  } catch (e) {
    throw e;
  }
};
/********* create navbar html **********/

/********* create header html **********/
const createHeaderUpContainer = () => {
  return `<div class="header_up-container">
            <img
              class="logo"
              src="https://static-page.kakao.com/static/common/logo-kakaopage.svg?e0dffe87c45ca42b47399538391a1954"
              alt="카카오페이지 로고"
            />
            <div class="header_up-container--right">
              <div class="search">
                <input class="search-input" type="text" />
                <img
                  class="search-img"
                  src="https://static-page.kakao.com/static/pc/btn_search.png?a8ce9e4eba0250e52d4570c605f79f9a"
                  alt="검색"
                />
              </div>

              <img
                class="stage"
                src="https://static-page.kakao.com/static/common/pc-logo-stage.svg?67473e9acf34aa0425a982b16f882f5f"
                alt="stage"
              />

              <div class="header_side-menu">
                <span>캐시충전</span>
                <span>|</span>
                <span>로그인</span>
              </div>
            </div>
          </div>`;
};

const createHeaderDownContainer = async () => {
  return `<nav class="header_down-container">
          <ul class="nav-container">${await createNavBar()}</ul>
        </nav>`;
};

export const createHeader = async () => {
  return `${createHeaderUpContainer()}
  ${await createHeaderDownContainer()}`;
};
/********* create header html **********/
