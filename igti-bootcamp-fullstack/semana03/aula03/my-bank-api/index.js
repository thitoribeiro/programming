var express = require("express");
var fs = require("fs");

var app = express();

app.use(express.json());

app.get("/", function(req, res) {
    res.send("Hello World2!");
});

app.post("/account", (req, res) => {
    let params = req.body;
    console.log("post account");

    // fs.writeFile("accounts.json", JSON.stringify(params), err => {
    //     console.log(err);
    // });
    fs.appendFile("accounts.json", JSON.stringify(params), err => {
        console.log(err);
    });
    
    res.send("post account");
});

app.listen(3000, function() {
    console.log("API started!");
});