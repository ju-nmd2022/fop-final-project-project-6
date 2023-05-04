let wallX = 100;
let wallY = 100;
noStroke();

function straightWall(wallX, wallY) {
  //OUTLINES
  fill(40, 40, 60);

  rect(wallX + 80, wallY, 5);
  rect(wallX + 80, wallY + 5, 5);
  rect(wallX + 80, wallY + 10, 5);
  rect(wallX + 80, wallY + 30, 5);
  rect(wallX + 80, wallY + 35, 5);
  rect(wallX + 80, wallY + 40, 5);

  rect(wallX + 35, wallY, 5);
  rect(wallX + 35, wallY + 5, 5);
  rect(wallX + 35, wallY + 10, 5);

  rect(wallX - 10, wallY, 5);
  rect(wallX - 10, wallY + 5, 5);
  rect(wallX - 10, wallY + 10, 5);
  rect(wallX - 10, wallY + 30, 5);
  rect(wallX - 10, wallY + 35, 5);
  rect(wallX - 10, wallY + 40, 5);

  push();
  fill(20, 20, 40);
  rect(wallX + 80, wallY + 15, 5);
  rect(wallX + 80, wallY + 20, 5);
  rect(wallX + 80, wallY + 25, 5);

  rect(wallX + 35, wallY + 15, 5);
  rect(wallX + 35, wallY + 20, 5);
  rect(wallX + 35, wallY + 25, 5);

  rect(wallX - 10, wallY + 15, 5);
  rect(wallX - 10, wallY + 20, 5);
  rect(wallX - 10, wallY + 25, 5);
  pop();

  push();

  fill(20, 20, 40);
  rect(wallX + 75, wallY + 25, 5);
  rect(wallX + 70, wallY + 25, 5);
  rect(wallX + 65, wallY + 25, 5);

  pop();

  push();

  fill(40, 40, 50);
  rect(wallX + 60, wallY + 25, 5);
  rect(wallX + 55, wallY + 25, 5);
  rect(wallX + 50, wallY + 25, 5);
  rect(wallX + 45, wallY + 25, 5);
  rect(wallX + 40, wallY + 25, 5);

  pop();

  push();

  fill(20, 20, 40);
  rect(wallX + 30, wallY + 25, 5);
  rect(wallX + 25, wallY + 25, 5);
  rect(wallX + 20, wallY + 25, 5);

  pop();

  push();

  fill(40, 40, 50);
  rect(wallX + 15, wallY + 25, 5);
  rect(wallX + 10, wallY + 25, 5);
  rect(wallX + 5, wallY + 25, 5);
  rect(wallX, wallY + 25, 5);
  rect(wallX - 5, wallY + 25, 5);

  pop();

  push();

  fill(20, 20, 40);
  rect(wallX + 30, wallY + 45, 5);
  rect(wallX + 25, wallY + 45, 5);
  rect(wallX + 20, wallY + 45, 5);

  pop();

  push();

  fill(40, 40, 50);
  rect(wallX + 15, wallY + 45, 5);
  rect(wallX + 10, wallY + 45, 5);
  rect(wallX + 5, wallY + 45, 5);
  rect(wallX, wallY + 45, 5);
  rect(wallX - 5, wallY + 45, 5);
  rect(wallX - 10, wallY + 45, 5);

  pop();

  push();

  fill(20, 20, 40);
  rect(wallX + 45, wallY + 45, 5);
  rect(wallX + 50, wallY + 45, 5);
  rect(wallX + 55, wallY + 45, 5);

  pop();

  push();

  fill(40, 40, 50);
  rect(wallX + 60, wallY + 45, 5);
  rect(wallX + 65, wallY + 45, 5);
  rect(wallX + 70, wallY + 45, 5);
  rect(wallX + 75, wallY + 45, 5);
  rect(wallX + 80, wallY + 45, 5);
  rect(wallX + 40, wallY + 45, 5);
  rect(wallX + 35, wallY + 45, 5);

  pop();

  push();

  fill(40, 40, 50);
  rect(wallX + 15, wallY + 40, 5);
  rect(wallX + 15, wallY + 35, 5);
  rect(wallX + 15, wallY + 30, 5);

  pop();

  push();

  fill(20, 20, 40);
  rect(wallX + 55, wallY + 40, 5);
  rect(wallX + 55, wallY + 35, 5);
  rect(wallX + 55, wallY + 30, 5);

  pop();

  //FILLING

  push();

  fill(150, 150, 180);
  rect(wallX + 40, wallY, 5);
  rect(wallX + 40, wallY + 5, 5);
  rect(wallX + 45, wallY + 5, 5);
  rect(wallX + 50, wallY + 5, 5);
  rect(wallX + 55, wallY + 5, 5);
  rect(wallX + 60, wallY + 5, 5);
  rect(wallX + 65, wallY + 5, 5);
  rect(wallX + 70, wallY + 5, 5);
  rect(wallX + 75, wallY + 5, 5);

  rect(wallX + 75, wallY, 5);
  rect(wallX + 70, wallY, 5);
  rect(wallX + 65, wallY, 5);
  rect(wallX + 60, wallY, 5);
  rect(wallX + 55, wallY, 5);
  rect(wallX + 50, wallY, 5);
  rect(wallX + 45, wallY, 5);

  //Left Side
  rect(wallX - 5, wallY, 5);
  rect(wallX, wallY, 5);
  rect(wallX + 5, wallY, 5);
  rect(wallX + 10, wallY, 5);
  rect(wallX + 15, wallY, 5);
  rect(wallX + 20, wallY, 5);
  rect(wallX + 25, wallY, 5);
  rect(wallX + 30, wallY, 5);

  rect(wallX - 5, wallY + 5, 5);
  rect(wallX, wallY + 5, 5);
  rect(wallX + 5, wallY + 5, 5);
  rect(wallX + 10, wallY + 5, 5);
  rect(wallX + 15, wallY + 5, 5);
  rect(wallX + 20, wallY + 5, 5);
  rect(wallX + 25, wallY + 5, 5);
  rect(wallX + 30, wallY + 5, 5);

  //Dark Under

  push();
  fill(100, 100, 140);

  //Left
  push();
  fill(200, 200, 210);
  rect(wallX - 5, wallY + 10, 5);
  rect(wallX, wallY + 10, 5);
  rect(wallX + 5, wallY + 10, 5);
  rect(wallX + 10, wallY + 10, 5);
  rect(wallX + 15, wallY + 10, 5);
  rect(wallX + 20, wallY + 10, 5);
  rect(wallX + 25, wallY + 10, 5);
  rect(wallX + 30, wallY + 10, 5);
  pop();

  rect(wallX - 5, wallY + 15, 5);
  rect(wallX, wallY + 15, 5);
  rect(wallX + 5, wallY + 15, 5);
  rect(wallX + 10, wallY + 15, 5);
  rect(wallX + 15, wallY + 15, 5);
  rect(wallX + 20, wallY + 15, 5);
  rect(wallX + 25, wallY + 15, 5);
  rect(wallX + 30, wallY + 15, 5);

  rect(wallX - 5, wallY + 20, 5);
  rect(wallX, wallY + 20, 5);
  rect(wallX + 5, wallY + 20, 5);
  rect(wallX + 10, wallY + 20, 5);
  rect(wallX + 15, wallY + 20, 5);
  rect(wallX + 20, wallY + 20, 5);
  rect(wallX + 25, wallY + 20, 5);
  rect(wallX + 30, wallY + 20, 5);

  //Right
  push();
  fill(200, 200, 210);
  rect(wallX + 40, wallY + 10, 5);
  rect(wallX + 45, wallY + 10, 5);
  rect(wallX + 50, wallY + 10, 5);
  rect(wallX + 55, wallY + 10, 5);
  rect(wallX + 60, wallY + 10, 5);
  rect(wallX + 65, wallY + 10, 5);
  rect(wallX + 70, wallY + 10, 5);
  rect(wallX + 75, wallY + 10, 5);
  pop();

  rect(wallX + 40, wallY + 15, 5);
  rect(wallX + 45, wallY + 15, 5);
  rect(wallX + 50, wallY + 15, 5);
  rect(wallX + 55, wallY + 15, 5);
  rect(wallX + 60, wallY + 15, 5);
  rect(wallX + 65, wallY + 15, 5);
  rect(wallX + 70, wallY + 15, 5);
  rect(wallX + 75, wallY + 15, 5);

  rect(wallX + 40, wallY + 20, 5);
  rect(wallX + 45, wallY + 20, 5);
  rect(wallX + 50, wallY + 20, 5);
  rect(wallX + 55, wallY + 20, 5);
  rect(wallX + 60, wallY + 20, 5);
  rect(wallX + 65, wallY + 20, 5);
  rect(wallX + 70, wallY + 20, 5);
  rect(wallX + 75, wallY + 20, 5);
  pop();

  //Bottom Tiles

  push();

  fill(100, 100, 140);
  rect(wallX - 5, wallY + 30, 5);
  rect(wallX, wallY + 30, 5);
  rect(wallX + 5, wallY + 30, 5);
  rect(wallX + 10, wallY + 30, 5);
  rect(wallX + 20, wallY + 30, 5);
  rect(wallX + 25, wallY + 30, 5);
  rect(wallX + 30, wallY + 30, 5);
  rect(wallX + 35, wallY + 30, 5);
  rect(wallX + 40, wallY + 30, 5);
  rect(wallX + 45, wallY + 30, 5);
  rect(wallX + 50, wallY + 30, 5);

  rect(wallX + 60, wallY + 30, 5);
  rect(wallX + 65, wallY + 30, 5);
  rect(wallX + 70, wallY + 30, 5);
  rect(wallX + 75, wallY + 30, 5);

  pop();

  //Darker Under Bottom Tiles

  push();

  //Line 1
  fill(70, 70, 100);
  rect(wallX - 5, wallY + 35, 5);
  rect(wallX, wallY + 35, 5);
  rect(wallX + 5, wallY + 35, 5);
  rect(wallX + 10, wallY + 35, 5);
  rect(wallX + 20, wallY + 35, 5);
  rect(wallX + 25, wallY + 35, 5);
  rect(wallX + 30, wallY + 35, 5);
  rect(wallX + 35, wallY + 35, 5);
  rect(wallX + 40, wallY + 35, 5);
  rect(wallX + 45, wallY + 35, 5);
  rect(wallX + 50, wallY + 35, 5);

  rect(wallX + 60, wallY + 35, 5);
  rect(wallX + 65, wallY + 35, 5);
  rect(wallX + 70, wallY + 35, 5);
  rect(wallX + 75, wallY + 35, 5);

  //Line 2
  rect(wallX - 5, wallY + 40, 5);
  rect(wallX, wallY + 40, 5);
  rect(wallX + 5, wallY + 40, 5);
  rect(wallX + 10, wallY + 40, 5);
  rect(wallX + 20, wallY + 40, 5);
  rect(wallX + 25, wallY + 40, 5);
  rect(wallX + 30, wallY + 40, 5);
  rect(wallX + 35, wallY + 40, 5);
  rect(wallX + 40, wallY + 40, 5);
  rect(wallX + 45, wallY + 40, 5);
  rect(wallX + 50, wallY + 40, 5);

  rect(wallX + 60, wallY + 40, 5);
  rect(wallX + 65, wallY + 40, 5);
  rect(wallX + 70, wallY + 40, 5);
  rect(wallX + 75, wallY + 40, 5);

  pop();

  //Extra Detail Pixels
  push();
  fill(170, 170, 200);
  rect(wallX + 55, wallY, 5);
  rect(wallX + 65, wallY + 5, 5);
  rect(wallX + 25, wallY, 5);
  rect(wallX + 5, wallY + 5, 5);

  fill(120, 120, 150);
  rect(wallX + 30, wallY + 5, 5);
  rect(wallX - 5, wallY, 5);
  rect(wallX + 75, wallY + 5, 5);

  fill(90, 90, 110);
  rect(wallX + 45, wallY + 20, 5);
  rect(wallX + 20, wallY + 20, 5);
  rect(wallX + 15, wallY + 20, 5);

  fill(120, 120, 180);
  rect(wallX + 5, wallY + 30, 5);
  rect(wallX - 5, wallY + 30, 5);
  rect(wallX + 30, wallY + 30, 5);
  rect(wallX + 35, wallY + 30, 5);
  rect(wallX + 65, wallY + 30, 5);

  fill(60, 60, 90);
  rect(wallX + 75, wallY + 35, 5);
  rect(wallX + 70, wallY + 35, 5);
  rect(wallX + 45, wallY + 35, 5);
  rect(wallX + 30, wallY + 35, 5);
  rect(wallX + 25, wallY + 35, 5);
  rect(wallX, wallY + 35, 5);
  rect(wallX + 50, wallY + 40, 5);
  rect(wallX + 35, wallY + 40, 5);
  rect(wallX + 60, wallY + 40, 5);
  rect(wallX + 10, wallY + 40, 5);

  fill(40, 40, 70);
  rect(wallX - 5, wallY + 40, 5);
  rect(wallX + 25, wallY + 40, 5);
  rect(wallX + 60, wallY + 35, 5);

  fill(70, 70, 90);
  rect(wallX + 75, wallY + 20, 5);
  rect(wallX + 70, wallY + 20, 5);
  rect(wallX + 75, wallY + 15, 5);
  rect(wallX - 5, wallY + 15, 5);
  rect(wallX - 5, wallY + 20, 5);
  rect(wallX + 30, wallY + 20, 5);
  rect(wallX + 15, wallY + 15, 5);
  rect(wallX + 10, wallY + 15, 5);

  fill(240, 240, 255);
  rect(wallX + 5, wallY + 10, 5);
  rect(wallX + 25, wallY + 10, 5);
  rect(wallX + 20, wallY + 10, 5);
  rect(wallX + 45, wallY + 10, 5);
  rect(wallX + 50, wallY + 10, 5);
  rect(wallX + 70, wallY + 10, 5);

  fill(20, 100, 20);
  rect(wallX + 65, wallY + 15, 5);
  rect(wallX + 60, wallY + 15, 5);
  rect(wallX + 55, wallY + 15, 5);
  rect(wallX + 60, wallY + 20, 5);

  rect(wallX + 20, wallY + 15, 5);
  rect(wallX + 5, wallY + 15, 5);
  rect(wallX, wallY + 15, 5);

  rect(wallX + 20, wallY + 30, 5);
  rect(wallX + 50, wallY + 30, 5);
  pop();

  pop();
}

//let tileMap = [0, 1, 2, 3, 4, 5];

// for (let x = 0; x < length; x++) {
//   for (let y = 0; y < length; y++) {
//     if (y % 2 === 0) {
//       if (x % 2 === 0) {
//         fill(0, 0, 0);
//       } else {
//         fill(255, 255, 255);
//       }
//     } else {
//       if (x % 2 === 0) {
//         fill(255, 255, 255);
//       } else {
//         fill(0, 0, 0);
//       }
//     }

//     straightWall(x * size, y * size, size, size);
//   }
// }

// let animals = [0, 1, 2, 0, 1, 2];

// function draw() {
//   background(128, 128, 128);
//   textSize(20);
//   let y = 20;
//   let x = 20;
//   for (let animal of animals) {
//     text(animal, 20, y);
//     y = y + 70;
//   }
//   if (animals === 1) {
//     straightWall(10, 10);
//   }
// }

// lägga ett object i en array, sen göra en for
// loop som loopar igenom och kollar alla värden för att
// veta om det är en vägg. Sedan If statement som gör
// att gubben krockar i väggen.
//let wall1 = [{x:10, y:10, width:20, height:20}];
