var bullet;
var wall;
var speed;
var weight;
var damage;
damage=0.5*bulletWeight*bulletSpeed;
var thickness;

function setup() {
  createCanvas(1600,400);
  bullet=createSprite(10, 40, 50, 50);
  
  wall=createSprite (1200,200,thickness,height/2)
  wall.shapeColor=(80,80,80);

  speed=random(223,321);
  weight=random(30,52);
}

thickness = random(22,83);

function draw() {
  background(255,255,255);  
  drawSprites();
  
  bullet.velocityX=speed;
  bullet.collide(wall);

  if (damage > 10){
  bullet.shapeColor = (0,225,0);
}

if (damage <10){
  bullet.shapeColor = (255,0,0);
  }
  drawSprites ();
}
