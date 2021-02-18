class arrow{
constructor(x,y,w,h){
var options = {
isStatic: false,
density:1.2,
friction: 1,
restitution:0

};
this.x = this.x;
this.y = this.y;
this.w = this.w;
this.h = this.h;

this.image = loadImage ("images/arrow.png")
this.body = Bodies.rectangle(x,y,h,w,options);
World.add (world,this.body);

}
display (){
    var arrow_pos = this.body.position;
    push();
    translate(arrow_pos.x,arrow_pos.y);
    imageMode(CENTER);
    fill("brown");
    image(this.image,0,0,this.w,this.h);
    pop();
    
     }
}