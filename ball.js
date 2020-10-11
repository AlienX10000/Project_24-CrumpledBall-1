class Ball{
    constructor(x,y,d){
        var options = {
            'isStatic':false,
            'restitution':0.3,
            'friction':0.3,
            'density':1.2
        }

        this.body = Bodies.circle(x, y, d/2, options)
        this.diameter = d;

        World.add(world,this.body)
    }

    display(){
        var pos = this.body.position;

        rectMode(CENTER)
        
        fill(255,0,0)

        ellipse(pos.x, pos.y, this.diameter, this.diameter);
    }
}