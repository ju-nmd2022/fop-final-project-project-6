function donkStory1Function() {
  fill(255, 255, 255);
  rect(0, 0, 300, 200);
  fill(0, 0, 0);
  textSize(20);
  textFont("Arial");
  textAlign(CENTER, CENTER);

  text("You stole the sacred dônk!", 150, 100);
  textSize(40);
  text(">", 270, 180);
}
function donkStory2Function() {
  fill(255, 255, 255);
  rect(100, 100, 300, 200);
  fill(0, 0, 0);
  textSize(20);
  textFont("Arial");
  textAlign(CENTER, CENTER);

  text("hjkônk!", 250, 200);
  textSize(40);
  text(">", 370, 280);
}
function draw() {
  donkStory1Function(100, 100);
  //   donkStory2Function(200, 200);
}
