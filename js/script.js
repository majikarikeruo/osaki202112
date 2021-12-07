const parent = window.parent.document;
const table = parent.querySelectorAll("#table input");

const ary = [];
table.forEach((item) => {
  ary.push(item.value);
});
console.log(table, ary);

let img, bgImage;
let imgX = 0;
let imgY = 0;

let array = [
  [0, 0, 1, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 0, 0, 0, 0],
  [1, 0, 1, 1, 1, 0, 1, 0],
  [1, 0, 0, 0, 0, 0, 1, 0],
  [1, 0, 1, 1, 1, 0, 1, 0],
  [0, 0, 0, 1, 1, 0, 1, 0],
  [0, 1, 0, 0, 0, 0, 1, 0],
  [0, 1, 0, 1, 1, 0, 1, 0],
];

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
}

function preload() {
  img = loadImage("stamp18.png");
  bgImage = loadImage("wall.png");
}

function draw() {
  background(220);
  bgRefresh();
  image(img, 0, 0, 40, 40);
}

// 背景をループで表示させている箇所
function bgRefresh() {
  background(240);
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (array[j][i] === 1) {
        image(bgImage, i * 40, j * 40, 40, 40);
      }
    }
  }
}

function setButton(label, pos) {
  const button = createButton(label);
  button.size(80, 30);
  button.position(pos.x, pos.y);
  return button;
}
