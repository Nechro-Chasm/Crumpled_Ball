
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var crumpledBall;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	crumpledBall=new Crumpled_Ball(150,400,70);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  crumpledBall.display();
  groundObject.display();
  dustbinObj.display();

}
function keyPressed(){
	if(keyCode === UP_ARROW){
Matter.Body.applyForce(crumpledBall.body,crumpledBall.body.position,{x:100,y:-95})
	}
}


