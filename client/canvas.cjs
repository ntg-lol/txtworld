const c   = document.getElementById("canvas");
const ctx = c.getContext("2d");

function render() {
    ctx.fillStyle = "#83a598";
    ctx.fillRect(10, 6, 10, 18);
    ctx.fillStyle = "#ebdbb2";
    ctx.font = "18px Consolas";
    ctx.fillText("hello", 10, 20);
}

render();