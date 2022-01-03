import express from "express";
import path from "path";
const __dirname = path.resolve();

const router = express.Router();

router.use("/", (req, res, next) => {
  req.url = decodeURIComponent(req.url);
  next();
});

router.get("/", (req, res) => {
  res.sendFile(__dirname + "/src/pages/index.html");
});

router.get("/dummy", (req, res) => {
  res.sendFile(__dirname + "/src/pages/dummy.html");
});

export default router;