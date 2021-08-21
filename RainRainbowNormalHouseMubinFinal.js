// CLICK THE SCREEN TO MAKE THE PROGRAM ADD DOTS
// PRESS RESTART TO CHANGE THE COLOUR


var xPositions = [109, 157, 200, 250, 300, 350, 390 ];
var yPositions = [0, 50, 144, 70, 82, 41, 143];


for (var count= 0; count < 20; count++){
    xPositions.push(random(0, 400)); // creating an array name xPositions and pushing 0-400 random numbers
    yPositions.push(random(0, 400)); //// creating an array name yPositions and pushing 0-400 random numbers
}
    
var bigRainbow = {
    x: 200,
    y: 200,
    radius: 400
};

var drawRainbow = function(rainbow) {
    noFill();
    strokeWeight(5);
    stroke(255, 0, 0);
    arc(rainbow.x, rainbow.y, rainbow.radius, rainbow.radius, 180, 360);
    stroke(250, 200, 0);
    arc(rainbow.x, rainbow.y, rainbow.radius-10, rainbow.radius-10, 180, 360);
    stroke(240, 255, 102);
    arc(rainbow.x, rainbow.y, rainbow.radius-20, rainbow.radius-20, 180, 360);
    stroke(29, 255, 13);
    arc(rainbow.x, rainbow.y, rainbow.radius-30, rainbow.radius-30, 180, 360);
    stroke(122, 155, 255);
    arc(rainbow.x, rainbow.y, rainbow.radius-40, rainbow.radius-40, 180, 360);
};

drawRainbow(bigRainbow);



//rain + house
var colour= color(random(0,255),random(0,255),random(0,255));
draw = function() {
    //house design
    background(219, 255, 255);
    drawRainbow(bigRainbow);


fill(174, 180, 214);
triangle(200, 28, 350, 150, 50, 150);

fill(255, 255, 255);
rect(60, 150, 280, 207);

fill(120, 80, 19);
rect(180, 280, 40, 77);
    //house design end
    //rain design starts


    for (var i = 0; i < xPositions.length; i++) {
        noStroke();
        // random colour
        
        fill(colour);
        ellipse(xPositions[i], yPositions[i], 10, 10);
        yPositions[i] += 5; // conrolling the speed of raindrop fall, use 10, 20
        
        if(yPositions[i] > 400){  // reset the y position bcz scope of screen in 400
            yPositions[i] = 0;
        }
    }
    
    if(mouseIsPressed){
        xPositions.push(random(0, 400)); // if mouse is pressed, increse the random values / rain drops
        yPositions.push(random(0, 400));
    }
};
