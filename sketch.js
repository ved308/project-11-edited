
var jake, path, leftboundry, rightboundry
var jakeImg, pathImg

function preload(){
  //pre-load images
pathImg = loadImage("path.png");
  jake_Img = loadAnimation("Runner-1.png", "Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
    // creating path sprite
    path = createSprite(200,200);
    path.addImage(pathImg)
    path.scale = 1.2
    path.velocityY = 4

    jake = createSprite(180,340,30,30)
    jake.addAnimation("Img",jake_Img)
    jake.scale = 0.08
  

    leftboundry = createSprite(0,0,100,800)
    leftboundry.visible = false
    rightboundry = createSprite(400,0,100,800)
    rightboundry.visible = false
}

function draw() {
  background(0);

  jake.x = mouseX
  jake.collide(leftboundry);
  jake.collide(rightboundry);
if(path.y > 400){
path.y = height/2
}
  drawSprites();
}
