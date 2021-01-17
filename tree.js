class Tree
{
constructor(x,y,width,height){
    var option = {isStatic:true};
this.body = Bodies.rectangle(x,y,width,height,option);
this.width=width;
this.height=height;
this.image = loadImage("Plucking mangoes/tree.png");
World.add(world,this.body);

}
display(){
var pos = this.body.position;
rect(this.image,pos.x,pos.y,this.width,this.height);
image(this.image,pos.x,pos.y,this.width,this.height);

}

}