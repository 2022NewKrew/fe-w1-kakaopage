import express from "express";
import path from "path";
import database from "./src/data/mainPageData.json"

const app = express();
const PORT = process.env.PORT || 8080;

const __dirname = path.resolve();
app.use(express.static("src"));

app.get('/', (req, res) => {
    console.log("GET /");
    res.sendFile(__dirname + "/index");
})

app.get('/bigCarousel', (req, res) => {
    const data = database[req.query.nav][req.query.genre];
    console.log(data);
    res.send(data);
})

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
})