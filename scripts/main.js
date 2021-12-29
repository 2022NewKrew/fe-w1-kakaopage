import { $, changeCssActive, changeMainContent } from "./util.js";
import { createHeader } from "./header.js";
import { createEmptyPage } from "./empty.js";

const initializeHTML = async () => {
  try {
    $(".header").innerHTML = await createHeader();
    $(".main").innerHTML = createEmptyPage();
  } catch (e) {
    alert(e);
  }
};

const initializeEvent = () => {
  $(".nav-container").addEventListener("click", changeMainContent);
  $(".body").addEventListener("click", changeCssActive);
};

(async () => {
  await initializeHTML();
  initializeEvent();
})();
