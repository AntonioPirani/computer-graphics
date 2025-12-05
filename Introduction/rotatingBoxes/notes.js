// code taken from the slides https://docs.google.com/presentation/d/18p3JnaYr-79nlj8mRF9IPS01WpPEBOgkUKD77c5gNYc/edit#slide=id.g31512bfb34_0_1299

// first attempt to matrix transformations
let x=0;

 function setup() {
  createCanvas(640, 480, WEBGL);
}

function draw() {
  noFill();
  background(255);
  
  
  // rotate Y
  applyMatrix(  cos(radians(x)), 0.0, -sin(radians(x)), 0.0,
                0.0, 1.0, 0.0, 0.0,
                sin(radians(x)), 0.0, cos(radians(x)), 0.0,
                0.0, 0.0, 0.0, 1.0);
  // rotate Z
  applyMatrix(  cos(radians(x)), -sin(radians(x)), 0.0, 0.0,
                sin(radians(x)), cos(radians(x)), 0.0, 0.0,
                0.0, 0.0, 1, 0.0,
                0.0, 0.0, 0.0, 1.0);
  // translate
  applyMatrix(  1.0, 0.0, 0.0, 0,
                0.0, 1.0, 0.0, 0,
                0.0, 0.0, 1.0, 0.0,
                20.0, 20.0, 0.0, 1.0);
  // translate(-width/2 + x, 0, 0);
  
  // this is actually the same matrix:
  //rotateY(radians(x));
  //rotateZ(radians(x));
  stroke("#00FF00");
  line(0, 0, 0, 200, 0, 0);
  stroke("#0000FF");
  line(0, 0, 0, 0, 200, 0);
  stroke("#FF0000");
  line(0, 0, 0, 0, 0, 200);
  stroke(0);
  
  // box
  stroke(0);
  strokeWeight(1);
  box(120);
  
  // center of the box
  stroke(255, 0, 0);
  strokeWeight(10);
  point(0, 0, 0);
  
  // offset from the center of the box
  stroke(0, 0, 255);
  strokeWeight(10);
  point(100, 0, 0);
  
  x += 0.5;
  orbitControl()
}
