export function donkItem(x, y) {
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
