import { Footer } from "../components/Footer.js";
import { Header } from "../components/Header.js";
import { DummyPage } from "../templates/DummyPage.js";

const app = () => {
  const $app = document.querySelector("#app");

  $app.appendChild(Header());
  $app.appendChild(DummyPage());
  $app.appendChild(Footer());
};

app();
