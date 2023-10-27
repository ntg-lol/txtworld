const express          = require("express");
const { createServer } = require("http");
const { Server }       = require("socket.io");

const app     = express();
const server  = createServer(app);
const io      = new Server(server);

app.use("/static", express.static(__dirname + "/client/"));

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/client/index.html");
});

io.on("connection", (socket) => {
    console.log("connection");
});

app.listen(3000, ()=>{
    console.log("started on 3000");
});