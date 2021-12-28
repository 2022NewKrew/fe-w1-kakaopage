import data from "../json/contentTop.json" assert { type: "json" };

const createContentTop = (data, title) => {
  const section = document.createElement("section");
  section.className = "content";

  const contentTitle = document.createElement("div");
  contentTitle.className = "content__title";

  const div1 = document.createElement("div");
  const h3 = document.createElement("h3");
  h3.textContent = `${title} TOP`;

  div1.appendChild(h3);

  const div2 = document.createElement("div");
  let span = document.createElement("span");
  span.textContent = "더보기";

  const moreImg = document.createElement("img");
  moreImg.src = "images/ic-more-gray.svg";

  div2.append(span, moreImg);

  contentTitle.append(div1, div2);

  const contentItem = document.createElement("div");
  contentItem.className = "content__item";
  data.forEach((ele) => {
    const article = document.createElement("article");
    const container = document.createElement("a");
    container.href = "#";
    const contentItemPost = document.createElement("div");
    contentItemPost.className = "content__item__post";

    const poster = document.createElement("img");
    poster.src = ele.poster;

    let box = document.createElement("div");
    let div = document.createElement("div");
    div.textContent = "TOP";
    const clockImg = document.createElement("img");
    clockImg.src = "images/bmbadge_waitfree.svg";

    box.append(div, clockImg);
    contentItemPost.append(poster, box);

    const contentItemTitle = document.createElement("div");
    contentItemTitle.className = "content__item__title";
    contentItemTitle.textContent = ele.title;

    const contentItemInfo = document.createElement("div");
    contentItemInfo.className = "content__item__info";

    const upImg = document.createElement("img");
    upImg.src = "./images/업데이트.svg";
    const countImg = document.createElement("img");
    countImg.src = "./images/icon_read_count.png";
    const count = document.createElement("span");
    count.textContent = ele.count;

    contentItemInfo.append(upImg, countImg, count);

    container.append(contentItemPost, contentItemTitle, contentItemInfo);
    article.append(container);
    contentItem.append(article);
  });

  section.append(contentTitle, contentItem);
  return section;
};

const init = () => {
  const main = document.querySelector("main");

  const romanceTop = createContentTop(data.romance, "로맨스");
  const rofanTop = createContentTop(data.rofan, "로판");
  const dramaTop = createContentTop(data.drama, "드라마");
  const blglTop = createContentTop(data.BL_GL, "BL/GL");
  const boyTop = createContentTop(data.boy, "소년");
  const actionTop = createContentTop(data.action, "액션무협");

  main.append(romanceTop, rofanTop, dramaTop, blglTop, boyTop, actionTop);
};

export default init;
