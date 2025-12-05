// code taken from the slides https://docs.google.com/presentation/d/18p3JnaYr-79nlj8mRF9IPS01WpPEBOgkUKD77c5gNYc/edit#slide=id.g31512bfb34_0_1299

// combination of boxRotation and clockRotation
let x=0;

 function setup() {
  createCanvas(640, 480, WEBGL);
}

function draw() {
  noFill();
  background(255);
  
  // center of the canvas
  stroke(255, 0, 255);
  strokeWeight(10);
  point(0, 0, 0);
    
  rotateZ(radians(x));
  
  translate(100, 100, 0);
  rotateY(radians(x));
  
  strokeWeight(1);
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
  box(80);
  
  // center of the box
  stroke(255, 0, 0);
  strokeWeight(10);
  point(0, 0, 0);
  
  x+=0.5;
}
