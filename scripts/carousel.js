import { getAPI } from "./api.js";
import { $ } from "./util.js";

let intervalTimer = 0;
let timeoutTimer = 0;
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

const createWholeCarousel = (carouselData, totalPage) => {
  const firstCarouselData = carouselData[0];
  const firstCarouselIndex = 0;
  const lastCarouselData = carouselData[carouselData.length - 1];
  const lastCarouselIndex = carouselData.length - 1;

  const cloneFirstCarousel = createCarousel(
    firstCarouselData,
    firstCarouselIndex,
    totalPage
  );
  const cloneLastCarousel = createCarousel(
    lastCarouselData,
    lastCarouselIndex,
    totalPage
  );
  const carousels = carouselData
    .map((carousel, index) => createCarousel(carousel, index, totalPage))
    .join("");

  return cloneLastCarousel + carousels + cloneFirstCarousel;
};

const adjustTransition = (carouselInnerContainer, slideX, flag = "") => {
  if (carouselInnerContainer.style.transition === "none 0s ease 0s")
    carouselInnerContainer.style.transition = "all 1s ease";

  if (flag === "loop") carouselInnerContainer.style.transition = "none";
  carouselInnerContainer.style.transform = `translateX(${slideX}px)`;
};

export const createCarouselTemplate = async () => {
  try {
    let slideX = -720;
    let currentPage = 1;

    const slideAnimationTime = 2000;
    const timeForLoop = 1000;
    const carouselData = await getAPI("carousel.json");
    const totalPage = carouselData.length;

    intervalTimer = setInterval(() => {
      const carouselInnerContainer = $(".carousel_inner-container");
      slideX += -720;
      currentPage += 1;
      adjustTransition(carouselInnerContainer, slideX);

      if (totalPage + 1 === currentPage) {
        timeoutTimer = setTimeout(() => {
          slideX = -720;
          currentPage = 1;
          adjustTransition(carouselInnerContainer, slideX, "loop");
        }, timeForLoop);
      }
    }, slideAnimationTime);

    return `
        <div class="carousel_outer-container">
          <div class="carousel_inner-container">
            ${createWholeCarousel(carouselData, totalPage)}
          </div>
       </div>`;
  } catch (e) {
    throw e;
  }
};

/********* carousel template in webtoon page  **********/

export const clearCarouselTimer = () => {
  clearInterval(intervalTimer);
  clearTimeout(timeoutTimer);
};
