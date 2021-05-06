class Ground{
    constructor(x,y){
        this.body=Bodies.rectangle(x,y,800,8,{isStatic:true});
        World.add(world,this.body);
    }
    display(){
        rectMode(CENTER);
        fill ("green");
        rect(this.body.position.x,this.body.position.y,800,10);
    }
}

    