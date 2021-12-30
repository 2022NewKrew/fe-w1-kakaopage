import { Footer } from "../components/Footer.js";
import { Header } from "../components/Header.js";
import { WebtoonPage } from "../templates/WebtoonPage.js";

const app = () => {
  const $app = document.querySelector("#app");

  $app.appendChild(Header());
  $app.appendChild(WebtoonPage());
  $app.appendChild(Footer());
};

app();
