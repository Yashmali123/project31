class Plinko{
    constructor(x,y){
    var options={
     isStatic:true,
     restitution:0.3,
     friction:0,
     density:1.0
    }
    
    this.body=Bodies.circle(x,y,20,options);
    this.radius=20;
    World.add(world,this.body)
    }
    
    display() { 
    var pos=this.body.position; 
    push() 
    translate(pos.x,pos.y);
     rectMode(CENTER) 
     strokeWeight(3);
      fill(255)
      ellipse(0,0,this.radius, this.radius); 
       pop() }
    }