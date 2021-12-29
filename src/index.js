import createHeader from "./header.js";
import createNav from "./nav.js";
import createMain from "./main/index.js";
import createDownlink from "./downlink.js";
import createFooter from "./footer.js";

function init() {
  createHeader();
  createNav();

  const main = document.createElement("main");
  document.body.appendChild(main);
  createMain();

  createDownlink();
  createFooter();
}

init();
