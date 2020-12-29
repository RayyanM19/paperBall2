class Dustbin{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.width = width;
        this.height = height;
        this.image = loadImage("dustbingreen.png")

        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        var pos = this.body.position;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("white");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
        imageMode(CENTER);
        image(this.image, 600, 375, 150, 200);
    }
}