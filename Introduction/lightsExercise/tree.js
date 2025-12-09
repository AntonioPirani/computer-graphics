// Tree by Poly by Google [CC-BY] via Poly Pizza

let t;

function preload() {
  t = loadModel('tree01.obj');
  img = loadImage('tree_texture.png');
}

function setup() {
  createCanvas(640, 480, WEBGL);
}

function draw() {
  background(200);
  orbitControl();
  
  ambientLight(150);
  //spotLight(255, 255, 255, 300, 0, 0, 0, 0, 0);
  
  texture(img);
  rotateX(PI);
  model(t);
}
