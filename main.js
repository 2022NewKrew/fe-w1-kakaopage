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
  let tab = "webtoon.html";

  if (menu === "webtoon-tab") {
    tab = "webtoon.html";
  } else {
    tab = "dummy.html";
  }

  const file = await fetch(tab);
  const text = await file.text();
  home.innerHTML = "";

  await home.insertAdjacentHTML("afterbegin", text);

  if (menu === "webtoon-tab") {
    webtoonInit();
  }
}

// --------- 웹툰 탭 초기화 ----------
function webtoonInit() {
  const webtoonPage = document.getElementById("webtoon");
  // 장르 컴포넌트 추가
  createGenre(webtoonPage);

  // 메뉴 컴포넌트화 (오늘 UP, 오늘 신작, 오늘 랭킹 등..)
  createMenu(webtoonPage);

  // 하단 캐러셀 생성
  createCarousel();

  // 요일 연재 TOP 컴포넌트 추가
  createTopRanking(webtoonPage);
}

// ------ 장르 ----------

// 장르 탭 생성
async function createGenre(webtooonPage) {
  const genreFile = await fetch("data/genres.json");
  const genreList = (await genreFile.json()).genres;
  webtooonPage.insertAdjacentHTML(
    "afterbegin",
    `
    <section id="genre">
      <div class="webtoon-genres">
        <ul class="webtoon-genres" id="genres">
        ${genreList
          .map(
            ({ title }) => `
            <li class="genre">${title}</li>
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
async function createCarousel() {
  const carouselSection = document.getElementById("banner-carousel");
  carouselSection.innerHTML = "";

  let slideIndex = 1;

  carouselSectionContainerHtml = `<div class="banner-container"></div>`;

  const carouselSectionContainer = new DOMParser().parseFromString(
    carouselSectionContainerHtml,
    "text/html"
  ).body.firstElementChild;

  // previous button을 추가한다.
  let previousButtonHtml = `
  <button class="banner-btn prevBtn">
    <img
      src="https://static-page.kakao.com/static/pc/ic-paging-back-nor.svg?2c964bb7a6b07a7941252b32ea13f03c"
      alt="prev button"
    />
  </button>
  `;

  const previousButton = new DOMParser().parseFromString(
    previousButtonHtml,
    "text/html"
  ).body.firstElementChild;

  previousButton.addEventListener("click", (e) => {
    showSlides((slideIndex -= 1));
  });

  carouselSectionContainer.insertAdjacentElement("afterbegin", previousButton);

  // slide 부분을 추가한다.
  const bannerFile = await fetch("data/banner.json");
  const bannerList = (await bannerFile.json()).banner;

  const bannerContainerHtml = `
  <div class="slide_box">
    <div class="slide_list">
    </div>
  </div>
  `;
  const bannerContainer = new DOMParser().parseFromString(
    bannerContainerHtml,
    "text/html"
  ).body.firstChild;

  const slideList = bannerContainer.getElementsByClassName("slide_list")[0];

  bannerList.forEach((data) => {
    slideList.insertAdjacentHTML(
      "beforeend",
      `<div class="slide_item slide">
          <img
            src=${data.image}
            alt=${data.description}
          />
        </div>
      `
    );
  });

  carouselSectionContainer.insertAdjacentElement("beforeend", bannerContainer);

  // next button을 추가한다.
  let nextButtonHtml = `
    <button class="banner-btn nextBtn">
      <img
        src="https://static-page.kakao.com/static/pc/ic-paging-next-nor.svg?b76f34a1b77e59514735b92464295b7c"
        alt="next button"
      />
    </button>
    `;
  const nextButton = new DOMParser().parseFromString(
    nextButtonHtml,
    "text/html"
  ).body.firstElementChild;

  nextButton.addEventListener("click", (e) => {
    showSlides((slideIndex += 1));
  });

  carouselSectionContainer.insertAdjacentElement("beforeend", nextButton);
  carouselSection.insertAdjacentElement("beforeEnd", carouselSectionContainer);

  showSlides(1);

  function showSlides(slideNum) {
    let slides = document.getElementsByClassName("slide_item");

    if (slideNum > slides.length) {
      slideIndex = 1;
    }
    if (slideNum < 1) {
      slideIndex = slides.length;
    }
    Array.from(slides).forEach(function (slide) {
      slide.style.display = "none";
    });
    slides[slideIndex - 1].style.display = "flex";
    slides[slideIndex - 1].style.alignItems = "center";
  }
}
