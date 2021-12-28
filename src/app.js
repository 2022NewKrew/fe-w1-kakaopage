import { Footer } from "./components/Footer.js";
import { Header } from "./components/Header.js";
import { WebtoonPage } from "./templates/WebtoonPage.js";

const app = () => {
  const $app = document.querySelector("#app");

  $app.appendChild(Header().$root);
  $app.appendChild(WebtoonPage().$root);
  $app.appendChild(Footer().$root);
};

app();
