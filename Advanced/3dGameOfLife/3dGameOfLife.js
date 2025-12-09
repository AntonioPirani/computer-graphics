// 2D code taken from https://editor.p5js.org/dermotte/sketches/KBuPAbaXm

let board = [];
let sizeX = 64,
  sizeY = 48, sizeZ = 5;

function setup() {
  createCanvas(640, 480, WEBGL);
  // init main world
  board = Array(sizeX);
  for (let x = 0; x < sizeX; x++) {
    board[x] = Array(sizeY);
    for (let y = 0; y < sizeY; y++) {
      //board[x][y] = random([0,1]);
      board[x][y] = Array(sizeZ);
      for (let z = 0; z < sizeZ; z++) {
        board[x][y][z] = random([0,1]);
      }
    }
  }
  // set some visualization parameters
  fill("yellow");
  //noStroke();
  frameRate(1);
}

function draw() {
  // draw each frame from the updated game world
  background(255);
  translate(-width/2, -height/2); // with WebGL the coordinates system changes
  let count = 0;
  for (let x = 0; x < sizeX; x++) {
    for (let y = 0; y < sizeY; y++) {
      for (let z = 0; z < sizeZ; z++) {
        if (board[x][y][z] == 1) {
          //count++;
          //print("box here ", count);
          push();
          translate(x * (width/sizeX), y * (height/sizeY), z * sizeZ);
          box(10,10,10);
          pop();
        }
      }
    }
  }
  // update the game world
  update();
  orbitControl();
}

function update() {
  // copy current data in a buffer
  let old;
  old = Array(sizeX);
  for (let x = 0; x < sizeX; x++) {
    old[x] = Array(sizeY);
    for (let y = 0; y < sizeY; y++) {
      old[x][y] = Array(sizeZ);
      for (let z = 0; z < sizeZ; z++) {
        old[x][y][z] = board[x][y][z];
      }
    }
  }
  // update world according to the number of neighbours
  //new ruleset taken here (second ruleset): https://cs.brown.edu/courses/cs195v/projects/life/edwallac/index.html
  for (let x = 0; x < sizeX; x++) {
    for (let y = 0; y < sizeY; y++) {
      for (let z = 0; z < sizeZ; z++){
        // old from internet
//         let n = numNeighbours(old, x, y, z);
//         if (board[x][y][z] == 1) {
//           if (n < 13)
//             board[x][y][z] = 0;
//           else
//             board[x][y][z] = 1;
//         } 
//         else {
//           if (n >= 14 && n <= 19)
//             board[x][y][z] = 1;
//         }
        let n = numNeighbours(old, x, y, z);
        if (board[x][y][z] == 1 && (n >= 6 && n <= 10)) board[x][y][z] = 1;
        else board[x][y][z] = 0;
        if (board[x][y][z] == 0 && (n == 9)) board[x][y][z] = 1;
        //if (board[x][y][z] == 0 && (n >= 5 && n <= 7)) board[x][y][z] = 1;
        
      } 
    }
  }
}

function numNeighbours(b, x1, y1, z1) {
  count = 0;
  for (let x = -1; x < 2; x++) {
    for (let y = -1; y < 2; y++) {
      for (let z = -1; z < 2; z++) {
        if (x == 0 && y == 0 && z == 0) count = count + 0;
        else {
          let xx = x1 + x;
          let yy = y1 + y;
          let zz = z1 + z;
          if (xx >= 0 && yy >= 0 && zz >= 0 && xx < sizeX && yy < sizeY && zz < sizeZ) {
            count += b[xx][yy][zz];
          }
        }
      }
    }
  }
  return count;
}
