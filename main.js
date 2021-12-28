// banner carousel
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide_item");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
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
