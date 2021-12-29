import data from "../../assets/json/genres.json" assert { type: "json" };

export default () => {
  const main = document.querySelector("main");

  const ul = document.createElement("ul");
  ul.className = "genres";
  ul.dataset.current = "홈";

  ul.innerHTML = `
  ${data.genres.map((id) => `<li id=${id}><a href="#">${id}</a></li>`).join("")}
    `;

  main.appendChild(ul);

  ul.addEventListener("click", (e) => {
    const ulEl = document.querySelector("ul.genres");
    const El = e.target.closest("li");

    // 동일한 페이지일 경우
    if (ulEl.dataset.current == El.id) return;

    // 하단 효과를 주는 css 클래스 변경
    ulEl.querySelectorAll("li").forEach((ele) => {
      if (ele.classList.contains("selected")) {
        ele.classList.remove("selected");
      }
      if (El.id === ele.id) {
        ele.classList.add("selected");
      }
    });
    ulEl.dataset.current = El.id;
  });
};
