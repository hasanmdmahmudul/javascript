var currentScene;

var drawButton = function() {
    fill(81, 166, 31);
    rect(15, 10, 50, 25);
    fill(255, 255, 255);
    textSize(16);
    text("NEXT", 19, 29);
};

var drawScene1 = function() {
    currentScene = 1;
    background(235, 247, 255);
    fill(0, 85, 255);
    textSize(25);
    text("The Story of Winston", 10, 200);
};

var drawScene2 = function() {
    currentScene = 2;
    background(173, 239, 255);
    fill(7, 14, 145);
    textSize(25);
    text("Lil Winston is born!", 10, 100);
    image(getImage("creatures/BabyWinston"), 80, 150);
};

var drawScene3 = function() {
    currentScene = 3;
    background(173, 239, 255);
    fill(7, 14, 145);
    textSize(25);
    text("Winston grows up!", 10, 100);
    image(getImage("creatures/Winston"), 80, 200);
};

var drawScene4 = function() {
    currentScene = 4;
    background(194, 255, 222);
    
    var x = cos(millis()*1); 
    var y = cos(millis()+98);
    
    // face
    image(getImage("creatures/Winston"),x+177, x+101,50, 50);
    
    // body
    strokeWeight(2);
    line(202, 213, x+203, x+150);
    line(x+220, x*20+266, 202, 213);
    line(x+188, x*2+266, 202, 213);
    line(x+167, x*20+150, 204, 169);
    line(y+164,y*20+148,204, 168);
    
    // drum set
    strokeWeight(3);
    fill(255, 255, 255);
    ellipse(162, 176, 54, 15);
    line(161, 264, 161, 184);
    line(134, 275, 162, 255);
    line(185, 275,162, 257);
    fill(0, 0, 0);
    ellipse(226, 268, 65, 65);
    fill(255, 255, 255);
    ellipse(226, 268, 60, 60);
    
    // Reset stroke weight
    strokeWeight(1);
};

var drawScene5 = function() {
    currentScene = 5;
    
    background(173, 239, 255);
    fill(7, 14, 145);
    textSize(25);
    text("Winston has babies!", 10, 71);
    textSize(17);
    text("Click to make more babies", 10, 97);
    
    image(getImage("creatures/Winston"), 21, 183);
    fill(71, 71, 71);
    rect(32, 185, 108, 15);
    rect(46, 126, 82, 60);
    
    image(getImage("creatures/BabyWinston"), 150, 250);
};

draw = function() {
    if (currentScene === 4) {
        drawScene4();
    }
    drawButton();
};

mouseClicked = function() {
    if (mouseX >= 15 && mouseX <= 65 &&
        mouseY >= 10 && mouseY <= 45) {
        if (currentScene === 1) {
            drawScene2();
        } else if (currentScene === 2) {
            drawScene3();
        } else if (currentScene === 3) {
            drawScene4();
        }  else if (currentScene === 4) {
            drawScene5();
        } else if (currentScene === 5) {
            drawScene1();
        }
    } else {
        if (currentScene === 5) {
            image(getImage("creatures/BabyWinston"), mouseX-20, mouseY-20);
        }
    }
};

drawScene1();
