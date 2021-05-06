const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperball,ground
var d1,d2,d3
function preload()
{
	
}

function setup() {
	createCanvas(810, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   ground=new Ground(410,690)
   paperball=new Paper(100,630)
   d1= new Dustbin(700,680,200,20);
	d2=new Dustbin(800,640,10,100);
	d3=new Dustbin(600,640,10,100);
	Engine.run(engine);
  
}

function draw() {
	

  background(0);
  Engine.update(engine)
  ground.display()
  paperball.display();
  d1.display()
  d2.display()
  d3.display()
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(paperball.body,paperball.body.position,{x:85,y:-85});
	}
}

