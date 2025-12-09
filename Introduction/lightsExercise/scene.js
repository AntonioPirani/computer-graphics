let segments = 12;
let len = 40;
let radius = 5;

let constrainedX;
let lightY = -15, lightZ = 160;

function setup() {
  createCanvas(640, 480, WEBGL);
  console.log("Check also planets.js!");
}

function draw() {
  background(50);
  orbitControl();
  //noStroke();
  
  constrainedX = constrain(mouseX - width / 2, -220, 220);
  spotLight(255, 255, 255, constrainedX, lightY, lightZ, 0 - constrainedX, 0, -150, Math.PI / 6, 1); // 0 - constrainedX is used to make the light point to the subject, if I just use 0 the light will stay fixed

  ambientLight(100);
  
  // floor
  push();
  
  fill(207, 194, 161);
  
  beginShape();
  vertex(-200, 0, -200);
  vertex(200, 0, -200);
  vertex(230, 0, 200); // y = 200
  vertex(-230, 0, 200); // y = 200
  endShape(CLOSE);
  
  pop();
  
  // wall
  push();
  
  fill(234, 245, 206);
  
  beginShape();
  vertex(-200, 0, -200);
  vertex(200, 0, -200);
  vertex(230, -300, -200);
  vertex(-230, -300, -200);
  endShape(CLOSE);
  
  pop();
  
  translate(0, -20, 0)
  box(20) // the subject
  drawCilinder();
  
  translate(constrainedX, -1, 150);
  box(30);  // the main camera
  
}

// code from the slides
function drawCilinder(){
  
  //rotateY(PI/2)
  for (let i = 0; i < segments; i++) {
    beginShape();
    vertex(-len/2, radius * cos(i*2*Math.PI/segments), radius * sin(i*2*Math.PI/segments));
    vertex(-len/2, radius * cos((i+1)*2*Math.PI/segments), radius * sin((i+1)*2*Math.PI/segments));
    vertex(len/2, radius * cos((i+1)*2*Math.PI/segments), radius * sin((i+1)*2*Math.PI/segments));
    vertex(len/2, radius * cos(i*2*Math.PI/segments), radius * sin(i*2*Math.PI/segments));
    endShape(CLOSE);
  }
  //rotateY(-PI/2);

}
