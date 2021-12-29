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

// 메뉴 관련
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

// 메뉴 기반 html 페이지 불러오기
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

// 웹툰 페이지 초기화
function webtoonInit() {
  // 장르 setup
  const genres = document.getElementById("genres");
  createGenre(genres);

  createTopRanking();

  showSlides(1);
}

// 장르 탭 생성
async function createGenre(genres) {
  const genreFile = await fetch("data/genres.json");
  const genreList = (await genreFile.json()).genres;
  await genreList.forEach((data) => {
    genres.insertAdjacentHTML(
      "beforeend",
      `<li class="genre">${data.title}</li>`
    );
  });
  // 각 장르별 이벤트리스너 추가
  genres.addEventListener("click", (e) => {
    const genre = e.target;
    createGenreActive(genre);
  });
  genres.firstElementChild.classList.add("active-genre");
}

// 장르 메뉴 선택시 색 변경
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

// 요일 연재 TOP 컴포넌트
async function createTopRanking() {
  const weekTab = document.getElementById("daily-ranking-tabs-container");
  const weekFile = await fetch("data/week.json");
  const weekList = (await weekFile.json()).week;
  // 각 요일 탭 추가
  weekList.forEach((data) => {
    weekTab.insertAdjacentHTML(
      "beforeend",
      `<li class="daily-ranking-tab" id=${data.english}>${data.weekday}</li>`
    );
  });
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
  weekTab.firstChild.classList.add("active-weekday");
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

// banner carousel
let slideIndex = 1;

function updateSlides(slideNum) {
  showSlides((slideIndex += slideNum));
}

function currentSlide(slideNum) {
  showSlides((slideIndex = slideNum));
}

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
