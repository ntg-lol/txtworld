const express = require("express");
const fs      = require("fs");

const app     = express();

app.use("/static", express.static(__dirname + "/client/"));

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/client/index.html");
});

app.listen(3000, ()=>{
    console.log("started on 3000");
});