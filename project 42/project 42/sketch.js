var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;

var form, player, game;

function preload (){
  backgroundImage=loadImage("images/track.jpg");
car1_img=loadImage("images/car1.png");
car2_img=loadImage("images/car2.png");
car3_img=loadImage("images/car3.png");
car4_img=loadImage("images/car4.png");




}

function spawnCars() {
  if(frameCount % 60 === 0) {
    var cars = createSprite(400,365,10,40);
    cars.velocityX = -6;
    
 
    var rand = random(1,4);
    cars.setAnimation("cars" + rand);
    
               
    cars.scale = 0.5;
    cars.lifetime =500;
    
    
    CarsGroup.add(cars);
  }
}


function setup(){
  canvas = createCanvas(displayWidth,displayHeight*4);
car1=createSprite(500,displayHeight-20);
car1.addImage("car1",car1_img);

car2=createSprite(550,displayHeight-20);
car2.addImage("car2",car2_img);

car3=createSprite(600,displayHeight-20);
car3.addImage("car3",car3_img);

car4=createSprite(650,displayHeight-20);
car4.addImage("car4",car1_img);


  
}


function draw(){
background(backgroundImage);
if (keyDown("UP_ARROW")){
  car1.y-=20;
}
if (keyDown("DOWN_ARROW")){
  car1.y+=20;
}




drawSprites();


}
