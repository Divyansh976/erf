class Particle  {
    constructor(x,y,radius)  {
        var options={
            restitution: 0.4,
            isStatic: false
        }
        this.radius = radius
        this.body = Bodies.circle(x,y,radius,options)
        this.colour = color(random(0,255), random(0,255), random(0,255))
    }
    display()  {
        var pos = this.body.position
        var angle = this.body.angle

        push();
        translate(pos.x,pos.y)
        rotate(angle)
        noStroke()
        ellipseMode(RADIUS)
        fill(this.colour)
        ellipse(pos.x,pos.y,this.radius,this.radius)
        pop();
    }
}