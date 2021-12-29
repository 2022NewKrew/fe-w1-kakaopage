import { getAPI } from "./api.js";
import { isActive } from "./util.js";

/********* menubar template in webtoon page  **********/
const initMenuActiveIndex = 0;

const createMenuBar = async () => {
  try {
    const menuData = await getAPI("./data/menu.json");
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
    const dayData = await getAPI("./data/day.json");
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
const createCategoryRightBar = () => {
  return `<div class="category-right">
              <span>전체(135)</span>
              <img 
              src='https://static-page.kakao.com/static/common/ico_sorting_arrow.svg?167b1295f93ba9f9d84cac7a5b830345'
              alt='카테고리 선택'/>
            </div>`;
};

const createCategoryBar = () => {
  return `<div class="category-container">
              ${createCategoryLeftBar()}
              ${createCategoryRightBar()}
            </div>`;
};
/********* category template in webtoon page  **********/

/********* webtoon template in webtoon page  **********/
const createWebtoon = () => {
  const temp = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  return temp
    .map(() => {
      return `<article class="webtoon">
      <img
          class='webtoon-thumbnail' 
          src='https://dn-img-page.kakao.com/download/resource?kid=9Eoo5/hyATyGp2En/pYYjRkJJIrpHEvDible6T0&filename=th2'/>
      <div class="webtoon-title">
          Title
      </div>
      <div class="webtoon-viewer-container">
          <img src='https://static-page.kakao.com/static/common/icon_up.svg?51cfaf512283ca0e1eaca53414e35a3f'>
          <img src='https://static-page.kakao.com/static/common/icon_read_count.png?817b1f83aa0dd8de232a68ac82efd871'>
          <span class="webtoon-viewer-count">77.7만명</span>
      </div>
    </article>`;
    })
    .join("");
};
/********* webtoon template in webtoon page  **********/

export const createWebtoonPage = async () => {
  try {
    return `
        <ul class="menu-container">${await createMenuBar()}</ul>
        <div class="day-outer-container">
          ${await createDayBar()}
          ${createCategoryBar()}
          <section class="webtoon-container">
              ${createWebtoon()}
          </section>
        </div> 
        `;
  } catch (e) {
    throw e;
  }
};
