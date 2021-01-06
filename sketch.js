var car ,car2,car3,car4;
var weight,weight2,weight3,weight4;
var wall,wall2,wall3,wall4;
var speed,speed2,speed3,speed4;

function setup() {
  createCanvas(1600,400);
  
  car  = createSprite(50,200,50,50);
  car2 = createSprite(50,350,50,50);
  
//wall
wall = createSprite(1500,200,60,height/2);
  wall.shapeColor =("purple");

wall2 = createSprite(1400,350,60,height/2);
wall2.shapeColor = ("orange");




//speed
speed = random(55,90);
speed2 = random(40,60);

//weight
weight = random(400,1500);
weight2 = random(200,1000);

}

function draw() {
  background(2,2,2);
 
  
  car.velocityX = speed;
    car2.velocityX = speed2;
    // car 1 colliding
    
if(wall.x-car.x<(car.width+wall.width)/2){
  
  car.velocityX = 0;

var deformation = 0.5 * weight * speed * speed /22509; 

if(deformation<100){
  car.shapeColor = "green";
}
else
if(deformation>100 && deformation<180){
  car.shapeColor = "yellow";
}
else
if(deformation>180){
  car.shapeColor = "red";
}
}

//car 2 colliding
 if(wall2.x-car2.x<(car2.width+wall2.width)/2){

  car2.velocityX = 0;


  var deformation2 = 0.5 * weight2 * speed2 * speed2 /22509; 
  
  if(deformation2<100){
    car2.shapeColor = "green";
  }
  else
  if(deformation2>100 && deformation<180){
    car2.shapeColor = "yellow";
  }
  else
  if(deformation2>180){
    car2.shapeColor = "red";
  }
  }
 










  drawSprites();
}
