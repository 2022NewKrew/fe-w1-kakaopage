import { getAPI } from "./api.js";
import { $ } from "./util.js";

let timer = 0;

/********* carousel template in webtoon page  **********/

const createWebtoonMark = () => {
  return `<img class="carousel_webtoon-mark" src="https://static-page.kakao.com/static/pc/ico-bigthum-wait.svg?aeb2837e99c7d1055cbc3444433f4858" /> `;
};

const createLeftArrow = () => {
  return `<img class="carousel_left-arrow" src="https://static-page.kakao.com/static/pc/ic-banner-paging-back-nor.svg?85bef3b447d17ee7cbefa349c973fe56"></img>
  `;
};

const createRightArrow = () => {
  return ` <img class="carousel_right-arrow" src="https://static-page.kakao.com/static/pc/ic-banner-paging-next-nor.svg?cf6a870397c04c13add6c27f1f735d93">`;
};

const createHotLabel = () => {
  return ` <img class="carousel_hot-label" src="https://static-page.kakao.com/static/pc/badge-bigthum-hot.svg?a7f7622e9d554d5e0ad1517a53de3ad3">`;
};

const createWebtoonImage = (src) => {
  return ` <img
            class="carousel_img"
            src=${src}
            />`;
};

const createWebtoonDescription = (description) => {
  return `<div class="carousel_description">${description}</div>`;
};

const createPersonImage = () => {
  return `<img class="carousel_person" src="https://static-page.kakao.com/static/pc/ico-bigthum-person.svg?100328455b1454b0ffff555caf02e71e">`;
};

const createWebtoonInfo = (count) => {
  return `<div class="carousel_info">${createWebtoonMark()} 웹툰 | ${createPersonImage()} ${count}만명</div>`;
};

const createWebtoonTitle = (title) => {
  return `<div class="carousel_title">${title}</div>`;
};

const createCurrentPageNum = (currPage, total) => {
  return `<span class='carousel_page-num'>${currPage + 1} / ${total}</span>`;
};

const createCarousel = (carousel, index, totalPage) => {
  return `<div class="carousel">
            ${createWebtoonImage(carousel.imageSrc)}
            ${createLeftArrow()}
            ${createRightArrow()}
            ${createHotLabel()}
            ${createWebtoonDescription(carousel.description)}
            ${createWebtoonTitle(carousel.title)}
            ${createWebtoonInfo(carousel.count)}
            ${createCurrentPageNum(index, totalPage)}
        </div>`;
};

export const createCarouselTemplate = async () => {
  try {
    let slideX = 0;
    const slideAnimationTime = 2000;
    const carouselData = await getAPI("carousel.json");
    const totalPage = carouselData.length;

    timer = setInterval(() => {
      slideX += -720;
      $(
        ".carousel_inner-container"
      ).style.transform = `translateX(${slideX}px)`;
    }, slideAnimationTime);

    return `
        <div class="carousel_outer-container">
          <div class="carousel_inner-container">
            ${carouselData
              .map((carousel, index) =>
                createCarousel(carousel, index, totalPage)
              )
              .join("")}
          </div>
       </div>`;
  } catch (e) {
    throw e;
  }
};

/********* carousel template in webtoon page  **********/

export const clearCarouselInterval = () => {
  clearInterval(timer);
};
