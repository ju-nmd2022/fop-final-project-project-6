function setup() {
  let cnv = createCanvas(1000, 600);
  let cnvX = (windowWidth - width) / 2;
  let cnvY = (windowHeight - height + 0) / 2;
  cnv.position(cnvX, cnvY);
  frameRate(30);
  createCanvas(1000, 600);
}

let countDown = 900;
let wallX = 100;
let wallY = 100;
let groundX = 100;
let groundY = 100;
//character array for colours
let shirtColor = [255, 0, 0];
let pantsColor = [255, 225, 0];
let hairColor = [255, 155, 0];
let shoeColor = [120, 50, 50];
let characterX = 185;
let characterY = 120;
const characterSpeed = 9;
let showDonk = true;
const donkX = 40;
const donkY = 110;
let isGameActive = true;
let donkStory1 = false;
let donkStory2 = false;

//downWall Size(w 40px, h 85px)
//straightWall Size(w 105px, h 55px) 90px width for seamless connection

background(10, 10, 10);

noStroke();

// BACKGROUND
function groundGraphic(groundX, groundY) {
  fill(10, 30, 35);
  rect(groundX, groundY + 200, 100);

  //Big Stone
  fill(50, 50, 50);
  rect(groundX + 35, groundY + 295, 5);
  rect(groundX + 40, groundY + 295, 5);
  rect(groundX + 45, groundY + 295, 5);
  rect(groundX + 50, groundY + 295, 5);
  rect(groundX + 45, groundY + 290, 5);
  rect(groundX + 40, groundY + 290, 5);
  rect(groundX + 35, groundY + 290, 5);
  rect(groundX + 30, groundY + 295, 5);
  rect(groundX + 35, groundY + 285, 5);
  rect(groundX + 40, groundY + 285, 5);

  //Shadow Stone
  fill(80, 80, 80);
  rect(groundX + 45, groundY + 295, 5);
  rect(groundX + 40, groundY + 295, 5);
  rect(groundX + 35, groundY + 295, 5);
  rect(groundX + 40, groundY + 290, 5);

  //Small Stones
  fill(40, 40, 40);
  rect(groundX + 15, groundY + 260, 5);
  rect(groundX + 45, groundY + 230, 5);
  rect(groundX + 55, groundY + 270, 5);
  rect(groundX + 5, groundY + 210, 5);
  rect(groundX + 75, groundY + 220, 5);
  rect(groundX + 90, groundY + 290, 5);
  rect(groundX + 5, groundY + 295, 5);

  //Grass
  fill(0, 60, 20);
  rect(groundX + 70, groundY + 260, 5);
  rect(groundX + 70, groundY + 255, 5);
  rect(groundX + 80, groundY + 255, 5);

  fill(0, 70, 40);
  rect(groundX + 75, groundY + 260, 5);
  rect(groundX + 65, groundY + 250, 5);
  rect(groundX + 85, groundY + 250, 5);

  //Small Stone
  fill(50, 50, 50);
  rect(groundX + 5, groundY + 245, 5);
  rect(groundX + 10, groundY + 245, 5);
  rect(groundX + 15, groundY + 245, 5);
  rect(groundX + 20, groundY + 245, 5);
  rect(groundX + 10, groundY + 240, 5);
  rect(groundX + 15, groundY + 240, 5);

  //Gunk
  fill(70, 75, 70);
  rect(groundX + 30, groundY + 235, 5);
  rect(groundX + 20, groundY + 220, 5);
  rect(groundX + 45, groundY + 265, 5);
  rect(groundX + 60, groundY + 205, 5);
  rect(groundX + 40, groundY + 210, 5);
  rect(groundX + 30, groundY + 275, 5);
  rect(groundX + 10, groundY + 280, 5);
  rect(groundX + 90, groundY + 260, 5);
  rect(groundX + 95, groundY + 230, 5);
  rect(groundX + 65, groundY + 285, 5);
}

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

//Character Going Down Graphic
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

//Item PLateu
function plateau() {
  let plateauX = 0;
  let plateauY = 0;

  //Base Square
  fill(70, 90, 70);
  rect(plateauX + 10, plateauY + 95, 60);

  //Steps
  push();
  fill(60, 80, 60);
  rect(plateauX + 70, plateauY + 95, 5);
  rect(plateauX + 70, plateauY + 100, 5);
  rect(plateauX + 70, plateauY + 105, 5);
  rect(plateauX + 70, plateauY + 110, 5);
  rect(plateauX + 70, plateauY + 115, 5);
  rect(plateauX + 70, plateauY + 120, 5);
  rect(plateauX + 70, plateauY + 125, 5);
  rect(plateauX + 70, plateauY + 130, 5);
  rect(plateauX + 70, plateauY + 135, 5);
  rect(plateauX + 70, plateauY + 140, 5);
  rect(plateauX + 70, plateauY + 145, 5);
  rect(plateauX + 70, plateauY + 150, 5);
  pop();

  push();
  fill(50, 70, 50);
  rect(plateauX + 75, plateauY + 100, 5);
  rect(plateauX + 75, plateauY + 105, 5);
  rect(plateauX + 75, plateauY + 110, 5);
  rect(plateauX + 75, plateauY + 115, 5);
  rect(plateauX + 75, plateauY + 120, 5);
  rect(plateauX + 75, plateauY + 125, 5);
  rect(plateauX + 75, plateauY + 130, 5);
  rect(plateauX + 75, plateauY + 135, 5);
  rect(plateauX + 75, plateauY + 140, 5);
  rect(plateauX + 75, plateauY + 145, 5);
  rect(plateauX + 75, plateauY + 150, 5);
  pop();

  push();
  fill(40, 60, 40);
  rect(plateauX + 80, plateauY + 105, 5);
  rect(plateauX + 80, plateauY + 110, 5);
  rect(plateauX + 80, plateauY + 115, 5);
  rect(plateauX + 80, plateauY + 120, 5);
  rect(plateauX + 80, plateauY + 125, 5);
  rect(plateauX + 80, plateauY + 130, 5);
  rect(plateauX + 80, plateauY + 135, 5);
  rect(plateauX + 80, plateauY + 140, 5);
  rect(plateauX + 80, plateauY + 145, 5);
  rect(plateauX + 80, plateauY + 150, 5);
  pop();

  push();
  fill(30, 50, 30);
  rect(plateauX + 85, plateauY + 110, 5);
  rect(plateauX + 85, plateauY + 115, 5);
  rect(plateauX + 85, plateauY + 120, 5);
  rect(plateauX + 85, plateauY + 125, 5);
  rect(plateauX + 85, plateauY + 130, 5);
  rect(plateauX + 85, plateauY + 135, 5);
  rect(plateauX + 85, plateauY + 140, 5);
  rect(plateauX + 85, plateauY + 145, 5);
  rect(plateauX + 85, plateauY + 150, 5);
  pop();

  push();
  fill(20, 40, 20);
  rect(plateauX + 85, plateauY + 110, 5);
  rect(plateauX + 80, plateauY + 105, 5);
  rect(plateauX + 75, plateauY + 100, 5);
  rect(plateauX + 70, plateauY + 95, 5);
  pop();

  push();
  fill(30, 50, 30);
  rect(plateauX + 85, plateauY + 115, 5);
  rect(plateauX + 80, plateauY + 110, 5);
  rect(plateauX + 75, plateauY + 105, 5);
  rect(plateauX + 70, plateauY + 100, 5);
  pop();

  //Under Shadows
  push();
  fill(50, 70, 50);
  rect(plateauX + 10, plateauY + 155, 5);
  rect(plateauX + 15, plateauY + 155, 5);
  rect(plateauX + 20, plateauY + 155, 5);
  rect(plateauX + 25, plateauY + 155, 5);
  rect(plateauX + 30, plateauY + 155, 5);
  rect(plateauX + 35, plateauY + 155, 5);
  rect(plateauX + 40, plateauY + 155, 5);
  rect(plateauX + 45, plateauY + 155, 5);
  rect(plateauX + 50, plateauY + 155, 5);
  rect(plateauX + 55, plateauY + 155, 5);
  rect(plateauX + 60, plateauY + 155, 5);
  rect(plateauX + 65, plateauY + 155, 5);
  rect(plateauX + 70, plateauY + 155, 5);
  pop();

  push();
  fill(40, 60, 40);
  rect(plateauX + 10, plateauY + 160, 5);
  rect(plateauX + 15, plateauY + 160, 5);
  rect(plateauX + 20, plateauY + 160, 5);
  rect(plateauX + 25, plateauY + 160, 5);
  rect(plateauX + 30, plateauY + 160, 5);
  rect(plateauX + 35, plateauY + 160, 5);
  rect(plateauX + 40, plateauY + 160, 5);
  rect(plateauX + 45, plateauY + 160, 5);
  rect(plateauX + 50, plateauY + 160, 5);
  rect(plateauX + 55, plateauY + 160, 5);
  rect(plateauX + 60, plateauY + 160, 5);
  pop();

  //Cracks
  push();
  fill(40, 40, 40);
  rect(plateauX + 10, plateauY + 140, 5);
  rect(plateauX + 15, plateauY + 140, 5);
  rect(plateauX + 20, plateauY + 145, 5);
  rect(plateauX + 25, plateauY + 150, 5);
  rect(plateauX + 20, plateauY + 135, 5);
  rect(plateauX + 65, plateauY + 105, 5);
  rect(plateauX + 60, plateauY + 110, 5);
  rect(plateauX + 55, plateauY + 115, 5);
  rect(plateauX + 50, plateauY + 110, 5);
  rect(plateauX + 50, plateauY + 150, 5);
  rect(plateauX + 55, plateauY + 145, 5);
  rect(plateauX + 60, plateauY + 150, 5);
  rect(plateauX + 15, plateauY + 95, 5);
  rect(plateauX + 20, plateauY + 95, 5);
  rect(plateauX + 25, plateauY + 100, 5);
  rect(plateauX + 20, plateauY + 105, 5);
  pop();
}

function level1() {
  //Stage 1

  straightWall(10, 200);
  straightWall(100, 200);
  straightWall(10, 5);
  straightWall(100, 5);

  straightWall(200, 5);
  straightWall(200, 200);
  straightWall(290, 200);
  straightWall(290, 90);
  straightWall(380, 90);
  straightWall(470, 90);
  downWall(470, 330);
  straightWall(485, 410);
  straightWall(395, 410);
  straightWall(305, 410);
  downWall(290, 200);
  straightWall(305, 280);
  straightWall(215, 280);
  straightWall(125, 280);
  downWall(200, 410);
  downWall(20, 280);
  downWall(20, 360);
  downWall(20, 440);
  downWall(20, 470);

  straightWall(290, 465);
  straightWall(380, 465);
  straightWall(470, 465);
  straightWall(560, 465);
  straightWall(650, 175);
  straightWall(740, 175);
  straightWall(830, 175);
  straightWall(915, 175);
  downWall(560, 430);
  downWall(560, 350);
  downWall(560, 270);
  downWall(560, 190);

  straightWall(810, 335);
  straightWall(850, 335);
  straightWall(915, 335);
  downWall(720, 510);
  downWall(720, 430);
  downWall(720, 350);
  straightWall(110, 555);
  straightWall(200, 555);
  straightWall(290, 555);
  straightWall(380, 555);
  straightWall(470, 555);
  straightWall(560, 555);
  straightWall(650, 555);
  straightWall(740, 555);

  downWall(100, 5);
  downWall(100, 165);
  downWall(200, 5);
  downWall(470, 90);
  downWall(470, 170);
  downWall(470, 250);

  plateau();

  //wall collision
  // https://stackoverflow.com/questions/74660149/wall-collision-in-a-maze-with-line-segment-intersection
}
//Donk Item
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
//Story after picking up donk
function donkStory1Function() {
  fill(255, 255, 255);
  rect(350, 200, 300, 200);
  fill(0, 0, 0);
  textSize(20);
  textFont("Arial");
  textAlign(CENTER, CENTER);

  text("You stole the sacred dônk!", 500, 300);
  textSize(40);
  text(">", 620, 380);
}
function donkStory2Function() {
  fill(255, 255, 255);
  rect(350, 200, 300, 200);
  fill(0, 0, 0);
  textSize(20);
  textFont("Arial");
  textAlign(CENTER, CENTER);

  text("Y fgffgacred dônk!", 500, 300);
  textSize(40);
  text(">", 620, 380);
}
//Draw the character
function draw() {
  //Spreading out the ground tiles in a for loop
  const length = 10;

  downWallCollision();
  wallCollisionUp();
  wallCollisionLeft();
  wallCollisionRight();

  //Looping the background tile
  for (let x = 0; x < length; x++) {
    for (let y = 0; y < length; y++) {
      groundGraphic(x * groundX, y * groundY - 200);
    }
  }
  level1();
  // displaying donk
  if (showDonk === true) {
    donkItem(donkX, donkY);
  }
  // removing donk if character is picking it up
  if (
    characterX < 50 &&
    characterX > 20 &&
    characterY < 125 &&
    characterY > 80
  ) {
    showDonk = false;
    isGameActive = false;
  }

  if (showDonk === false) {
    donkStory1 = true;
  }
  if (donkStory1 === true) {
    donkStory1Function();
    if (keyIsDown(32)) {
      donkStory1 = false;
      donkStory2 = true;
    }
  }
  if (donkStory2 === true) {
    donkStory2Function();
  }
  characterDown(characterX, characterY);
  //  Moving Character
  if (isGameActive) {
    if (keyIsDown(38)) {
      characterY = characterY - characterSpeed;
    } else if (keyIsDown(40)) {
      characterY = characterY + characterSpeed;
    } else if (keyIsDown(37)) {
      characterX = characterX - characterSpeed;
    } else if (keyIsDown(39)) {
      characterX = characterX + characterSpeed;
    }
    if (countDown > 0) {
      countDown = countDown - 1;
      console.log(countDown);
    } else {
      donkStory2 = true;
      isGameActive = false;
    }
  }
  // Timer counting down.
}

//Got help in the labs with wall collision, making objects for the walls, putting them in an array, looping the array.
function downWallCollision() {
  for (let i = 0; i < downWallArray.length; i++) {
    let downWall = downWallArray[i];

    if (
      characterX > downWall.x &&
      characterX < downWall.x + downWall.width &&
      characterY < downWall.y &&
      characterY + 30 > downWall.y
    ) {
      characterY = characterY - characterSpeed;
    }
  }
}

function wallCollisionUp() {
  for (let i = 0; i < upWallArray.length; i++) {
    let wall = upWallArray[i];

    //Up Wall One
    if (
      characterX > wall.x &&
      characterX < wall.x + wall.width &&
      characterY < wall.y &&
      characterY + 10 > wall.y
    ) {
      characterY = characterY + characterSpeed;
    }
  }
}
function wallCollisionLeft() {
  for (let i = 0; i < leftWallArray.length; i++) {
    let wall = leftWallArray[i];

    //Left Wall One
    if (
      characterX + 10 > wall.x &&
      characterX < wall.x + wall.width &&
      characterY < wall.y + wall.height &&
      characterY + 10 > wall.y
    ) {
      characterX = characterX + characterSpeed;
    }
  }
}

function wallCollisionRight() {
  for (let i = 0; i < rightWallArray.length; i++) {
    let wall = rightWallArray[i];

    //Right Wall One
    if (
      characterX < wall.x + wall.width &&
      characterX + 10 > wall.x &&
      characterY < wall.y + wall.height &&
      characterY + 10 > wall.y
    ) {
      characterX = characterX - characterSpeed;
    }
  }
}

const downWallOne = { x: 0, y: 200, width: 390, height: 55 };
const downWallTwo = { x: 280, y: 405, width: 285, height: 55 };
const downWallThree = { x: 100, y: 550, width: 720, height: 55 };
const downWallFour = { x: 800, y: 330, width: 200, height: 55 };

const upWallOne = { x: 0, y: 35, width: 300, height: 55 };
const upWallTwo = { x: 280, y: 120, width: 270, height: 55 };
const upWallThree = { x: 105, y: 310, width: 275, height: 55 };
const upWallFour = { x: 280, y: 490, width: 370, height: 55 };
const upWallFive = { x: 650, y: 210, width: 350, height: 55 };

const leftWallOne = { x: 0, y: 0, width: 15, height: 200 };
const leftWallTwo = { x: 390, y: 180, width: 15, height: 120 };
const leftWallThree = { x: 120, y: 260, width: 15, height: 340 };
const leftWallFour = { x: 645, y: 175, width: 15, height: 310 };
const leftWallFive = { x: 190, y: 0, width: 10, height: 70 };
const leftWallSix = { x: 190, y: 150, width: 10, height: 70 };

const rightWallOne = { x: 280, y: 0, width: 15, height: 120 };
const rightWallTwo = { x: 550, y: 120, width: 15, height: 290 };
const rightWallThree = { x: 280, y: 390, width: 15, height: 100 };
const rightWallFour = { x: 800, y: 320, width: 15, height: 230 };
const rightWallFive = { x: 180, y: 0, width: 10, height: 70 };
const rightWallSix = { x: 180, y: 150, width: 10, height: 70 };

let downWallArray = [downWallOne, downWallTwo, downWallThree, downWallFour];

let upWallArray = [upWallOne, upWallTwo, upWallThree, upWallFour, upWallFive];

let leftWallArray = [
  leftWallOne,
  leftWallTwo,
  leftWallThree,
  leftWallFour,
  leftWallFive,
  leftWallSix,
];

let rightWallArray = [
  rightWallOne,
  rightWallTwo,
  rightWallThree,
  rightWallFour,
  rightWallFive,
  rightWallSix,
];

//Timer
//https://www.w3schools.com/js/js_timing.asp
//https://medium.com/geekculture/creating-counter-with-javascript-4b1c60892c45
//https://www.w3schools.com/jsref/met_win_clearinterval.asp
