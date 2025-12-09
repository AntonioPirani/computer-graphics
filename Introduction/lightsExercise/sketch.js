// texture from https://opengameart.org/content/planet-surface-textures-grassland01-512x512png and https://opengameart.org/content/planet-surface-textures-dusty04-512x512png and https://opengameart.org/content/planet-surface-textures-gaseous13-512x512png and https://opengameart.org/content/planet-surface-textures-snowy03-512x512png

let t;
let angle = 0, sunAngle = 0;
let sunPos;

function preload() {
  earth = loadImage('earth.png');
  moon = loadImage('moon.png');
  sun = loadImage('sun.png');
}

function setup() {
  createCanvas(640, 480, WEBGL);
  console.log("Check also scene.js!\nZoom out to see the sun");
}

function draw() {
  background(200);
  orbitControl();
  noStroke();
  
  sunPos = (mouseX - width/2) * 3; 
  // using (mouseX - width/2) * 3 makes it centered
  // mouse * 3 makes it move in and out the Z axis
  
  ambientLight(50);
  pointLight(255, 204, 0, 1200, 0, sunPos);  // the light rays
  spotLight(255, 204, 0, 300, 0, 0, 1200, 0, sunPos, PI/4, 1);  // to simulate the sun emitting light (being lit in the surface)
    
  // earth
  push()
  rotateY(angle);
  texture(earth);
  sphere(50);
  pop();
  
  // moon der mond
  push();
  rotateY(angle);
  texture(moon);
  translate(150, 0, 0);
  sphere(30);
  pop();

  translate(1200, 0, sunPos);
  
  // sun
  push();
  rotateY(sunAngle);
  //translate(1200, 0, 0);
  texture(sun);
  sphere(130);
  pop();
  
  angle += 0.005;
  sunAngle += 0.01;
}
