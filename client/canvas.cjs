const c   = document.getElementById("canvas");
const ctx = c.getContext("2d");

function render() {
    ctx.fillStyle = "#ffff00";
    ctx.fillRect(10, 6, 8, 18);
    ctx.fillStyle = "#000000";
    ctx.font = "18px Consolas";
    ctx.fillText("hello", 10, 20);
}

render();