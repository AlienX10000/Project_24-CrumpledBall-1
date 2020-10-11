const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,ground;
var binL,binB,binR;

function setup() {
	createCanvas(800, 200);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Base(400, 190, 800, 10);
	ball = new Ball(100, 70, 30);
	binL = new BinSides(490, 135, 20, 100);
	binB = new BinSides(600, 175, 200, 20);
	binR = new BinSides(710, 135, 20, 100);
}


function draw() {
	rectMode(CENTER);
	background(0);

    Engine.update(engine);
	
	ground.display();
	ball.display();
	binL.display();
	binB.display();
	binR.display();

	drawSprites();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

		Body.applyForce(ball.body, ball.body.position,{x:37,y:-30})

	}
}