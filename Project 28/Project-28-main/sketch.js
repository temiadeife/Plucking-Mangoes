const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5;
var world,boy;
var score = 0;

function preload(){
	boy=loadImage("boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	stoneObj=new stone(235,420,30); 

	mango1=new mango(1100-120,100,30);
    mango2=new mango(1170-130,130,30);
	mango3=new mango(1010-140,140,30);
	mango4=new mango(1000-130,70,30);
	mango5=new mango(1100-120,200,30);

	treeObj=new tree(900,300);
	groundObject=new ground(width/2,600,width,20);
	launcherObject=new launcher(stoneObj.body,{x:235,y:420})
  
	
	Engine.run(engine);
}

function draw() {

  background(255, 255);
  textSize(25);
  text("PRESS SPACE TO GET ANOTHER CHANCE TO PLAY",50 ,50);
  text(score, 50, 77);
  image(boy ,200,340,200,300);
  
  treeObj.display();
  stoneObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display()
  stoneObj.display();

  groundObject.display();
  launcherObject.display();
  detectollision(stoneObj,mango1);
  detectollision(stoneObj,mango2);
  detectollision(stoneObj,mango3);
  detectollision(stoneObj,mango4);
  detectollision(stoneObj,mango5);
}

function mouseDragged()
{
	Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	launcherObject.fly();
    
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stoneObj.body, {x:235, y:420}) 
	  launcherObject.attach(stoneObj.body);
	}
  }

  function detectollision(lstone,lmango){
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  
  	if(distance<=lmango.r+lstone.r)
    {
		Matter.Body.setStatic(lmango.body,false);
		score = score + 1;
    }
  }

  function win()
  {
	  if(score > 40)
	  {
		  var winner = text("YOU WIN", 650, 300);
		  textSize(15);
		  var restart = text("PRESS R TO RESTART", 650, 400);

		  if(keyCode === "r")
		  {
			  setup();
		  }
	  }
  }