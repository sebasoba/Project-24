
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Hammer,Stone,Rubber;
var ground;


function setup() {
	var canvas = createCanvas(1200, 400);
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20)
	Rubber = new Rubber(600,height,1200,20)
	Stone = new Stone(600,height,1200,20)
	
	Hammer = new Hammer(100,100)

	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(0);
  Engine.update(engine);
  Hammer.display();
  Stone.display();
  Rubber.display();
  ground.display();
  
  drawSprites();
 
}



