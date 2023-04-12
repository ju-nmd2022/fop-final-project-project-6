let wallX = 100;
let wallY = 100;

background(100, 100, 100);

//let wallScale = 1.0;

function straightWall(wallX, wallY) {
  noStroke();

  //GREY AREAS
  fill(200, 200, 200);
  rect(wallX, wallY, 10);
  push();
  fill(170, 170, 170);
  rect(wallX - 10, wallY, 10);
  pop();
  rect(wallX - 20, wallY, 10);

  fill(200, 200, 200);
  rect(wallX + 40, wallY, 10);
  push();
  fill(170, 170, 170);
  rect(wallX + 50, wallY, 10);
  pop();
  rect(wallX + 60, wallY, 10);

  fill(200, 200, 200);
  rect(wallX + 10, wallY + 10, 10);
  push();
  fill(170, 170, 170);
  rect(wallX + 20, wallY + 10, 10);
  pop();
  rect(wallX + 30, wallY + 10, 10);

  noStroke();
  fill(200, 200, 200);
  rect(wallX, wallY + 20, 10);
  push();
  fill(170, 170, 170);
  rect(wallX - 10, wallY + 20, 10);
  pop();
  rect(wallX - 20, wallY + 20, 10);

  fill(200, 200, 200);
  rect(wallX + 40, wallY + 20, 10);
  push();
  fill(170, 170, 170);
  rect(wallX + 50, wallY + 20, 10);
  pop();
  rect(wallX + 60, wallY + 20, 10);

  //DARK BLUE AREAS
  push();
  fill(50, 50, 100);
  rect(wallX + 10, wallY, 10);
  push();
  fill(30, 30, 80);
  rect(wallX + 20, wallY, 10);
  pop();
  rect(wallX + 30, wallY, 10);
  pop();

  push();
  fill(50, 50, 100);
  rect(wallX + 10, wallY + 20, 10);
  push();
  fill(30, 30, 80);
  rect(wallX + 20, wallY + 20, 10);
  pop();
  rect(wallX + 30, wallY + 20, 10);
  pop();

  push();
  fill(50, 50, 100);
  rect(wallX - 20, wallY + 10, 10);
  push();
  fill(30, 30, 80);
  rect(wallX - 10, wallY + 10, 10);
  pop();
  rect(wallX, wallY + 10, 10);
  pop();

  push();
  fill(50, 50, 100);
  rect(wallX + 40, wallY + 10, 10);
  push();
  fill(30, 30, 80);
  rect(wallX + 50, wallY + 10, 10);
  pop();
  rect(wallX + 60, wallY + 10, 10);
  pop();
}

//straightWall(200, 60);

noStroke();

fill(40, 40, 60);

rect(wallX + 80, wallY, 5);
rect(wallX + 80, wallY + 5, 5);
rect(wallX + 80, wallY + 10, 5);

rect(wallX + 35, wallY, 5);
rect(wallX + 35, wallY + 5, 5);
rect(wallX + 35, wallY + 10, 5);

rect(wallX - 10, wallY, 5);
rect(wallX - 10, wallY + 5, 5);
rect(wallX - 10, wallY + 10, 5);

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
rect(wallX + 40, wallY + 45, 5);
rect(wallX + 35, wallY + 45, 5);

pop();
