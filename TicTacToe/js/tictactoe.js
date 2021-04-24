//This ariable keeps track of who's turn it is
let activePlayer = 'X';

//this arry stores an array of moves. We use this to determine win conditions
let selectedSquares = [];

//this is the function for placing x or o in a square
function placeXOrO(squareNumber) {
    //This condition ensures a square hasn't be selected already
    //The .some() method is used to check each element of th slelectedSquare arrey to
    // see if it contains the square number clicked on
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        //this variable  retrieves the html element id that was clciked
        let select = document.getElementById(squareNumber);
        //this condition checks whos turn it is
        if (activePlayer === 'X') {
            //if activePlayer is equal to 'X' the x.png is placed in html
            select.style.backgroundImage = 'url("images/x2.png")';
            //Active player may only be 'X' or 'O', if its not X it must be O
        } else {
            //if activePlayer is equal to 'O' the o.png is placed in html
            select.style.backgroundImage = 'url("images/o2.png")';
        }
        //squareNumber and activePlayer are concatenated together and added to array
        selectedSquares.push(squareNumber + activePlayer);
        //This calls a function to check for any win conditions
        checkWinConditions();
        //This condition is for changing the active player
        if (activePlayer === 'X') {
            //if activePlayer is 'X' change it to 'O'
            activePlayer = 'O';
            //if active player is anything other than 'X'
        } else {
            //change it to 'X'
            activePlayer = 'X';
        }
        //This function plays a placement sound
        audio('./media/place2.mp3');
        //This condition checks to see if its cumputers turn
        if (activePlayer === 'O') {
            //this function disables clicking for computer choice
            disableClick();
            //This function waits 1 seconds before placing image
            //and enableing click
            setTimeout(function() { computersTurn(); }, 1000);
        }
        //returning true is needed for our computersTurn() function to work
        return true;
    }

    //This function results in a random square being selected
    function computersTurn() {
        //This boolean is needed for our while loop
        let sucess = false;
        //This variable stores a random number 0-8
        let pickASquare;
        //this conditioon allows our while loop to keep
        //trying if a squae is selected already
        while (!sucess) {
            //A random number between 0-8 is selected
            pickASquare = String(Math.floor(Math.random() * 9));
            //if the random number evaluates returns true, the square hasn't been selected yet
            if (placeXOrO(pickASquare)) {
                //This line calls the function
                placeXOrO(pickASquare);
                //This changes our boolean and ends the loop
                sucess = true;
            };
        }
    }
}

//This function parses the selectedSquares array to search for the win conditions
//drawWinLine function os called to draw line if condition is met
function checkWinConditions() {
    //X 0,1,2 condition
    if (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100); }
    //X 3,4,5 condition
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304); }
    //X 6,7,8 condition
    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508); }
    //X 0,3,6 condition
    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558); }
    //X 1,4,7 condition
    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558); }
    //X 2,5,8 condition
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558); }
    //X 6,4,2 condition
    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90); }
    //X 0,4,8 condition
    else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520); }
    //O 0,1,2 condition
    else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100); }
    //O 3,4,5 condition
    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304); }
    //O 6,7,8 condition
    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508); }
    //O 0,3,6 condition
    else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558); }
    //O 1,4,7 condition
    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558); }
    //O 2,5,8 condition
    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558); }
    //O 6,4,2 condition
    else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90); }
    //O 0,4,8 condition
    else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520); }
    //this condition checks for a tie. if none of the above conditions register
    //amd 9 squares are selected, the code executes
    else if (selectedSquares.length >= 9) {
        //this function plays the tie game sound
        audio('./media/tie2.mp3');
        //This function sets a .3 second timer before the resetGame is called
        setTimeout(function() { resetGame(); }, 300);
    }
    //This function checks if an ay includes 3 strings
    //its used to check for each win condition
    function arrayIncludes(squareA, squareB, squareC) {
        //The next 3 variable will be used to check for 3 in a row
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        //if the 3 variables we pass are all included in ou array true is returned
        //and our else if condition executes and drawWinLine function
        if (a === true && b === true && c === true) { return true; }
    }
}

//this function makes our body element temporarily unclickable
function disableClick() {
    //This makes our body unclickable
    body.style.pointerEvents = 'none';
    //this makes our body clickable again after 1second
    setTimeout(function() { body.style.pointerEvents = 'auto'; }, 1000);
}

//This function takes a string parameter of the path you set earlier for
//placement sound
function audio(audioURL) {
    //We create a new audio object and we pass the path as a parameter
    let audio = new Audio(audioURL);
    //Play method plays our sound
    audio.play();
}

//This function utilizes html canvas to draw win lines.
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    //this line acsses our html canvas element
    const canvas = document.getElementById('win-lines');
    //this line gives us access to methods and properties to use on canvas
    const c = canvas.getContext('2d');
    //this line indicates where the start of a line x axis is
    let x1 = coordX1,
        //this line indicates where the start of a line y axis is
        y1 = coordY1,
        //this line indicates where the end of a line x axis is
        x2 = coordX2,
        //this line indicates where the end of a line y axis is
        y2 = coordY2,
        //This varaible stores tempoary x axis data we update in our animation loop
        x = x1,
        //This varaible stores tempoary y axis data we update in our animation loop
        y = y1;

    //this function interacts with the canvas
    function animateLineDrawing() {
        //this variable creates the loop for when the game ends it restart
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        //this method clears content from last loop iteration
        c.clearRect(0, 0, 608, 608);
        //this method starts anew path
        c.beginPath();
        //this method moves us to a starting point for our line
        c.moveTo(x1, y1);
        //this method indicates the end point in our line
        c.lineTo(x, y);
        //this method sets the width of our line
        c.lineWidth = 10;
        //this method sets the color of our line
        c.strokeStyle = 'rgba(70,255,33,.8)';
        //this method draws everything we laid out above
        c.stroke();
        //this condition checks if we have reached the endpoint
        if (x1 <= x2 && y1 <= y2) {
            //this condition adds 10 to the previous end x point
            if (x < x2) { x += 10; }
            //this condition adds 10 to the previous end y point
            if (y < y2) { y += 10; }
            //this condition  cancels our animation loop if reach the end points
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
        }
        //this condition is similar to the one above
        //it was necessary for the 6,4,2 win condition
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
        }
    }

    //This function clears our canvas after our win line is drawn
    function clear() {
        //this line start our animation loop
        const animationLoop = requestAnimationFrame(clear);
        //this line clears our canvas
        c.clearRect(0, 0, 608, 608);
        //this line stops our animation loop
        cancelAnimationFrame(animationLoop);
    }
    //this line disallows clicking while the win sound is playing
    disableClick();
    //this line plays the wion sound
    audio('./media/win2.mp3');
    //this line calls our main animation loop
    animateLineDrawing();
    //this line waits 1 second
    //then clears the canvas, reset game and allows clicking again
    setTimeout(function() {
        clear();
        resetGame();
    }, 1000);
}

//this function rese the game in a tie or a win
function resetGame() {
    //this for loop iterates throught each html square element
    for (let i = 0; i < 9; i++) {
        //this variable gets the html elemnt of i
        let square = document.getElementById(String(i));
        //this removes our element backgroundImage
        square.style.backgroundImage = '';
    }
    //This resets our array so it is empty and we can start over
    selectedSquares = [];
}