class Box1 
{
  constructor(x, y, width, height) 
  {
    var options = {
        'restitution':0.1,
        'friction':2.0,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image=loadImage("box.png");
    this.visibility=255;
    World.add(world, this.body);
   // console.log(this.body);
  }
  display()
  {
    var pos =this.body.position;
    var angle = this.body.angle;
  
    if (frameCount>30 && this.body.speed>1)
    {
      console.log(123);
      World.remove(world,this.body);
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER); 
      this.visibility = this.visibility-5 ;
      tint(255,this.visibility);
      //this.image(this.image,0,0);
      image(this.image,0,0,this.width,this.height);
      pop();
    }
    else
    {
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);    
      strokeWeight(4);
      stroke("green");
      fill(255);
      image(this.image,0,0,this.width,this.height);
      pop();
    }
  }
  score(){
    if (this.visibility<0 && this.visibility>-150){
      score=score+1;
    }
  }
};