
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var db1, db2, db3;
var pb;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	db1 = new Dustbin(600,470,150,20);
	db2 = new Dustbin(525,460,20,320);
	db3 = new Dustbin(675,460,20,320);

	pb = new Paper(200,360,70);

	ground = new Ground(400,490,800,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,255,255);

  Engine.update(engine)
  
  drawSprites();

  db1.display();
  db2.display();
  db3.display();

  pb.display();

  ground.display();

 
 
}

function keyPressed(){
	if(keyCode=== UP_ARROW){
		Matter.Body.applyForce(pb.body,pb.body.position,{x:85,y:-85})
	}
}


