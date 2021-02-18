const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var wilbur

var BBH

var sapnap

var schlatt

var quackity

var GNF

var dream

var fundy

var punz

var crossbow1

var arrow1

var map

var ground1

function preload()
{

	 BBH = loadImage("images/BBH.jpg")

	 sapnap = loadImage ("images/sapnap.jpg")
	
	 schlatt = loadImage ("images/jschlatt.jpg")
	
	 quackity = loadImage ("images/quackity.jpg")
	
	 GNF = loadImage ("images/GNF.jpg")
	
	 dream = loadImage ("images/dream.jpg")
	
	 fundy = loadImage ("images/fundy.jpg")
	
	 punz = loadImage ("images/punz.jpg")

	wilbur = loadImage ("images/Wilbur.png")

	arrow1 = loadImage ("images/arrow.png")

	crossbow1 = loadImage ("images/crossbow.jpg")

}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.
	
map = loadImage ("images/SMP_MAP.jpg")


	//wilbur = new Wilbur (50,50,20,20)

	ground1 = new ground (400,690,800,5)

	/*crossbow1 = new crossbow (50,100,20,20)

	BBH = new manburg (600,100,20,20)

 	sapnap = new manburg (600,200,20,20)

 	schlatt = new manburg (600,300,20,20)

 	quackity = new manburg (600,400,20,20)

 	GNF = new manburg (600,500,20,20)

 	dream = new manburg (450,350,20,20)

 	fundy = new manburg (600,600,20,20)

 	punz = new manburg (600,700,20,20)

	arrow1 = new arrow (50,15,20,20)*/

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(map);

crossbow1.display()

ground1.display()

arrow1.display()

 sapnap.display()

 schlatt.display()

 quackity.display()

 GNF.display()

 dream.display()

 fundy.display()

 punz.display()

wilbur.display()


  drawSprites();
 
}

