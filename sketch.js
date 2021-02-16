const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload() {

  bImage=loadImage("b.png")

}

function setup() {
  createCanvas(1400, 600);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(380, 400);
  
  box1 = new Box(650, 100);
  box2 = new Box(650, 100);
  box3 = new Box(650, 100);
  box4 = new Box(650, 100);
  box5 = new Box(650, 100);
  box6 = new Box(650, 100);
  box7 = new Box(580, 100);
  box8 = new Box(580, 100);
  box9 = new Box(580, 100);
  box10 = new Box(580, 100);
  box11 = new Box(580, 100);
  box12 = new Box(580, 100);
  box13 = new Box(490, 100);
  box14 = new Box(490, 100);
  box15 = new Box(490, 100);
  box16 = new Box(490, 50);
  box17 = new Box(490, 50);
  box18 = new Box(580, 50);
  box19 = new Box(650, 50);
  box20 = new Box(390, 100);
  box21 = new Box(390, 100);
  box22 = new Box(390, 100);
  box23 = new Box(390, 100);
  box24 = new Box(390, 100);
  box25 = new Box(390, 100);
  box26 = new Box(490, 10);
  box27 = new Box(490, 10);
  box30 = new Box(650, 10);
 
  monster=new Monster(750,150,120)

  hero=new Hero(270,50,170)
  rope = new Rope(hero.body, { x: 270, y: 50 });

}

function draw() {
  background(bImage);
  Engine.update(engine);

  ground.display()
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  box13.display()
  box14.display()
  box15.display()
  box16.display()
  box17.display()
  box18.display()
  box19.display()
  box20.display()
  box21.display()
  box22.display()
  box23.display()
  box24.display()
  box25.display()
  box26.display()
  box27.display()
 
  box30.display()

  hero.display()

  monster.display()


}

function mouseDragged() {
  Matter.Body.setPosition(hero.body, { x: mouseX, y: mouseY });
}

