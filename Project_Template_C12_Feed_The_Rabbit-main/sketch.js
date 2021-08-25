var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
}

function createApples() {
  apple= createSprite(random(50,350),40,10,10);
  apple.addImage("apple.png");
  apple.scale= 1;
  apple.velocityY= -2;
  apple.lifetime= 300;
}

function createLeaves() {
  leaves= createSprite(random(50,350),40,10,10);
  leaves.addImage("leaf.png");
  leaves.scale= 1;
  leaves.velocityY = 2;
  leaves.lifetime= 300;
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
}