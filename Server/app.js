const express = require("express")
const app = express()

app.set("View Engine", "ejs")

app.get("/", (req, res)=>{
    console.log("Here");
    res.render("../Client/index.ejs")
});

app.listen(3000)