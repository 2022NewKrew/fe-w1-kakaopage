export default (htmlEl, totalImages, imageWidth) => {
  let curPos = 0; // 현재 보여주는 이미지의 인덱스 번호
  const TOTAL_IMAGES = totalImages; // 전체 이미지 개수
  const IMAGE_WIDTH = imageWidth; // 이미지 가로 너비

  const prevBtn = htmlEl.querySelector(".prev");
  const nextBtn = htmlEl.querySelector(".next");
  const slide = htmlEl.querySelector(".slide");

  // 맨 앞 맨 뒤에 추가
  const clonedFirst = slide.firstElementChild.cloneNode(true);
  const clonedLast = slide.lastElementChild.cloneNode(true);
  slide.appendChild(clonedFirst);
  slide.insertBefore(clonedLast, slide.firstElementChild);

  slide.style.transform = `translateX(-${IMAGE_WIDTH}px)`;

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
};
