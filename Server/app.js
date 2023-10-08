const express = require("express")
const path = require("path")
const app = express()

app.use(express.static(__dirname + '/public'));
console.log(__dirname + '/public')
app.set("View Engine", "ejs")

app.get("/", (req, res)=>{
    console.log("/");
    res.render("../Client/index.ejs")
});

app.get("/new", (req, res)=>{
    console.log("/new");
    res.render("../Client/new.ejs")
});

app.listen(3000)