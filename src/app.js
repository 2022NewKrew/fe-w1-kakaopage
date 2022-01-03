import express from "express";
import router from "./router.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("src"));
app.use(express.static("src/pages"));

app.use("/", router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});