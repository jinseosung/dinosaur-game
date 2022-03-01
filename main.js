const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

const dino = {
  x: 10,
  y: 200,
  width: 50,
  height: 50,
  draw() {
    ctx.fillStyle = "green";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  },
};

class Cactus {
  constructor() {
    this.x = 500;
    this.y = 200;
    this.width = 50;
    this.height = 50;
  }
  draw() {
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

let timer = 0;
let cactusgroup = [];

function eachFrame() {
  requestAnimationFrame(eachFrame);
  timer++;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (timer % 100 === 0) {
    var cactus = new Cactus();
    cactusgroup.push(cactus);
  }

  cactusgroup.forEach((a, i, o) => {
    // if x < 0 => remove
    if (a.x < 0) {
      o.splice(i, 1);
    }
    a.x--;
    a.draw();
  });

  dino.draw();
}

eachFrame();
