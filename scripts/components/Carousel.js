//TODO: Carousel 동작 구현시 contents 전체를 순회할 수 있도록 수정
export default function Carousel (data) {
    const { contents } = data;
    const { img, title, badge, isWebtoon, viewers, description } = contents[0];
    const $carousel = document.createElement('div');

    $carousel.classList.add("carousel");
    $carousel.innerHTML = `
         <img class="carousel-main-img" src= "${img}">
         <img class="carousel-btn carousel-next-btn" src="../../images/next%20button.svg">
         <img class="carousel-btn carousel-prev-btn" src="../../images/previous%20button.svg">
         <div class="carousel-introduce">
             <p class="carousel-title">${title}</p>
             <div class="carousel-script">
                 <div class="carousel-detail">
                     <img class="carousel-detail-badge" src="${badge}">
                     ${ isWebtoon ? `<img class=carousel-detail-wait" src="../../images/ico-bigthum-wait.svg">
                     <span>웹툰</span>
                     <img class="carousel-detail-separator" src="../../images/Seperator.png">
                     <img class="carousel-detail-person" src="../../images/ico-bigthum-person.svg">
                     <span>` + viewers + `</span>` : ``}
                 </div>
                 <p class="carousel-counter">1 / 5</p>
             </div>
             <div class="carousel-summary">
                 <p>${description}</p>
             </div>
         </div>`

    return $carousel;
}