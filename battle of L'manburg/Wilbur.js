class Wilbur{
constructor(x,y,w,h){
options = {
isStatic: false,
density: 2

 }
this.x = x
//this.y = y
this.w = w
this.h = h

this.image = LoadImage("images/Wilbur.png")
this.body = Bodies.rectangle(x,y,w,h,options)
World.add(world,this.body)
  }
display (){
var wilbur_pos = this.body.position
push();
wilbur_pos.y = mouseY
translate(wilbur_pos.x,wilbur_pos.y);
imageMode(CENTER);
fill("225");
image(this.image,0,0,this.width,this.height);
pop();
    }
}