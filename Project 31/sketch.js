const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var ground1;

var particles=[];
var plinkos=[];
var divisions=[];

var divisionHeight=300;

function setup() {
  createCanvas(480,800);
  engine= Engine.create();
  world=engine.world;
  ground1=new Ground(240,780,480,20)
 
}

function draw() {
  Engine.update(engine);
  background(0);
  ground1.display();  
  
  //Divisions
  for(var d=0;d<=width;d=d+80){
   divisions.push(new Division(d,height-divisionHeight/2,10,divisionHeight));
   
  }
  
  //Plinkos
 //first row
  for(var p=40;p<=width;p=p+50){
    plinkos.push(new Plinko(p,75));
   }
  //Second row
  for(var p=15;p<=width-10;p=p+50){
    plinkos.push(new Plinko(p,175));
   }
//thrid row
   for(var p=40;p<=width;p=p+50){
    plinkos.push(new Plinko(p,275));
   }

   for(var p=15;p<=width-10;p=p+50){
    plinkos.push(new Plinko(p,375));
   }

   if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10)
  }
    for (var j=0;j<=particles.length;j++){
      particles[j].display();
    }
    
    
  for(var p=0;p<plinkos.length;p++){
    plinkos[p].display();
  }

  for(var d=0;d<divisions.length;d++){
    divisions[d].display();
  }


  drawSprites();

}



