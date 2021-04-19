function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X < 11) { //while X < 11 it runs through the loop
        Digit += "<br>" + X; //Adds X to digit on new line
        X++; //increment x by 1
    }
    document.getElementById("Loop").innerHTML = Digit; //displays result
}

function Length_function() {
    Test = "Good Morning";
    document.getElementById("length").innerHTML = (Test.length); //using length property to return the lenght of a variable
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;

function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) { //for loop
        Content += Instruments[Y] + "<br>"; //adds instrument in index Y yo content on new line
    }
    document.getElementById("List_of_Instruments").innerHTML = Content; //displays the result
}

function cat_pics() {
    var Cat_Pic = []; //creates am Array
    Cat_Pic[0] = "Sleeping"; //adds a property to the Array
    Cat_Pic[1] = "playing";
    Cat_Pic[2] = "eating";
    Cat_Pic[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " + Cat_Pic[2] + "."; //displays the result in index 2 of the array
}

function constant_function() {
    const Musical_instr = { type: "guitar", brand: "Fender", color: "Black" };
    Musical_instr.color = "blue"; //changes the property of color
    Musical_instr.price = "€900"; //adds a property called price
    document.getElementById("Constant").innerHTML = "The type of " + Musical_instr.type + " was " + Musical_instr.brand;
    document.getElementById("Change").innerHTML = "The color of the " + Musical_instr.type + " was " + Musical_instr.color + " and it cost " + Musical_instr.price;
}

let car = { //creating an object using let
    make: " Dodge", //adding property to the object
    model: " Viper",
    year: " 2021",
    color: " red",
    description: function() { //method of object
        return "The car is a " + this.year + this.color + this.make + this.model; //using return method
    }

};
document.getElementById("Car_object").innerHTML = car.description(); //displaying the result