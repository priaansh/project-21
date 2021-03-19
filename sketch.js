var surface1,surface2,surface3,surface4,box;
var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
    
}


function setup(){
    canvas = createCanvas(700,600);

    //create 4 different surfaces
    surface1 = createSprite(80,550,150,60);
    surface1.shapeColor = "green";
    surface2 = createSprite(240,550,150,60);
    surface2.shapeColor = "red";
    surface3 = createSprite(400,550,150,60);
    surface3.shapeColor = "blue";
    surface4 = createSprite(560,550,150,60);
    surface4.shapeColor = "yellow";

    box = createSprite(random(20,650),200,40,40);
    box.shapeColor = "white";
   box.velocityY = 5;

   
    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
     edges = createEdgeSprites();

    if(box.isTouching(surface1)){
        box.velocityY = 0;
        box.shapeColor = "green";
    }
    if(box.isTouching(surface2)){
        box.velocityY = 0;
        box.shapeColor = "red";
    }
    if(box.isTouching(surface3)){
        box.velocityY = 0;
        box.shapeColor = "blue";
    }
    if(box.isTouching(surface4)){
        box.velocityY = 0;
        box.shapeColor = "yellow";
    }
    box.bounceOff(edges);

    //add condition to check if box touching surface and make it box
    drawSprites();
}
