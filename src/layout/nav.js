import data from "../../assets/json/nav.json" assert { type: "json" };
import createMain from "../components/main.js";

const DEFAULT_PAGE = "웹툰_만화";

export default () => {
  const nav = document.createElement("nav");
  nav.dataset.current = DEFAULT_PAGE;
  nav.innerHTML = `
    <ul>
        ${data.nav
          .map(
            ({ id, url }) =>
              `
            <li id=${id} ${id === DEFAULT_PAGE ? `class="selected"` : ""}>
                <a href="#"><img src="${url}" /></a>
            </li>
            `
          )
          .join("")}
    </ul>
    `;

  document.body.appendChild(nav);

  nav.addEventListener("click", (e) => {
    const navEl = document.querySelector("nav");
    const El = e.target.closest("li");

    // 동일한 페이지일 경우
    if (navEl.dataset.current == El.id) return;

    // 하단 효과를 주는 css 클래스 변경
    document.querySelectorAll("nav > ul > li").forEach((ele) => {
      if (ele.classList.contains("selected")) {
        ele.classList.remove("selected");
      }
      if (El.id === ele.id) {
        ele.classList.add("selected");
      }
    });
    const mainEl = document.querySelector("main");
    // 기본 페이지인 경우
    if (El.id == DEFAULT_PAGE) {
      mainEl.innerHTML = "";
      createMain();
    } else {
      // 다른 페이지인 경우
      mainEl.innerHTML = `
        <div>
          <img class="emptyImg" src="assets/images/서비스준비중.jpeg" />
        </div>
      `;
    }
    navEl.dataset.current = El.id;
  });
};
