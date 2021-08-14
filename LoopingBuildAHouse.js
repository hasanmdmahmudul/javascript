background(219, 255, 255);

fill(174, 180, 214);
triangle(200, 28, 350, 150, 50, 150);

fill(255, 255, 255);
rect(60, 150, 280, 207);

fill(120, 80, 19);
rect(180, 280, 40, 77);

//windows
fill(0, 255, 213);

for (var i=250; i<300; i+=40){
    rect(100, i, 30, 30);
    for (var j=100; j<150; j+=40){
        rect(j, i, 30, 30);
        line(j-5, 240, j+35, 240);
        line(j-5, 330, j+35, 330);
    }
    line(j-4, i+40, j-4, i-10);
    line(j-85, i+40, j-85, i-10);
}
for (var i=250; i<300; i+=40){
    rect(100, i, 30, 30);
    for (var j=230; j<280; j+=40){
        rect(j, i, 30, 30);
        line(j-5, 240, j+35, 240);
        line(j-5, 330, j+35, 330);
    }
    line(j-4, i+40, j-4, i-10);
    line(j-85, i+40, j-85, i-10);
}

//Christmas Lights
line(60, 200, 340, 200);
for (var q=60; q<345; q+=20){
    fill(247, 255, 0);
    ellipse(q, 200, 10, 10);
}
