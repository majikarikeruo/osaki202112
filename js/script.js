const parent = window.parent.document;
const x = parent.querySelector("#x").value;
const y = parent.querySelector("#y").value;
const buttonW = parent.querySelector("#button-w").value;
const buttonH = parent.querySelector("#button-h").value;

let img;

function setup() {
  const canvas = createCanvas(320, 350);
  const area = document.querySelector("#canvasArea");
  canvas.parent(area);
  const leftButton = setButton("←", {
    x: x,
    y: y,
  });

  leftButton.parent(area);
}

function preload() {
  img = loadImage("stamp18.png");
}

function draw() {
  background(220);
  image(img, 0, 0, 40, 40);
}

function setButton(label, pos) {
  const button = createButton(label);
  button.size(buttonW, buttonH);
  button.position(pos.x, pos.y);
  return button;
}
