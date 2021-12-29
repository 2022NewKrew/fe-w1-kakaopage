import data from "../../assets/json/contentTop.json" assert { type: "json" };

const DAYS = ["월", "화", "수", "목", "금", "토", "일", "완결"];

const isWeek = (title) => title === "요일 연재";

const createArticle = ({ poster, title, count }) =>
  `<article class="upper">
      <a href="#">
        <div class="content__item__post">
          <img src="${poster}" />
          <div>
            <div>TOP</div>
            <img src="assets/images/bmbadge_waitfree.svg"/>
          </div>
        </div>
        <div class="content__item__title">${title}</div>
        <div class="content__item__info">
          <img src="assets/images/업데이트.svg" />
          <img src="assets/images/icon_read_count.png" />
          <span>${count}</span>
        </div>
      </a>
    </article>`;

const createContentTop = (data, title) => {
  const section = document.createElement("section");
  section.classList.add("content");
  if (isWeek(title)) {
    section.classList.add("week");
  }

  section.innerHTML = `
    <div class="content__title">
      <div>
        <h3>${title} TOP</h3>
        ${isWeek(title) ? "<span>(1,553)</span>" : ""}
      </div>
      <div>
        <span>더보기</span>
        <img src="assets/images/ic-more-gray.svg"/>
      </div>
    </div>
    ${
      isWeek(title)
        ? `
      <ul class="content__list" data-current="월">
        ${DAYS.map(
          (day) =>
            `<li id=${day} ${
              day === "월" ? `class="selected"` : ""
            }><div>${day}</div></li>`
        ).join("")}
      </ul>`
        : ""
    }
    <div class="content__item">
      ${data.map(createArticle).join("")}
    </div>
  `;
  return section;
};

export default () => {
  const main = document.querySelector("main");

  const weekContent = createContentTop(data.week.월, "요일 연재");
  const romanceTop = createContentTop(data.romance, "로맨스");
  const rofanTop = createContentTop(data.rofan, "로판");
  const dramaTop = createContentTop(data.drama, "드라마");
  const blglTop = createContentTop(data.BL_GL, "BL/GL");
  const boyTop = createContentTop(data.boy, "소년");
  const actionTop = createContentTop(data.action, "액션무협");

  main.append(
    weekContent,
    romanceTop,
    rofanTop,
    dramaTop,
    blglTop,
    boyTop,
    actionTop
  );

  const weekEl = document.querySelector(".content__list");
  weekEl.addEventListener("click", (e) => {
    const El = e.target.closest("li");

    // 동일한 페이지일 경우
    if (weekEl.dataset.current == El.id) return;

    // 하단 효과를 주는 css 클래스 변경
    document.querySelectorAll(".content__list > li").forEach((ele) => {
      if (ele.classList.contains("selected")) {
        ele.classList.remove("selected");
      }
      if (El.id === ele.id) {
        ele.classList.add("selected");
      }
    });
    weekEl.dataset.current = El.id;
    document.querySelector(".content__item").innerHTML = `
    ${data.week[El.id].map(createArticle).join("")}
    `;
  });
};
