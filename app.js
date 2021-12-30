import express from "express";
import path from "path";

const app = express();
const __dirname = path.resolve();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.use(express.static(path.join(__dirname, "src")));

app.listen(3000, () => {
    console.log("running on 3000 port");
});
