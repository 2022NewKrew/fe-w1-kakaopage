const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
});

app.get('/style.css', function(req, res) {
    res.sendFile(__dirname + '/style.css');
  });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});