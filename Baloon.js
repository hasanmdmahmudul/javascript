var xPositions = [100,200];

var draw = function() {
     if (mouseIsPressed) {
         xPositions.push(mouseX);
     }
     
     noStroke();
     background(212,254,255);
     
     stroke(64,117,2017);
     fill (196,33,255);
     for (var i=0; i<xPositions.length;i++) {
         line(xPositions[i],120,194,285);
         ellipse (xPositions[i],104,32,46);
     }
     
     var hopper = getImage ("creatures/Hopper-Jumping");
     image (hopper,189,227);
     
};
