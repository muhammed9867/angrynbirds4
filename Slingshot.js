class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
     this.sling1 = loadImage("sprites/sling1.png")
     this.sling2 = loadImage("sprites/sling2.png")
     this.sling3 = loadImage("sprites/sling3.png")

        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
      image(this.sling1 ,270 , 70 , 30 , 150 );
      image(this.sling2 ,249 , 70 , 30 ,85 );
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(7);
            stroke(48, 22, 8);
            if(pointA.x < 280){
           // line(pointA.x, pointA.y, pointB.x, pointB.y);
           line (pointA.x -25 , pointA.y  , pointB.x -15 , pointB.y +10);
           line (pointA.x -25 , pointA.y , pointB.x +15 , pointB.y +10);
           image(this.sling3 , pointA.x -25 , pointA.y -5 , 12, 25);
            }
            else{
                strokeWeight(4);
                line (pointA.x +25 , pointA.y  , pointB.x -15 , pointB.y +10);
           line (pointA.x +25 , pointA.y , pointB.x +15 , pointB.y +10);
           image(this.sling3 , pointA.x +25 , pointA.y -5 , 12, 25);
            }
        }
    }

    
}