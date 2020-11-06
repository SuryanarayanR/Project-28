
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var sling;

function preload(){
   boy = loadImage("animation/boy.png");
   tree = loadImage("animation/tree.png");	
}


function setup() {
	createCanvas(1200, 800);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground = new Ground(400,600,1600,20);
  stone  = new Stone(125,460,30,30);
  mango1 = new Mango(650,150,40,40); 
  mango2 = new Mango(750,150,40,40);
  mango3 = new Mango(600,270,40,40);
  mango4 = new Mango(820,220,40,40);
  mango5 = new Mango(700,240,40,40);
	sling = new Sling(stone.body,{x:125,y:460});

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(255);

  image(tree,500,80,430,530);
  image(boy,100,400,150,250);

  ground.display();
  sling.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stone.display();

  detectcollision(stone,mango1);
  detectcollision(stone,mango2);
  detectcollision(stone,mango3);
  detectcollision(stone,mango4);
  detectcollision(stone,mango5);

  drawSprites();
 
}

function mouseDragged () {
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased () {
  sling.fly();
}

function detectcollision(lstone,lmango){
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position

  var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
  if(distance<=lmango.width+lstone.width)
  {
    Matter.Body.setStatic(lmango.body,false);
  }
}