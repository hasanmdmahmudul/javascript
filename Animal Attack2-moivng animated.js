//TIGER ATTACK
//try to adjust the tiger's position and size so that it can eat the prey

//declaring varaibles
var x = 200;
var y = 200;
var x1=0;
var faceSize = 150;
var eyeSize = 2/15*faceSize;
var earSize = 6/15*faceSize;
var noseSize = eyeSize;
var mouthSize = 1/3*faceSize;

//sky



draw = function() {
    background(99, 255, 239);
    
    strokeWeight(6);
    stroke(3, 0, 0);
    
    //ears
    fill(196, 119, 25);
    ellipse(x-4/15*faceSize, y-7/15*faceSize, earSize,         earSize);
    ellipse(x+4/15*faceSize, y-7/15*faceSize, earSize,         earSize);
    
    //face
    fill(207, 113, 25);
    ellipse(x, y, faceSize, faceSize);
    
    //eyes
    fill(8, 0, 0);
    ellipse(x-2/15*faceSize, y-2/15*faceSize, eyeSize,         eyeSize);
    ellipse(x+4/15*faceSize, y-2/15*faceSize, eyeSize,         eyeSize);
   
    //nose
    fill(207, 76, 89);
    ellipse(x+1/10*faceSize, y+1/30*faceSize, noseSize,        noseSize);
    
    //mouth
    noFill();
    ellipse(x+1/10*faceSize, y+8/30*faceSize, mouthSize,       mouthSize);
    eyeSize=eyeSize+0.005;
    
    //body
    fill(207, 113, 25);
    ellipse(x+1/10*faceSize, y+  1.3* faceSize, mouthSize*5,       mouthSize*5);
    eyeSize=eyeSize+0.000000000000001;
    
    
    
    
//prey-1

fill(166+x1, 166, 166);

//body
ellipse(345+x1, 222, 47, 50);
//head
ellipse(345+x1, 195, 40, 40);
//eyes
fill(8, 1, 1);
ellipse(336+x1, 191, 10, 10);
ellipse(352+x1, 191, 10, 10);
x1=x1+0.05;

    
//prey-2

fill(166, 166, 166);

//body
ellipse(345+x1, 222, 47, 50);
//head
ellipse(345+x1, 195, 40, 40);
//eyes
fill(8, 1, 1);
ellipse(336+x1, 191, 10, 10);
ellipse(352+x1, 191, 10, 10);
x1=x1+0.05;



};
