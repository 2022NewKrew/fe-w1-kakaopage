/********* common logic  **********/
// get element function
const $ = (selector, parentNode = document) => {
  return parentNode.querySelector(selector);
};

const getAPI = async (url) => {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (e) {
    throw e;
  }
};

const isActive = (index, targetActiveIndex) => {
  return index === targetActiveIndex ? "active" : "";
};
/********* common logic  **********/

/********* create navbar html  **********/
const navParent = $(".nav-container");

let currNavActiveIndex = 0;

const createNavEle = (title, index) => {
  return `<li class="nav-list ${isActive(index, currNavActiveIndex)}" 
      data-idx=${index}>${title}</li>`;
};

const initializeNavBar = async () => {
  try {
    const navData = await getAPI("./data/nav.json");
    const navElements = navData
      .map((nav, index) => createNavEle(nav.title, index))
      .join("");

    navParent.innerHTML = navElements;
  } catch (e) {
    alert(e);
  }
};
initializeNavBar();

/********* create navbar  **********/

/********* navbar click event  **********/
const webtoonNavIndex = 1;
const main = $(".main");

const changeMainContent = async (e) => {
  if (Number(e.target.dataset.idx) === currNavActiveIndex) return;
  try {
    main.innerHTML =
      Number(e.target.dataset.idx) === webtoonNavIndex
        ? await createWebtoonPage()
        : createEmptyPage();
  } catch (e) {
    alert(e);
  }
};

navParent.addEventListener("click", changeMainContent);
/********* navbar click event  **********/

/********* page template except for webtoon  **********/
const createEmptyPage = () => {
  return `
          <div class='empty-page-container'>
              <img src='./images/not-content.gif' />
          </div>
      `;
};
main.innerHTML = createEmptyPage();
/********* page template except for webtoon  **********/

/********* menubar template in webtoon page  **********/
let currMenuActiveIndex = 0;

const createMenuBar = async () => {
  try {
    const menuData = await getAPI("./data/menu.json");
    const menuElements = menuData
      .map((menu, index) => createMenuEle(menu.title, index))
      .join("");
    return menuElements;
  } catch (e) {
    alert(e);
  }
};

const createMenuEle = (title, index) => {
  return `<li class="menu-list ${isActive(index, currMenuActiveIndex)}" 
      data-idx=${index}>${title}</li>`;
};
/********* menubar template in webtoon page  **********/

/********* daybar template in webtoon page  **********/
let currDayActiveIndex = 0;
let currDayCircleIndex = 0;
const dayClassList = ["day-circle", "day-span", "day"];
const createDayBar = async () => {
  try {
    const dayData = await getAPI("./data/day.json");
    const result = dayData
      .map((day, index) => createDayEle(day.name, index))
      .join("");
    return `<ul class="day-container">${result}</ul>`;
  } catch (e) {
    alert(e);
  }
};

const createDayEle = (name, index) => {
  return `<li class="day ${isActive(
    index,
    currDayActiveIndex
  )}" data-idx=${index}><div class="day-circle ${isActive(
    index,
    currDayActiveIndex
  )}" data-idx=${index}></div><span class="day-span" data-idx=${index}>${name}</span></li>`;
};
/********* daybar template in webtoon page  **********/

/********* category template in webtoon page  **********/
const createCategoryLeftBar = () => {
  const categoryList = ["전체", "웹툰", "🌗웹툰"];
  const result = categoryList
    .map((category, index) => {
      return `<span class="category ${
        index === 0 ? "active" : ""
      }">${category}</span>`;
    })
    .join("");

  return `<div class="category-left">${result}</div>`;
};

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
const createWebtoonPage = async () => {
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
};

/********* body event  **********/
document.body.addEventListener("click", (e) => {
  if (e.target.classList.contains("nav-list")) {
    changeActiveStatus(e, currNavActiveIndex, navParent);
  } else if (e.target.classList.contains("menu-list")) {
    const menuParent = $(".menu-container");
    changeActiveStatus(e, currMenuActiveIndex, menuParent);
  } else if (dayClassList.includes(e.target.classList[0])) {
    const dayParent = $(".day-container");
    changeActiveStatus(e, currDayActiveIndex, dayParent);
  }
});

const changeActiveStatus = (e, currActiveIndex, parentEle) => {
  if (Number(e.target.dataset.idx) === currActiveIndex) return;

  if (parentEle === $(".day-container")) {
    const currIdxOfdayCircleEle =
      parentEle.childNodes[currActiveIndex].childNodes[0];
    const currIdxOfdayEle = parentEle.childNodes[currActiveIndex];

    currIdxOfdayCircleEle.classList.remove("active");
    currIdxOfdayEle.classList.remove("active");
    const targetIndex = Number(e.target.dataset.idx);
    const newActiveIndex = getNewActiveIndex(parentEle, targetIndex);
    const newIdxOfdayCircleEle =
      parentEle.childNodes[newActiveIndex].childNodes[0];
    const newIdxOfdayEle = parentEle.childNodes[newActiveIndex];
    newIdxOfdayCircleEle.classList.add("active");
    newIdxOfdayEle.classList.add("active");
    return;
  }

  parentEle.childNodes[currActiveIndex].classList.remove("active");
  const targetIndex = Number(e.target.dataset.idx);
  const newActiveIndex = getNewActiveIndex(parentEle, targetIndex);
  parentEle.childNodes[newActiveIndex].classList.add("active");
};

const getNewActiveIndex = (parentEle, targetIndex) => {
  if (parentEle === $(".nav-container")) {
    currNavActiveIndex = targetIndex;
    return currNavActiveIndex;
  } else if (parentEle === $(".menu-container")) {
    currMenuActiveIndex = targetIndex;
    return currMenuActiveIndex;
  } else if (parentEle === $(".day-container")) {
    currDayActiveIndex = targetIndex;
    return currDayActiveIndex;
  }
};
