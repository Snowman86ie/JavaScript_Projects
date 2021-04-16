function Vote_Function() { //creating a ternary Operator function
    var True, Can_vote1, Can_vote2; //setting up the varibles
    Age = document.getElementById("Age").value; //asigning a value to age, gotten from the user
    Can_vote1 = (Age < 18) ? "You are too young" : "You are old enough"; //using the ternary operator to assign a result depending on the outcome
    Can_vote2 = (Age < 18) ? " Please come back once you are 18" : " Please proceed to the voting station";
    document.getElementById("Vote").innerHTML = Can_vote1 + " to vote." + Can_vote2; //displaying the result k to the user
}

function Vehicle(Make, Model, Year, Color) { //constructor function creating a object
    this.Vehicle_Make = Make; //using keyword "this" to assign make to the object
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red"); //using keyword "new" to create an instance of the above object
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function myFunction() { //function been called on web page
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Make + " " + Erik.Vehicle_Model + " colored " + Erik.Vehicle_Color + " manufactured in " + Erik.Vehicle_Year; //sets up the result to be displayed
}

function count_function() { // creates function been called
    document.getElementById("Counting").innerHTML = Count(); //gets the result by calling a function within this function

    function Count() { //creates the nested function
        var Starting_point = 9; //assigns a varible

        function Plus_one() { Starting_point += 1; } //function to add 1 to the starting_point varible
        Plus_one(); //calls the function Plus one
        return Starting_point; // returns starting point with a new valve assigned
    }
}