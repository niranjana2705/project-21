var canvas;
var music;
var c1,c2,c3,c4;
var s1;
var edges;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    c1=createSprite(750,590,140,70);
    c1.shapeColor="green";
    c2=createSprite(500,590,140,70);
    c2.shapeColor="red";
    c3=createSprite(250,590,140,70);
    c3.shapeColor="yellow";
    c4=createSprite(45,590,140,70);
    c4.shapeColor="blue";
    s1=createSprite(random(20,750),10,50,50);
    s1.shapeColor="white";
    s1.velocityY=2;
    s1.velocityX=2;

    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
 
  edges= createEdgeSprites();
   s1 .bounceOff(edges);
    

    //add condition to check if box touching surface and make it box
    if(s1.bounceOff(c1)){
        s1.shapeColor="green";  
    }
    if(s1.bounceOff(c2)){
        s1.shapeColor="red";  
    }
    if(s1.bounceOff(c3)){
        s1.shapeColor="yellow";  
    }
    if(s1.bounceOff(c4)){
        s1.shapeColor="blue";  
    }
       drawSprites();
}
