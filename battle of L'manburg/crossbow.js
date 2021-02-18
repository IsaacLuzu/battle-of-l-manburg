class crossbow{
constructor(body,anchor){
var options = {
bodyA:body,
pointB:anchor,
stiffness: 0.0004,
lenght:1
}
this.bodyA = body;
this.pointB = anchor;
this.crossbow = Constraint.create(options);
World.add (world,this.body);

}

attach(body){
this.crossbow.bodyA = body

}

fly(){
this.crossbow.bodyA = nell


}

display (){

if(this.body.crossbow.bodyA){

var pointA_pos = this.bodyA.position;
var PointB_pos = this.pointB;
line(pointA.x,pointA.y,pointB.x,pointB.y);

}


}




}
