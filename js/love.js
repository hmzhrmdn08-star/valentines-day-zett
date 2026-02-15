const canvas = document.getElementById("loveCanvas");
const ctx = canvas.getContext("2d");

function resize(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

/* =========================
   HEART CLASS
========================= */
class Heart{
  constructor(){
    this.reset();
  }

  reset(){
    this.x = Math.random() * canvas.width;
    this.y = canvas.height + Math.random()*150;

    // ukuran random (depth)
    this.size = 6 + Math.random()*34;

    // gerak lebih cepat
    this.vx = (Math.random()-0.5) * 2;
    this.vy = -(1 + Math.random()*2.2);

    // goyangan
    this.swing = Math.random()*Math.PI*2;
    this.swingSpeed = 0.02 + Math.random()*0.05;

    // transparansi random
    this.alpha = 0.08 + Math.random()*0.75;

    // blur random
    this.blur = Math.random()*10;

    const pinks = [
      "255,80,180",
      "255,40,160",
      "255,120,200",
      "255,20,147"
    ];
    this.color = pinks[Math.floor(Math.random()*pinks.length)];
  }

  update(){
    this.swing += this.swingSpeed;

    this.x += this.vx + Math.sin(this.swing)*0.8;
    this.y += this.vy;

    if(this.y < -60){
      this.reset();
      this.y = canvas.height + 40;
    }
  }

  draw(){
    ctx.save();

    ctx.translate(this.x,this.y);
    ctx.scale(this.size/20,this.size/20);

    ctx.globalAlpha = this.alpha;
    ctx.shadowBlur = this.blur + 5;
    ctx.shadowColor = `rgba(${this.color},0.8)`;

    drawHeart();
    ctx.restore();
  }
}

/* =========================
   DRAW HEART
========================= */
function drawHeart(){
  ctx.beginPath();
  ctx.moveTo(0,-4);

  ctx.bezierCurveTo(0,-14,-20,-14,-20,-2);
  ctx.bezierCurveTo(-20,10,0,18,0,25);

  ctx.bezierCurveTo(0,18,20,10,20,-2);
  ctx.bezierCurveTo(20,-14,0,-14,0,-4);

  ctx.fillStyle = "white";
  ctx.fill();
}

/* =========================
   SPAWN SYSTEM
========================= */
const hearts = [];

// awal sedikit
let targetHearts = 12;

// BATAS MAKSIMAL (anti lag)
const MAX_HEARTS = 120;

/* tambah perlahan sampai batas */
setInterval(() => {

  if(targetHearts < MAX_HEARTS){
    targetHearts += Math.floor(Math.random()*3) + 1;
  }

}, 800);

/* =========================
   LOOP
========================= */
function animate(){

  // dreamy trail
  ctx.fillStyle = "rgba(0,0,0,0.20)";
  ctx.fillRect(0,0,canvas.width,canvas.height);
  
while(hearts.length < targetHearts){
  hearts.push(new Heart());
}

  hearts.forEach(h=>{
    h.update();
    h.draw();
  });

  requestAnimationFrame(animate);
}

animate();

/* =========================
   BACK TO HOME
========================= */
const backBtn = document.getElementById("backHome");

backBtn.addEventListener("click", () => {
  window.location.href = "index.html"; // halaman utama
});