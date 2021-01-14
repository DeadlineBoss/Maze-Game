var player;
var playerImage;

var endSprite;

var Mazeblocks;

var gameState = 1;
var Start = 1;
var Play = 2;
var End = 3;

function preload() {
    //Add Images here
    playerImage = loadImage("Images/am.png");
}

function setup() {
    //This runs once
    createCanvas(400,400);

    Mazeblocks = new Group();

    //creating edges
    Edge1 = createSprite(200,-10,420,20);
    Mazeblocks.add(Edge1);
    Edge2 = createSprite(200,410,420,20);
    Mazeblocks.add(Edge2);
    Edge3 = createSprite(-10,200,20,420);
    Mazeblocks.add(Edge3);
    Edge4 = createSprite(410,200,20,420);
    Mazeblocks.add(Edge4);

    //Creating the maze using blocks
    var cardboard1 = createSprite(80,70,100,20);
    Mazeblocks.add(cardboard1);
    var cardboard2 = createSprite(170,0,20,160);
    Mazeblocks.add(cardboard2);
    var cardboard3 = createSprite(40,70,20,100);
    Mazeblocks.add(cardboard3);
    var cardboard4 = createSprite(100,170,20,100);
    Mazeblocks.add(cardboard4);
    var cardboard5 = createSprite(240,0,20,60);
    Mazeblocks.add(cardboard5);
    var cardboard6 = createSprite(150,130,110,20);
    Mazeblocks.add(cardboard6);
    var cardboard7 = createSprite(320,150,20,90);
    Mazeblocks.add(cardboard7);
    var cardboard8 = createSprite(210,180,140,20);
    Mazeblocks.add(cardboard8);
    var cardboard9 = createSprite(50,240,20,120);
    Mazeblocks.add(cardboard9);
    var cardboard10 = createSprite(40,300,190,20);
    Mazeblocks.add(cardboard10);
    var cardboard11 = createSprite(270,360,20,140);
    Mazeblocks.add(cardboard11);
    var cardboard12 = createSprite(230,240,105,20);
    Mazeblocks.add(cardboard12);
    var cardboard13 = createSprite(130,300,20,100);
    Mazeblocks.add(cardboard13);
    var cardboard14 = createSprite(180,320,20,180);
    Mazeblocks.add(cardboard14);
    var cardboard15 = createSprite(250,300,50,20);
    Mazeblocks.add(cardboard15);
    var cardboard16 = createSprite(205,360,50,20);
    Mazeblocks.add(cardboard16);
    cardboard17 = createSprite(240,70,150,20);
    Mazeblocks.add(cardboard17);
    cardboard18 = createSprite(360,280,100,20);
    Mazeblocks.add(cardboard18);
    cardboard19 = createSprite(60,380,20,80);
    Mazeblocks.add(cardboard19);
    cardboard20 = createSprite(305,50,20,50);
    Mazeblocks.add(cardboard20);
    cardboard21 = createSprite(370,150,100,20);
    Mazeblocks.add(cardboard21);
    cardboard22 = createSprite(310,350,100,20);
    Mazeblocks.add(cardboard22);

    player = createSprite(200,200,10,10);
    player.addImage(playerImage);
    player.scale = 0.06;

    endSprite = createSprite(390,390,20,20);
    endSprite.shapeColor = "yellow";
}

function draw() {
    //This runs again and again
    background("white");
    console.log(mouseX);
    console.log(mouseY);

    if(gameState === Start) {
        text("Press S To Start",150,200);

        if(keyDown("S")){
            gameState = Play;
        }
    }

    if(gameState === Play) {
        player.collide(Mazeblocks);

        if(keyDown(RIGHT_ARROW)){   
            player.x = player.x + 5;
        }

        if(keyDown(LEFT_ARROW)){
            player.x = player.x - 5;
        }

        if(keyDown(UP_ARROW)){
            player.y = player.y - 5;
        }

        if(keyDown(DOWN_ARROW)){
            player.y = player.y + 5;
        }

        if(player.isTouching(endSprite)) {
            gameState = End;
        }

        drawSprites();
    }

    if(gameState === End) {
        text("You Have Won The Game :)",150,200);
    }
}