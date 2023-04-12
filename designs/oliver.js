let wallX = 100;
let wallY = 100;
//let wallScale = 1.0;

function straightWall() {
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

straightWall(wallX + 20, wallY + 20);
