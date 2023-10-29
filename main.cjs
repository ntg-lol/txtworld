console.log("[start] starting up...")

console.log("[start] importing modules...")
const express          = require("express");
const { createServer } = require("http");
const { Server }       = require("socket.io");

console.log("[start] creating server...")
const app     = express();
const server  = createServer(app);
const io      = new Server(server);

console.log("[start] creating middleware...")
app.use("/static", express.static(__dirname + "/client/"));

console.log("[start] sending index.html file...")
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/client/index.html");
});

console.log("[start] creating socket.io listener...")
io.on("connection", (socket) => {
    console.log("[socket] connection");
});

console.log("[start] listening...")
app.listen(3000, () => {
    console.log("[start] started on 3000");
});