const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var platform1, platform2;

var ground;

var block1, block2, block3, block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16,block17,block18,block19,block20, block21,block22,block23,block24,block25,block26,block27,block28;

var polygon;

//var ball;

var polygon_img;

var slingshot;

function preload() {
  polygon_img = loadImage("polygon.png");
}






function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);
  
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(800,690,1600,50);

  platform1 = new Ground(1100,300,150,15);
  platform2 = new Ground(500,500,250,15);

  block1 = new Block(390,472);
  block2 = new Block(421,472);
  block3 = new Block(452,472);
  block4 = new Block(483,472);
  block5 = new Block(514,472);
  block6 = new Block(545,472);
  block7 = new Block(576,472);
  block8 = new Block(607,472);
  block9 = new Block(405,432);
  block10 = new Block(436,432);
  block11 = new Block(467,432);
  block12 = new Block(498,432);
  block13 = new Block(529,432);
  block14 = new Block(560,432);
  block15 = new Block(591,432);
  block16 = new Block(421,392);
  block17 = new Block(452,392);
  block18 = new Block(483,392);
  block19 = new Block(514,392);
  block20 = new Block(545,392);
  block21 = new Block(576,392);
  block22 = new Block(1050,272);
  block23 = new Block(1081,272);
  block24 = new Block(1112,272); 
  block25 = new Block(1065,232); 
  block26 = new Block(1096,232);
  block27 = new Block(1127,232);
  block28 = new Block(1081,192);

  polygon = Bodies.circle(50,200,20);

  

  World.add(world,polygon);
  slingshot = new SlingShot(this.polygon,{x:200,y:200});
}


function draw() {
  rectMode(CENTER);
  background("gray");
 
  
  fill("white");
  text("Drag the stone and release it to hit the blocks",500,150);
 
 
 
 
 
 
  ground.display();

 platform1.display();
 platform2.display();

 block1.display();
 block2.display();
 block3.display();
 block4.display();
 block5.display();
 block6.display();
 block7.display();
 block8.display();
 block9.display();
 block10.display();
 block11.display();
 block12.display();
 block13.display();
 block14.display();
 block15.display();
 block16.display();
 block17.display();
 block18.display();
 block19.display();
 block20.display();
 block21.display();
 block22.display();
 block23.display();
 block24.display();
 block25.display();
 block26.display();
 block27.display();
 block28.display();

 
 imageMode(CENTER);
 image(polygon_img ,polygon.position.x,polygon.position.y,40,40);
 slingshot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}

function mouseReleased () {
  slingshot.fly();
}