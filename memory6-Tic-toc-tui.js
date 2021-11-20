/*
Tic Tac Toe (for two players)
by Louis Pelissier
Have fun playing
Click New Game to play!!! X always goes first!
*/


/*
Creating an object called Board, this will keep track of the game board as we play.
*/
var Board = {
    //each position is kept track of in this array
    cells:["n","n","n","n","n","n","n","n","n"],  
	// At the begining of the game all cells are given a value of "n" for none.
	// They will be changed to "X" or "O" as the game is played.
	
    //each position on the board will have a x and y position on the canvas.
    c0:{xp:70,yp:130}, 
    c1:{xp:170,yp:130},
    c2:{xp:270,yp:130},     //   0 | 1 | 2
    c3:{xp:70,yp:230},      //   __|___|___
    c4:{xp:170,yp:230},     //   3 | 4 | 5
    c5:{xp:270,yp:230},     //   __|___|___
    c6:{xp:70,yp:330},      //   6 | 7 | 8
    c7:{xp:170,yp:330},
    c8:{xp:270,yp:330},
    turn:"X",     // this keeps track of the next turn
    // this counts the turns taken ans stops the game when the board is filled.
    turnsTaken:9  
};

/*
This defines a function to draw a slash when the game is won.
The function accepts a parameter WinSet that determines where the win is.
*/
var drawSlash =function(WinSet){ 
    stroke(255, 0, 0);   
    strokeWeight(4);  
	//Depending n the value o WinSet the fuction will
	//draw a line across the correct positions.
    if(WinSet === "topRow"){
        line(50,100,350,100);//012 top row
    }else if(WinSet === "middleRow"){
        line(50,200,350,200);//345 middle row
    }else if(WinSet === "bottomRow"){
        line(50,300,350,300);//678 bottom row
    }else if(WinSet === "firstColumn"){
        line(100,50,100,350);//036 first column
    }else if(WinSet === "middleColumn"){
        line(200,50,200,350);//147 middle column
    }else if(WinSet === "lastColumn"){
        line(300,50,300,350);//258 last column
    }else if(WinSet === "diagonalDown"){
        line(50,50,350,350);//048 diagonal down
    }else if(WinSet === "diagonalUp"){
        line(50,350,350,50);//246 diagonal up
    }
};

/*
This function draws the board
*/
var drawBoard = function(){
    background(20, 127, 166);
    textSize(50);
    fill(255, 255, 255);
    text("Tic-Tac-Toe",75,44);
    fill(35, 69, 173);
    strokeWeight(2);
    stroke(0, 0, 0);
    line(150,50,150,350);//vertical board lines
    line(250,50,250,350);
    line(50,150,350,150);//Horizontal board lines
    line(50,250,350,250);

    
    var PlayCell = 0;
    var CellCall = "c"+PlayCell; 
    //CellCall will be used to get the coordinates of each position on the board.
    
    for (var Row = 0;Row<3;Row++){//we will go over each row.
        for(var Col = 0;Col<3;Col++){//in each row we need to fill in each column.
            textSize(100);
            fill(255, 0, 0);
            //we only want to print what is in the cell if it is an X or O
            if(Board.cells[PlayCell]!=="n"){
                //in each cell we will print the value stored in the cells array
                //of our board object.
                // we also need the x and y coordinates for where we want to the
                // text to appear.
                text(Board.cells[PlayCell],Board[CellCall].xp,Board[CellCall].yp);
            }
            PlayCell++; //We need to get all cells 0 - 8 to draw in the correct symbol
            CellCall = "c"+PlayCell;// 
        }
    }
	//code to display next turn
    fill(255, 255, 255); 
    textSize(30);
    text("Next Turn: "+Board.turn,50,385);
	//code to crate new game button
    rect(257,360,120,30);
    fill(255, 0, 0);
    textSize(20);
    text("New Game",268,383);
};

/*
This function checks the cells for a win.
It will check each row column and diagonal in an if else if statement
if there is a winner it calls the function to draw the correct slash
Then it draws a box over the next turn on the game board and 
displays the winner.
*/
var checkForWin = function(){
    var Winner = 0; //This variable will let the end of the function know if there is a winner
    if(Board.cells[0]===Board.cells[1]&&Board.cells[1]===Board.cells[2]&&Board.cells[0]!=="n"&&Board.cells[1]!=="n"&&Board.cells[2]!=="n"){
        //each if will check if the cells are all equal and are not equal to "n"
		drawSlash("topRow");// here is a call to draw a slash
        Winner = 1; //We are setting winner to 1 only if there is a winner
    }else if(Board.cells[3]===Board.cells[4]&&Board.cells[4]===Board.cells[5]&&Board.cells[3]!=="n"&&Board.cells[4]!=="n"&&Board.cells[5]!=="n"){
        // each else if is similar in that it checks a set of cells one pair at a time to see if 
		// they are equal to each other all Xs or all Os, and that none are n.
		drawSlash("middleRow");
        Winner = 1;
    }else if(Board.cells[6]===Board.cells[7]&&Board.cells[7]===Board.cells[8]&&Board.cells[6]!=="n"&&Board.cells[7]!=="n"&&Board.cells[8]!=="n"){
        drawSlash("bottomRow");
        Winner = 1;
    }else if(Board.cells[0]===Board.cells[3]&&Board.cells[3]===Board.cells[6]&&Board.cells[0]!=="n"&&Board.cells[3]!=="n"&&Board.cells[6]!=="n"){
        drawSlash("firstColumn");
        Winner = 1;
    }else if(Board.cells[1]===Board.cells[4]&&Board.cells[4]===Board.cells[7]&&Board.cells[1]!=="n"&&Board.cells[4]!=="n"&&Board.cells[7]!=="n"){
        drawSlash("middleColumn");
        Winner = 1;
    }else if(Board.cells[2]===Board.cells[5]&&Board.cells[5]===Board.cells[8]&&Board.cells[2]!=="n"&&Board.cells[5]!=="n"&&Board.cells[8]!=="n"){
        drawSlash("lastColumn");
        Winner = 1;
    }else if(Board.cells[0]===Board.cells[4]&&Board.cells[4]===Board.cells[8]&&Board.cells[0]!=="n"&&Board.cells[4]!=="n"&&Board.cells[8]!=="n"){
        drawSlash("diagonalDown");
        Winner = 1;
    }else if(Board.cells[6]===Board.cells[4]&&Board.cells[4]===Board.cells[2]&&Board.cells[6]!=="n"&&Board.cells[4]!=="n"&&Board.cells[2]!=="n"){
        drawSlash("diagonalUp");
        Winner = 1;
    }
	//Remember the vaule of a=b will be 1 if true and 0 if false
    if (Winner){ //The value of winner is 0 or 1
        textSize(30);
        //Board.turn keeps track of next turn, we need the last played turn
        var TheWinner;
        if (Board.turn === "X"){
            TheWinner = "O";
        }else{
            TheWinner = "X";
        }
        //if there is a win it sets turns taken to nine ending the game.
        Board.turnsTaken=9;
        noStroke();
        fill(20, 127, 166);
        rect(48,360,177,29);//draws a box and displays the Winner
        fill(255, 0, 0);
        text("Winner: "+TheWinner,50,385);
    }

};

//Called when the new game button is pressed
var newGame = function(){
    for(var i=0;i<9;i++){
        Board.cells[i]="n";//reset all cells to "n"
    }
    Board.turn="X";// X will always go first
    Board.turnsTaken = 0; //resets turns taken to 0
    drawBoard(); //draws the board
};

/*
This function is called when a position on the board is clicked
*/
var Play = function(PlayCell){
    if (Board.cells[PlayCell]==="n"&&Board.turnsTaken<9){
        var CellCall = "c"+PlayCell;
        Board.cells[PlayCell] = Board.turn;
        if(Board.turn==="X"){
            Board.turn="O";
            //drawBoard();
            //checkForWin();
            
        } else {
            Board.turn="X";
            //drawBoard();
            //checkForWin();
        }
        drawBoard();
        checkForWin();
    }
};

//This is the call to draw the board when the game is first loaded.
drawBoard();

/*
The mousePressed function is waiting for a mouse click once the game is loaded
*/
var mousePressed = function(){
    //each cell of the board is tested to see if the mouse is clicked there.
    if (mouseX>50 && mouseX<150 && mouseY>50 && mouseY<150){//topLeft
        //if the position is clicked, the Play function is called 
        // with the corresponding cell position.
        Play(0);
    } else if(mouseX>150 && mouseX<250 && mouseY>50 && mouseY<150){//Top Middle
        Play(1);
    }else if(mouseX>250 && mouseX<350 && mouseY>50 && mouseY<150){//Top Right
        Play(2);
    }else if(mouseX>50 && mouseX<150 && mouseY>150 && mouseY<250){//Middle Left
        Play(3);
    }else if(mouseX>150 && mouseX<250 && mouseY>150 && mouseY<250){//Center
        Play(4);
    }else if(mouseX>250 && mouseX<350 && mouseY>150 && mouseY<250){//Middle Right
        Play(5);
    }else if(mouseX>50 && mouseX<150 && mouseY>250 && mouseY<350){//Lower Left
        Play(6);
    }else if(mouseX>150 && mouseX<250 && mouseY>250 && mouseY<350){//Lower Center
        Play(7);
    }else if(mouseX>250 && mouseX<350 && mouseY>250 && mouseY<350){//Lower Right
        Play(8);
    }else if (mouseX>257 && mouseX<377 && mouseY>360 && mouseY<390){
        //this region is the same rectangle as the new game button.
        newGame();
    }
};

