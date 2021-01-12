var hr = hour();
var mn = minute();
var sc = second();

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  angleMode(DEGREES);
  scAngle = map(sc,0,60,0,360);

  drawSprites();
}

function line(){
  push();
  rotate(scAngle);
  stoke(225,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();
}