class Crumpled_Ball {

    constructor(x,y,r){

        var options={
        isSstatic:false,
        restitution:0.3,
        friction:0,
        density:1.2
        }
        this.body=Bodies.circle(x,y,r/2-15,options);
        this.Image=loadImage("paper.png");
        World.add(world,this.body)  
        this.r=r
}

    display(){
        var pose=this.body.position;
        push()
        translate(pose.x,pose.y);
        imageMode(CENTER);
        image(this.Image,0,0,this.r,this.r);
        pop()
        
}
}


