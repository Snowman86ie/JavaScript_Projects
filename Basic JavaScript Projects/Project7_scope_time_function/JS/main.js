var x = 10; // assigning a gobal variable

function Add_numbers_1() { //function to test a gobal variable
    document.write(20 + x + "<br>"); //display result
}

Add_numbers_1(); // calling the above function

function Add_numbers_3() { // function to test local variable
    var y = 10; //assigning a local variable
    document.write(20 + y + "<br>"); //display result
}

function Add_numbers_4() { //function to text local variable
    document.write(y + 100 + "<br>"); // no result will be shown as y is not defined
}

Add_numbers_3(); // calling the above function
Add_numbers_4(); // calling the above function


function get_Date() { //function to get the current time
    if (new Date().getHours() <= 18) { //if hours is <= 18 then a result will be display
        document.getElementById("Greeting").innerHTML = "How are you today?" //result to be displayed
    }
}

function Age_Function() { //creating Age_function
    Age = document.getElementById("Age").value; //setting age = to user input
    if (Age >= 18) { //if they are 18 or over they can vote
        Vote = "You are old enough to vote"
    } else {
        Vote = "You are not old enough to vote." //else they are too young
    }
    document.getElementById("How_old").innerHTML = Vote; //displaying result
}

function Time_function() { //creating Time_function
    var Time = new Date().getHours(); // setting a variable to current time
    var Reply; //creating a variable
    if (Time < 12 == Time > 0) { // if statement for morning time
        Reply = "Its morning time";
    } else if (Time > 12 == Time < 18) { //else if statement for afternoon
        Reply = "It is the afternoon.";
    } else {
        Reply = "It is evening time"; // remaining time in day is evening
    }
    document.getElementById("Time_of_day").innerHTML = Reply; //display result of the above condition been met
}