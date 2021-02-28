class Paper{

constructor(x, y){
    this.body = Bodies.circle(x, y, 40);
    this.image = loadImage("paper.png");
    World.add(world, this.body);
}

display(){

imageMode(CENTER);
image(this.image, this.body.position.x, this.body.position.y, 100, 100);

}

}