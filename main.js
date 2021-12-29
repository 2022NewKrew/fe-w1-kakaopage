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

  webtoonInit();
}

function init() {
  const menus = document.getElementById("navigation");

  // 초기 페이지
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

function webtoonInit() {
  // 각 장르별 이벤트리스너 추가
  const genres = document.getElementById("genres");
  genres.addEventListener("click", (e) => {
    const genre = e.target;
    makeGenreActive(genre);
  });

  topRanking();

  showSlides(1);
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

// 장르 메뉴 선택시 색 변경
function makeGenreActive(genre) {
  const genres = document.getElementsByClassName("genre");
  Array.from(genres).forEach((e) => {
    if (e.classList.contains("active-genre")) {
      e.classList.remove("active-genre");
      return;
    }
  });
  genre.classList.add("active-genre");
}

// 요일 연재 TOP 컴포넌트 추가
function topRanking() {
  let dailyContainer = document.getElementsByClassName(
    "daily-ranking-contents-container"
  )[0];

  for (i = 0; i < 9; i++) {
    let dailytop = document.getElementsByClassName("daily-ranking-content")[0];
    dailyContainer.appendChild(dailytop.cloneNode(true));
  }
}
