 var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	packageSprite=createSprite(width/2, 380, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2;
	
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6;	

	line1 = createSprite(width/2,height-35,200,20);
	line1.shapeColor = color(255,0,0);

	groundSprite=createSprite(width/2, 670, width,10);
	groundSprite.shapeColor=color(255);

	engine = Engine.create();
	Engine.run(engine);
	world = engine.world;

	var packageOptions = {
		restitution : 0.7
	}
	packageBody = Bodies.circle(width/2 , 200 , 5,packageOptions );
	 World.add(world, packageBody);
	 
	 Matter.Body.setStatic(packageBody,true);

	 line1Body = Bodies.rectangle(width/2,650,200,20);
	 World.add(world,line1Body);

	 Matter.Body.setStatic(line1Body,true);

	 var line_options = {
		isStatic : true
	   }
	line2 = new Box(510,620,20,100,line_options);
	line3 = new Box(290,620,20,100,line_options);
	World.add(world,line2);
	World.add(world,line3);

}


function draw() {

  rectMode(CENTER);
  background(0);

  line2.display();
  line3.display();

  packageSprite.x= packageBody.position.x; 
  packageSprite.y = packageBody.position.y;

  if(keyDown(DOWN_ARROW)){  
	Matter.Body.setStatic(packageBody,false);
  }

  drawSprites();
 
}

