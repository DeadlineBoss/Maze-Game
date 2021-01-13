var player;
var playerImage;

var Mazeblocks;

function preload() {
    //Add Images here
    playerImage = loadImage("Images/am.png");
}

function setup() {
    //This runs once
    createCanvas(2500,2500);

    Mazeblocks = new Group();

    //creating edges
    Edge1 = createSprite(1250,-10,2540,20);
    Mazeblocks.add(Edge1);
    Edge2 = createSprite(1250,2510,2540,20);
    Mazeblocks.add(Edge2);
    Edge3 = createSprite(-10,1250,20,2540);
    Mazeblocks.add(Edge3);
    Edge4 = createSprite(2510,1250,20,2540);
    Mazeblocks.add(Edge4);

    //Creating the maze using blocks
    Block1 = createSprite(1400,1100,20,600);
    Mazeblocks.add(Block1);
    Block2 = createSprite(1030,1000,300,20);
    Mazeblocks.add(Block2);
    Block3 = createSprite(890,1165,20,350);
    Mazeblocks.add(Block3);
    Block4 = createSprite(1160,1350,20,400);
    Mazeblocks.add(Block4);
    Block5 = createSprite(1160,1550,550,20);
    Mazeblocks.add(Block5);
    Block6 = createSprite(1610,1450,20,500);
    Mazeblocks.add(Block6);
    Block7 = createSprite(1150,800,520,20);
    Mazeblocks.add(Block7);
    Block8 = createSprite(1400,1710,440,20);
    Mazeblocks.add(Block8);
    Block9 = createSprite(900,650,20,300);
    Mazeblocks.add(Block9);
    Block10 = createSprite(660,920,20,850);
    Mazeblocks.add(Block10);
    Block11 = createSprite(775,1350,250,20);
    Mazeblocks.add(Block11);
    Block12 = createSprite(1250,510,700,20);
    Mazeblocks.add(Block12);
    Block13 = createSprite(1610,770,20,540);
    Mazeblocks.add(Block13);
    Block14 = createSprite(900,170,20,380);
    Mazeblocks.add(Block14);
    Block15 = createSprite(1040,330,20,380);
    Mazeblocks.add(Block15);
    Block16 = createSprite(1190,170,20,380);
    Mazeblocks.add(Block16);
    Block17 = createSprite(1340,330,20,380);
    Mazeblocks.add(Block17);
    Block18 = createSprite(1490,170,20,380);
    Mazeblocks.add(Block18);
    Block19 = createSprite(1610,330,20,380);
    Mazeblocks.add(Block19);
    Block20 = createSprite(550,150,700,20);
    Mazeblocks.add(Block20);
    Block21 = createSprite(435,320,470,20);
    Mazeblocks.add(Block21);
    Block22 = createSprite(210,850,20,1040);
    Mazeblocks.add(Block22);
    Block23 = createSprite(435,930,20,890);
    Mazeblocks.add(Block23);
    Block24 = createSprite(435,1550,500,20);
    Mazeblocks.add(Block24);
    Block25 = createSprite(195,1950,20,800);
    Mazeblocks.add(Block25);
    Block26 = createSprite(325,2340,250,20);
    Mazeblocks.add(Block26);
    Block27 = createSprite(665,2105,20,810);
    Mazeblocks.add(Block27);
    Block28 = createSprite(440,2040,20,615);
    Mazeblocks.add(Block28);
    Block29 = createSprite(840,1710,360,20);
    Mazeblocks.add(Block29);
    Block30 = createSprite(2275,300,20,600);
    Mazeblocks.add(Block30);
    Block31 = createSprite(870,2110,20,500);
    Mazeblocks.add(Block31);
    Block32 = createSprite(1200,2350,680,20);
    Mazeblocks.add(Block32);
    Block33 = createSprite(1410,1860,750,20);
    Mazeblocks.add(Block33);
    Block34 = createSprite(1780,1535,20,670);
    Mazeblocks.add(Block34);
    Block35 = createSprite(1780,590,20,900);
    Mazeblocks.add(Block35);
    Block36 = createSprite(1950,150,350,20);
    Mazeblocks.add(Block36);
    Block37 = createSprite(1950,590,350,20);
    Mazeblocks.add(Block37);
    Block38 = createSprite(2100,370,350,20);
    Mazeblocks.add(Block38);
    Block39 = createSprite(1540,2210,1000,20);
    Mazeblocks.add(Block39);
    Block40 = createSprite(2000,2350,570,20);
    Mazeblocks.add(Block40);
    Block41 = createSprite(2275,1580,20,1550);
    Mazeblocks.add(Block41);
    Block42 = createSprite(2030,1510,20,1400);
    Mazeblocks.add(Block42);
    Block43 = createSprite(2510,1250,20,2500);
    Mazeblocks.add(Block43);
    Block44 = createSprite(2150,815,260,20);
    Mazeblocks.add(Block44);
    Block45 = createSprite(1540,2050,1000,20);
    Mazeblocks.add(Block45);

    player = createSprite(200,200,10,10);
    player.addImage(playerImage);
    player.scale = 0.2;
}

function draw() {
    //This runs again and again
    background("white");
    console.log(mouseX);
    console.log(mouseY);

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

    drawSprites();
}