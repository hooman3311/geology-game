class Stone {
    constructor(x, y, width, height) {
      var options = {
        'restitution':0.8,
        'friction':0.9,
        'density':19,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("grey");
      rect(this.body.position.x,this.body.position.y, this.width, this.height);

    }
  };