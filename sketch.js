var PLAY = 1;
var END = 0;
var gameState = PLAY;

var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 createCanvas(500,400);
  
  
  monkey = createSprite(80,315,20,20);
 monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  
ground = createSprite(400,350,980,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;

  
  bananaGroup = createGroup();
  obstacleGroup = createGroup();
}


function draw() {
background(220);
  
  if(keyDown("space")&& monkey.y >=10){
    monkey.velocityY = -12;    
  }
monkey.velocityY = monkey.velocityY + 0.8;  
  
if(ground.x < 0){
  ground.x = width/2;
}
 monkey.collide(ground);
  
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time:"+ survivalTime,100,50);
  
  
  food();
  obstacle();
  
 drawSprites(); 
}

function food(){
  if(frameCount%80 === 0){
    var banana = createSprite(450,100,20,20);
  banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.velocityX = -4;
    banana.scale = 0.05;
    banana.lifeTime = 150;
     bananaGroup.add(banana);
  }  
}

function obstacle(){
  if(frameCount %300 === 0){
  var obstacle = createSprite(500,315,20,20);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -4;
    obstacle.scale = 0.2;
    obstacle.lifeTime = 100;
  }
  
}


