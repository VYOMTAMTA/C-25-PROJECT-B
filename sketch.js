
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var dustbinImg;
function preload(){
	dustbinImg = loadImage("dustbingreen.png"); 
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,635);

	paper = new Paper(100, 100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
paper.display();
  groundObject.display();
  dustbinObj.display();

  image(dustbinImg, 1200, 540, 240, 250);


}

function keyPressed(){

 if(keyDown(UP_ARROW)){
 Matter.Body.applyForce(paper.body, paper.body.position,{x:0.35, y:-0.3});
 }

} 