import { getAPI } from "./api.js";
import { createEmptyPage } from "./empty.js";
import { isActive } from "./util.js";

/********* menubar template in webtoon page  **********/
const initMenuActiveIndex = 0;

const createMenuBar = async () => {
  try {
    const menuData = await getAPI("data/menu.json");
    return menuData
      .map((menu, index) => createMenuEle(menu.title, index))
      .join("");
  } catch (e) {
    alert(e);
  }
};

const createMenuEle = (title, index) => {
  return `<li class="menu-list ${isActive(index, initMenuActiveIndex)}" 
        data-idx=${index}>${title}</li>`;
};
/********* menubar template in webtoon page  **********/

/********* daybar template in webtoon page  **********/
const initDayActiveIndex = 0;

const createDayBar = async () => {
  try {
    const dayData = await getAPI("data/day.json");
    const result = dayData
      .map((day, index) => createDayEle(day.name, index))
      .join("");
    return `<ul class="day-container">${result}</ul>`;
  } catch (e) {
    throw e;
  }
};

const createDayEle = (name, index) => {
  return `<li class="day ${isActive(
    index,
    initDayActiveIndex
  )}" data-idx=${index}><div class="day-circle ${isActive(
    index,
    initDayActiveIndex
  )}" data-idx=${index}></div><span class="day-span" data-idx=${index}>${name}</span></li>`;
};
/********* daybar template in webtoon page  **********/

/********* category template in webtoon page  **********/
const createCategoryLeftBar = () => {
  const categoryList = ["전체", "웹툰", "🌗웹툰"];
  const initCategoryActiveIndex = 0;
  const result = categoryList
    .map((category, index) => {
      return `<span class="category ${isActive(
        index,
        initCategoryActiveIndex
      )}">${category}</span>`;
    })
    .join("");

  return `<div class="category-left">${result}</div>`;
};

/**
 * 전체 count -> 다이나믹으로
 */
const createCategoryRightBar = (count) => {
  return `<div class="category-right">
            ${createCategoryRightBarDetail(count)}
          </div>`;
};

export const createCategoryRightBarDetail = (count) => {
  return `<span class="category-count">전체(${count})</span>
        <img 
        src='https://static-page.kakao.com/static/common/ico_sorting_arrow.svg?167b1295f93ba9f9d84cac7a5b830345'
        alt='카테고리 선택'/>`;
};

const createCategoryBar = (count) => {
  return `<div class="category-container">
              ${createCategoryLeftBar()}
              ${createCategoryRightBar(count)}
            </div>`;
};
/********* category template in webtoon page  **********/

/********* webtoon template in webtoon page  **********/

export const createWebtoon = async (webtoons) => {
  try {
    return webtoons
      .map((webtoon) => {
        return `<article class="webtoon">
      <img
          class='webtoon-thumbnail' 
          src=${webtoon.imageSrc}
      />
      <div class="webtoon-title">
          ${webtoon.title}
      </div>
      <div class="webtoon-viewer-container">
          <img src='https://static-page.kakao.com/static/common/icon_up.svg?51cfaf512283ca0e1eaca53414e35a3f'>
          <img src='https://static-page.kakao.com/static/common/icon_read_count.png?817b1f83aa0dd8de232a68ac82efd871'>
          <span class="webtoon-viewer-count">${webtoon.viewer}</span>
      </div>
    </article>`;
      })
      .join("");
  } catch (e) {}
};
/********* webtoon template in webtoon page  **********/

export const createWebtoonPage = async () => {
  try {
    return `
        <ul class="menu-container">${await createMenuBar()}</ul>
        <div class="webtoon-main">${createEmptyPage()}</div>
        `;
  } catch (e) {
    throw e;
  }
};

export const createWebtoonDayTabPage = async () => {
  const webtoons = await getAPI(`data/webtoon/mon.json`);
  const webtoonCount = webtoons.length;
  return `<div class="day-outer-container">
    ${await createDayBar()}
    ${createCategoryBar(webtoonCount)}
    <section class="webtoon-container">
        ${await createWebtoon(webtoons)}
    </section>
    </div>`;
};
