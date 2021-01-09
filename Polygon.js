class Polygon
{
    constructor(x,y,width,height)
    {
        var options =
        {
            isStatic : true
        }
        this.image = loadImage("hexagon.png");
        this.polygon = Bodies.create(x,y,width,height,options);
        World.add(world,this.polygon);
    }
    display()
    {
        var p = this.body.position;
        push();
        translate(p.x,p.y)
        imageMode(CENTER);
        image(this.image,0,0,width,height);
        pop();
    }
}