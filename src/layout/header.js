export default () => {
  const header = document.createElement("header");

  header.innerHTML = `
    <div class="header-wrapper">
        <div>
            <h1 class="logo">
            <img src="assets/images/kakaopage logo.svg" />
            </h1>
            <div class="tap">
            <div class="tap-wrapper">
                <div class="searchbar">
                <input type="text" />
                <span></span>
                </div>
                <div class="stage-wrapper">
                <a href="#">
                    <img src="assets/images/스테이지.svg" />
                </a>
                <img src="assets/images/stage-tooltip.svg" />
                </div>
                <div class="tab-menu">
                <a href="#">캐쉬충전</a>
                <span></span>
                <a href="#">로그인</a>
                </div>
            </div>
            </div>
        </div>
    </div>
  `;

  document.body.appendChild(header);
};
