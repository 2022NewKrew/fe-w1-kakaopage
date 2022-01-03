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

const setup = () => {
  for(let i = 0; i < sliderCount; i++){
    let item = sliderItems[i];
    let left = 720 * i;
    item.style.left = left + 'px';
  }
  showCurrentPageNumber();
}

const onLeft = () => {
  if(currentItem > 0){
    currentItem--;
  }
  adjustPosition();
  showCurrentPageNumber();}

const onRight = () => {
  if(currentItem < sliderCount - 1){
    currentItem++;
  }
  adjustPosition();
  showCurrentPageNumber();
}

document.addEventListener("DOMContentLoaded", function(){
  setup();
  document.getElementById("carousel-prev").addEventListener("click", onLeft);
  document.getElementById("carousel-next").addEventListener("click", onRight);
});

