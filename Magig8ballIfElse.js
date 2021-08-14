fill(0, 0, 0);
ellipse(200, 200, 375, 375);
fill(0, 13, 255);
triangle(200, 104, 280, 280, 120, 280);
fill(255, 255, 255);

var ans =(random(1, 5));
var num = round(ans);

if (num === 1) {
    text("NOT YET", 176, 200);
    text("IMPLEMENTED", 160, 230); 
}
else if (num === 2) {
    text("YES", 186, 200);
}
else if (num === 3) {
    text("NO", 190, 200);
}
else if (num === 4) {
    text("IT COULD", 176, 200);
    text("HAPPEN...", 176, 230);
}
else {
    text("TRY AGAIN", 168, 200);
}
