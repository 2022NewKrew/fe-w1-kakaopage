function makeMenuYellow(menu) {
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
  const main = document.getElementById("hello");
  let tab = "webtoon.html";
  if (menu === "webtoon-tab") {
    tab = "webtoon.html";
  } else {
    tab = "dummy.html";
  }
  const menuFile = await fetch(tab);
  const text = await menuFile.text();
  main.innerHTML = text;
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
      makeMenuYellow(menu);
      loadMenu(menuId);
    } else {
      return;
    }
  });
}

init();

// banner carousel
let slideIndex = 1;
showSlides(slideIndex);

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

// 요일 연재 TOP
// 웹툰 복제하기
let dailyContainer = document.getElementsByClassName(
  "daily-ranking-contents-container"
)[0];

for (i = 0; i < 9; i++) {
  let dailytop = document.getElementsByClassName("daily-ranking-content")[0];
  dailyContainer.appendChild(dailytop.cloneNode(true));
}
