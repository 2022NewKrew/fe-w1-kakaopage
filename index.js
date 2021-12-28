import express from "express";
import path from "path";

const app = express();
const PORT = process.env.PORT || 8080;

const __dirname = path.resolve();
app.use(express.static("src"));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/src/index.html");
})

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
})