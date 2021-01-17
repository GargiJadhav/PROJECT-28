class Stone{
constructor(x,y,radius){
var options = {isStatic:true};
this.body = Bodies.circle(x,y,radius,options);
this.radius = radius;

this.image = loadImage("Plucking mangoes/stone.png");
World.add(world,this.body);

}
display(){
    var pos = this.body.position;
  // this.body.position.x = mouseX;
   //this.body.position.y=mouseY;
    ellipse(this.image,pos.x,pos.y,this.radius,this.radius);
 image(this.image,pos.x,pos.y,this.radius,this.radius);

}




}