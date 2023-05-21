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

function draw() {
  kanelbulle(100, 100);
}
