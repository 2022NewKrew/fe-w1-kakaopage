export default () => {
  const main = document.querySelector("main");

  const section = document.createElement("section");
  section.className = "banner";

  section.innerHTML = `
    <div class="banner-wrapper">
        <div class="banner__content">
            <div class="banner__title">천하제일 표사</div>
            <div class="banner__subtitle">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span>29.7만명</span>
            </div>
        </div>
    </div>
    <a href="#">최강 표국을 세우기 위해 뭉쳤다!</a>
    `;

  main.appendChild(section);
};
