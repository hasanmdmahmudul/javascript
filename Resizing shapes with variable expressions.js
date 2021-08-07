//Cartoon- 1

noStroke();
var faceSize = 300;
var mouthSize = 150;
var eyeSize = 40;
var x = 200;
var y = 200;
// face
fill (255, 255, 0);
ellipse(x, y, faceSize, faceSize);
// eyes
fill(46, 46, 41);
ellipse(x - 50, y - 50, eyeSize, eyeSize);
ellipse(x + 100, y - 60, eyeSize, eyeSize);
// mouth
fill (252, 65, 65);
ellipse(x + 50, y + 40, mouthSize, mouthSize);



// Cartoon- 2

noStroke();
var faceSize = 268;
var mouthSize = 1/2 * faceSize;
var eyeSize = 2/15 * faceSize; // 46/366ths -> 4/36 -> 2/15
// https://www.khanacademy.org/math/arithmetic/fractions
var x = 200;
var y = 200;
// face
fill(255, 255, 6);
ellipse(x, y, faceSize, faceSize);
// eyes
fill(46, 46, 41); 
ellipse(x - 1/6 * faceSize, y - 1/6 * faceSize, eyeSize, eyeSize);
ellipse(x + 1/3 * faceSize, y - 1/5 * faceSize, eyeSize, eyeSize);
// mouth
fill(252, 65, 65);
ellipse(x + 1/6 * faceSize, y + 2/15 * faceSize, mouthSize, mouthSize);


// Brown bear eyes

noStroke();
var x = 200;
var y = 200;
var faceSize = 160;

// ears
var earSize=faceSize*1/2;

fill(89, 52, 17);
ellipse(x-faceSize*2/5, y-faceSize*2/5, earSize, earSize);
ellipse(x+faceSize*2/5, y-faceSize*2/5, earSize, earSize);

// face
fill(163, 113, 5);
ellipse(x, y, faceSize, faceSize);



//eyes 
fill(0, 0, 0);
ellipse(160, 180, 20, 20);
ellipse(240, 180, 20, 20);


//nose
fill(89, 52, 20);
ellipse(x, y+faceSize/8, faceSize*4/15, faceSize/5);

//Chlallange: Bear : vvi
noStroke();
var x = 200;
var y = 200;
var faceSize = 260;
var eyeSize= faceSize/8;

// ears
var earSize=faceSize*1/2;
fill(89, 52, 17);
ellipse(x-faceSize*2/5, y-faceSize*2/5, earSize, earSize);
ellipse(x+faceSize*2/5, y-faceSize*2/5, earSize, earSize);

// face
fill(163, 113, 5);
ellipse(x, y, faceSize, faceSize);



//eyes 
fill(0, 0, 0);
ellipse(x-faceSize/4, y-faceSize/8, eyeSize, eyeSize);
ellipse(x+faceSize/4, y-faceSize/8, eyeSize, eyeSize);



//nose
fill(89, 52, 20);
ellipse(x, y+faceSize/8, faceSize*4/15, faceSize/5);


// Chlallange: Bear 2 : vvi
noStroke();
var x = 200;
var y = 200;
var faceSize = 260;
var eyeSize= faceSize/8;

// ears
var earSize=faceSize*1/2;
fill(89, 52, 17);
ellipse(x-faceSize*2/5, y-faceSize*2/5, earSize, earSize);
ellipse(x+faceSize*2/5, y-faceSize*2/5, earSize, earSize);

// face
fill(163, 113, 5);
ellipse(x, y, faceSize, faceSize);



//eyes 
fill(0, 0, 0);
ellipse(x-faceSize/4, y-faceSize/8, eyeSize, eyeSize);
ellipse(x+faceSize/4, y-faceSize/8, eyeSize, eyeSize);



//nose
fill(89, 52, 20);
ellipse(x, y+faceSize/8, faceSize*4/15, faceSize/5);

// boday
fill(89, 52, 17);
ellipse(x, y+260, 300, 300);
