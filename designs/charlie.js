let shirtColor = [255, 0, 0];
let pantsColor = [255, 225, 0];
let hairColor = [255, 155, 0];
let shoeColor = [120, 50, 50];
let skinColor = [245, 220, 200];

background(255, 255, 255);
function characterDown(characterX, characterY) {
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

  fill(shirtColor);
  // shirt on front of character
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
  fill(hairColor);
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
  fill(skinColor);
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
  fill(pantsColor);
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

  fill(shoeColor);
  rect(characterX - 15, characterY + 25, 5);
  rect(characterX - 10, characterY + 25, 5);
  rect(characterX - 5, characterY + 25, 5);
  rect(characterX + 10, characterY + 25, 5);
  rect(characterX + 15, characterY + 25, 5);
  rect(characterX + 20, characterY + 25, 5);
}

function characterUp(characterX, characterY) {
  noStroke();
  // outlines of back of character
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
  rect(characterX - 15, characterY + 5, 5);

  rect(characterX + 25, characterY - 5, 5);
  rect(characterX + 25, characterY + 0, 5);
  rect(characterX + 25, characterY + 5, 5);
  rect(characterX - 20, characterY - 5, 5);
  rect(characterX - 20, characterY + 0, 5);
  rect(characterX - 20, characterY + 5, 5);

  fill(shirtColor);
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
  rect(characterX - 15, characterY + 0, 5);
  rect(characterX + 20, characterY + 0, 5);
  //   hair on front of character
  fill(hairColor);
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

  rect(characterX - 10, characterY - 20, 5);
  rect(characterX - 5, characterY - 20, 5);
  rect(characterX + 0, characterY - 20, 5);
  rect(characterX + 5, characterY - 20, 5);
  rect(characterX + 10, characterY - 20, 5);
  rect(characterX + 15, characterY - 20, 5);
  rect(characterX + 0, characterY - 15, 5);
  rect(characterX + 5, characterY - 15, 5);

  //   skin on front of character
  fill(skinColor);
  rect(characterX - 15, characterY - 20, 5);
  rect(characterX + 20, characterY - 20, 5);
  rect(characterX - 10, characterY - 15, 5);
  rect(characterX - 5, characterY - 15, 5);
  rect(characterX + 10, characterY - 15, 5);
  rect(characterX + 15, characterY - 15, 5);

  rect(characterX - 5, characterY - 10, 5);
  rect(characterX + 0, characterY - 10, 5);
  rect(characterX + 5, characterY - 10, 5);
  rect(characterX + 10, characterY - 10, 5);

  // Hands
  rect(characterX + 30, characterY + 0, 5);
  rect(characterX + 30, characterY + 5, 5);
  rect(characterX - 25, characterY + 0, 5);
  rect(characterX - 25, characterY + 5, 5);

  //   pants on front caracter
  fill(pantsColor);
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

  fill(shoeColor);
  rect(characterX - 15, characterY + 25, 5);
  rect(characterX - 10, characterY + 25, 5);
  rect(characterX - 5, characterY + 25, 5);
  rect(characterX + 10, characterY + 25, 5);
  rect(characterX + 15, characterY + 25, 5);
  rect(characterX + 20, characterY + 25, 5);
}

function characterLeft(characterX, characterY) {
  // outlines of left character
  fill(0, 0, 0);
  // Head
  rect(characterX - 10, characterY - 5, 5);
  rect(characterX - 5, characterY - 5, 5);
  rect(characterX, characterY - 5, 5);
  rect(characterX + 5, characterY - 5, 5);
  rect(characterX + 10, characterY - 5, 5);
  rect(characterX + 15, characterY - 10, 5);
  rect(characterX + 20, characterY - 15, 5);
  rect(characterX + 25, characterY - 20, 5);
  rect(characterX + 25, characterY - 25, 5);
  rect(characterX + 25, characterY - 30, 5);
  rect(characterX + 25, characterY - 35, 5);
  rect(characterX + 20, characterY - 40, 5);
  rect(characterX + 20, characterY - 45, 5);
  rect(characterX + 15, characterY - 50, 5);
  rect(characterX + 10, characterY - 50, 5);
  rect(characterX + 5, characterY - 55, 5);
  rect(characterX + 0, characterY - 55, 5);
  rect(characterX - 5, characterY - 55, 5);
  rect(characterX - 10, characterY - 55, 5);
  rect(characterX - 15, characterY - 50, 5);
  rect(characterX - 20, characterY - 50, 5);
  rect(characterX - 25, characterY - 45, 5);
  rect(characterX - 25, characterY - 40, 5);
  rect(characterX - 30, characterY - 35, 5);
  rect(characterX - 25, characterY - 30, 5);
  rect(characterX - 25, characterY - 25, 5);
  rect(characterX - 25, characterY - 20, 5);
  rect(characterX - 20, characterY - 15, 5);
  rect(characterX - 15, characterY - 10, 5);
  // character eyes
  rect(characterX - 15, characterY - 20, 5);
  rect(characterX - 15, characterY - 25, 5);
  // charater body
  rect(characterX + 15, characterY + 0, 5);
  rect(characterX + 15, characterY + 5, 5);
  rect(characterX + 15, characterY + 10, 5);
  rect(characterX + 10, characterY + 15, 5);
  rect(characterX + 10, characterY + 20, 5);
  rect(characterX + 5, characterY + 25, 5);
  rect(characterX + 0, characterY + 25, 5);
  rect(characterX - 5, characterY + 25, 5);
  rect(characterX - 10, characterY + 25, 5);
  rect(characterX - 15, characterY + 20, 5);
  rect(characterX - 15, characterY + 15, 5);
  rect(characterX - 10, characterY + 10, 5);
  rect(characterX - 10, characterY + 5, 5);
  rect(characterX - 15, characterY + 5, 5);
  rect(characterX - 15, characterY + 0, 5);
  rect(characterX - 5, characterY + 0, 5);
  rect(characterX + 0, characterY + 0, 5);
  rect(characterX + 5, characterY + 5, 5);
  rect(characterX + 5, characterY + 10, 5);
  rect(characterX + 0, characterY + 15, 5);
  rect(characterX - 5, characterY + 15, 5);

  // shirt on left character
  fill(shirtColor);
  rect(characterX - 10, characterY + 0, 5);
  rect(characterX + 5, characterY + 0, 5);
  rect(characterX + 10, characterY + 0, 5);
  rect(characterX + 10, characterY + 5, 5);
  rect(characterX + 10, characterY + 10, 5);
  // pants on left character
  fill(pantsColor);
  rect(characterX - 10, characterY + 15, 5);
  rect(characterX + 5, characterY + 15, 5);
  // shoes on left character
  fill(shoeColor);
  rect(characterX - 10, characterY + 20, 5);
  rect(characterX - 5, characterY + 20, 5);
  rect(characterX + 0, characterY + 20, 5);
  rect(characterX + 5, characterY + 20, 5);
  // hair on left character
  fill(hairColor);
  rect(characterX + 20, characterY - 20, 5);
  rect(characterX + 20, characterY - 25, 5);
  rect(characterX + 20, characterY - 30, 5);
  rect(characterX + 20, characterY - 35, 5);
  rect(characterX + 15, characterY - 20, 5);
  rect(characterX + 15, characterY - 25, 5);
  rect(characterX + 15, characterY - 30, 5);
  rect(characterX + 15, characterY - 35, 5);
  rect(characterX + 15, characterY - 40, 5);
  rect(characterX + 15, characterY - 45, 5);
  rect(characterX + 10, characterY - 25, 5);
  rect(characterX + 10, characterY - 30, 5);
  rect(characterX + 10, characterY - 35, 5);
  rect(characterX + 10, characterY - 40, 5);
  rect(characterX + 10, characterY - 45, 5);
  rect(characterX + 5, characterY - 30, 5);
  rect(characterX + 5, characterY - 35, 5);
  rect(characterX + 5, characterY - 40, 5);
  rect(characterX + 5, characterY - 45, 5);
  rect(characterX + 5, characterY - 50, 5);
  rect(characterX + 0, characterY - 25, 5);
  rect(characterX + 0, characterY - 30, 5);
  rect(characterX + 0, characterY - 35, 5);
  rect(characterX + 0, characterY - 40, 5);
  rect(characterX + 0, characterY - 45, 5);
  rect(characterX + 0, characterY - 50, 5);
  rect(characterX - 5, characterY - 25, 5);
  rect(characterX - 5, characterY - 30, 5);
  rect(characterX - 5, characterY - 35, 5);
  rect(characterX - 5, characterY - 40, 5);
  rect(characterX - 5, characterY - 45, 5);
  rect(characterX - 5, characterY - 50, 5);
  rect(characterX - 10, characterY - 30, 5);
  rect(characterX - 10, characterY - 35, 5);
  rect(characterX - 10, characterY - 40, 5);
  rect(characterX - 10, characterY - 45, 5);
  rect(characterX - 10, characterY - 50, 5);
  rect(characterX - 15, characterY - 35, 5);
  rect(characterX - 15, characterY - 40, 5);
  rect(characterX - 15, characterY - 45, 5);
  rect(characterX - 20, characterY - 40, 5);
  rect(characterX - 20, characterY - 45, 5);
  rect(characterX - 25, characterY - 35, 5);
  // skin color on left character
  fill(skinColor);
  rect(characterX - 20, characterY - 35, 5);
  rect(characterX - 20, characterY - 30, 5);
  rect(characterX - 20, characterY - 25, 5);
  rect(characterX - 20, characterY - 20, 5);
  rect(characterX - 15, characterY - 30, 5);
  rect(characterX - 15, characterY - 15, 5);
  rect(characterX - 10, characterY - 25, 5);
  rect(characterX - 10, characterY - 20, 5);
  rect(characterX - 10, characterY - 15, 5);
  rect(characterX - 10, characterY - 10, 5);
  rect(characterX - 5, characterY - 20, 5);
  rect(characterX - 5, characterY - 15, 5);
  rect(characterX - 5, characterY - 10, 5);
  rect(characterX + 0, characterY - 20, 5);
  rect(characterX + 0, characterY - 15, 5);
  rect(characterX + 0, characterY - 10, 5);
  rect(characterX + 5, characterY - 25, 5);
  rect(characterX + 5, characterY - 20, 5);
  rect(characterX + 5, characterY - 15, 5);
  rect(characterX + 5, characterY - 10, 5);
  rect(characterX + 10, characterY - 20, 5);
  rect(characterX + 10, characterY - 15, 5);
  rect(characterX + 10, characterY - 10, 5);
  rect(characterX + 15, characterY - 15, 5);

  rect(characterX + 0, characterY + 10, 5);
  rect(characterX + 0, characterY + 5, 5);
  rect(characterX - 5, characterY + 10, 5);
  rect(characterX - 5, characterY + 5, 5);
}

function characterRight(characterX, characterY) {
  // outline of right character
  fill(0, 0, 0);
  // head
  rect(characterX - 10, characterY - 5, 5);
  rect(characterX - 5, characterY - 5, 5);
  rect(characterX, characterY - 5, 5);
  rect(characterX + 5, characterY - 5, 5);
  rect(characterX + 10, characterY - 5, 5);
  rect(characterX + 15, characterY - 10, 5);
  rect(characterX + 20, characterY - 15, 5);
  rect(characterX + 25, characterY - 20, 5);
  rect(characterX + 25, characterY - 25, 5);
  rect(characterX + 25, characterY - 30, 5);
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
  rect(characterX - 25, characterY - 20, 5);
  rect(characterX - 20, characterY - 15, 5);
  rect(characterX - 15, characterY - 10, 5);
  // eyes
  rect(characterX + 15, characterY - 25, 5);
  rect(characterX + 15, characterY - 20, 5);
  // body
  rect(characterX + 15, characterY + 0, 5);
  rect(characterX + 15, characterY + 5, 5);
  rect(characterX + 10, characterY + 5, 5);
  rect(characterX + 10, characterY + 10, 5);
  rect(characterX + 15, characterY + 15, 5);
  rect(characterX + 15, characterY + 20, 5);
  rect(characterX + 10, characterY + 25, 5);
  rect(characterX + 5, characterY + 25, 5);
  rect(characterX + 0, characterY + 25, 5);
  rect(characterX - 5, characterY + 25, 5);
  rect(characterX - 10, characterY + 20, 5);
  rect(characterX - 10, characterY + 15, 5);
  rect(characterX - 15, characterY + 10, 5);
  rect(characterX - 15, characterY + 5, 5);
  rect(characterX - 15, characterY + 0, 5);
  rect(characterX + 0, characterY + 0, 5);
  rect(characterX + 5, characterY + 0, 5);
  rect(characterX + 0, characterY + 15, 5);
  rect(characterX + 5, characterY + 15, 5);
  rect(characterX - 5, characterY + 5, 5);
  rect(characterX - 5, characterY + 10, 5);
  // shirt on right character
  fill(shirtColor);
  rect(characterX + 10, characterY + 0, 5);
  rect(characterX - 5, characterY + 0, 5);
  rect(characterX - 10, characterY + 0, 5);
  rect(characterX - 10, characterY + 5, 5);
  rect(characterX - 10, characterY + 10, 5);
  // pants on right character
  fill(pantsColor);
  rect(characterX - 5, characterY + 15, 5);
  rect(characterX + 10, characterY + 15, 5);
  // shoes on right character
  fill(shoeColor);
  rect(characterX - 5, characterY + 20, 5);
  rect(characterX + 0, characterY + 20, 5);
  rect(characterX + 5, characterY + 20, 5);
  rect(characterX + 10, characterY + 20, 5);
  // hair on right character
  fill(hairColor);
  rect(characterX - 20, characterY - 20, 5);
  rect(characterX - 20, characterY - 25, 5);
  rect(characterX - 20, characterY - 30, 5);
  rect(characterX - 20, characterY - 35, 5);
  rect(characterX - 15, characterY - 20, 5);
  rect(characterX - 15, characterY - 25, 5);
  rect(characterX - 15, characterY - 30, 5);
  rect(characterX - 15, characterY - 35, 5);
  rect(characterX - 15, characterY - 40, 5);
  rect(characterX - 15, characterY - 45, 5);
  rect(characterX - 10, characterY - 25, 5);
  rect(characterX - 10, characterY - 30, 5);
  rect(characterX - 10, characterY - 35, 5);
  rect(characterX - 10, characterY - 40, 5);
  rect(characterX - 10, characterY - 45, 5);
  rect(characterX - 5, characterY - 35, 5);
  rect(characterX - 5, characterY - 40, 5);
  rect(characterX - 5, characterY - 45, 5);
  rect(characterX - 5, characterY - 50, 5);
  rect(characterX + 0, characterY - 30, 5);
  rect(characterX + 0, characterY - 35, 5);
  rect(characterX + 0, characterY - 40, 5);
  rect(characterX + 0, characterY - 45, 5);
  rect(characterX + 0, characterY - 50, 5);
  rect(characterX + 5, characterY - 35, 5);
  rect(characterX + 5, characterY - 40, 5);
  rect(characterX + 5, characterY - 45, 5);
  rect(characterX + 5, characterY - 50, 5);
  rect(characterX + 10, characterY - 40, 5);
  rect(characterX + 10, characterY - 45, 5);
  rect(characterX + 10, characterY - 50, 5);
  rect(characterX + 15, characterY - 40, 5);
  rect(characterX + 15, characterY - 45, 5);
  rect(characterX + 20, characterY - 35, 5);
  rect(characterX + 20, characterY - 40, 5);
  rect(characterX + 20, characterY - 45, 5);
  rect(characterX + 25, characterY - 35, 5);

  // skin on right character
  fill(skinColor);
  rect(characterX + 15, characterY - 35, 5);
  rect(characterX + 10, characterY - 35, 5);

  rect(characterX + 20, characterY - 30, 5);
  rect(characterX + 15, characterY - 30, 5);
  rect(characterX + 10, characterY - 30, 5);
  rect(characterX + 5, characterY - 30, 5);
  rect(characterX - 5, characterY - 30, 5);

  rect(characterX + 20, characterY - 25, 5);
  rect(characterX + 10, characterY - 25, 5);
  rect(characterX + 5, characterY - 25, 5);
  rect(characterX + 0, characterY - 25, 5);
  rect(characterX - 5, characterY - 25, 5);

  rect(characterX + 20, characterY - 20, 5);
  rect(characterX + 10, characterY - 20, 5);
  rect(characterX + 5, characterY - 20, 5);
  rect(characterX + 0, characterY - 20, 5);
  rect(characterX - 5, characterY - 20, 5);
  rect(characterX - 10, characterY - 20, 5);

  rect(characterX + 15, characterY - 15, 5);
  rect(characterX + 10, characterY - 15, 5);
  rect(characterX + 5, characterY - 15, 5);
  rect(characterX + 0, characterY - 15, 5);
  rect(characterX - 5, characterY - 15, 5);
  rect(characterX - 10, characterY - 15, 5);
  rect(characterX - 15, characterY - 15, 5);

  rect(characterX + 10, characterY - 10, 5);
  rect(characterX + 5, characterY - 10, 5);
  rect(characterX + 0, characterY - 10, 5);
  rect(characterX - 5, characterY - 10, 5);
  rect(characterX - 10, characterY - 10, 5);

  rect(characterX + 5, characterY + 5, 5);
  rect(characterX + 5, characterY + 10, 5);
  rect(characterX + 0, characterY + 5, 5);
  rect(characterX + 0, characterY + 10, 5);
}
function draw() {
  noStroke();
  characterDown(100, 100);
  characterUp(100, 200);
  characterLeft(200, 100);
  characterRight(200, 200);
}
