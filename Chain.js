class Chain{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0,
            length: 50
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }
    fly(){
        this.chain.bodyA = null;
    }

    display(){
      //  var pointA = this.chain.bodyA.position;
     //   var pointB = this.chain.bodyB.position;
        if (this.chain.bodyA) { 
            var pointA = this.chain.bodyA.position;
             var pointB = this.chain.bodyB.position;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);

        }
    }
    
}