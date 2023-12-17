const c   = document.getElementById("canvas");
const ctx = c.getContext("2d");

let xInPixels;
let yInPixels;

const world = {
    render: function() {
        ctx.clearRect(0, 0, 10000, 10000);
        xInPixels = 10;
        yInPixels = 6;
        ctx.fillStyle = "#83a598";
        ctx.fillRect(xInPixels, yInPixels, xInPixels, yInPixels + 12);
        ctx.fillStyle = "#ebdbb2";
        ctx.font = "18px Consolas";
        // world.typeString("hello", xInPixels, yInPixels + 14);
        world.write("hello", xInPixels, yInPixels + 14);
        world.write("!", xInPixels, yInPixels + 14);
    },
    write: function(string, x, y) {
        ctx.fillText(string, x, y);
        xInPixels += 10 * string.length;
    },
}

world.render();