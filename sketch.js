
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage,ground
var FoodGroup, obstacleGroup
var survivalTime

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(600,600);
  
  monkey = createSprite(100,500,10,10);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.15;
  
  ground = createSprite(50,550,1200,20);
  ground.velocityX = -7;
  ground.x = ground.width/2;
  
}


function draw() {

  background("white");
  
  if(ground.x < 0){
  ground.x = ground.width/2;
  }
  
  if(keyDown("space") && monkey.y >= 100){
  monkey.velocityY = -10;
  }
  
  monkey.velocityY = monkey.velocityY +0.8;
  
  monkey.collide(ground);
  
  stroke("white");
  textSize(20);
  fill("white");
  
  stroke("white");
  textSize(20);
  fill("black");
  survivalTime = Math.round(frameCount/frameRate());
  text("Survival Time:" + survivalTime,400,70);
  
  foodGroup = createGroup();
  obstacleGroup = createGroup();
  
  food();
  obstacles();
  
  drawSprites();
}


 function food (){
   if(frameCount % 80 === 0){
     banana = createSprite(600,Math.round(random(120,200)),20,20);
     banana.addImage(bananaImage);
     banana.scale = 0.15;
     banana.velocityX = -6;
     banana.lifetime = 100;
     foodGroup.add(banana);
   }
 }


 function obstacles(){
   if(frameCount % 300 == 0){
     obstacle = createSprite(600,505,10,10);
     obstacle.addImage(obstacleImage);
     obstacle.scale = 0.2;
     obstacle.velocityX = -7;
     obstacle.lifetime = 100;
     obstacleGroup.add(obstacle);
   }
 }
