import data from "../../assets/json/contentTop.json" assert { type: "json" };

const createContentTop = (data, title) => {
  const section = document.createElement("section");
  section.className = "content";

  const articles = data
    .map(
      (ele) =>
        `<article>
      <a href="#">
        <div class="content__item__post">
          <img src="${ele.poster}" />
          <div>
            <div>TOP</div>
            <img src="assets/images/bmbadge_waitfree.svg"/>
          </div>
        </div>
        <div class="content__item__title">${ele.title}</div>
        <div class="content__item__info">
          <img src="assets/images/업데이트.svg" />
          <img src="assets/images/icon_read_count.png" />
          <span>${ele.count}</span>
        </div>
      </a>
    </article>`
    )
    .join("");

  section.innerHTML = `
    <div class="content__title">
      <div><h3>${title} TOP</h3></div>
      <div>
        <span>더보기</span>
        <img src="assets/images/ic-more-gray.svg"/>
      </div>
    </div>
    <div class="content__item">
      ${articles}
    </div>
  `;
  return section;
};

export default () => {
  const main = document.querySelector("main");

  const romanceTop = createContentTop(data.romance, "로맨스");
  const rofanTop = createContentTop(data.rofan, "로판");
  const dramaTop = createContentTop(data.drama, "드라마");
  const blglTop = createContentTop(data.BL_GL, "BL/GL");
  const boyTop = createContentTop(data.boy, "소년");
  const actionTop = createContentTop(data.action, "액션무협");

  main.append(romanceTop, rofanTop, dramaTop, blglTop, boyTop, actionTop);
};
