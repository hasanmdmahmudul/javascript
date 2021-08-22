
//in posi

var x=10; // var outside function

draw= function() {
    background(151, 244, 247);
    
    //car
    fill(255, 0, 115);
    rect(x,200,100,20);
    rect(x+15,180,70,40);
    
    //wheels
    fill(77,66,66);
    ellipse(x+25,220,30,30);
    ellipse(x+75,220,30,30);
    
    x=x+10;
    //x++; //x= x+1
    
    //x+=10;
};
