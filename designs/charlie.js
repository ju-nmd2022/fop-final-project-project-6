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
function timerContainer(signX, signY) {
  fill(0, 0, 0);
  noStroke();
  // Frame of the container
  rect(signX - 60, signY + 5, 5);
  rect(signX - 55, signY, 5);
  rect(signX - 50, signY, 5);
  rect(signX - 45, signY, 5);
  rect(signX - 40, signY, 5);
  rect(signX - 35, signY, 5);
  rect(signX - 30, signY, 5);
  rect(signX - 25, signY, 5);
  rect(signX - 20, signY, 5);
  rect(signX - 15, signY, 5);
  rect(signX - 10, signY, 5);
  rect(signX - 5, signY, 5);
  rect(signX, signY, 5);
  rect(signX + 5, signY, 5);
  rect(signX + 10, signY, 5);
  rect(signX + 15, signY, 5);
  rect(signX + 20, signY, 5);

  rect(signX + 25, signY, 5);
  rect(signX + 30, signY, 5);
  rect(signX + 35, signY, 5);
  rect(signX + 40, signY, 5);
  rect(signX + 45, signY, 5);
  rect(signX + 50, signY, 5);
  rect(signX + 55, signY, 5);
  rect(signX + 60, signY + 5, 5);

  rect(signX + 65, signY + 10, 5);
  rect(signX + 65, signY + 15, 5);
  rect(signX + 65, signY + 20, 5);
  rect(signX + 65, signY + 25, 5);
  rect(signX + 65, signY + 30, 5);
  rect(signX + 65, signY + 35, 5);
  rect(signX + 65, signY + 40, 5);
  rect(signX + 65, signY + 45, 5);
  rect(signX + 65, signY + 50, 5);
  rect(signX + 65, signY + 55, 5);

  rect(signX + 60, signY + 60, 5);
  rect(signX + 55, signY + 65, 5);
  rect(signX + 50, signY + 65, 5);
  rect(signX + 45, signY + 65, 5);
  rect(signX + 40, signY + 65, 5);
  rect(signX + 35, signY + 65, 5);
  rect(signX + 30, signY + 65, 5);
  rect(signX + 25, signY + 65, 5);
  rect(signX + 20, signY + 65, 5);
  rect(signX + 15, signY + 65, 5);
  rect(signX + 10, signY + 65, 5);
  rect(signX + 5, signY + 65, 5);
  rect(signX + 0, signY + 65, 5);
  rect(signX - 5, signY + 65, 5);
  rect(signX - 10, signY + 65, 5);
  rect(signX - 15, signY + 65, 5);
  rect(signX - 20, signY + 65, 5);
  rect(signX - 25, signY + 65, 5);
  rect(signX - 30, signY + 65, 5);
  rect(signX - 35, signY + 65, 5);
  rect(signX - 40, signY + 65, 5);
  rect(signX - 45, signY + 65, 5);
  rect(signX - 50, signY + 65, 5);
  rect(signX - 55, signY + 65, 5);
  rect(signX - 60, signY + 60, 5);

  rect(signX - 65, signY + 10, 5);
  rect(signX - 65, signY + 15, 5);
  rect(signX - 65, signY + 20, 5);
  rect(signX - 65, signY + 25, 5);
  rect(signX - 65, signY + 30, 5);
  rect(signX - 65, signY + 35, 5);
  rect(signX - 65, signY + 40, 5);
  rect(signX - 65, signY + 45, 5);
  rect(signX - 65, signY + 50, 5);
  rect(signX - 65, signY + 55, 5);

  fill(125, 85, 20);
  rect(signX - 55, signY + 5, 5);
  rect(signX - 50, signY + 5, 5);
  rect(signX - 45, signY + 5, 5);
  rect(signX - 40, signY + 5, 5);

  rect(signX - 60, signY + 10, 5);
  rect(signX - 60, signY + 15, 5);
  rect(signX - 60, signY + 20, 5);
  rect(signX - 60, signY + 25, 5);
  rect(signX - 60, signY + 30, 5);
  rect(signX - 60, signY + 35, 5);
  rect(signX - 60, signY + 40, 5);
  rect(signX - 60, signY + 45, 5);
  rect(signX - 55, signY + 15, 5);

  rect(signX - 55, signY + 60, 5);
  rect(signX - 50, signY + 60, 5);
  rect(signX - 45, signY + 60, 5);
  rect(signX - 40, signY + 60, 5);
  rect(signX - 35, signY + 60, 5);

  rect(signX - 35, signY + 15, 5);
  rect(signX - 30, signY + 15, 5);
  rect(signX - 25, signY + 15, 5);

  rect(signX - 30, signY + 55, 5);
  rect(signX - 25, signY + 55, 5);
  rect(signX - 20, signY + 55, 5);
  rect(signX - 15, signY + 55, 5);
  rect(signX - 10, signY + 55, 5);

  rect(signX - 45, signY + 35, 5);
  rect(signX - 40, signY + 35, 5);
  rect(signX - 35, signY + 35, 5);
  rect(signX - 30, signY + 35, 5);
  rect(signX - 25, signY + 35, 5);

  rect(signX - 15, signY + 45, 5);
  rect(signX - 10, signY + 45, 5);
  rect(signX - 5, signY + 45, 5);
  rect(signX - 0, signY + 45, 5);
  rect(signX + 5, signY + 45, 5);

  rect(signX + 10, signY + 25, 5);
  rect(signX + 15, signY + 25, 5);
  rect(signX + 20, signY + 25, 5);
  rect(signX + 25, signY + 25, 5);

  rect(signX - 50, signY + 25, 5);
  rect(signX - 55, signY + 25, 5);
  rect(signX - 40, signY + 25, 5);
  rect(signX - 45, signY + 25, 5);
  fill(105, 65, 20);

  rect(signX - 60, signY + 50, 5);
  rect(signX - 60, signY + 55, 5);
  rect(signX - 35, signY + 5, 5);
  rect(signX - 30, signY + 5, 5);
  rect(signX - 25, signY + 5, 5);
  rect(signX - 20, signY + 5, 5);
  rect(signX - 15, signY + 5, 5);
  rect(signX - 10, signY + 5, 5);
  rect(signX - 5, signY + 5, 5);
  rect(signX - 0, signY + 5, 5);
  rect(signX - 20, signY + 15, 5);
  rect(signX - 15, signY + 15, 5);
  rect(signX - 10, signY + 15, 5);
  rect(signX - 5, signY + 15, 5);
  rect(signX - 0, signY + 15, 5);
  rect(signX - 40, signY + 15, 5);
  rect(signX - 45, signY + 15, 5);
  rect(signX - 50, signY + 15, 5);

  rect(signX - 15, signY + 20, 5);
  rect(signX - 20, signY + 20, 5);
  rect(signX - 25, signY + 20, 5);
  rect(signX - 30, signY + 20, 5);
  rect(signX - 35, signY + 20, 5);

  rect(signX + 5, signY + 25, 5);
  rect(signX - 0, signY + 25, 5);
  rect(signX - 5, signY + 25, 5);
  rect(signX - 10, signY + 25, 5);
  rect(signX - 15, signY + 25, 5);
  rect(signX - 20, signY + 25, 5);
  rect(signX - 25, signY + 25, 5);

  rect(signX - 10, signY + 35, 5);
  rect(signX - 15, signY + 35, 5);
  rect(signX - 20, signY + 35, 5);
  rect(signX - 5, signY + 35, 5);
  rect(signX - 0, signY + 35, 5);
  rect(signX + 5, signY + 35, 5);

  rect(signX - 5, signY + 30, 5);
  rect(signX - 0, signY + 30, 5);
  rect(signX + 5, signY + 30, 5);
  rect(signX + 10, signY + 30, 5);
  rect(signX + 15, signY + 30, 5);
  rect(signX + 20, signY + 30, 5);

  rect(signX - 35, signY + 55, 5);
  rect(signX - 40, signY + 55, 5);
  rect(signX - 45, signY + 55, 5);
  rect(signX - 50, signY + 55, 5);
  rect(signX - 55, signY + 55, 5);

  rect(signX - 30, signY + 25, 5);
  rect(signX - 35, signY + 25, 5);

  rect(signX - 30, signY + 30, 5);
  rect(signX - 35, signY + 30, 5);
  rect(signX - 40, signY + 30, 5);
  rect(signX - 45, signY + 30, 5);
  rect(signX - 50, signY + 30, 5);
  rect(signX - 55, signY + 30, 5);

  rect(signX - 50, signY + 35, 5);
  rect(signX - 55, signY + 35, 5);
  rect(signX - 45, signY + 40, 5);
  rect(signX - 50, signY + 40, 5);
  rect(signX - 55, signY + 40, 5);

  fill(85, 55, 20);
  rect(signX - 55, signY + 10, 5);
  rect(signX - 50, signY + 10, 5);
  rect(signX - 45, signY + 10, 5);
  rect(signX - 40, signY + 10, 5);
  rect(signX - 35, signY + 10, 5);
  rect(signX - 30, signY + 10, 5);
  rect(signX - 25, signY + 10, 5);
  rect(signX - 20, signY + 10, 5);
  rect(signX - 15, signY + 10, 5);
  rect(signX - 10, signY + 10, 5);
  rect(signX - 5, signY + 10, 5);
  rect(signX - 0, signY + 10, 5);
  rect(signX - 30, signY + 60, 5);
  rect(signX - 25, signY + 60, 5);
  rect(signX - 20, signY + 60, 5);
  rect(signX - 15, signY + 60, 5);

  rect(signX - 10, signY + 30, 5);
  rect(signX - 25, signY + 30, 5);
  rect(signX - 20, signY + 30, 5);
  rect(signX - 15, signY + 30, 5);

  rect(signX - 25, signY + 50, 5);
  rect(signX - 30, signY + 50, 5);
  rect(signX - 35, signY + 50, 5);
  rect(signX - 40, signY + 50, 5);
  rect(signX - 45, signY + 50, 5);
  rect(signX - 50, signY + 50, 5);
  rect(signX - 55, signY + 50, 5);

  rect(signX - 40, signY + 40, 5);
  rect(signX - 35, signY + 40, 5);
  rect(signX - 30, signY + 40, 5);
  rect(signX - 25, signY + 40, 5);
  rect(signX - 20, signY + 40, 5);

  rect(signX + 30, signY + 10, 5);
  rect(signX + 35, signY + 10, 5);
  rect(signX + 40, signY + 10, 5);
  rect(signX + 45, signY + 10, 5);
  rect(signX + 50, signY + 10, 5);
  fill(90, 50, 20);
  rect(signX - 55, signY + 20, 5);
  rect(signX - 50, signY + 20, 5);
  rect(signX - 45, signY + 20, 5);
  rect(signX - 40, signY + 20, 5);

  rect(signX - 10, signY + 20, 5);
  rect(signX - 5, signY + 20, 5);
  rect(signX - 0, signY + 20, 5);
  rect(signX + 5, signY + 20, 5);
  rect(signX + 10, signY + 20, 5);
  rect(signX + 15, signY + 20, 5);

  rect(signX - 10, signY + 60, 5);
  rect(signX - 5, signY + 60, 5);
  rect(signX - 0, signY + 60, 5);
  rect(signX + 5, signY + 60, 5);
  rect(signX + 10, signY + 60, 5);
  rect(signX + 15, signY + 60, 5);

  rect(signX + 20, signY + 50, 5);
  rect(signX + 25, signY + 50, 5);
  rect(signX + 30, signY + 50, 5);
  rect(signX + 5, signY + 50, 5);
  rect(signX + 10, signY + 50, 5);
  rect(signX + 15, signY + 50, 5);

  rect(signX - 5, signY + 40, 5);
  rect(signX - 10, signY + 40, 5);
  rect(signX - 15, signY + 40, 5);

  rect(signX - 35, signY + 45, 5);
  rect(signX - 40, signY + 45, 5);
  rect(signX - 45, signY + 45, 5);
  rect(signX - 50, signY + 45, 5);
  rect(signX - 55, signY + 45, 5);

  rect(signX + 5, signY + 5, 5);
  rect(signX + 10, signY + 5, 5);
  rect(signX + 15, signY + 5, 5);
  rect(signX + 20, signY + 5, 5);
  rect(signX + 25, signY + 5, 5);

  rect(signX + 25, signY + 30, 5);
  rect(signX + 30, signY + 30, 5);
  rect(signX + 35, signY + 30, 5);
  rect(signX + 40, signY + 30, 5);
  rect(signX + 45, signY + 30, 5);

  rect(signX + 10, signY + 45, 5);
  rect(signX + 15, signY + 45, 5);

  fill(60, 40, 20);
  rect(signX + 20, signY + 60, 5);
  rect(signX + 25, signY + 60, 5);
  rect(signX + 30, signY + 60, 5);
  rect(signX + 35, signY + 60, 5);

  rect(signX + 40, signY + 55, 5);
  rect(signX + 45, signY + 55, 5);
  rect(signX + 50, signY + 55, 5);
  rect(signX + 55, signY + 55, 5);
  rect(signX + 60, signY + 55, 5);

  rect(signX + 30, signY + 5, 5);
  rect(signX + 35, signY + 5, 5);
  rect(signX + 40, signY + 5, 5);
  rect(signX + 45, signY + 5, 5);
  rect(signX + 50, signY + 5, 5);
  rect(signX + 55, signY + 5, 5);
  rect(signX + 60, signY + 10, 5);
  rect(signX + 55, signY + 10, 5);

  rect(signX + 10, signY + 35, 5);
  rect(signX + 15, signY + 35, 5);
  rect(signX + 20, signY + 35, 5);
  rect(signX + 25, signY + 35, 5);

  fill(65, 45, 20);
  rect(signX + 10, signY + 15, 5);
  rect(signX + 15, signY + 15, 5);
  rect(signX + 20, signY + 15, 5);
  rect(signX + 25, signY + 15, 5);
  rect(signX + 30, signY + 15, 5);
  rect(signX + 35, signY + 15, 5);

  rect(signX + 50, signY + 25, 5);
  rect(signX + 55, signY + 25, 5);
  rect(signX + 60, signY + 25, 5);

  rect(signX + 20, signY + 40, 5);
  rect(signX + 25, signY + 40, 5);
  rect(signX + 30, signY + 40, 5);
  rect(signX + 35, signY + 40, 5);

  rect(signX + 35, signY + 45, 5);
  rect(signX + 40, signY + 45, 5);
  rect(signX + 45, signY + 45, 5);
  rect(signX + 50, signY + 45, 5);
  rect(signX + 55, signY + 45, 5);
  rect(signX + 60, signY + 45, 5);

  rect(signX + 50, signY + 15, 5);
  rect(signX + 55, signY + 15, 5);
  rect(signX + 60, signY + 15, 5);

  rect(signX + 10, signY + 55, 5);
  rect(signX + 5, signY + 55, 5);
  rect(signX - 0, signY + 55, 5);
  rect(signX - 5, signY + 55, 5);
  fill(45, 30, 10);
  rect(signX + 30, signY + 55, 5);
  rect(signX + 35, signY + 55, 5);
  rect(signX + 40, signY + 60, 5);
  rect(signX + 45, signY + 60, 5);
  rect(signX + 50, signY + 60, 5);
  rect(signX + 55, signY + 60, 5);

  rect(signX + 50, signY + 50, 5);
  rect(signX + 55, signY + 50, 5);
  rect(signX + 60, signY + 50, 5);

  rect(signX + 40, signY + 20, 5);
  rect(signX + 45, signY + 20, 5);
  rect(signX + 50, signY + 20, 5);
  rect(signX + 55, signY + 20, 5);
  rect(signX + 60, signY + 20, 5);

  rect(signX + 30, signY + 35, 5);
  rect(signX + 35, signY + 35, 5);
  rect(signX + 40, signY + 35, 5);
  rect(signX + 45, signY + 35, 5);
  rect(signX + 50, signY + 35, 5);
  rect(signX + 55, signY + 35, 5);
  rect(signX + 60, signY + 35, 5);
  fill(65, 40, 20);
  rect(signX + 5, signY + 10, 5);
  rect(signX + 10, signY + 10, 5);
  rect(signX + 15, signY + 10, 5);
  rect(signX + 20, signY + 10, 5);
  rect(signX + 25, signY + 10, 5);

  rect(signX + 20, signY + 20, 5);
  rect(signX + 25, signY + 20, 5);
  rect(signX + 30, signY + 20, 5);
  rect(signX + 35, signY + 20, 5);

  rect(signX + 15, signY + 55, 5);
  rect(signX + 20, signY + 55, 5);
  rect(signX + 25, signY + 55, 5);

  rect(signX + 20, signY + 45, 5);
  rect(signX + 25, signY + 45, 5);
  rect(signX + 30, signY + 45, 5);

  rect(signX + 35, signY + 50, 5);
  rect(signX + 40, signY + 50, 5);
  rect(signX + 45, signY + 50, 5);

  rect(signX + 0, signY + 40, 5);
  rect(signX + 5, signY + 40, 5);
  rect(signX + 10, signY + 40, 5);
  rect(signX + 15, signY + 40, 5);

  rect(signX + 0, signY + 50, 5);
  rect(signX - 5, signY + 50, 5);
  rect(signX - 10, signY + 50, 5);
  rect(signX - 15, signY + 50, 5);
  rect(signX - 20, signY + 50, 5);

  rect(signX - 20, signY + 45, 5);
  rect(signX - 25, signY + 45, 5);
  rect(signX - 30, signY + 45, 5);
  rect(signX + 5, signY + 15, 5);

  rect(signX + 45, signY + 15, 5);
  rect(signX + 40, signY + 15, 5);

  rect(signX + 45, signY + 25, 5);
  rect(signX + 40, signY + 25, 5);
  rect(signX + 35, signY + 25, 5);
  rect(signX + 30, signY + 25, 5);

  rect(signX + 55, signY + 30, 5);
  rect(signX + 50, signY + 30, 5);
  rect(signX + 60, signY + 30, 5);

  rect(signX + 45, signY + 40, 5);
  rect(signX + 40, signY + 40, 5);
  rect(signX + 55, signY + 40, 5);
  rect(signX + 50, signY + 40, 5);
  rect(signX + 60, signY + 40, 5);
}

function losingScreen(boxX, boxY) {
  noStroke();
  fill(0, 0, 0, 200);
  rect(0, 0, 1000, 600);
  fill(60, 60, 60);
  rect(boxX + 0, boxY + 0, 300, 50);
  fill(70, 70, 70);
  rect(boxX + 0, boxY + 50, 300, 50);
  fill(80, 80, 80);
  rect(boxX + 0, boxY + 100, 300, 50);
  fill(90, 90, 90);
  rect(boxX + 0, boxY + 150, 300, 50);
  fill(255, 255, 255);
  textSize(20);
  textFont("Arial");
  text("You didn't get out of", boxX + 60, boxY + 54);
  text("the cave in time...", boxX + 72, boxY + 76);
  textSize(10);
  text("That kind of sucks", boxX + 106, boxY + 94);
  textSize(20);

  textSize(20);
  downWall(boxX - 80, boxY + 50);
  downWall(boxX - 80, boxY + 0);
  downWall(boxX - 80, boxY + 115);
  downWall(boxX + 200, boxY + 50);
  downWall(boxX + 200, boxY + 0);
  downWall(boxX + 200, boxY + 115);
  timerContainer(300, 220);
  fill(255, 255, 255);
  text("Press space", boxX + 148, boxY + 150);
  text("to try again", boxX + 154, boxY + 170);
}
function draw() {
  beerGlass(100, 100);
}

import { characterDown } from "./characterDown.js";
