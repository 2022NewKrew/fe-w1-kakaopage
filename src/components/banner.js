import carouselEvent from "../utils/carousel.js";

export default (data) => {
  const main = document.querySelector("main");

  const section = document.createElement("section");
  section.className = "banner";

  section.innerHTML = `
  <div class="carousel">
    <div class="container">
      <div class="slide">
        ${data
          .map(
            ({ poster, title, count, link }) => `
          <div class="banner-wrapper">
            <div class="banner-poster">
              <img src="${poster}" />
              <div class="banner__content">
                <div class="banner__title">${title}</div>
                <div class="banner__subtitle">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span>${count}</span>
                </div>
              </div>
            <div class="banner-link"><a href="#">${link}</a></div>
          </div>  
        </div>       
        `
          )
          .join("")}
    </div>
    </div>
    <button class="prev prev-black"></button>
    <button class="next next-black"></button>
  </div>

    
    `;

  main.appendChild(section);

  carouselEvent(section, 5, 720);
};
