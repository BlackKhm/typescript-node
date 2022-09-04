"use strict";
const epxress = require("express");
const app = epxress();
const hostName = "127.0.0.1";
const port = 3000;
app.set('view engine', 'ejs');
// app.use(express.static('public'));
app.get('/', function (req, res) {
    res.render("index", { name: "" });
});
app.listen(port, hostName, function () {
    console.log(`Serve runnign at http://${hostName}:${port}`);
});
