class Mango
{
constructor(x,y,radius){
    var options = {isStatic:true};
    this.body = Bodies.circle(x,y,radius,options);
this.radius = radius;
this.image = loadImage("Plucking mangoes/mango.png");
World.add(world,this.body);


}
display(){
var posa = this.body.position;
    ellipse(this.image,posa.x,posa.y,this.radius,this.radius);
    image(this.image,posa.x,posa.y,this.radius,this.radius);
}



}