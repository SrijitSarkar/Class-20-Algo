var movingRec;
var fixRec;

function setup() {
  createCanvas(1200,800);
  
  fixRec = createSprite(600,400,50,80);
  fixRec.shapeColor = "green";
  fixRec.debug = true;

  movingRec = createSprite(400,200,80,30);
  movingRec.shapeColor = "green";
  movingRec.debug = true;
}

function draw() {
  background("black");  

  movingRec.x = World.mouseX;
  movingRec.y = World.mouseY;

 if(movingRec.x-fixRec.x  < fixRec.width/2+movingRec.width/2
    &&fixRec.x-movingRec.x < fixRec.width/2+movingRec.width/2
    &&movingRec.y-fixRec.y  < fixRec.height/2+movingRec.height/2
    &&fixRec.y-movingRec.y < fixRec.height/2+movingRec.height/2 ){

    movingRec.shapeColor ="red";
    fixRec.shapeColor="red";

  }
 else{

  movingRec.shapeColor="green";
  fixRec.shapeColor ="green";
  }

  drawSprites();
}