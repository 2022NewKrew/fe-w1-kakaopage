import createGenres from "./genres.js";
import createBanner from "./banner.js";
import createMenu from "./menu.js";
import createEvent from "./event.js";
import createContentTop from "./content.js";

export default () => {
  createGenres();
  createBanner();
  createMenu();
  createEvent();
  createContentTop();
};
