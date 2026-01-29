// Sample TS document for testing
let canvas = document.createElement("canvas");
canvas.width = 400;
canvas.height = 400;
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");
if (!ctx) throw new Error("Canvas not supported");

let x = canvas.width / 2;
let y = canvas.height / 2;
let radius = 30;
let dx = 2;
let dy = 2;

function drawCircle() {
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = "skyblue";
    ctx.fill();
    ctx.strokeStyle = "blue";
    ctx.stroke();
    ctx.closePath();

    x += dx;
    y += dy;

    if (x + radius > canvas.width || x - radius < 0) dx = -dx;
    if (y + radius > canvas.height || y - radius < 0) dy = -dy;

    requestAnimationFrame(drawCircle);
}

// Start animation
drawCircle();
