let logotype;
function preload() {
  logotype = loadImage("logo.png");
}
function setup() {
  let cnv = createCanvas(1000, 600);
  let cnvX = (windowWidth - width) / 2;
  let cnvY = (windowHeight - height + 0) / 2;
  cnv.position(cnvX, cnvY);
  frameRate(30);
}

//Values for counter
let countDown = 750;
let counterActive = false;

//Values for ground and wall graphics
let wallX = 100;
let wallY = 100;
let groundX = 100;
let groundY = 100;

//character array for colours
let shirtColor = [0, 0, 0];
let pantsColor = [0, 0, 0];
let hairColor = [0, 0, 0];
let shoeColor = [0, 0, 0];

//Character values
let characterX = 185;
let characterY = 120;
let characterSpeed = 9;

//Values for Donk item and story
let showDonk = true;
const donkX = 40;
const donkY = 110;
let chosingCharacterPage = true;
let donkStory1 = false;
let losingScreen = false;
let donkWasPickedUp = false;
let showBeer = true;
let beerWasPickedUp = false;
let showKanelbulle = true;
let kanelbulleWasPickedUp = false;
let blockingWallActive = true;

//levels active
let level1Active = true;
let level2Active = false;
let level3Active = false;
let winningScreenActive = false;

//Game active value and chasing wall
let isCharacterSober = false;
let isCharacterDrunk = false;
let chasingWallX = -1000;

//downWall Size(w 40px, h 85px)
//straightWall Size(w 105px, h 55px) 90px width for seamless connection

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

//Character going up graphic
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

//Character going left graphic
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

//Character going right graphic
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

//Item PLateu for the donk
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

//Level 1, building the stage with graphics
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

//Level 2 stage graphics
function level2() {
  straightWall(10, 300);
  straightWall(10, 140);
  straightWall(100, 300);
  straightWall(190, 170);
  downWall(100, 265);
  downWall(100, 185);
  downWall(10, 105);
  downWall(10, 25);

  straightWall(115, 25);
  straightWall(205, 25);
  straightWall(295, 25);
  straightWall(385, 25);
  straightWall(475, 25);
  straightWall(565, 25);
  straightWall(655, 25);
  straightWall(745, 25);
  straightWall(795, 25);
  straightWall(280, 170);

  straightWall(570, 255);
  straightWall(660, 255);
  straightWall(750, 255);
  straightWall(840, 255);
  straightWall(920, 255);

  straightWall(715, 365);
  straightWall(805, 365);
  straightWall(895, 365);
  straightWall(920, 365);

  straightWall(505, 170);
  straightWall(595, 170);
  straightWall(685, 170);

  downWall(685, 170);
  downWall(780, 170);
  downWall(780, 100);
  downWall(780, 40);

  downWall(280, 170);
  downWall(400, 170);
  downWall(400, 250);
  downWall(400, 330);
  downWall(280, 250);
  downWall(280, 330);
  downWall(280, 410);
  downWall(280, 490);
  downWall(625, 490);
  downWall(625, 410);
  downWall(625, 380);
  downWall(475, 330);
  downWall(475, 250);

  straightWall(370, 525);
  straightWall(460, 525);
  straightWall(550, 525);
  straightWall(640, 525);

  straightWall(490, 395);
}

function level3() {
  straightWall(10, 0);
  straightWall(100, 0);
  straightWall(10, 120);
  straightWall(190, 0);
  downWall(10, 120);

  straightWall(25, 190);
  straightWall(0, 190);
  downWall(-90, 220);
  downWall(-90, 270);
  straightWall(0, 350);
  straightWall(25, 350);

  straightWall(535, 180);
  downWall(630, 60);
  downWall(630, 140);
  downWall(630, 220);
  downWall(630, 300);
  downWall(630, 380);
  downWall(520, 195);
  downWall(520, 275);
  downWall(520, 355);
  downWall(520, 435);
  downWall(520, 480);
  straightWall(610, 550);
  straightWall(700, 550);
  straightWall(790, 550);
  straightWall(880, 550);
  straightWall(915, 550);

  straightWall(720, 420);
  straightWall(790, 420);
  straightWall(880, 420);
  straightWall(915, 420);

  downWall(10, 360);
  downWall(175, 0);
  downWall(175, 80);
  downWall(175, 160);
  downWall(175, 240);
  downWall(250, 220);
  downWall(250, 140);
  downWall(250, 60);
  straightWall(100, 435);
  straightWall(265, 300);
  straightWall(190, 435);
  straightWall(190, 435);
  straightWall(280, 435);
  straightWall(370, 435);
  downWall(445, 355);
  straightWall(460, 435);
  downWall(445, 275);
  downWall(445, 195);

  straightWall(360, 60);
  straightWall(450, 60);
  straightWall(540, 60);
  straightWall(630, 60);
}

function winningScreenDisplay() {
  noStroke();

  fill(60, 150, 255);
  rect(0, 0, 1000, 80);
  fill(70, 160, 255);
  rect(0, 80, 1000, 80);
  fill(80, 170, 255);
  rect(0, 160, 1000, 80);
  fill(90, 180, 255);
  rect(0, 240, 1000, 80);
  fill(100, 190, 255);
  rect(0, 320, 1000, 80);
  fill(110, 200, 255);
  rect(0, 400, 1000, 80);

  fill(150, 250, 50);
  rect(0, 480, 1000, 30);
  fill(140, 240, 40);
  rect(0, 510, 1000, 30);
  fill(130, 230, 30);
  rect(0, 540, 1000, 30);
  fill(120, 220, 20);
  rect(0, 570, 1000, 30);
}

// container to display timer in
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
//Displaying the count down timer with numbers and seconds
function countDownDisplay() {
  timerContainer(500, 0);
  // textAlign(LEFT, LEFT);
  fill(255, 255, 255);
  textSize(15);
  text("Time left", 472, 10, 100, 50);
  let displayText = Math.ceil(countDown / 30);
  textSize(30);
  text(displayText + " sec", 465, 25, 100, 50);
}
//Chosing color of the character
function choseCharacter(boxX, boxY) {
  noStroke();
  fill(0, 0, 0, 200);
  rect(0, 0, 1000, 600);
  image(logotype, 320, -30, 400, 250);
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
  text("Chose your character", boxX + 52, boxY + 30);
  textSize(10);
  text("Press the number on your keyboard to chose", boxX + 49, boxY + 45);
  textSize(20);
  text("1", boxX + 64, boxY + 85);
  text("2", boxX + 144, boxY + 85);
  text("3", boxX + 224, boxY + 85);
  textSize(20);

  shirtColor = [255, 0, 0];
  pantsColor = [255, 214, 0];
  hairColor = [255, 155, 0];
  shoeColor = [120, 50, 50];
  characterDown(boxX + 65, boxY + 150);
  shirtColor = [0, 0, 0];
  pantsColor = [255, 214, 0];
  hairColor = [120, 65, 0];
  shoeColor = [0, 100, 200];
  characterDown(boxX + 145, boxY + 150);
  shirtColor = [255, 180, 255];
  pantsColor = [40, 40, 40];
  hairColor = [185, 150, 40];
  shoeColor = [255, 255, 255];
  characterDown(boxX + 225, boxY + 150);
  shirtColor = [0, 0, 0];
  pantsColor = [0, 0, 0];
  hairColor = [0, 0, 0];
  shoeColor = [0, 0, 0];
  downWall(boxX - 80, boxY + 50);
  downWall(boxX - 80, boxY + 0);
  downWall(boxX - 80, boxY + 115);
  downWall(boxX + 200, boxY + 50);
  downWall(boxX + 200, boxY + 0);
  downWall(boxX + 200, boxY + 115);
}

//Display of controllers and items
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

//Kanelbulle
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

//Beer Glass
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
//Screen showing when item is picked up
function donkStory1Function(boxX, boxY) {
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
  text("You stole the sacred dônk ", boxX + 32, boxY + 74);
  textSize(10);
  text("Leave the cave before the time is out!", boxX + 60, boxY + 90);
  textSize(20);

  downWall(boxX - 80, boxY + 50);
  downWall(boxX - 80, boxY + 0);
  downWall(boxX - 80, boxY + 115);
  downWall(boxX + 200, boxY + 50);
  downWall(boxX + 200, boxY + 0);
  downWall(boxX + 200, boxY + 115);
  timerContainer(boxX + 200, boxY + 120);
  fill(255, 255, 255);
  text("Press space", boxX + 147, boxY + 160);
}

//Second screen showing up after the first one
function losingScreenFunction(boxX, boxY) {
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
  timerContainer(boxX + 200, boxY + 120);
  fill(255, 255, 255);
  text("Press space", boxX + 148, boxY + 150);
  text("to try again", boxX + 154, boxY + 170);
}

function winningScreenFunction(boxX, boxY) {
  noStroke();
  fill(60, 60, 60);
  rect(boxX + 0, boxY + 0, 300, 50);
  fill(70, 70, 70);
  rect(boxX + 0, boxY + 50, 300, 50);
  fill(80, 80, 80);
  rect(boxX + 0, boxY + 100, 300, 50);
  fill(90, 90, 90);
  rect(boxX + 0, boxY + 150, 300, 50);
  fill(255, 255, 255);
  textSize(40);
  textFont("Arial");
  text("You did it!", boxX + 65, boxY + 76);
  textSize(15);
  text("You ran out of the maze in time.", boxX + 49, boxY + 94);
  downWall(boxX - 80, boxY + 50);
  downWall(boxX - 80, boxY + 0);
  downWall(boxX - 80, boxY + 115);
  downWall(boxX + 200, boxY + 50);
  downWall(boxX + 200, boxY + 0);
  downWall(boxX + 200, boxY + 115);
  timerContainer(boxX + 200, boxY + 120);
  fill(255, 255, 255);
  text("Press space", boxX + 160, boxY + 150);
  text("to play again", boxX + 159, boxY + 170);
  textSize(20);
}

//Graphic for the wall chasing the character
function chasingBox() {
  fill(0, 0, 0);
  rect(chasingWallX, 0, 1000, 600);
}

//Got help in the labs with wall collision, making objects for the walls, putting them in an array, looping the array.
function wallCollisionDown() {
  for (let i = 0; i < downWallArray.length; i++) {
    let downWall = downWallArray[i];

    //Checking the characters position, then making the character "collide"
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

//Wall collision for the walls uppward
function wallCollisionUp() {
  for (let i = 0; i < upWallArray.length; i++) {
    let wall = upWallArray[i];

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

//Wall collision for the walls going left
function wallCollisionLeft() {
  for (let i = 0; i < leftWallArray.length; i++) {
    let wall = leftWallArray[i];

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

//Wall collision for the walls going right
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

//Objects defining the walls, giving them values that the loop checks for
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

//Array's where the objects are put in for the loop
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

function blockingWall() {
  for (let i = 0; i < blockingWallArray.length; i++) {
    let wall = blockingWallArray[i];

    //Blocking wall in beginning of game to not let player pass before picking up donk
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
const blockingWall1 = { x: 280, y: 120, width: 15, height: 150 };

let blockingWallArray = [blockingWall1];

function lev2DownWallColl() {
  for (let i = 0; i < level2DownWallArray.length; i++) {
    let downWallTwo = level2DownWallArray[i];

    if (
      characterX > downWallTwo.x &&
      characterX < downWallTwo.x + downWallTwo.width &&
      characterY < downWallTwo.y &&
      characterY + 30 > downWallTwo.y
    ) {
      characterY = characterY - characterSpeed;
    }
  }
}

function lev2UpWallColl() {
  for (let i = 0; i < level2UpWallArray.length; i++) {
    let upWallTwo = level2UpWallArray[i];

    if (
      characterX > upWallTwo.x &&
      characterX < upWallTwo.x + upWallTwo.width &&
      characterY < upWallTwo.y &&
      characterY + 10 > upWallTwo.y
    ) {
      characterY = characterY + characterSpeed;
    }
  }
}

function lev2LeftWallColl() {
  for (let i = 0; i < level2LeftWallArray.length; i++) {
    let leftWallTwo = level2LeftWallArray[i];

    if (
      characterX + 10 > leftWallTwo.x &&
      characterX < leftWallTwo.x + leftWallTwo.width &&
      characterY < leftWallTwo.y + leftWallTwo.height &&
      characterY + 10 > leftWallTwo.y
    ) {
      characterX = characterX + characterSpeed;
    }
  }
}

function lev2RightWallColl() {
  for (let i = 0; i < level2RightWallArray.length; i++) {
    let rightWallTwo = level2RightWallArray[i];

    //Right Wall One
    if (
      characterX < rightWallTwo.x + rightWallTwo.width &&
      characterX + 10 > rightWallTwo.x &&
      characterY < rightWallTwo.y + rightWallTwo.height &&
      characterY + 10 > rightWallTwo.y
    ) {
      characterX = characterX - characterSpeed;
    }
  }
}

//Objects for the downwalls two
const levelTwoDownOne = { x: 0, y: 300, width: 185, height: 55 };
const levelTwoDownTwo = { x: 175, y: 167, width: 210, height: 55 };
const levelTwoDownThree = { x: 470, y: 167, width: 320, height: 55 };
const levelTwoDownFour = { x: 370, y: 525, width: 360, height: 55 };
const levelTwoDownFive = { x: 700, y: 360, width: 300, height: 55 };
const levelTwoDownSix = { x: 775, y: 255, width: 95, height: 55 };

//Objects for the upwalls two
const levelTwoUpOne = { x: 0, y: 155, width: 105, height: 55 };
const levelTwoUpTwo = { x: 105, y: 45, width: 765, height: 55 };
const levelTwoUpThree = { x: 480, y: 425, width: 90, height: 55 };
const levelTwoUpFour = { x: 570, y: 280, width: 435, height: 55 };

//Objects for the leftwalls two
const levelTwoLeftOne = { x: 0, y: 140, width: 10, height: 200 };
const levelTwoLeftTwo = { x: 105, y: 40, width: 10, height: 120 };
const levelTwoLeftThree = { x: 380, y: 170, width: 10, height: 470 };
const levelTwoLeftFour = { x: 570, y: 280, width: 10, height: 140 };
const levelTwoLeftFive = { x: 785, y: 170, width: 10, height: 80 };

//Objects for the leftwalls two
const levelTwoRightOne = { x: 175, y: 155, width: 10, height: 130 };
const levelTwoRightTwo = { x: 470, y: 155, width: 10, height: 250 };
const levelTwoRightThree = { x: 850, y: 55, width: 10, height: 200 };
const levelTwoRightFour = { x: 700, y: 360, width: 10, height: 200 };

//Array for the downwalls for level 2
let level2DownWallArray = [
  levelTwoDownOne,
  levelTwoDownTwo,
  levelTwoDownThree,
  levelTwoDownFour,
  levelTwoDownFive,
  levelTwoDownSix,
];

//Array for the upwalls for level 2
let level2UpWallArray = [
  levelTwoUpOne,
  levelTwoUpTwo,
  levelTwoUpThree,
  levelTwoUpFour,
];

let level2LeftWallArray = [
  levelTwoLeftOne,
  levelTwoLeftTwo,
  levelTwoLeftThree,
  levelTwoLeftFour,
  levelTwoLeftFive,
];

let level2RightWallArray = [
  levelTwoRightOne,
  levelTwoRightTwo,
  levelTwoRightThree,
  levelTwoRightFour,
];

//Functions for wallcollision for level 3
function lev3DownWallColl() {
  for (let i = 0; i < level3DownWallArray.length; i++) {
    let downWallThree = level3DownWallArray[i];

    if (
      characterX > downWallThree.x &&
      characterX < downWallThree.x + downWallThree.width &&
      characterY < downWallThree.y &&
      characterY + 30 > downWallThree.y
    ) {
      characterY = characterY - characterSpeed;
    }
  }
}

function lev3UpWallColl() {
  for (let i = 0; i < level3UpWallArray.length; i++) {
    let upWallThree = level3UpWallArray[i];

    if (
      characterX > upWallThree.x &&
      characterX < upWallThree.x + upWallThree.width &&
      characterY < upWallThree.y &&
      characterY + 10 > upWallThree.y
    ) {
      characterY = characterY + characterSpeed;
    }
  }
}

function lev3LeftWallColl() {
  for (let i = 0; i < level3LeftWallArray.length; i++) {
    let leftWallThree = level3LeftWallArray[i];

    if (
      characterX + 10 > leftWallThree.x &&
      characterX < leftWallThree.x + leftWallThree.width &&
      characterY < leftWallThree.y + leftWallThree.height &&
      characterY + 10 > leftWallThree.y
    ) {
      characterX = characterX + characterSpeed;
    }
  }
}

function lev3RightWallColl() {
  for (let i = 0; i < level3RightWallArray.length; i++) {
    let rightWallThree = level3RightWallArray[i];

    //Right Wall One
    if (
      characterX < rightWallThree.x + rightWallThree.width &&
      characterX + 10 > rightWallThree.x &&
      characterY < rightWallThree.y + rightWallThree.height &&
      characterY + 10 > rightWallThree.y
    ) {
      characterX = characterX - characterSpeed;
    }
  }
}

//Objects for the walls for level 3
const level3DownOne = { x: 0, y: 120, width: 120, height: 55 };
const level3DownTwo = { x: 0, y: 347, width: 120, height: 55 };
const level3DownThree = { x: 90, y: 430, width: 450, height: 55 };
const level3DownFour = { x: 525, y: 180, width: 100, height: 55 };
const level3DownFive = { x: 605, y: 550, width: 400, height: 55 };

const level3UpOne = { x: 0, y: 15, width: 270, height: 55 };
const level3UpTwo = { x: -20, y: 210, width: 125, height: 55 };
const level3UpThree = { x: 245, y: 310, width: 110, height: 55 };
const level3UpFour = { x: 330, y: 90, width: 400, height: 55 };
const level3UpFive = { x: 700, y: 430, width: 310, height: 55 };

const level3LeftOne = { x: 5, y: 0, width: 10, height: 130 };
const level3LeftTwo = { x: 105, y: 120, width: 20, height: 110 };
const level3LeftThree = { x: 0, y: 210, width: 20, height: 150 };
const level3LeftFour = { x: 105, y: 335, width: 20, height: 150 };
const level3LeftFive = { x: 340, y: 60, width: 20, height: 270 };
const level3LeftSix = { x: 610, y: 165, width: 20, height: 400 };

const level3RightOne = { x: 240, y: 20, width: 20, height: 300 };
const level3RightTwo = { x: 510, y: 165, width: 20, height: 300 };
const level3RightThree = { x: 700, y: 60, width: 20, height: 380 };

//Arrays for level 3 walls
let level3DownWallArray = [
  level3DownOne,
  level3DownTwo,
  level3DownThree,
  level3DownFour,
  level3DownFive,
];

let level3UpWallArray = [
  level3UpOne,
  level3UpTwo,
  level3UpThree,
  level3UpFour,
  level3UpFive,
];

let level3LeftWallArray = [
  level3LeftOne,
  level3LeftTwo,
  level3LeftThree,
  level3LeftFour,
  level3LeftFive,
  level3LeftSix,
];

let level3RightWallArray = [level3RightOne, level3RightTwo, level3RightThree];

//Draw function where the game plays
function draw() {
  //Spreading out the ground tiles in a for loop
  const length = 10;

  //Looping the background tile 10x10
  for (let x = 0; x < length; x++) {
    for (let y = 0; y < length; y++) {
      groundGraphic(x * groundX, y * groundY - 200);
    }
  }

  if (blockingWallActive) {
    blockingWall();
  }

  if (level1Active) {
    wallCollisionDown();
    wallCollisionUp();
    wallCollisionLeft();
    wallCollisionRight();
    level1();
    if (characterX >= 1000) {
      level1Active = false;
      level2Active = true;
      characterX = 0;
      characterY = characterY - 20;
    }
  }
  if (level2Active) {
    lev2DownWallColl();
    lev2UpWallColl();
    lev2LeftWallColl();
    lev2RightWallColl();
    level2();
    if (showBeer === true) {
      beerGlass(250, 130);
      if (
        characterX > 220 &&
        characterX < 260 &&
        characterY > 40 &&
        characterY < 140
      ) {
        showBeer = false;
        isCharacterSober = false;
        isCharacterDrunk = true;
        characterSpeed = 5;
      }
    }

    if (characterX >= 1000) {
      level2Active = false;
      level3Active = true;
      characterX = 0;
      characterY = 70;
    }
  }

  if (level3Active) {
    lev3DownWallColl();
    lev3UpWallColl();
    lev3LeftWallColl();
    lev3RightWallColl();
    level3();

    if (showKanelbulle === true && countDown > 0) {
      kanelbulle(50, 285);
      if (
        characterX > 25 &&
        characterX < 70 &&
        characterY > 265 &&
        characterY < 320
      ) {
        showKanelbulle = false;
        isCharacterDrunk = false;
        isCharacterSober = true;
        characterSpeed = 9;
        countDown = countDown + 150;
      }
    }

    if (characterX >= 1000) {
      level3Active = false;
      counterActive = false;
      winningScreenActive = true;
      characterX = 1100;
    }
  }

  if (winningScreenActive) {
    winningScreenDisplay();

    if (characterX > 500) {
      characterX = characterX - 7;
    } else if (characterX <= 500) {
      characterX = characterX;
      winningScreenFunction(350, 200);
      if (keyIsDown(32)) {
        counterActive = true;
        donkWasPickedUp = false;
        characterX = 185;
        characterY = 120;
        showDonk = true;
        countDown = 750;
        chasingWallX = -1000;
        counterActive = false;
        losingScreen = false;
        chosingCharacterPage = true;
        blockingWallActive = true;
        level1Active = true;
        level2Active = false;
        level3Active = false;
        winningScreenActive = false;
        showKanelbulle = true;
        showBeer = true;
      }
    }
  }

  //displaying character
  characterDown(characterX, characterY);

  // displaying donk and removing donk if character is picking it up

  if (showDonk === true) {
    donkItem(donkX, donkY);
    if (
      characterX < 50 &&
      characterX > 20 &&
      characterY < 125 &&
      characterY > 80
    ) {
      showDonk = false;
      isCharacterSober = false;
      donkWasPickedUp = true;
      blockingWallActive = false;
    }
  }
  countDownDisplay();
  //Changing the array values for the characters clothes
  if (chosingCharacterPage) {
    choseCharacter(150, 200);
    controllDisplay(550, 200);
    if (keyIsDown(49)) {
      shirtColor = [255, 0, 0];
      pantsColor = [255, 214, 0];
      hairColor = [255, 155, 0];
      shoeColor = [120, 50, 50];
      chosingCharacterPage = false;
      isCharacterSober = true;
    }
    if (keyIsDown(50)) {
      shirtColor = [0, 0, 0];
      pantsColor = [255, 214, 0];
      hairColor = [120, 65, 0];
      shoeColor = [0, 100, 200];
      chosingCharacterPage = false;
      isCharacterSober = true;
    }
    if (keyIsDown(51)) {
      shirtColor = [255, 180, 255];
      pantsColor = [40, 40, 40];
      hairColor = [185, 150, 40];
      shoeColor = [255, 255, 255];
      chosingCharacterPage = false;
      isCharacterSober = true;
    }
  }
  //Displaying the story screen when donk item is picked up, then after starting the timer
  if (donkWasPickedUp === true) {
    donkStory1Function(350, 200);
    if (keyIsDown(32)) {
      isCharacterSober = true;
      counterActive = true;
      donkWasPickedUp = false;
    }
  }
  //  Moving Character
  if (isCharacterSober) {
    if (keyIsDown(38)) {
      characterY = characterY - characterSpeed;
    } else if (keyIsDown(40)) {
      characterY = characterY + characterSpeed;
    } else if (keyIsDown(37)) {
      characterX = characterX - characterSpeed;
    } else if (keyIsDown(39)) {
      characterX = characterX + characterSpeed;
    }
  }

  if (isCharacterDrunk) {
    if (keyIsDown(40)) {
      characterY = characterY - characterSpeed;
    } else if (keyIsDown(38)) {
      characterY = characterY + characterSpeed;
    } else if (keyIsDown(39)) {
      characterX = characterX - characterSpeed;
    } else if (keyIsDown(37)) {
      characterX = characterX + characterSpeed;
    }
  }
  // Timer ticking down to 0 and stopping
  if (counterActive) {
    if (countDown > 0) {
      countDown = countDown - 1;
      console.log(countDown);
    }
  }

  //Chasing wall going from left to right, game stops if the wall collides with the character
  if (countDown === 0) {
    chasingBox();
    chasingWallX = chasingWallX + 10;

    if (chasingWallX + 1000 > characterX) {
      isCharacterSober = false;
      isCharacterDrunk = false;
      chasingWallX = characterX - 1000;
      losingScreen = true;
    }
  }

  if (losingScreen === true) {
    losingScreenFunction(350, 200);
    if (keyIsDown(32)) {
      counterActive = true;
      donkWasPickedUp = false;
      characterX = 185;
      characterY = 120;
      characterSpeed = 9;
      showDonk = true;
      countDown = 750;
      chasingWallX = -1000;
      counterActive = false;
      losingScreen = false;
      chosingCharacterPage = true;
      blockingWallActive = true;
      level1Active = true;
      level2Active = false;
      level3Active = false;
      showKanelbulle = true;
      showBeer = true;
    }
  }
}
