// import "dotenv/config";
import express from "express";
import router from "./router.js";

const app = express();
const PORT = process.env.PORT || 1227;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("src"));

app.use("/", router);

app.listen(PORT, () => {
  console.log(`
  ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
  ┃   Server listening on port: ${PORT}    ┃
  ┃     http://localhost:${PORT}/          ┃
  ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
  `);
});
