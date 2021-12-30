import carouselEvent from "../utils/carousel.js";

export default (data) => {
  const main = document.querySelector("main");

  const section = document.createElement("section");
  section.className = "event";

  section.innerHTML = `
    <div class="carousel">
        <div class="container">
            <div class="slide">
              ${data.map((ele) => `<img src="${ele}"/>`).join("")}
            </div>
        </div>
        <button class="prev prev-white"></button>
        <button class="next next-white"></button>
    </div>
    `;

  main.appendChild(section);

  carouselEvent(section, 3, 550);
};
