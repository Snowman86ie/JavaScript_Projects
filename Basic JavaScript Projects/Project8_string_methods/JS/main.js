function full_sentence() { //creates the full_sentence function
    var part_1 = "The Gran Prix "; //variable with string assigned
    var part_2 = "on Sunday will "; //variable with string assigned
    var part_3 = "take place in "; //variable with string assigned
    var part_4 = "Italy"; //variable with string assigned
    var whole_sentence = part_1.concat(part_2, part_3, part_4); //using concat it connects the multiple variables together
    document.getElementById("Concatenate").innerHTML = whole_sentence; //displays result 
}

function slice_method() { //creates the slice function
    var sentence = "All work and no play makes johnny a dull boy."; //creates a variable with a string attached
    var section = sentence.slice(27, 33); //using the slice method it selects the value between position 27 & 33
    document.getElementById("Slice").innerHTML = section; //displays the result
}

function upper_method() { // creates the upper_method function
    var lower = "Its fun to play with code"; //assigns a variable with a lower case string
    var toup = lower.toUpperCase(); // converts lower to all upper case string
    document.getElementById("Upper").innerHTML = toup; //displays the result
}

function search_method() { //cretes the search_method function
    var test = "Its a fine day outside, why not go and play"; //creates a variable with a string assigned
    var result = test.search("outside"); //uses the search method to lcate the position of "outside"
    document.getElementById("Find").innerHTML = result; //displays the result
}

function string_method() { //creates the function string_method
    var x = 182; //creates a variable with 182 assigned
    document.getElementById("Numbers_to_Strings").innerHTML = x.toString(); //returns x as a string

}

function precision_method() { //creates the function precision_method
    var x = 12938.301298737112; //assigned the variable x 
    document.getElementById("Precision").innerHTML = x.toPrecision(10); //formats the variable x to a max of 10 digits;

}

function fixed_method() { //creates the function fixed_method
    var x = 6.5489; //creates the variable x
    document.getElementById("Fixed").innerHTML = x.toFixed(2); //returns x as a string with 2 decimal places
}

function value_method() { //creates the function value_method
    var x = 568; //assigns x = 568
    document.getElementById("value").innerHTML = x.valueOf(); //returns x as a number using the valueof()
}