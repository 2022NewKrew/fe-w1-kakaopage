// 초기화 함수
function init() {
  const menus = document.getElementById("navigation");

  // 초기 페이지 로딩
  loadMenu("webtoon-tab");

  // 각 메뉴별 이벤트리스너 추가
  menus.addEventListener("click", (e) => {
    const menuId = e.target.getAttribute("data-tab-id");
    if (menuId) {
      const menu = document.getElementById(menuId).parentNode;
      makeMenuActive(menu);
      loadMenu(menuId);
    } else {
      return;
    }
  });
}

init();

// --------- 상단 Navbar (탭) ----------
function makeMenuActive(menu) {
  const menus = document.getElementsByClassName("menu");
  Array.from(menus).forEach((e) => {
    if (e.classList.contains("active-menu")) {
      e.classList.remove("active-menu");
      return;
    }
  });
  menu.classList.add("active-menu");
}

// 탭 기반 html 페이지 불러오기
async function loadMenu(menu) {
  const home = document.getElementById("home");
  let tab = "home.html";

  if (menu === "webtoon-tab") {
    tab = "home.html";
  } else {
    tab = "dummy.html";
  }

  const file = await fetch(tab);
  const text = await file.text();
  home.innerHTML = "";

  await home.insertAdjacentHTML("afterbegin", text);

  if (menu === "webtoon-tab") {
    webtoonTabInit();
  }
}

// --------- 웹툰 탭 초기화 ----------
async function webtoonTabInit() {
  const webtoonPage = document.getElementById("webtoon");
  // 장르 컴포넌트 추가
  await createGenre(webtoonPage);
  await homeInit();
}

// ------ 장르 ----------

// 장르 탭 생성
async function createGenre(webtoonPage) {
  const genreFile = await fetch("data/genres.json");
  const genreList = (await genreFile.json()).genres;
  webtoonPage.insertAdjacentHTML(
    "afterbegin",
    `
    <section id="genre">
      <div class="webtoon-genres">
        <ul class="webtoon-genres" id="genres">
        ${genreList
          .map(
            ({ title }) => `
            <li class="genre" data-genre=${title}>${title}</li>
          `
          )
          .join("")}
        </ul>
      </div>
    </section>
    `
  );

  // 각 장르별 이벤트리스너 추가
  genres.addEventListener("click", (e) => {
    const genre = e.target;
    createGenreActive(genre);

    // innerHTML을 통해 현재 장르의 내용 모두 지우기...
    // 이것도 안됨..ㅠ
    const genreSection = document.getElementById("genre-section");
    // genreSection.innerHTML = "";

    while (genreSection.firstChild) {
      genreSection.removeChild(genreSection.firstChild);
    }

    loadGenre(e.target.getAttribute("data-genre"));
  });
  genres.firstElementChild.classList.add("active-genre");
}

// 장르 탭 선택시 색 변경
function createGenreActive(genre) {
  const genres = document.getElementsByClassName("genre");
  Array.from(genres).forEach((e) => {
    if (e.classList.contains("active-genre")) {
      e.classList.remove("active-genre");
      return;
    }
  });
  genre.classList.add("active-genre");
}

// 장르 클릭시, 각 장르 탭별 컴포넌트 추가
async function loadGenre(genre) {
  switch (genre) {
    case "홈":
      homeInit();
    case "요일연재":
      dailyInit();
      break;
    case "소년":
      boyInit();
      break;
    case "드라마":
      dramaInit();
      break;
    case "로맨스":
      romanceInit();
      break;
    case "로판":
      romanticFantasyInit();
      break;
    case "액션무협":
      actionInit();
      break;
    case "BL":
      BLInit();
      break;
    default:
      homeInit();
  }
}

// --------- 각 장르 탭 초기화 ----------
async function homeInit() {
  const genreSection = document.getElementById("genre-section");
  await createMainCarousel(genreSection);

  // 메뉴 컴포넌트화 (오늘 UP, 오늘 신작, 오늘 랭킹 등..)
  await createMenu(genreSection);

  // 하단 캐러셀 생성
  await createBannerCarousel(genreSection);

  // 요일 연재 TOP 컴포넌트 추가
  await createTopRanking(genreSection);
}

async function dailyInit() {
  const genreSection = document.getElementById("genre-section");
  createMainCarousel(genreSection);
}
async function boyInit() {
  const genreSection = document.getElementById("genre-section");
  createMainCarousel(genreSection);
}

async function dramaInit() {
  const genreSection = document.getElementById("genre-section");
  createMainCarousel(genreSection);
}

async function romanceInit() {
  const genreSection = document.getElementById("genre-section");
  createMainCarousel(genreSection);
}

async function romanticFantasyInit() {
  const genreSection = document.getElementById("genre-section");
  createMainCarousel(genreSection);
}

async function actionInit() {
  const genreSection = document.getElementById("genre-section");
  createMainCarousel(genreSection);
}
async function BLInit() {
  const genreSection = document.getElementById("genre-section");
  createMainCarousel(genreSection);
}

// --------- 메인 캐러셀 만들기---------
async function createMainCarousel(webtoonPage) {
  const mainCarouselFile = await fetch("data/carousel.json");
  const mainCarouselList = (await mainCarouselFile.json())["webtoon"];

  await webtoonPage.insertAdjacentHTML(
    "afterBegin",
    `
    <section class="carousel">
    <div class="carousel-container" id="carousel_container">
    <div id="carousel-list">
      <!-- repeated part -->
      ${mainCarouselList
        .map(
          ({ id, title, viewCount, description, image }) => `
        <div class="main-slide slide">
          <div class="carousel-info">
            <img
              class="carousel-main-img"
              src=${image}
              alt="황제의 연인 이미지"
            />
            <div class="carousel-info-container">
              <div class="carousel-info-detail-box">
                <div>
                  <h2 class="carousel-info-title">${title}</h2>
                  <div class="carousel-info-detail">
                    <img
                      class="carousel-info-event-img"
                      src="https://static-page.kakao.com/static/pc/badge-bigthum-event.svg?2c00fc6eb18517e8f006adfaf464530b"
                      alt="이벤트"
                    />
                    <div class="carousel-info-icons">
                      <img
                        src="https://static-page.kakao.com/static/pc/ico-bigthum-wait.svg?aeb2837e99c7d1055cbc3444433f4858"
                        alt="time"
                      />
                      웹툰
                    </div>
                    <div class="separator"></div>
                    <div class="carousel-info-icons">
                      <img
                        src="https://static-page.kakao.com/static/pc/ico-bigthum-person.svg?100328455b1454b0ffff555caf02e71e"
                        alt="조회수"
                      />
                      ${viewCount}만명
                    </div>
                  </div>
                </div>
                <div class="carousel-number">${id} / 5</div>
              </div>
              <div class="carousel-info-box">
                <div class="carousel-description">
                  ${description}
                </div>
              </div>
            </div>
          </div>
        </div>
      `
        )
        .join("")}
        </div>
        <!-- buttons -->
        <div class="carousel-button previous-button" id="previousButton">
          <img
            src="https://static-page.kakao.com/static/pc/ic-banner-paging-back-nor.svg?85bef3b447d17ee7cbefa349c973fe56"
            alt="previous button"
          />
        </div>
        <div class="carousel-button next-button" id="nextButton">
          <img
            src="https://static-page.kakao.com/static/pc/ic-banner-paging-next-nor.svg?cf6a870397c04c13add6c27f1f735d93"
            alt="next button"
          />
        </div>
    </div>
  </section>
  `
  );

  let curPos = 0;

  const IMAGE_WIDTH = 720;
  const TOTAL_IMAGES = 5;

  const slide = document.getElementById("carousel-list");
  const prevBtn = document.getElementById("previousButton");
  const nextBtn = document.getElementById("nextButton");

  // 처음과 끝 요소를 추가해준다.
  const clonedFirst = slide.firstElementChild.cloneNode(true);
  const clonedLast = slide.lastElementChild.cloneNode(true);
  slide.appendChild(clonedFirst);
  slide.insertBefore(clonedLast, slide.firstElementChild);

  slide.style.transform = `translateX(-${IMAGE_WIDTH})`;

  function next() {
    if (curPos <= TOTAL_IMAGES) {
      slide.style.transition = "500ms";
      slide.style.transform = `translateX(-${IMAGE_WIDTH * (curPos + 2)}px)`;
      curPos += 1;
    }
    if (curPos == TOTAL_IMAGES) {
      setTimeout(() => {
        slide.style.transition = "0ms";
        slide.style.transform = `translateX(-${IMAGE_WIDTH}px)`;
      }, 500);
      curPos = 0;
    }
  }

  function prev() {
    if (curPos > 0) {
      positonValue += IMAGE_WIDTH;
      slide.style.transform = `translateX(${positonValue}px)`;
      curPos -= 1;
    }
  }

  prevBtn.addEventListener("click", prev);
  nextBtn.addEventListener("click", next);

  setInterval(() => {
    next();
  }, 4000);
}

// --------- 메뉴 (오늘 UP, 오늘 신작, 오늘 랭킹 등..)----------
async function createMenu(webtoonPage) {
  const menuFile = await fetch("data/menu.json");
  const menuList = (await menuFile.json())["webtoon"];
  webtoonPage.insertAdjacentHTML(
    "beforeend",
    `
    <section class="webtoon-menus">
      <div class="webtoon-menus-container">
        ${menuList
          .map(
            ({ title, text }) => `
            <a> 
              <div class="webtoon-menu">
                <p>${title}</p>
                <p>${text}</p>
              </div> 
            </a>
          `
          )
          .join("")}
      </div>
    </section>
    `
  );
}

// --------- 요일 연재 TOP 컴포넌트 ----------
async function createTopRanking(webtoonPage) {
  const weekFile = await fetch("data/week.json");
  const weekList = (await weekFile.json()).week;
  // 각 요일 탭 추가
  await webtoonPage.insertAdjacentHTML(
    "beforeend",
    `
    <section class="daily-ranking">
      <div class="daily-ranking-header">
        <div class="daily-ranking-top">
          <p>요일 연재 TOP </p>
          <p>(1,555)</p>
        </div>
        <div class="daily-ranking-more">
          <p>더보기</p>
          <img
            src="https://static-page.kakao.com/static/common/ic-more-gray.svg?639494b81c8127013d0e627243aee94e"
            alt="button for more webtoons"
          />
        </div>
      </div>
      <div class="darily-ranking-tabs">
        <ul
          class="daily-ranking-tabs-container"
          id="daily-ranking-tabs-container"
        >
          ${weekList
            .map(
              ({ english, weekday }) => `
                <li class="daily-ranking-tab" id=${english}>${weekday}</li>
              `
            )
            .join("")}
        </ul>
      </div>
      <div class="daily-ranking-contents">
        <div class="daily-ranking-contents-container" id="daily-contents"></div>
      </div>
    </section>
    `
  );

  const weekTab = document.getElementById("daily-ranking-tabs-container");

  // 각 요일 탭에 이벤트 리스너 추가
  weekTab.addEventListener("click", function (e) {
    const tabs = document.getElementsByClassName("daily-ranking-tab");
    Array.from(tabs).forEach((tab) => {
      if (tab.classList.contains("active-weekday")) {
        tab.classList.remove("active-weekday");
        return;
      }
    });
    e.target.classList.add("active-weekday");
    fetchTopRankingWebtoons(e.target.id);
  });

  // 디폴트 요일은 월요일
  weekTab.firstChild.nextSibling.classList.add("active-weekday");
  fetchTopRankingWebtoons("monday");
}

async function fetchTopRankingWebtoons(weekday) {
  let dailyContainer = document.getElementsByClassName(
    "daily-ranking-contents-container"
  )[0];
  dailyContainer.innerHTML = "";

  const dailyWebtoonFile = await fetch("data/daily-webtoon.json");
  const dailyWebtoonList = (await dailyWebtoonFile.json())[weekday];

  dailyWebtoonList.forEach((data) => {
    dailyContainer.insertAdjacentHTML(
      "beforeend",
      `
        <a href="#" class="daily-ranking-content">
        <div class="daily-ranking-content-container">
          <div class="daily-ranking-image-container">
            <img
              src=${data.img}
              alt="${data.title}"
            />
          </div>
          <div class="daily-ranking-box">
            <p class="daily-ranking-box-left">${data.left}</p>
            ${
              data.clock
                ? `<img src="https://static-page.kakao.com/static/common/bmbadge_waitfree.svg?53cf25c84253dee8d32e66da7524dbaf" />`
                : `<p class="daily-ranking-box-right">웹툰</p>`
            }
          </div>
        </div>
        <div>
          <p class="daily-ranking-title">${data.title}</p>
          <div class="daily-ranking-people">
            ${
              data.fifteen
                ? `<img src="https://static-page.kakao.com/static/common/icon_15.png?ccf202bf79001052f43af077a0947e74" alt="15세 이용가`
                : data.new
                ? `<img src="https://static-page.kakao.com/static/common/icon_new.svg?4ae84a0f972e30119fb6fcfbb2f59bf9" alt="new"/>`
                : ""
            }
            <img
              src="https://static-page.kakao.com/static/common/icon_read_count.png?817b1f83aa0dd8de232a68ac82efd871"
            />${data.people}만명
          </div>
        </div>
      </a>
    `
    );
  });
}

// --------- 하단 캐러셀 ----------
async function createBannerCarousel(webtoonPage) {
  // let slideIndex = 1;

  const bannerFile = await fetch("data/banner.json");
  const bannerList = (await bannerFile.json()).banner;

  await webtoonPage.insertAdjacentHTML(
    "beforeend",
    `
      <section id="banner-carousel" class="banner">
        <div class="banner-container">
          <button class="banner-btn prevBtn" id="prevBtn">
            <img
              src="https://static-page.kakao.com/static/pc/ic-paging-back-nor.svg?2c964bb7a6b07a7941252b32ea13f03c"
              alt="prev button"
            />
          </button>
          <div class="slide_box">
            <div class="slide_list" id="slide_list">
              ${bannerList
                .map(
                  ({ image, description }) => `
                    <div class="slide_item slide">
                      <img
                        src=${image}
                        alt=${description}
                      />
                    </div>
                  `
                )
                .join("")}
            </div>
          </div>
          <button class="banner-btn nextBtn" id="nextBtn">
            <img
              src="https://static-page.kakao.com/static/pc/ic-paging-next-nor.svg?b76f34a1b77e59514735b92464295b7c"
              alt="next button"
            />
          </button>
      </div>
    </section>
  `
  );

  let curPos = 0;

  IMAGE_WIDTH = 550;
  TOTAL_IMAGES = 4;

  // showSlides(1);
  const slide = document.getElementById("slide_list");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  const clonedFirst = slide.firstElementChild.cloneNode(true);
  const clonedLast = slide.lastElementChild.cloneNode(true);
  slide.appendChild(clonedFirst);
  slide.insertBefore(clonedLast, slide.firstElementChild);

  slide.style.transform = `translateX(-${IMAGE_WIDTH})`;

  function next() {
    if (curPos <= TOTAL_IMAGES) {
      slide.style.transition = "500ms";
      slide.style.transform = `translateX(-${IMAGE_WIDTH * (curPos + 2)}px)`;
      curPos += 1;
    }
    if (curPos == TOTAL_IMAGES) {
      setTimeout(() => {
        slide.style.transition = "0ms";
        slide.style.transform = `translateX(-${IMAGE_WIDTH}px)`;
      }, 500);
      curPos = 0;
    }
  }

  function prev() {
    if (curPos > 0) {
      positonValue += IMAGE_WIDTH;
      slide.style.transform = `translateX(${positonValue}px)`;
      curPos -= 1;
    }
  }

  prevBtn.addEventListener("click", prev);
  nextBtn.addEventListener("click", next);
}
