var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  Rect1=createSprite(400,100,50,50);
  Rect2=createSprite(800,100,30,30);
  Rect1.velocityX=5
  Rect2.velocityX=-5
}

function draw() {
  background(0,0,0);  
BounceOff(movingRect,fixedRect);
BounceOff(Rect1,Rect2);
  drawSprites();
}
function BounceOff(a,b){
  if (a.x - b.x < b.width/2 + a.width/2
    && b.x - a.x < b.width/2 + a.width/2) {
  a.velocityX = a.velocityX * (-1);
  b.velocityX = b.velocityX * (-1);
}
if (a.y - b.y < b.height/2 + a.height/2
  && b.y - a.y < b.height/2 + a.height/2){
  a.velocityY = a.velocityY * (-1);
  b.velocityY = b.velocityY * (-1);
}

}