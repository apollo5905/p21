var canvas;
var music;
var surface1, suraface2,surface3,surface4
var box

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
surface1 = createSprite(100,580,200,20)
surface1.shapeColor="purple"
surface2 = createSprite(300,580,200,20)
surface2.shapeColor="green"
surface3 = createSprite(500,580,200,20)
surface3.shapeColor="blue"
surface4 = createSprite(700,580,200,20)
surface4.shapeColor="pink"

    //create box sprite and give velocity
box = createSprite (random(20,750),50,50,50)
box.shapeColor ="white"
box.velocityY=7
box.velocityX=9
edges=createEdgeSprites()
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
box.bounceOff(edges)

drawSprites()
    //add condition to check if box touching surface and make it box
    if (box.isTouching(surface1)){
        box.bounceOff(surface1)
        box.shapeColor = "purple"
        music.play()
    }
    if (box.isTouching(surface2)){
        box.bounceOff(surface2)
        box.shapeColor = "green"
        music.play()
    }
    if (box.isTouching(surface3)){
        box.bounceOff(surface3)
        box.shapeColor = "blue"
        music.play()
    }
    if (box.isTouching(surface4)){
        box.bounceOff(surface4)
        box.shapeColor = "pink"
        music.play()
    }

}
