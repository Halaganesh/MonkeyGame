
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var lifetime
var ground

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(600, 200);

  ground = createSprite(300,190,600,10)
  ground.shapeColour = ("red")
  
  monkey = createSprite(100,180,10,10)
  monkey.addAnimation("moving" , monkey_running)
  monkey.scale = 0.1
}


function draw() {
  
  background(180);
  //displaying score
  text("lifetime: "+ lifetime, 290,30);
  lifetime = 0
  
  monkey.collide(ground)
  
  if(ground.x<0){
     ground.x = ground.width/2
     }
  
  if(keyDown("space")){
    monkey.velocity.y = -12    
     }
  
  monkey.velocityY = monkey.velocityY + 1.1
  
  
  
  bananaGroup = createGroup()
  
  spawnBanana()

  drawSprites()
}

function spawnBanana() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(80,120));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     banana.lifetime = 200;
    


  }
}


