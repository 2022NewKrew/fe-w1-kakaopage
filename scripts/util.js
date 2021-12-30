import { getAPI } from "./api.js";
import { clearCarouselInterval, createCarouselTemplate } from "./carousel.js";
import { createEmptyPage } from "./empty.js";
import {
  createCategoryRightBarDetail,
  createWebtoon,
  createWebtoonDayTabPage,
  createWebtoonPage,
} from "./webtoon.js";

// extract element func
export const $ = (selector, parentNode = document) => {
  return parentNode.querySelector(selector);
};

// css classlist의 'active' string을 반환하는 func
export const isActive = (index, targetActiveIndex) => {
  return index === targetActiveIndex ? "active" : "";
};

/********** Event handler **********/
const dayClassList = ["day-circle", "day-span", "day"];
const webtoonNavIndex = 1;
let currNavActiveIndex = 0;
let currMenuActiveIndex = 0;
let currDayActiveIndex = 0;

export const changeCssActive = (e) => {
  if (e.target.classList.contains("nav-list")) {
    changeActiveStatus(e, currNavActiveIndex, $(".nav-container"));
  } else if (e.target.classList.contains("menu-list")) {
    changeActiveStatus(e, currMenuActiveIndex, $(".menu-container"));
  } else if (dayClassList.includes(e.target.classList[0])) {
    changeActiveStatus(e, currDayActiveIndex, $(".day-container"));
  }
};

// css classlist의 'active'를 remove / add 해주는 func
const changeActiveStatus = (e, currActiveIndex, parentEle) => {
  if (Number(e.target.dataset.idx) === currActiveIndex) return;
  if (parentEle === $(".day-container")) {
    changeDayActiveStatus(e, currActiveIndex, parentEle);
    return;
  }

  parentEle.childNodes[currActiveIndex].classList.remove("active");
  const targetIndex = Number(e.target.dataset.idx);
  const newActiveIndex = getNewActiveIndex(parentEle, targetIndex);
  parentEle.childNodes[newActiveIndex].classList.add("active");
};

const changeDayActiveStatus = (e, currActiveIndex, parentEle) => {
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

export const changeMainContent = async (e) => {
  try {
    if (Number(e.target.dataset.idx) === currNavActiveIndex) return;

    currMenuActiveIndex = 0;
    currDayActiveIndex = 0;
    clearCarouselInterval();

    $(".main").innerHTML =
      Number(e.target.dataset.idx) === webtoonNavIndex
        ? await createWebtoonPage()
        : createEmptyPage();
  } catch (e) {
    alert(e);
  }
};

export const changeWebtoonDetailContent = async (e) => {
  try {
    if (!e.target.classList.contains("menu-list")) return;
    if (Number(e.target.dataset.idx) === currMenuActiveIndex) return;

    currDayActiveIndex = 0;
    clearCarouselInterval();

    $(".webtoon_main-container").innerHTML =
      Number(e.target.dataset.idx) === webtoonNavIndex
        ? await createWebtoonTabPage()
        : await createOtherTabPage();
  } catch (e) {
    alert(e);
  }
};

const createWebtoonTabPage = async () => {
  try {
    const carousel = await createCarouselTemplate();
    const DayTabPage = await createWebtoonDayTabPage();
    return carousel + DayTabPage;
  } catch (e) {
    throw e;
  }
};

const createOtherTabPage = async () => {
  try {
    const carousel = await createCarouselTemplate();
    const empty = createEmptyPage();
    return carousel + empty;
  } catch (e) {
    throw e;
  }
};

const dayOfIdxObj = {
  0: "mon",
  1: "tue",
  2: "wed",
  3: "thur",
  4: "fri",
  5: "sat",
  6: "sun",
  7: "finish",
};

export const changeContentOfDay = async (e) => {
  try {
    if (!dayClassList.includes(e.target.classList[0])) return;
    if (Number(e.target.dataset.idx) === currDayActiveIndex) return;
    const index = Number(e.target.dataset.idx);
    const webtoons = await getAPI(`webtoon/${dayOfIdxObj[index]}.json`);
    $(".webtoon-container").innerHTML = await createWebtoon(webtoons);
    $(".category-right").innerHTML = createCategoryRightBarDetail(
      webtoons.length
    );
  } catch (e) {
    alert(e);
  }
};
/********** Event handler **********/
