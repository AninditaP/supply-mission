class Box{
    constructor(x,y,height,angle){
     var options={
        isStatic:true,
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
     }

     this.body= Bodies.rectangle(x,y,20,height,options);
     this.height=height;
     this.width=20;
     
     Matter.Body.setAngle(this.body,angle);
     World.add(world, this.body);
    }

    display(){
        var angle =this.body.angle
        var pos= this.body.position
       
        push();
        translate(pos.x,pos.y)
        rotate(angle);
        rectMode(CENTER);
        fill("red");
        rect(pos.x,pos.y,this.width,this.height);
        pop();
        
    }

}