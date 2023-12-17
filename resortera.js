/*class Resortera extends PacajaPalitos{
    constructor(x,y,a,at){
        super(x,y,a,at);
        this.image = loadImage("./Imagenes/ResorteraBien.png");
    }
    display(){
        super.display();
        strokeWeight(4)
        line(68,300,85,300);
        line(55,300,68,300)
    }
}*/


class Resortera{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 6
        }
        this.pointB = pointB
        this.image = loadImage("./Imagenes/ResorteraBien.png");
        this.sling1 = loadImage('./Imagenes/base.png');
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

display(){
       
    image(this.image,70,237);
       var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        push();
        
        stroke(48,22,8);
        strokeWeight(3);
        line(pointA.x , pointA.y, pointB.x-10 , pointB.y +100);
        stroke("red");
        line(pointA.x , pointA.y +18, pointB.x -35, pointB.y +160);
        image(this.sling1,pointA.x-8 , pointA.y ,20,20);
        pop()
    }
}