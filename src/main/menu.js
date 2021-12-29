export default () => {
  const main = document.querySelector("main");

  const section = document.createElement("section");
  section.className = "menu";

  section.innerHTML = `
    <div class="menu-wrapper">
        <a>
            <div>오늘 UP</div>
            <div>190</div>
        </a>
        <a>
            <div>오늘 신작</div>
            <div>2</div>
        </a>
        <a>
            <div>오리지널</div>
            <div>2,186</div>
        </a>

        <a>
            <div>무료회차 UP</div>
        </a>

        <a>
            <div>독립운동가 웹툰</div>
        </a>

        <a>
            <div>오늘 랭킹</div>
            <div>1위</div>
        </a>
    </div> 
        `;

  main.appendChild(section);
};
