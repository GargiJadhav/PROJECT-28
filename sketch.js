
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boy,ground;
var tree1;
var stone1,mango1,launcher;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
boy=new Boy(100,500,200,200);
ground=new Ground(width/2,670,1200,20);
tree1=new Tree(600,180,500,500);
stone1 = new Stone(120,535,50);
mango1 = new Mango(750,250,50);
mango2 = new Mango(810,250,50);
mango3 = new Mango(870,250,50);
mango4 = new Mango(750,320,50);
mango5 = new Mango(700,320,50);
mango6 = new Mango(650,320,50);
mango7 = new Mango(900,320,50);
mango8 = new Mango(860,320,50);
mango9 = new Mango(800,320,50);
mango10 = new Mango(900,200,50);
mango11 = new Mango(960,300,50);
mango12 = new Mango(1010,300,50);

launcher = new Launcher(stone1.body,{x:200,y:200});
	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background("pink");
  tree1.display();
  boy.display();

  stone1.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  launcher.display();
  
  ground.display();

 
  drawSprites();
 
}



