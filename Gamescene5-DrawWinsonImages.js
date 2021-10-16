mouseClicked = function() {
    image(getImage("creatures/BabyWinston"), mouseX-20, mouseY-20);
};

background(173, 239, 255);
fill(7, 14, 145);
textSize(25);
text("Winston has babies!", 10, 47);
textSize(17);
text("Click to make more babies", 10, 78);

image(getImage("creatures/Winston"), 21, 183);
fill(71, 71, 71);
rect(32, 185, 108, 15);
rect(46, 126, 82, 60);

image(getImage("creatures/BabyWinston"), 150, 250);


