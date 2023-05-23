function winningScreenDisplay(winningX, winningY) {
  noStroke();

  fill(60, 150, 255);
  rect(winningX + 0, winningY + 0, 1000, 80);
  fill(70, 160, 255);
  rect(winningX + 0, winningY + 80, 1000, 80);
  fill(80, 170, 255);
  rect(winningX + 0, winningY + 160, 1000, 80);
  fill(90, 180, 255);
  rect(winningX + 0, winningY + 240, 1000, 80);
  fill(100, 190, 255);
  rect(winningX + 0, winningY + 320, 1000, 80);
  fill(110, 200, 255);
  rect(winningX + 0, winningY + 400, 1000, 80);

  fill(150, 250, 50);
  rect(winningX + 0, winningY + 480, 1000, 30);
  fill(140, 240, 40);
  rect(winningX + 0, winningY + 510, 1000, 30);
  fill(130, 230, 30);
  rect(winningX + 0, winningY + 540, 1000, 30);
  fill(120, 220, 20);
  rect(winningX + 0, winningY + 570, 1000, 30);
}

function draw() {
  winningScreenDisplay(0, 0);
}
