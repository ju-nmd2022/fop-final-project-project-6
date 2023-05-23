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
function donkItem(x, y) {
  // outlines of donk
  fill(220, 220, 220);
  rect(x - 10, y - 5, 5);
  rect(x - 5, y - 10, 5);
  rect(x + 0, y - 10, 5);
  rect(x + 5, y - 5, 5);
  rect(x + 5, y + 0, 5);
  rect(x + 0, y + 0, 5);
  rect(x - 5, y + 0, 5);
  rect(x - 10, y + 0, 5);
  rect(x - 15, y + 0, 5);
  rect(x - 20, y + 0, 5);
  rect(x - 20, y + 5, 5);
  rect(x - 20, y + 10, 5);
  rect(x - 20, y + 15, 5);
  rect(x - 20, y + 20, 5);
  rect(x - 15, y + 25, 5);
  rect(x - 10, y + 25, 5);
  rect(x - 5, y + 25, 5);
  rect(x + 0, y + 25, 5);
  rect(x + 5, y + 20, 5);
  rect(x + 5, y + 15, 5);
  rect(x + 5, y + 10, 5);
  rect(x + 5, y + 5, 5);
  // cork
  fill(0, 0, 0);
  rect(x - 20, y - 5, 5);
  rect(x - 15, y - 5, 5);

  // liquid
  fill(255, 175, 0);
  rect(x - 15, y + 5, 5);
  rect(x - 10, y + 5, 5);
  rect(x - 5, y + 5, 5);
  rect(x + 0, y + 5, 5);
  fill(255, 155, 0);
  rect(x - 15, y + 10, 5);
  rect(x - 10, y + 10, 5);
  rect(x - 5, y + 10, 5);
  rect(x + 0, y + 10, 5);
  fill(240, 140, 0);
  rect(x - 15, y + 15, 5);
  rect(x - 10, y + 15, 5);
  rect(x - 5, y + 15, 5);
  rect(x + 0, y + 15, 5);
  fill(225, 125, 0);
  rect(x - 10, y + 20, 5);
  rect(x - 5, y + 20, 5);
  fill(240, 140, 0);
  rect(x - 15, y + 20, 5);
  rect(x + 0, y + 20, 5);
}
function kanelbulle(kanelX, kanelY) {
  noStroke();
  fill(150, 100, 0);
  //  base
  rect(kanelX - 5, kanelY + 0, 5);
  rect(kanelX + 0, kanelY + 0, 5);
  rect(kanelX + 5, kanelY + 0, 5);
  rect(kanelX + 10, kanelY + 0, 5);

  rect(kanelX - 15, kanelY - 5, 5);
  rect(kanelX - 10, kanelY - 5, 5);
  rect(kanelX + 10, kanelY - 5, 5);
  rect(kanelX + 15, kanelY - 5, 5);

  rect(kanelX - 15, kanelY - 10, 5);
  rect(kanelX - 5, kanelY - 10, 5);
  rect(kanelX + 0, kanelY - 10, 5);
  rect(kanelX + 5, kanelY - 10, 5);
  rect(kanelX + 15, kanelY - 10, 5);

  rect(kanelX - 10, kanelY - 15, 5);
  rect(kanelX + 10, kanelY - 15, 5);
  // swirl
  fill(110, 60, 0);
  rect(kanelX - 10, kanelY + 0, 5);
  rect(kanelX - 5, kanelY - 5, 5);
  rect(kanelX + 0, kanelY - 5, 5);
  rect(kanelX + 5, kanelY - 5, 5);
  rect(kanelX + 10, kanelY - 10, 5);
  rect(kanelX - 10, kanelY - 10, 5);
  rect(kanelX + 5, kanelY - 15, 5);
  rect(kanelX + 0, kanelY - 15, 5);
  rect(kanelX - 5, kanelY - 15, 5);
  // sugar on top
  fill(255, 255, 255);
  rect(kanelX + 7, kanelY - 2, 2);
  rect(kanelX + 8, kanelY - 7, 2);
  rect(kanelX - 2, kanelY - 2, 2);
  rect(kanelX - 11, kanelY - 7, 2);
  rect(kanelX - 3, kanelY - 7, 2);
  rect(kanelX - 6, kanelY - 12, 2);
  rect(kanelX - 0, kanelY - 12, 2);
  rect(kanelX + 6, kanelY - 12, 2);
  rect(kanelX + 2, kanelY - 7, 2);
  rect(kanelX - 8, kanelY - 2, 2);
}
function beerGlass(beerX, beerY) {
  noStroke();
  fill(220, 220, 220);
  rect(beerX - 5, beerY + 0, 5);
  rect(beerX + 0, beerY + 0, 5);
  rect(beerX + 5, beerY + 0, 5);
  rect(beerX + 10, beerY + 0, 5);
  rect(beerX + 10, beerY - 5, 5);
  rect(beerX - 5, beerY - 5, 5);
  rect(beerX + 10, beerY - 10, 5);
  rect(beerX - 5, beerY - 10, 5);
  rect(beerX + 10, beerY - 15, 5);
  rect(beerX - 5, beerY - 15, 5);
  rect(beerX + 15, beerY - 20, 5);
  rect(beerX - 10, beerY - 20, 5);
  rect(beerX - 10, beerY - 25, 5);
  rect(beerX - 10, beerY - 30, 5);
  rect(beerX + 15, beerY - 25, 5);
  rect(beerX + 15, beerY - 30, 5);
  fill(240, 140, 0);
  rect(beerX - 5, beerY - 30, 5);
  rect(beerX - 5, beerY - 25, 5);
  rect(beerX - 5, beerY - 20, 5);
  fill(240, 170, 0);
  rect(beerX - 0, beerY - 30, 5);
  rect(beerX - 0, beerY - 25, 5);
  rect(beerX - 0, beerY - 20, 5);
  rect(beerX - 0, beerY - 15, 5);
  rect(beerX - 0, beerY - 10, 5);
  rect(beerX - 0, beerY - 5, 5);
  fill(240, 180, 0);
  rect(beerX + 5, beerY - 20, 5);
  rect(beerX + 5, beerY - 15, 5);
  rect(beerX + 5, beerY - 10, 5);
  rect(beerX + 5, beerY - 5, 5);
  fill(240, 200, 0);
  rect(beerX + 10, beerY - 30, 5);
  rect(beerX + 10, beerY - 25, 5);
  rect(beerX + 10, beerY - 20, 5);
  fill(255, 255, 255);
  rect(beerX - 10, beerY - 35, 5);
  rect(beerX - 5, beerY - 35, 5);
  rect(beerX - 0, beerY - 35, 5);
  rect(beerX + 5, beerY - 35, 5);
  rect(beerX + 10, beerY - 35, 5);
  rect(beerX + 15, beerY - 35, 5);
  rect(beerX - 5, beerY - 40, 5);
  rect(beerX - 0, beerY - 40, 5);
  rect(beerX + 5, beerY - 40, 5);
  rect(beerX + 10, beerY - 40, 5);
  rect(beerX + 5, beerY - 30, 5);
  rect(beerX + 5, beerY - 25, 5);
  rect(beerX + 10, beerY - 55, 5);
  rect(beerX + 5, beerY - 60, 5);
  rect(beerX + 0, beerY - 50, 5);
}
function controllDisplay(controllX, controllY) {
  noStroke();

  fill(60, 60, 60);
  rect(controllX + 0, controllY + 0, 300, 50);
  fill(70, 70, 70);
  rect(controllX + 0, controllY + 50, 300, 50);
  fill(80, 80, 80);
  rect(controllX + 0, controllY + 100, 300, 50);
  fill(90, 90, 90);
  rect(controllX + 0, controllY + 150, 300, 50);
  fill(255, 255, 255);
  textSize(15);
  textFont("Arial");
  text("Controllers", controllX + 108, controllY + 24);
  text("Items", controllX + 127, controllY + 120);
  textSize(20);

  downWall(controllX - 80, controllY + 50);
  downWall(controllX - 80, controllY + 0);
  downWall(controllX - 80, controllY + 115);
  downWall(controllX + 200, controllY + 50);
  downWall(controllX + 200, controllY + 0);
  downWall(controllX + 200, controllY + 115);
  fill(255, 255, 255);
  rect(controllX + 130, controllY + 70, 30);
  rect(controllX + 130, controllY + 35, 30);
  rect(controllX + 96, controllY + 70, 30);
  rect(controllX + 165, controllY + 70, 30);
  fill(0, 0, 0);
  textSize(24);
  text("⬆", controllX + 133, controllY + 39, 50);
  text("⬅", controllX + 97, controllY + 74, 50);
  text("⬇", controllX + 133, controllY + 75, 50);
  textSize(30);
  text("➡", controllX + 168, controllY + 71, 50);
  donkItem(controllX + 75, controllY + 165);
  beerGlass(controllX + 220, controllY + 190);
  fill(80, 80, 80);
  rect(controllX + 215, controllY + 115, 30);
  kanelbulle(controllX + 145, controllY + 180);
  textSize(10);
  fill(255, 255, 255);
  text("Dônk", controllX + 58, controllY + 135, 40);
  text("Sober up", controllX + 126, controllY + 135, 50);
  text("Get drunk", controllX + 203, controllY + 135, 50);
}

function draw() {
  controllDisplay(100, 100);
}
