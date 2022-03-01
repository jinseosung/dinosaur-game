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
let jumptimer = 0;
var animation;

function eachFrame() {
  animation = requestAnimationFrame(eachFrame);
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

    touch(dino, a);

    a.draw();
  });

  if (jump == true) {
    dino.y--;
    jumptimer++;
  }
  if (jump == false) {
    if (dino.y < 200) {
      dino.y++;
    }
  }
  if (jumptimer > 100) {
    jump = false;
    jumptimer = 0;
  }

  dino.draw();
}

eachFrame();

function touch(dino, cactus) {
  var differencex = cactus.x - (dino.x + dino.width);
  var differencey = cactus.y - (dino.y + dino.height);
  if (differencex < 0 && differencey < 0) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    cancelAnimationFrame(animation);
  }
}

var jump = false;

document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    jump = true;
  }
});
