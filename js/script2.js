const parent = window.parent.document;
const pos1 = parent.querySelector("#pos1").value;
const gainloss1 = parent.querySelector("#gainloss1").value;
const pos2 = parent.querySelector("#pos2").value;
const gainloss2 = parent.querySelector("#gainloss2").value;
const pos3 = parent.querySelector("#pos3").value;
const gainloss3 = parent.querySelector("#gainloss3").value;
const pos4 = parent.querySelector("#pos4").value;
const gainloss4 = parent.querySelector("#gainloss4").value;

let img;
let imgX = 0;
let imgY = 0;

function setup() {
  const canvas = createCanvas(320, 350);
  const area = document.querySelector("#canvasArea");
  canvas.parent(area);
  const leftButton = setButton("←", {
    x: 0,
    y: 320,
  });
  const topButton = setButton("↑", {
    x: 80,
    y: 320,
  });
  const rightButton = setButton("→", {
    x: 160,
    y: 320,
  });
  const bottomButton = setButton("↓", {
    x: 240,
    y: 320,
  });

  leftButton.parent(area);
  topButton.parent(area);
  rightButton.parent(area);
  bottomButton.parent(area);

  leftButton.mousePressed(function () {
    if (pos1 === "imgX" && gainloss1 === "増える") {
      imgX += 40;
    } else if (pos1 === "imgX" && gainloss1 === "減る") {
      imgX -= 40;
    } else if (pos1 === "imgY" && gainloss1 === "増える") {
      imgY += 40;
    } else if (pos1 === "imgY" && gainloss1 === "減る") {
      imgY -= 40;
    }
  });
  topButton.mousePressed(function () {
    if (pos2 === "imgX" && gainloss2 === "増える") {
      imgX += 40;
    } else if (pos2 === "imgX" && gainloss2 === "減る") {
      imgX -= 40;
    } else if (pos2 === "imgY" && gainloss2 === "増える") {
      imgY += 40;
    } else if (pos2 === "imgY" && gainloss2 === "減る") {
      imgY -= 40;
    }
  });
  rightButton.mousePressed(function () {
    if (pos3 === "imgX" && gainloss3 === "増える") {
      imgX += 40;
    } else if (pos3 === "imgX" && gainloss3 === "減る") {
      imgX -= 40;
    } else if (pos3 === "imgY" && gainloss3 === "増える") {
      imgY += 40;
    } else if (pos3 === "imgY" && gainloss3 === "減る") {
      imgY -= 40;
    }
  });
  bottomButton.mousePressed(function () {
    if (pos4 === "imgX" && gainloss4 === "増える") {
      imgX += 40;
    } else if (pos4 === "imgX" && gainloss4 === "減る") {
      imgX -= 40;
    } else if (pos4 === "imgY" && gainloss4 === "増える") {
      imgY += 40;
    } else if (pos4 === "imgY" && gainloss4 === "減る") {
      imgY -= 40;
    }
  });
}
function preload() {
  img = loadImage("stamp18.png");
}
function draw() {
  background(220);
  image(img, imgX, imgY, 40, 40);
}

function setButton(label, pos) {
  const button = createButton(label);
  button.size(80, 30);
  button.position(pos.x, pos.y);
  return button;
}
