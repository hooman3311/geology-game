class Iron {
    constructor(x, y, width, height) {
      var options = {
        'restitution':0.3,
        'friction':5,
        'density':1,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("black");
      rect(this.body.position.x,this.body.position.y, this.width, this.height);

    }
  };