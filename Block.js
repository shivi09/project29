class Block
{
   constructor(x,y,width,height)
   {
     var options=
     {
       isStatic : false,
       restitution : 0.1,
       friction : 1.0,
       density : 0.5
     }
     this.body=Bodies.rectangle(x,y,width,height,options);
     this.width=width;
     this.height=height;
     World.add(world,this.body);
   }
   display()
   {
     var b=this.body.position;
     rectMode(CENTER);
     rect(b.x,b.y,this.width,this.height);
   }
}