//Giving Memory.
var Monkey , monkeyRunning;
var banana ,bananaImage, obstacle, obstacleImage;
var foodGroup, obstacleGroup;
var score;
var Ground ;


function preload(){
//Loading monkey Animations.
  monkeyRunning =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");

//Loading Banana Image.
  bananaImage = loadImage("banana.png");
  
//Loading Obstacle Image.
  obstacleImage = loadImage("obstacle.png");
}



function setup() {
//Making local memory for ground.
  var fullGround;
  
//Creating canvas of 400*400 .
  createCanvas(400,400);
  
//Creating Sprite for Monkey .
  monkey=createSprite(80,290,20,20);
  monkey.addAnimation("moving",monkeyRunning);
  monkey.scale=0.1;
  
//Creating Sprite for Ground .
  Ground =createSprite(400,300,900,10);
  
//Creating Sprite for Full Ground .
  fullGround = createSprite(400,344,900,100);
  
//Creating group for food .
  foodGroup = createGroup();
  
//Creating Group for Obstacle .
  obstacleGroup = createGroup();
}

function draw() {
//Making local Memory for Survival Time.
  var survivalTime = 0;
  
//Clearing Background.
  background("white");
  
//Displaying Survival Time.
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time = "+survivalTime,120,20);
  
//Giving Gravity for ground .
  monkey.velocityY = monkey.velocityY + 0.8;
  
//Making monkey jump and also Double jump.

  if(keyDown("space")  &&  monkey.y > 150)
    {
      monkey.velocityY=-12;
    }

//Making Banana come after every 80 frame count.
  if(frameCount%80===0)
    {
      food();
    }
  
//Making obstacles come after every 300 frame Count.
  if(frameCount%300===0)
    {
      obstacles();
    }
  
//Making monkey collide ground.
  monkey.collide(Ground);
  
//Displaying Sprites.
  drawSprites();
}

//Making userDefined function for food.
function food()
{
  banana = createSprite(410,50,10,10);
  banana.velocityX=-4;
  banana.addImage(bananaImage);
  banana.scale=0.1;
  banana.y=Math.round(random(50,200));
  banana.lifetime = 100;
  foodGroup.add(banana);
}

//Making userDefined function for obstacles.
function obstacles()
{
  obstacle = createSprite(410,290,10,10);
  obstacle.velocityX=-4;
  obstacle.addImage(obstacleImage);
  obstacle.scale=0.1;
  obstacle.lifetime = 110;
  obstacleGroup.add(obstacle);
}