var A = "Welcome to JavaScript"; //Asigning a varible 

document.write(A); //Displaying varible

function myFunction() { //define and name funtion
    var sentence = "I am Learning"; //define a varible and assign a string
    sentence += " a lot from this course!"; //concatenate the varible with another string
    document.getElementById("Concatenate").innerHTML = sentence; //putting the value of sentence into HTML element 
}