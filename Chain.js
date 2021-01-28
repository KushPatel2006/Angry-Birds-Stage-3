class Chain{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.1,
            length: 10
        }
        this.chain = Constraint.create(options);
        this.bodyA = bodyA;
        this.bodyB = bodyB;
        World.add(world, this.chain);
    }
    display(){
        var posA = this.bodyA.position;
        var posB = this.bodyB.position;
        line(posA.x, posA.y, posB.x, posB.y);
    }
}