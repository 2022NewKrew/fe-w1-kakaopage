export default () => {
  const main = document.querySelector("main");

  const ul = document.createElement("ul");
  ul.className = "genres";

  ul.innerHTML = `
    <li><a href="#">홈</a></li>
    <li><a href="#">요일연재</a></li>
    <li><a href="#">웹툰</a></li>
    <li><a href="#">소년</a></li>
    <li><a href="#">드라마</a></li>
    <li><a href="#">로맨스</a></li>
    <li><a href="#">로판</a></li>
    <li><a href="#">액션무협</a></li>
    <li><a href="#">BL</a></li>
      `;

  main.appendChild(ul);
};
