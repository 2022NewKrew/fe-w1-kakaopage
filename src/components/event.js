import carouselEvent from "../utils/carousel.js";

export default () => {
  const main = document.querySelector("main");

  const section = document.createElement("section");
  section.className = "event";

  section.innerHTML = `
    <div class="carousel">
        <div class="container">
            <div class="slide">
                <img src="assets/images/event1.png" >
                <img src="assets/images/event2.png" >
                <img src="assets/images/event3.png" >
            </div>
        </div>
        <button class="prev"></button>
        <button class="next"></button>
    </div>
    `;

  main.appendChild(section);

  carouselEvent(section, 3, 550);
};
