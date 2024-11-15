const canvas = document.querySelector("#canvas");
const toolbar = document.querySelector("#toolbar");
const inputColor = document.querySelector("input[type='color']");
const inputLineWidth = document.querySelector("input[type='number']");
const resetButton = document.querySelector("button");
const container = document.querySelector("#container");

const ctx = canvas.getContext("2d");

function setCanvasSize() {
  canvas.width = container.offsetWidth;
  canvas.height = container.offsetHeight - toolbar.offsetHeight;
}

setCanvasSize();
window.addEventListener("resize", setCanvasSize);

const canvasOffsetX = canvas.offsetLeft;
const canvasOffsetY = canvas.offsetTop;

let startX;
let startY;
let lineWidth = 2;
let isDrawing = false;

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  startX = e.clientX;
  startY = e.clientY;
});

canvas.addEventListener("mouseup", (e) => {
  isDrawing = false;
  ctx.beginPath();
});

canvas.addEventListener("mousemove", (e) => {
  if (!isDrawing) return;

  ctx.lineWidth = lineWidth;
  ctx.lineCap = "round";
  ctx.strokeStyle = inputColor.value || "#000000";

  ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
});

resetButton.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

toolbar.addEventListener("change", (e) => {
  console.log(e.target.value);
  if (e.target.id == "stroke") {
    ctx.strokeStyle = e.target.value;
  } else if (e.target.id === "lidth") {
    lineWidth = e.target.value;
  }
});
