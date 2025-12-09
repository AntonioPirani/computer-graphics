//https://p5js.org/reference/p5/randomGaussian/
// loading the image takes some time
let n;
let x1, y1;
let x2, y2;
let img;

function preload() {
  img = loadImage('target.png');
}

function setup() {
  createCanvas(640, 480);
  n = 500;
  //x1 = randomGaussian(320, 100);
  //y1 = randomGaussian(240, 100);
  imageMode(CENTER);
  noLoop();
  //frameRate(1);
}

function draw() {
  //background(220);
  translate(width/2, height/2);
  image(img, 0, 0, 320, 320);
  strokeWeight(5);
  //noFill();
  
  stroke('blue');
  //point(x1, y1);
  gaussian();
  
  stroke('green');
  boxMuller();
}

function gaussian() {
  for (let i = 0; i < n; i++) {
    x1 = randomGaussian(0, 1);  
    y1 = randomGaussian(0, 1);
    point(x1*128, y1*96); //640 -> 64 * 2, 480 -> 48 * 2
  }   
}

//https://it.wikipedia.org/wiki/Trasformazione_di_Box-Muller
function boxMuller() {
  for (let i = 0; i < n; i++) {
    let u1 = random(0, 1);
    let u2 = random(0, 1);
    
    let r = sqrt(-2 * log(u1));
    let theta = 2 * PI * u2;
    
    x2 = r * cos(theta);
    y2 = r * sin(theta);
    
    point(x2*128, y2*96);
  }   
}