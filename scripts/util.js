import { createEmptyPage } from "./empty.js";
import { createWebtoonPage } from "./webtoon.js";

// extract element func
export const $ = (selector, parentNode = document) => {
  return parentNode.querySelector(selector);
};

// css classlist의 'active' string을 반환하는 func
export const isActive = (index, targetActiveIndex) => {
  return index === targetActiveIndex ? "active" : "";
};

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

    $(".main").innerHTML =
      Number(e.target.dataset.idx) === webtoonNavIndex
        ? await createWebtoonPage()
        : createEmptyPage();
  } catch (e) {
    alert(e);
  }
};
