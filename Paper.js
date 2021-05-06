class Paper{

  constructor(x,y){
      var options={
          isStatic: false,
          density:0.21,
          restitution:0.3,
          friction:1.2
      }
     this.x=x;
     this.y=y;
      this.body=Bodies.circle(this.x,this.y,40,options);

      World.add(world,this.body);
  }
  display(){

      
      push();
    translate(this.body.position.x, this.body.position.y);
   
    
    fill("cyan");
    ellipseMode(RADIUS);
    ellipse(0,25,14);
   
    
    pop();

  }
}