var express = require("express");
var app = express();

// app.get("/", function(req, res) {
//     res.send("Hello World2!");
// });

app.post("/account", (req, res) => {
    console.log("post account");
});

app.listen(3000, function() {
    console.log("API started!");
});