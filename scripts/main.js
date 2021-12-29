import {
  $,
  changeCssActive,
  changeMainContent,
  changeWebtoonDetailContent,
  changeContentOfDay,
} from "./util.js";
import { createHeader } from "./header.js";
import { createEmptyPage } from "./empty.js";

const main = $(".main");

const initializeHTML = async () => {
  try {
    $(".header").innerHTML = await createHeader();
    main.innerHTML = createEmptyPage();
  } catch (e) {
    throw e;
  }
};

const initializeEvent = () => {
  $(".body").addEventListener("click", changeCssActive);
  $(".nav-container").addEventListener("click", changeMainContent);
  main.addEventListener("click", changeWebtoonDetailContent);
  main.addEventListener("click", changeContentOfDay);
};

(async () => {
  try {
    await initializeHTML();
    initializeEvent();
  } catch (e) {
    alert(e);
  }
})();
