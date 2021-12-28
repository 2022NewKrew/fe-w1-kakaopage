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

function menuNavigation() {
  const menus = document.getElementById("navigation");
  menus.addEventListener("click", (e) => {
    const menuId = e.target.getAttribute("data-tab-id");
    if (menuId) {
      const menu = document.getElementById(menuId).parentNode;
      makeMenuYellow(menu);
    } else {
      return;
    }
  });
}

menuNavigation();

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
