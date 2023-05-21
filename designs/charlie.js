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
function characterOne(characterX, characterY) {
  noStroke();
  // outlines of front of character
  fill(0, 0, 0);
  //   head
  rect(characterX - 5, characterY - 5, 5);
  rect(characterX, characterY - 5, 5);
  rect(characterX + 5, characterY - 5, 5);
  rect(characterX + 10, characterY - 5, 5);
  rect(characterX + 15, characterY - 10, 5);
  rect(characterX + 20, characterY - 15, 5);
  rect(characterX + 25, characterY - 20, 5);
  rect(characterX + 30, characterY - 25, 5);
  rect(characterX + 30, characterY - 30, 5);
  rect(characterX + 30, characterY - 35, 5);
  rect(characterX + 25, characterY - 40, 5);
  rect(characterX + 25, characterY - 45, 5);
  rect(characterX + 20, characterY - 50, 5);
  rect(characterX + 15, characterY - 50, 5);
  rect(characterX + 10, characterY - 55, 5);
  rect(characterX + 5, characterY - 55, 5);
  rect(characterX + 0, characterY - 55, 5);
  rect(characterX - 5, characterY - 55, 5);
  rect(characterX - 10, characterY - 50, 5);
  rect(characterX - 15, characterY - 50, 5);
  rect(characterX - 20, characterY - 45, 5);
  rect(characterX - 20, characterY - 40, 5);
  rect(characterX - 25, characterY - 35, 5);
  rect(characterX - 25, characterY - 30, 5);
  rect(characterX - 25, characterY - 25, 5);
  rect(characterX - 20, characterY - 20, 5);
  rect(characterX - 15, characterY - 15, 5);
  rect(characterX - 10, characterY - 10, 5);
  //   caracter eyes
  rect(characterX - 5, characterY - 15, 5);
  rect(characterX - 5, characterY - 20, 5);
  rect(characterX - 5, characterY - 15, 5);
  rect(characterX + 10, characterY - 15, 5);
  rect(characterX + 10, characterY - 20, 5);
  rect(characterX - 5, characterY - 15, 5);
  // body
  rect(characterX + 25, characterY - 10, 5);
  rect(characterX + 30, characterY - 5, 5);
  rect(characterX + 35, characterY + 0, 5);
  rect(characterX + 35, characterY + 5, 5);
  rect(characterX + 30, characterY + 10, 5);
  rect(characterX + 25, characterY + 10, 5);
  rect(characterX + 25, characterY + 15, 5);
  rect(characterX + 25, characterY + 20, 5);
  rect(characterX + 25, characterY + 25, 5);
  rect(characterX + 20, characterY + 30, 5);
  rect(characterX + 15, characterY + 30, 5);
  rect(characterX + 10, characterY + 30, 5);

  rect(characterX + 5, characterY + 25, 5);
  rect(characterX + 5, characterY + 20, 5);
  rect(characterX + 0, characterY + 25, 5);
  rect(characterX + 0, characterY + 20, 5);

  rect(characterX - 15, characterY + 30, 5);
  rect(characterX - 10, characterY + 30, 5);
  rect(characterX - 5, characterY + 30, 5);

  rect(characterX - 20, characterY + 25, 5);
  rect(characterX - 20, characterY + 20, 5);
  rect(characterX - 20, characterY + 15, 5);
  rect(characterX - 20, characterY + 10, 5);
  rect(characterX - 25, characterY + 10, 5);
  rect(characterX - 30, characterY + 5, 5);
  rect(characterX - 30, characterY + 0, 5);
  rect(characterX - 25, characterY - 5, 5);
  rect(characterX - 20, characterY - 10, 5);

  rect(characterX - 10, characterY + 10, 5);
  rect(characterX - 5, characterY + 10, 5);
  rect(characterX + 0, characterY + 10, 5);
  rect(characterX + 5, characterY + 10, 5);
  rect(characterX + 10, characterY + 10, 5);
  rect(characterX + 15, characterY + 10, 5);
  rect(characterX + 20, characterY + 5, 5);
  rect(characterX + 20, characterY + 0, 5);
  rect(characterX - 15, characterY + 5, 5);
  rect(characterX - 15, characterY + 0, 5);

  fill(255, 0, 0);
  // red shirt on front of character
  rect(characterX - 15, characterY - 10, 5);
  rect(characterX - 15, characterY - 5, 5);
  rect(characterX - 10, characterY - 5, 5);
  rect(characterX - 10, characterY, 5);
  rect(characterX - 5, characterY, 5);
  rect(characterX, characterY, 5);
  rect(characterX + 5, characterY, 5);
  rect(characterX + 10, characterY, 5);
  rect(characterX + 15, characterY, 5);
  rect(characterX + 15, characterY - 5, 5);
  rect(characterX + 20, characterY - 5, 5);
  rect(characterX + 20, characterY - 10, 5);
  rect(characterX - 10, characterY + 5, 5);
  rect(characterX - 5, characterY + 5, 5);
  rect(characterX + 0, characterY + 5, 5);
  rect(characterX + 5, characterY + 5, 5);
  rect(characterX + 10, characterY + 5, 5);
  rect(characterX + 15, characterY + 5, 5);

  //   hair on front of character
  fill(255, 155, 0);
  rect(characterX + 10, characterY - 50, 5);
  rect(characterX + 5, characterY - 50, 5);
  rect(characterX + 0, characterY - 50, 5);
  rect(characterX - 5, characterY - 50, 5);
  rect(characterX + 20, characterY - 45, 5);
  rect(characterX + 15, characterY - 45, 5);
  rect(characterX + 10, characterY - 45, 5);
  rect(characterX + 5, characterY - 45, 5);
  rect(characterX + 0, characterY - 45, 5);
  rect(characterX - 5, characterY - 45, 5);
  rect(characterX - 10, characterY - 45, 5);
  rect(characterX - 15, characterY - 45, 5);
  rect(characterX + 20, characterY - 40, 5);
  rect(characterX + 15, characterY - 40, 5);
  rect(characterX + 10, characterY - 40, 5);
  rect(characterX + 5, characterY - 40, 5);
  rect(characterX + 0, characterY - 40, 5);
  rect(characterX - 5, characterY - 40, 5);
  rect(characterX - 10, characterY - 40, 5);
  rect(characterX - 15, characterY - 40, 5);
  rect(characterX + 25, characterY - 35, 5);
  rect(characterX + 20, characterY - 35, 5);
  rect(characterX + 15, characterY - 35, 5);
  rect(characterX + 10, characterY - 35, 5);
  rect(characterX + 5, characterY - 35, 5);
  rect(characterX + 0, characterY - 35, 5);
  rect(characterX - 5, characterY - 35, 5);
  rect(characterX - 10, characterY - 35, 5);
  rect(characterX - 20, characterY - 35, 5);
  rect(characterX + 20, characterY - 30, 5);
  rect(characterX + 15, characterY - 30, 5);
  rect(characterX + 10, characterY - 30, 5);
  rect(characterX + 5, characterY - 30, 5);
  rect(characterX + 0, characterY - 30, 5);

  //   skin on front of character
  fill(245, 220, 200);
  rect(characterX - 15, characterY - 35, 5);
  rect(characterX - 20, characterY - 30, 5);
  rect(characterX - 15, characterY - 30, 5);
  rect(characterX - 10, characterY - 30, 5);
  rect(characterX - 5, characterY - 30, 5);
  rect(characterX + 25, characterY - 30, 5);
  rect(characterX - 20, characterY - 25, 5);
  rect(characterX - 15, characterY - 25, 5);
  rect(characterX - 10, characterY - 25, 5);
  rect(characterX - 5, characterY - 25, 5);
  rect(characterX + 0, characterY - 25, 5);
  rect(characterX + 5, characterY - 25, 5);
  rect(characterX + 10, characterY - 25, 5);
  rect(characterX + 15, characterY - 25, 5);
  rect(characterX + 20, characterY - 25, 5);
  rect(characterX + 25, characterY - 25, 5);

  rect(characterX - 15, characterY - 20, 5);
  rect(characterX - 10, characterY - 20, 5);
  rect(characterX + 0, characterY - 20, 5);
  rect(characterX + 5, characterY - 20, 5);
  rect(characterX + 15, characterY - 20, 5);
  rect(characterX + 20, characterY - 20, 5);

  rect(characterX - 10, characterY - 15, 5);
  rect(characterX + 0, characterY - 15, 5);
  rect(characterX + 5, characterY - 15, 5);
  rect(characterX + 15, characterY - 15, 5);

  rect(characterX - 5, characterY - 10, 5);
  rect(characterX + 0, characterY - 10, 5);
  rect(characterX + 5, characterY - 10, 5);
  rect(characterX + 10, characterY - 10, 5);
  // Hands
  rect(characterX + 25, characterY - 5, 5);
  rect(characterX + 25, characterY + 0, 5);
  rect(characterX + 25, characterY + 5, 5);
  rect(characterX + 30, characterY + 0, 5);
  rect(characterX + 30, characterY + 5, 5);
  rect(characterX - 20, characterY - 5, 5);
  rect(characterX - 20, characterY + 0, 5);
  rect(characterX - 20, characterY + 5, 5);
  rect(characterX - 25, characterY + 0, 5);
  rect(characterX - 25, characterY + 5, 5);

  //   pants on front caracter
  fill(255, 214, 0);
  rect(characterX - 15, characterY + 10, 5);
  rect(characterX + 20, characterY + 10, 5);

  rect(characterX - 15, characterY + 15, 5);
  rect(characterX - 10, characterY + 15, 5);
  rect(characterX - 5, characterY + 15, 5);
  rect(characterX + 0, characterY + 15, 5);
  rect(characterX + 5, characterY + 15, 5);
  rect(characterX + 10, characterY + 15, 5);
  rect(characterX + 15, characterY + 15, 5);
  rect(characterX + 20, characterY + 15, 5);

  rect(characterX - 15, characterY + 20, 5);
  rect(characterX - 10, characterY + 20, 5);
  rect(characterX - 5, characterY + 20, 5);
  rect(characterX + 10, characterY + 20, 5);
  rect(characterX + 15, characterY + 20, 5);
  rect(characterX + 20, characterY + 20, 5);

  fill(120, 50, 50);
  rect(characterX - 15, characterY + 25, 5);
  rect(characterX - 10, characterY + 25, 5);
  rect(characterX - 5, characterY + 25, 5);
  rect(characterX + 10, characterY + 25, 5);
  rect(characterX + 15, characterY + 25, 5);
  rect(characterX + 20, characterY + 25, 5);
}

function characterTwo(characterX, characterY) {
  noStroke();
  // outlines of front of character
  fill(0, 0, 0);
  //   head
  rect(characterX - 5, characterY - 5, 5);
  rect(characterX, characterY - 5, 5);
  rect(characterX + 5, characterY - 5, 5);
  rect(characterX + 10, characterY - 5, 5);
  rect(characterX + 15, characterY - 10, 5);
  rect(characterX + 20, characterY - 15, 5);
  rect(characterX + 25, characterY - 20, 5);
  rect(characterX + 30, characterY - 25, 5);
  rect(characterX + 30, characterY - 30, 5);
  rect(characterX + 30, characterY - 35, 5);
  rect(characterX + 25, characterY - 40, 5);
  rect(characterX + 25, characterY - 45, 5);
  rect(characterX + 20, characterY - 50, 5);
  rect(characterX + 15, characterY - 50, 5);
  rect(characterX + 10, characterY - 55, 5);
  rect(characterX + 5, characterY - 55, 5);
  rect(characterX + 0, characterY - 55, 5);
  rect(characterX - 5, characterY - 55, 5);
  rect(characterX - 10, characterY - 50, 5);
  rect(characterX - 15, characterY - 50, 5);
  rect(characterX - 20, characterY - 45, 5);
  rect(characterX - 20, characterY - 40, 5);
  rect(characterX - 25, characterY - 35, 5);
  rect(characterX - 25, characterY - 30, 5);
  rect(characterX - 25, characterY - 25, 5);
  rect(characterX - 20, characterY - 20, 5);
  rect(characterX - 15, characterY - 15, 5);
  rect(characterX - 10, characterY - 10, 5);
  //   caracter eyes
  rect(characterX - 5, characterY - 15, 5);
  rect(characterX - 5, characterY - 20, 5);
  rect(characterX - 5, characterY - 15, 5);
  rect(characterX + 10, characterY - 15, 5);
  rect(characterX + 10, characterY - 20, 5);
  rect(characterX - 5, characterY - 15, 5);
  // body
  rect(characterX + 25, characterY - 10, 5);
  rect(characterX + 30, characterY - 5, 5);
  rect(characterX + 35, characterY + 0, 5);
  rect(characterX + 35, characterY + 5, 5);
  rect(characterX + 30, characterY + 10, 5);
  rect(characterX + 25, characterY + 10, 5);
  rect(characterX + 25, characterY + 15, 5);
  rect(characterX + 25, characterY + 20, 5);
  rect(characterX + 25, characterY + 25, 5);
  rect(characterX + 20, characterY + 30, 5);
  rect(characterX + 15, characterY + 30, 5);
  rect(characterX + 10, characterY + 30, 5);

  rect(characterX + 5, characterY + 25, 5);
  rect(characterX + 5, characterY + 20, 5);
  rect(characterX + 0, characterY + 25, 5);
  rect(characterX + 0, characterY + 20, 5);

  rect(characterX - 15, characterY + 30, 5);
  rect(characterX - 10, characterY + 30, 5);
  rect(characterX - 5, characterY + 30, 5);

  rect(characterX - 20, characterY + 25, 5);
  rect(characterX - 20, characterY + 20, 5);
  rect(characterX - 20, characterY + 15, 5);
  rect(characterX - 20, characterY + 10, 5);
  rect(characterX - 25, characterY + 10, 5);
  rect(characterX - 30, characterY + 5, 5);
  rect(characterX - 30, characterY + 0, 5);
  rect(characterX - 25, characterY - 5, 5);
  rect(characterX - 20, characterY - 10, 5);

  rect(characterX - 10, characterY + 10, 5);
  rect(characterX - 5, characterY + 10, 5);
  rect(characterX + 0, characterY + 10, 5);
  rect(characterX + 5, characterY + 10, 5);
  rect(characterX + 10, characterY + 10, 5);
  rect(characterX + 15, characterY + 10, 5);
  rect(characterX + 20, characterY + 5, 5);
  rect(characterX + 20, characterY + 0, 5);
  rect(characterX - 15, characterY + 5, 5);
  rect(characterX - 15, characterY + 0, 5);

  fill(0, 0, 0);
  // red shirt on front of character
  rect(characterX - 15, characterY - 10, 5);
  rect(characterX - 15, characterY - 5, 5);
  rect(characterX - 10, characterY - 5, 5);
  rect(characterX - 10, characterY, 5);
  rect(characterX - 5, characterY, 5);
  rect(characterX, characterY, 5);
  rect(characterX + 5, characterY, 5);
  rect(characterX + 10, characterY, 5);
  rect(characterX + 15, characterY, 5);
  rect(characterX + 15, characterY - 5, 5);
  rect(characterX + 20, characterY - 5, 5);
  rect(characterX + 20, characterY - 10, 5);
  rect(characterX - 10, characterY + 5, 5);
  rect(characterX - 5, characterY + 5, 5);
  rect(characterX + 0, characterY + 5, 5);
  rect(characterX + 5, characterY + 5, 5);
  rect(characterX + 10, characterY + 5, 5);
  rect(characterX + 15, characterY + 5, 5);

  //   hair on front of character
  fill(120, 65, 0);
  rect(characterX + 10, characterY - 50, 5);
  rect(characterX + 5, characterY - 50, 5);
  rect(characterX + 0, characterY - 50, 5);
  rect(characterX - 5, characterY - 50, 5);
  rect(characterX + 20, characterY - 45, 5);
  rect(characterX + 15, characterY - 45, 5);
  rect(characterX + 10, characterY - 45, 5);
  rect(characterX + 5, characterY - 45, 5);
  rect(characterX + 0, characterY - 45, 5);
  rect(characterX - 5, characterY - 45, 5);
  rect(characterX - 10, characterY - 45, 5);
  rect(characterX - 15, characterY - 45, 5);
  rect(characterX + 20, characterY - 40, 5);
  rect(characterX + 15, characterY - 40, 5);
  rect(characterX + 10, characterY - 40, 5);
  rect(characterX + 5, characterY - 40, 5);
  rect(characterX + 0, characterY - 40, 5);
  rect(characterX - 5, characterY - 40, 5);
  rect(characterX - 10, characterY - 40, 5);
  rect(characterX - 15, characterY - 40, 5);
  rect(characterX + 25, characterY - 35, 5);
  rect(characterX + 20, characterY - 35, 5);
  rect(characterX + 15, characterY - 35, 5);
  rect(characterX + 10, characterY - 35, 5);
  rect(characterX + 5, characterY - 35, 5);
  rect(characterX + 0, characterY - 35, 5);
  rect(characterX - 5, characterY - 35, 5);
  rect(characterX - 10, characterY - 35, 5);
  rect(characterX - 20, characterY - 35, 5);
  rect(characterX + 20, characterY - 30, 5);
  rect(characterX + 15, characterY - 30, 5);
  rect(characterX + 10, characterY - 30, 5);
  rect(characterX + 5, characterY - 30, 5);
  rect(characterX + 0, characterY - 30, 5);

  //   skin on front of character
  fill(245, 220, 200);
  rect(characterX - 15, characterY - 35, 5);
  rect(characterX - 20, characterY - 30, 5);
  rect(characterX - 15, characterY - 30, 5);
  rect(characterX - 10, characterY - 30, 5);
  rect(characterX - 5, characterY - 30, 5);
  rect(characterX + 25, characterY - 30, 5);
  rect(characterX - 20, characterY - 25, 5);
  rect(characterX - 15, characterY - 25, 5);
  rect(characterX - 10, characterY - 25, 5);
  rect(characterX - 5, characterY - 25, 5);
  rect(characterX + 0, characterY - 25, 5);
  rect(characterX + 5, characterY - 25, 5);
  rect(characterX + 10, characterY - 25, 5);
  rect(characterX + 15, characterY - 25, 5);
  rect(characterX + 20, characterY - 25, 5);
  rect(characterX + 25, characterY - 25, 5);

  rect(characterX - 15, characterY - 20, 5);
  rect(characterX - 10, characterY - 20, 5);
  rect(characterX + 0, characterY - 20, 5);
  rect(characterX + 5, characterY - 20, 5);
  rect(characterX + 15, characterY - 20, 5);
  rect(characterX + 20, characterY - 20, 5);

  rect(characterX - 10, characterY - 15, 5);
  rect(characterX + 0, characterY - 15, 5);
  rect(characterX + 5, characterY - 15, 5);
  rect(characterX + 15, characterY - 15, 5);

  rect(characterX - 5, characterY - 10, 5);
  rect(characterX + 0, characterY - 10, 5);
  rect(characterX + 5, characterY - 10, 5);
  rect(characterX + 10, characterY - 10, 5);
  // Hands
  rect(characterX + 25, characterY - 5, 5);
  rect(characterX + 25, characterY + 0, 5);
  rect(characterX + 25, characterY + 5, 5);
  rect(characterX + 30, characterY + 0, 5);
  rect(characterX + 30, characterY + 5, 5);
  rect(characterX - 20, characterY - 5, 5);
  rect(characterX - 20, characterY + 0, 5);
  rect(characterX - 20, characterY + 5, 5);
  rect(characterX - 25, characterY + 0, 5);
  rect(characterX - 25, characterY + 5, 5);

  //   pants on front caracter
  fill(255, 214, 0);
  rect(characterX - 15, characterY + 10, 5);
  rect(characterX + 20, characterY + 10, 5);

  rect(characterX - 15, characterY + 15, 5);
  rect(characterX - 10, characterY + 15, 5);
  rect(characterX - 5, characterY + 15, 5);
  rect(characterX + 0, characterY + 15, 5);
  rect(characterX + 5, characterY + 15, 5);
  rect(characterX + 10, characterY + 15, 5);
  rect(characterX + 15, characterY + 15, 5);
  rect(characterX + 20, characterY + 15, 5);

  rect(characterX - 15, characterY + 20, 5);
  rect(characterX - 10, characterY + 20, 5);
  rect(characterX - 5, characterY + 20, 5);
  rect(characterX + 10, characterY + 20, 5);
  rect(characterX + 15, characterY + 20, 5);
  rect(characterX + 20, characterY + 20, 5);

  // shoes
  fill(0, 100, 200);
  rect(characterX - 15, characterY + 25, 5);
  rect(characterX - 10, characterY + 25, 5);
  rect(characterX - 5, characterY + 25, 5);
  rect(characterX + 10, characterY + 25, 5);
  rect(characterX + 15, characterY + 25, 5);
  rect(characterX + 20, characterY + 25, 5);
}

function characterThree(characterX, characterY) {
  noStroke();
  // outlines of front of character
  fill(0, 0, 0);
  //   head
  rect(characterX - 5, characterY - 5, 5);
  rect(characterX, characterY - 5, 5);
  rect(characterX + 5, characterY - 5, 5);
  rect(characterX + 10, characterY - 5, 5);
  rect(characterX + 15, characterY - 10, 5);
  rect(characterX + 20, characterY - 15, 5);
  rect(characterX + 25, characterY - 20, 5);
  rect(characterX + 30, characterY - 25, 5);
  rect(characterX + 30, characterY - 30, 5);
  rect(characterX + 30, characterY - 35, 5);
  rect(characterX + 25, characterY - 40, 5);
  rect(characterX + 25, characterY - 45, 5);
  rect(characterX + 20, characterY - 50, 5);
  rect(characterX + 15, characterY - 50, 5);
  rect(characterX + 10, characterY - 55, 5);
  rect(characterX + 5, characterY - 55, 5);
  rect(characterX + 0, characterY - 55, 5);
  rect(characterX - 5, characterY - 55, 5);
  rect(characterX - 10, characterY - 50, 5);
  rect(characterX - 15, characterY - 50, 5);
  rect(characterX - 20, characterY - 45, 5);
  rect(characterX - 20, characterY - 40, 5);
  rect(characterX - 25, characterY - 35, 5);
  rect(characterX - 25, characterY - 30, 5);
  rect(characterX - 25, characterY - 25, 5);
  rect(characterX - 20, characterY - 20, 5);
  rect(characterX - 15, characterY - 15, 5);
  rect(characterX - 10, characterY - 10, 5);
  //   caracter eyes
  rect(characterX - 5, characterY - 15, 5);
  rect(characterX - 5, characterY - 20, 5);
  rect(characterX - 5, characterY - 15, 5);
  rect(characterX + 10, characterY - 15, 5);
  rect(characterX + 10, characterY - 20, 5);
  rect(characterX - 5, characterY - 15, 5);
  // body
  rect(characterX + 25, characterY - 10, 5);
  rect(characterX + 30, characterY - 5, 5);
  rect(characterX + 35, characterY + 0, 5);
  rect(characterX + 35, characterY + 5, 5);
  rect(characterX + 30, characterY + 10, 5);
  rect(characterX + 25, characterY + 10, 5);
  rect(characterX + 25, characterY + 15, 5);
  rect(characterX + 25, characterY + 20, 5);
  rect(characterX + 25, characterY + 25, 5);
  rect(characterX + 20, characterY + 30, 5);
  rect(characterX + 15, characterY + 30, 5);
  rect(characterX + 10, characterY + 30, 5);

  rect(characterX + 5, characterY + 25, 5);
  rect(characterX + 5, characterY + 20, 5);
  rect(characterX + 0, characterY + 25, 5);
  rect(characterX + 0, characterY + 20, 5);

  rect(characterX - 15, characterY + 30, 5);
  rect(characterX - 10, characterY + 30, 5);
  rect(characterX - 5, characterY + 30, 5);

  rect(characterX - 20, characterY + 25, 5);
  rect(characterX - 20, characterY + 20, 5);
  rect(characterX - 20, characterY + 15, 5);
  rect(characterX - 20, characterY + 10, 5);
  rect(characterX - 25, characterY + 10, 5);
  rect(characterX - 30, characterY + 5, 5);
  rect(characterX - 30, characterY + 0, 5);
  rect(characterX - 25, characterY - 5, 5);
  rect(characterX - 20, characterY - 10, 5);

  rect(characterX - 10, characterY + 10, 5);
  rect(characterX - 5, characterY + 10, 5);
  rect(characterX + 0, characterY + 10, 5);
  rect(characterX + 5, characterY + 10, 5);
  rect(characterX + 10, characterY + 10, 5);
  rect(characterX + 15, characterY + 10, 5);
  rect(characterX + 20, characterY + 5, 5);
  rect(characterX + 20, characterY + 0, 5);
  rect(characterX - 15, characterY + 5, 5);
  rect(characterX - 15, characterY + 0, 5);

  fill(255, 0, 255);
  // red shirt on front of character
  rect(characterX - 15, characterY - 10, 5);
  rect(characterX - 15, characterY - 5, 5);
  rect(characterX - 10, characterY - 5, 5);
  rect(characterX - 10, characterY, 5);
  rect(characterX - 5, characterY, 5);
  rect(characterX, characterY, 5);
  rect(characterX + 5, characterY, 5);
  rect(characterX + 10, characterY, 5);
  rect(characterX + 15, characterY, 5);
  rect(characterX + 15, characterY - 5, 5);
  rect(characterX + 20, characterY - 5, 5);
  rect(characterX + 20, characterY - 10, 5);
  rect(characterX - 10, characterY + 5, 5);
  rect(characterX - 5, characterY + 5, 5);
  rect(characterX + 0, characterY + 5, 5);
  rect(characterX + 5, characterY + 5, 5);
  rect(characterX + 10, characterY + 5, 5);
  rect(characterX + 15, characterY + 5, 5);

  //   hair on front of character
  fill(255, 200, 0);
  rect(characterX + 10, characterY - 50, 5);
  rect(characterX + 5, characterY - 50, 5);
  rect(characterX + 0, characterY - 50, 5);
  rect(characterX - 5, characterY - 50, 5);
  rect(characterX + 20, characterY - 45, 5);
  rect(characterX + 15, characterY - 45, 5);
  rect(characterX + 10, characterY - 45, 5);
  rect(characterX + 5, characterY - 45, 5);
  rect(characterX + 0, characterY - 45, 5);
  rect(characterX - 5, characterY - 45, 5);
  rect(characterX - 10, characterY - 45, 5);
  rect(characterX - 15, characterY - 45, 5);
  rect(characterX + 20, characterY - 40, 5);
  rect(characterX + 15, characterY - 40, 5);
  rect(characterX + 10, characterY - 40, 5);
  rect(characterX + 5, characterY - 40, 5);
  rect(characterX + 0, characterY - 40, 5);
  rect(characterX - 5, characterY - 40, 5);
  rect(characterX - 10, characterY - 40, 5);
  rect(characterX - 15, characterY - 40, 5);
  rect(characterX + 25, characterY - 35, 5);
  rect(characterX + 20, characterY - 35, 5);
  rect(characterX + 15, characterY - 35, 5);
  rect(characterX + 10, characterY - 35, 5);
  rect(characterX + 5, characterY - 35, 5);
  rect(characterX + 0, characterY - 35, 5);
  rect(characterX - 5, characterY - 35, 5);
  rect(characterX - 10, characterY - 35, 5);
  rect(characterX - 20, characterY - 35, 5);
  rect(characterX + 20, characterY - 30, 5);
  rect(characterX + 15, characterY - 30, 5);
  rect(characterX + 10, characterY - 30, 5);
  rect(characterX + 5, characterY - 30, 5);
  rect(characterX + 0, characterY - 30, 5);

  //   skin on front of character
  fill(245, 220, 200);
  rect(characterX - 15, characterY - 35, 5);
  rect(characterX - 20, characterY - 30, 5);
  rect(characterX - 15, characterY - 30, 5);
  rect(characterX - 10, characterY - 30, 5);
  rect(characterX - 5, characterY - 30, 5);
  rect(characterX + 25, characterY - 30, 5);
  rect(characterX - 20, characterY - 25, 5);
  rect(characterX - 15, characterY - 25, 5);
  rect(characterX - 10, characterY - 25, 5);
  rect(characterX - 5, characterY - 25, 5);
  rect(characterX + 0, characterY - 25, 5);
  rect(characterX + 5, characterY - 25, 5);
  rect(characterX + 10, characterY - 25, 5);
  rect(characterX + 15, characterY - 25, 5);
  rect(characterX + 20, characterY - 25, 5);
  rect(characterX + 25, characterY - 25, 5);

  rect(characterX - 15, characterY - 20, 5);
  rect(characterX - 10, characterY - 20, 5);
  rect(characterX + 0, characterY - 20, 5);
  rect(characterX + 5, characterY - 20, 5);
  rect(characterX + 15, characterY - 20, 5);
  rect(characterX + 20, characterY - 20, 5);

  rect(characterX - 10, characterY - 15, 5);
  rect(characterX + 0, characterY - 15, 5);
  rect(characterX + 5, characterY - 15, 5);
  rect(characterX + 15, characterY - 15, 5);

  rect(characterX - 5, characterY - 10, 5);
  rect(characterX + 0, characterY - 10, 5);
  rect(characterX + 5, characterY - 10, 5);
  rect(characterX + 10, characterY - 10, 5);
  // Hands
  rect(characterX + 25, characterY - 5, 5);
  rect(characterX + 25, characterY + 0, 5);
  rect(characterX + 25, characterY + 5, 5);
  rect(characterX + 30, characterY + 0, 5);
  rect(characterX + 30, characterY + 5, 5);
  rect(characterX - 20, characterY - 5, 5);
  rect(characterX - 20, characterY + 0, 5);
  rect(characterX - 20, characterY + 5, 5);
  rect(characterX - 25, characterY + 0, 5);
  rect(characterX - 25, characterY + 5, 5);

  //   pants on front caracter
  fill(255, 214, 0);
  rect(characterX - 15, characterY + 10, 5);
  rect(characterX + 20, characterY + 10, 5);

  rect(characterX - 15, characterY + 15, 5);
  rect(characterX - 10, characterY + 15, 5);
  rect(characterX - 5, characterY + 15, 5);
  rect(characterX + 0, characterY + 15, 5);
  rect(characterX + 5, characterY + 15, 5);
  rect(characterX + 10, characterY + 15, 5);
  rect(characterX + 15, characterY + 15, 5);
  rect(characterX + 20, characterY + 15, 5);

  rect(characterX - 15, characterY + 20, 5);
  rect(characterX - 10, characterY + 20, 5);
  rect(characterX - 5, characterY + 20, 5);
  rect(characterX + 10, characterY + 20, 5);
  rect(characterX + 15, characterY + 20, 5);
  rect(characterX + 20, characterY + 20, 5);

  // shoes
  fill(0, 0, 0);
  rect(characterX - 15, characterY + 25, 5);
  rect(characterX - 10, characterY + 25, 5);
  rect(characterX - 5, characterY + 25, 5);
  rect(characterX + 10, characterY + 25, 5);
  rect(characterX + 15, characterY + 25, 5);
  rect(characterX + 20, characterY + 25, 5);
}

function choseCharacter(boxX, boxY) {
  noStroke();
  fill(60, 60, 60);
  rect(boxX, boxY, 300, 50);
  fill(70, 70, 70);
  rect(boxX, boxY + 50, 300, 50);
  fill(80, 80, 80);
  rect(boxX, boxY + 100, 300, 50);
  fill(90, 90, 90);
  rect(boxX, boxY + 150, 300, 50);
  fill(255, 255, 255);
  textSize(20);
  textFont("Arial");
  text("Chose your character", boxX + 52, boxY + 30);
  textSize(10);
  text("Press the number on your keyboard to chose", boxX + 49, boxY + 45);
  textSize(20);
  text("1", boxX + 64, boxY + 85);
  text("2", boxX + 144, boxY + 85);
  text("3", boxX + 224, boxY + 85);

  textSize(20);

  downWall(20, 150);
  downWall(20, 100);
  downWall(20, 215);
  downWall(300, 150);
  downWall(300, 100);
  downWall(300, 215);
}

function draw() {
  choseCharacter(100, 100);
  characterOne(165, 250);
  characterTwo(245, 250);
  characterThree(325, 250);
}
