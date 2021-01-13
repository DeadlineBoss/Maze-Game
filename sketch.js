var player;
var playerImage;

function preload() {
    //Add Images here
    playerImage = loadImage("Images/am.png");
}

function setup() {
    //This runs once
    createCanvas(400,400);

    player = createSprite(200,200,10,10);
}

function draw() {
    //This runs again and again
    background("white");

    if(keyDown(RIGHT_ARROW)){
        player.x = player.x + 5;
    }

    if(keyDown(LEFT_ARROW)){
        player.x = player.x - 5;
    }

    if(keyDown(UP_ARROW)){
        player.y = player.y + 5;
    }

    if(keyDown(DOWN_ARROW)){
        player.y = player - 5;
    }

    drawSprites();
}