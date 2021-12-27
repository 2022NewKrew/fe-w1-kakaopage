import express from "express";
import path from "path";
const __dirname = path.resolve();

const router = express.Router();

router.get("/", (req, res, next) => {
  res.sendFile(__dirname + "/src/app.html");
});

export default router;
