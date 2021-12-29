import createGenres from "./genres.js";
import createBanner from "./banner.js";
import createMenu from "./menu.js";
import createEvent from "./event.js";
import createContentTop from "./content.js";

export default () => {
  const main = document.createElement("main");
  document.body.appendChild(main);

  createGenres();
  createBanner();
  createMenu();
  createEvent();
  createContentTop();
};
