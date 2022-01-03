const sliderItems = document.getElementsByClassName("slider-item");
const sliderCount = sliderItems.length;
let currentItem = 0;

const showCurrentPageNumber = () => {
  document.getElementById("current-page").innerHTML = `${currentItem + 1} / ${sliderCount}`;
}

const adjustPosition = () => {
  for(let i = 0; i < sliderCount; i++){
    let item = sliderItems[i];
    let left = 720 * (i - currentItem);
    item.style.left = left + 'px';
  }
}

const setupSlider = () => {
  for(let i = 0; i < sliderCount; i++){
    let item = sliderItems[i];
    let left = 720 * i;
    item.style.left = left + 'px';
  }
  showCurrentPageNumber();
}

const onLeft = () => {
  currentItem = currentItem > 0 ? currentItem - 1 : sliderCount - 1;
  adjustPosition();
  showCurrentPageNumber();
}

const onRight = () => {
  currentItem = currentItem < sliderCount - 1 ? currentItem + 1 : 0;
  adjustPosition();
  showCurrentPageNumber();
}

document.addEventListener("DOMContentLoaded", function(){
  setupSlider();
  document.getElementById("carousel-prev").addEventListener("click", onLeft);
  document.getElementById("carousel-next").addEventListener("click", onRight);
  setInterval(onRight, 3000);
});

