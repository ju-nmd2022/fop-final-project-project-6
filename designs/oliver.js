let wallX = 100;
let wallY = 100;

//downWall Size(w 40px, h 85px)
//straightWall Size(w 105px, h 55px)

background(10, 30, 35);

noStroke();

//Straight Wall Function
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

//DOWN WALL Function
function downWall(wallX, wallY) {
  push();
  fill(40, 40, 60);

  rect(wallX + 80, wallY, 5);
  rect(wallX + 80, wallY + 5, 5);
  rect(wallX + 80, wallY + 10, 5);
  rect(wallX + 80, wallY + 15, 5);
  rect(wallX + 80, wallY + 20, 5);
  rect(wallX + 80, wallY + 25, 5);
  rect(wallX + 80, wallY + 30, 5);
  rect(wallX + 80, wallY + 35, 5);
  rect(wallX + 80, wallY + 40, 5);
  rect(wallX + 80, wallY + 45, 5);
  rect(wallX + 80, wallY + 50, 5);
  rect(wallX + 80, wallY + 55, 5);
  rect(wallX + 80, wallY + 60, 5);
  rect(wallX + 80, wallY + 65, 5);
  rect(wallX + 80, wallY + 70, 5);
  rect(wallX + 80, wallY + 75, 5);
  rect(wallX + 80, wallY + 80, 5);
  rect(wallX + 85, wallY + 80, 5);
  rect(wallX + 90, wallY + 80, 5);

  rect(wallX + 95, wallY + 80, 5);
  rect(wallX + 95, wallY + 75, 5);
  rect(wallX + 95, wallY + 70, 5);
  rect(wallX + 95, wallY + 65, 5);
  rect(wallX + 95, wallY + 60, 5);
  rect(wallX + 95, wallY + 55, 5);
  rect(wallX + 95, wallY + 50, 5);
  rect(wallX + 95, wallY + 45, 5);
  rect(wallX + 95, wallY + 40, 5);
  rect(wallX + 95, wallY + 35, 5);
  rect(wallX + 95, wallY + 30, 5);
  rect(wallX + 95, wallY + 25, 5);
  rect(wallX + 95, wallY + 20, 5);
  rect(wallX + 95, wallY + 15, 5);
  rect(wallX + 95, wallY + 10, 5);
  rect(wallX + 95, wallY + 5, 5);
  rect(wallX + 95, wallY, 5);
  rect(wallX + 90, wallY, 5);
  rect(wallX + 85, wallY, 5);

  //FILLING
  push();
  fill(150, 150, 180);
  rect(wallX + 90, wallY + 5, 5);
  rect(wallX + 90, wallY + 10, 5);
  rect(wallX + 90, wallY + 15, 5);
  rect(wallX + 90, wallY + 20, 5);
  rect(wallX + 90, wallY + 25, 5);
  rect(wallX + 90, wallY + 30, 5);
  rect(wallX + 90, wallY + 35, 5);
  rect(wallX + 90, wallY + 40, 5);
  rect(wallX + 90, wallY + 45, 5);
  rect(wallX + 90, wallY + 50, 5);
  rect(wallX + 90, wallY + 55, 5);
  rect(wallX + 90, wallY + 60, 5);
  rect(wallX + 90, wallY + 65, 5);
  rect(wallX + 90, wallY + 70, 5);
  rect(wallX + 90, wallY + 75, 5);

  rect(wallX + 85, wallY + 5, 5);
  rect(wallX + 85, wallY + 10, 5);
  rect(wallX + 85, wallY + 15, 5);
  rect(wallX + 85, wallY + 20, 5);
  rect(wallX + 85, wallY + 25, 5);
  rect(wallX + 85, wallY + 30, 5);
  rect(wallX + 85, wallY + 35, 5);
  rect(wallX + 85, wallY + 40, 5);
  rect(wallX + 85, wallY + 45, 5);
  rect(wallX + 85, wallY + 50, 5);
  rect(wallX + 85, wallY + 55, 5);
  rect(wallX + 85, wallY + 60, 5);
  rect(wallX + 85, wallY + 65, 5);
  rect(wallX + 85, wallY + 70, 5);
  rect(wallX + 85, wallY + 75, 5);
  pop();

  //Dark Filling
  push();
  fill(80, 80, 120);
  rect(wallX + 85, wallY + 25, 5);
  rect(wallX + 90, wallY + 25, 5);
  rect(wallX + 85, wallY + 50, 5);
  rect(wallX + 90, wallY + 50, 5);
  rect(wallX + 90, wallY + 75, 5);
  rect(wallX + 90, wallY + 70, 5);
  rect(wallX + 90, wallY + 5, 5);
  pop();

  //Light Filling
  push();
  fill(220, 220, 240);
  rect(wallX + 85, wallY + 5, 5);
  rect(wallX + 85, wallY + 10, 5);
  rect(wallX + 85, wallY + 15, 5);
  rect(wallX + 85, wallY + 20, 5);
  rect(wallX + 85, wallY + 30, 5);
  rect(wallX + 85, wallY + 35, 5);
  rect(wallX + 85, wallY + 40, 5);
  rect(wallX + 85, wallY + 45, 5);
  rect(wallX + 85, wallY + 55, 5);
  rect(wallX + 85, wallY + 60, 5);
  rect(wallX + 85, wallY + 65, 5);
  rect(wallX + 85, wallY + 70, 5);
  rect(wallX + 85, wallY + 75, 5);

  fill(160, 160, 230);
  rect(wallX + 85, wallY + 25, 5);
  rect(wallX + 85, wallY + 50, 5);

  fill(180, 180, 230);
  rect(wallX + 90, wallY + 15, 5);
  rect(wallX + 90, wallY + 35, 5);
  rect(wallX + 90, wallY + 40, 5);
  rect(wallX + 90, wallY + 60, 5);

  pop();

  pop();
}

// straightWall(10, 10);
// straightWall(10, 90);
// straightWall(100, 175);
// straightWall(280, 175);
// straightWall(100, 10);
// straightWall(190, 95);

// downWall(100, 10);
// downWall(100, 175);
// downWall(175, 175);
// downWall(10, 90);
