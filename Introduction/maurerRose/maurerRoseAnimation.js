// code from https://www.youtube.com/watch?v=4uU9lZ-HSqA&ab_channel=TheCodingTrain

let n = 0;
let d = 0;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES); // default is RADIANTS
}

function draw() {
  background(0);
  translate(width/2, height/2); 
  
  noFill();
  stroke(255); // the colour
  strokeWeight(1); // the thickness of the colour

  beginShape();
  
  
  for (let i = 0; i < 361; i++){
    let k = i * d;
    let r = 150 * sin(n*k); //added 150 to avoid scaling
    let x = r * cos(k);
    let y = r * sin(k);
    vertex(x, y);
  }
  endShape();
  
  noFill();
  stroke("lime");
  strokeWeight(3);
  
  beginShape();
  for (let i = 0; i < 361; i++){
    let k = i;
    let r = 150 * sin(n*k); //added 150 to avoid scaling
    let x = r * cos(k);
    let y = r * sin(k);
    vertex(x, y);
  }
  endShape();
  
  n=n+0.01;
  d=d+0.01;
}

