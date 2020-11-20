
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage,ground,invisibleG
var FoodGroup, obstacleGroup
var score
 var survivalTime=0;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);

    
  monkey=createSprite(105,515,10,10);
monkey.addAnimation("a",monkey_running);
 monkey.scale=0.1;
 

  
  ground=createSprite(550,550,10000,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
}


function draw() {
  
background("white");
 
  stroke("white");
  textSize(20);
  fill("white");
  text("Score :"+score,500,50);
  
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time :"+survivalTime,100,50);

  
  
  if(keyDown("space")){
    monkey.velocityY=-12;
  }
  
    monkey.velocityY=monkey.velocityY+1;
  monkey.collide(ground);
  
  FoodGroup=new Group();
  ObstaclesGroup=new Group();
  
    banana1();

obstacles0();
  
  drawSprites(); 
}

function banana1(){
 
  if(frameCount %80===0){
     banana=createSprite(600,random(120,200),10,10);
  banana.addImage(bananaImage);
  banana.scale=0.1;
 banana.velocityX=-4;
    banana.lifetime=600;
    FoodGroup.add(banana);
  }
}

function obstacles0(){
  if(frameCount%300===0){
    obstacle=createSprite(550,500,10,10);
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.3;
    obstacle.lifetime=600;
    obstacle.velocityX=-3;
  }
}


