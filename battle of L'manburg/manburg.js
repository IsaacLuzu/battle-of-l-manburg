class manburg{
constructor(x,y,w,h){
var options = {
isStatic: true,
restitution: 0

};
this.x = x;
this.y = y;
this.w = w;
this.h = h;

this.image = loadImage ("images/jschlatt.jpg")
this.image = loadImage ("images/Dream.jpg")
this.image = loadImage ("images/GNF.jpg")
this.image = loadImage ("images/punz.jpg")
this.image = loadImage ("images/BBH.jpg")
this.image = loadImage ("images/Fundy.jpg")
this.image = loadImage ("images/sapnap.jpg")
this.image = loadImage ("images/quackity.png")




this.body = Bodies.rectangle(x,y,w,h,hoptions);
World.add (world,this.body);

}
display (){
    var manburgs_pos = this.body.position;
    push();
    translate(manburgs_pos.x,manburgs_pos.y);
    imageMode(CENTER);
    fill("brown");
    image(this.image,0,0,this.width,this.height);
    pop();
    
     }

}