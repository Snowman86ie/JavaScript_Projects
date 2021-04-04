window.alert("Welcome to JavaScript"); //welcome message 

var A = "concatenrated" + " string ";
document.write(A); //displaying the concatenate string
document.write(3 + 6); //simple expression

function My_First_Function() { //defining a function and naming it
    var str = "This text is green!"; //defining a viable and giving it a string value
    var result = str.fontcolor("green"); //using the font.color on a str variable
    document.getElementById("Green_Text").innerHTML = result; //putting the value of result into HTML element with Green_Text
}