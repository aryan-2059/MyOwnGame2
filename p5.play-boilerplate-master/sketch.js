var canvas, trashCount;
var backgroundImage, spaceshipImage;
var fuelImage, trash1, trash2, lifeImage, obstacle1Image, obstacle2Image, trash; 
var blastImage;                 
var gameState;
var trashGroup, spaceship; 
var obstacleGroup, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;


function preload() {
  backgroundImage = loadImage("./assets/background.png");
  spaceshipImage = loadImage("./assets/spaceship.jpg");
  fuelImage = loadImage("./assets/fuel.png");
  trash1 = loadImage("./assets/trash.png");
  trash2 = loadImage("./assets/trash2.jpg");
  lifeImage = loadImage("./assets/life.png");
  obstacle1Image = loadImage("./assets/obstacle1.png"); 
  obstacle2Image = loadImage("./assets/obstacle2.png"); 
  obstacle3 = loadImage("./assets/obstacle3.jpg");
  obstacle4 = loadImage("./assets/obstacle4.jpg");
  obstacle5 = loadImage("./assets/obstacle5.jpg");
  obstacle6 = loadImage("./assets/obstacle6.png");
  blastImage = loadImage("./assets/blast.png"); 
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  // game = new Game();
  // game.getState();
  // game.start();
  // background = backgroundImage;
  trashGroup = createGroup();
  obstacleGroup = createGroup();
  trashGroup =[trash1, trash2];
  obstacleGroup = [obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6];
}

function draw() {
  background("blue");
  // background(backgroundImage);
  
  if(keyDown("UP_ARROW")){
    spaceship.y = spaceship.y +2;
  }
    
  if(keyDown("LEFT_ARROW")){
    spaceship.x = spaceship.x - 2;
  }
    
  if(keyDown("RIGHT_ARROW")){
    spaceship.x = spaceship.x + 2;
  }
    
  if(keyDown("DOWN_ARROW")){
    spaceship.y = spaceship.y -2;   
  }


  // if(spaceship.isTouching(trash)){
  //   trashCount += 1;
  // }
  if(trashCount == 5){
    spaceship.velocityX = +2;
    spaceship.velocityY = +2;
  }

  if (gameState === 1) {
    game.play();
  }

  if (spaceship.isTouching(obstacleGroup)) {
  //  game.end();
    blastImage.x = spaceship.x;
    spaceship.velocityX = 0;
    spaceship.velocityY = 0;
    Text("You lost :(");
  }
  drawSprites();
}

function spawnObstacles(){
  if (frameCount % 60 === 0){
    var obstacle = createSprite(400,165,10,40);
    obstacle.velocityX = -6;
    
     //generate random obstacles
     var rand = Math.round(random(1,6));
     switch(rand) {
       case 1: obstacle.addImage(obstacle1);
               break;
       case 2: obstacle.addImage(obstacle2);
               break;
       case 3: obstacle.addImage(obstacle3);
               break;
       case 4: obstacle.addImage(obstacle4);
               break;
       case 5: obstacle.addImage(obstacle5);
               break;
       case 6: obstacle.addImage(obstacle6);
               break;
       default: break;
     }
    
     //assign scale and lifetime to the obstacle           
     obstacle.scale = 0.5;
     obstacle.lifetime = 300;
    
    //add each obstacle to the group
     obstacleGroup.add(obstacle);
  }
 }
 
 function spawnTrash() {
   //write code here to spawn the trash
   if (frameCount % 60 === 0) {
      trash = createSprite(600,100,40,10);
     trash.y = Math.round(random(10,60));
     trash.addImage(cloudImage);
     trash.scale = 0.5;
     trash.velocityX = -3;
     
      //assign lifetime to the variable
     trash.lifetime = 134;
      //adding cloud to the group
    trashGroup.add(trash);
     }
 }