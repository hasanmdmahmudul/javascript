var currentScene;

var drawScene1 = function() {
    currentScene = 1;
    background(235, 247, 255);
    fill(0, 85, 255);
    textSize(39);
    text("The Story of Winston", 10, height/2);
};

var drawScene2 = function() {
    currentScene = 2;
    background(173, 239, 255);
    fill(7, 14, 145);
    textSize(39);
    text("Lil Winston is born!", 10, 100);
    image(getImage("creatures/BabyWinston"), width/2, height/2);
};

var drawScene3 = function() {
    currentScene = 3;
    background(173, 239, 255);
    fill(7, 14, 145);
    textSize(39);
    text("Winston grows up!", 10, 100);
    image(getImage("creatures/Winston"), width/2, height/2);
};

// to make it iterative/ loop

mouseClicked = function() {
    if (currentScene === 1) {
        drawScene2();
    } else if (currentScene === 2) {
        drawScene3();
    } else if (currentScene === 3) {
        drawScene1();
    }
};

drawScene1();
//drawScene2();
