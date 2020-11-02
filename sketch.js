
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,ground,glass,g1,g2,paperimg;

var binimg




function preload(){
paperimg = loadImage('paper.png')
binimg = loadImage('dustbingreen.png')
	
}
	


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(750,600,2000,20);

	ball = new Ball(200,400,20,20)

	glass = new Glass(570,570,40,30)
	g1 = new Glass(615,590,80,10)
	g2 = new Glass(650,570,10,30)

    

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  ball.display();


  

  glass.display();
  g1.display();
  g2.display();

  image(binimg,500,450,200,150)	

  drawSprites();
 
}

function keyPressed(){

if(keyCode === UP_ARROW){

	Matter.Body.applyForce(ball.body, ball.body.position,{x:13,y:-12});
	

}


}



