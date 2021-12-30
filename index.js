const express = require("express");
const app = express();

app.set("views", __dirname + "/");
app.engine("html", require("ejs").renderFile);

app.get("/", function (req, res) {
  res.render("index.html");
});

app.use("/", express.static(__dirname + "/"));

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Server is working : PORT - ", port);
});
