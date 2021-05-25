const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var stone;
var iron;
var rubber;


function setup(){
    createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(850,height,width,20)
    hammer = new Hammer(10,100);
    stone = new Stone(1000,100,90,70);
    iron = new Iron(50,100,80,30);
    rubber = new Rubber(10,100,50);    

}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    rubber.display();
    plane.display();
    hammer.display();
    stone.display();
    iron.display();
    
 
}