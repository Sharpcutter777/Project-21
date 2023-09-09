
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ground;
var ball;
var groundObj;
var leftSide,rightSide;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 900);
	engine=Engine.create();
	world=engine.world;
	
	groundObj = new Ground(width/2,670,width,20);
	leftSide = new Ground(1100,600,20,120);
	rightSide = new Ground(850,600,20,120)

	//Create the Bodies Here.
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	ball=Bodies.circle(200,20,20,ball_options);
  	World.add(world,ball);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  keyPressed();
  background(0);
  groundObj.display();
  leftSide.display();
  rightSide.display();
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:2,y:-8})
	}
	
}


