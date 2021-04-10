function AddFunction() { //addition function
    var sum = 2 + 2; //varible that adds 2+2
    document.getElementById("Add").innerHTML = "2 + 2 =" + sum; //displays the result in the button using the id
}

function SubFunction() { //subtraction function
    var sub = 10 - 4; //varible that subtracts 4 from 10
    document.getElementById("Sub").innerHTML = "10 - 4 =" + sub; //displays the result in the button using the id
}

function Multiplication() { //multiplication function
    var multi = 7 * 9; //multiples 7 by 9
    document.getElementById("multi").innerHTML = "7 * 9 = " + multi //displays the result in the button using the id
}

function Division() { //division function
    var div = 77 / 7; //divides 77 by 7
    document.getElementById("Div").innerHTML = "77 / 7 = " + div //displays the result in the button using the id
}

function Operations() { //Multiple Operations
    var oper = (1 + 2) * 10 / 2 - 5; //a sum to show multiple operations in one go
    document.getElementById("operations").innerHTML = "(1 +2) *10 /2 - 5 = " + oper //displays the result in the button using the id
}

function Modulas() { //Modulas Operators
    var mod = 25 % 6; //a sum to get the remainer of he values
    document.getElementById("mod").innerHTML = "25 % 6 gives you a remainer of " + mod //displays the result in the button using the id
}

function Unary() { //Unary Operator
    var x = 10; //creates a varible with value of 10
    document.getElementById("unary").innerHTML = -x //displays the result in the button using the id
}

function PIfunction() { //PI function
    var p = Math.PI //creates a varible with the PI value assigned
    document.getElementById("PI").innerHTML = p //displays the result in the button using the id
}

var y = 5; //sets up a varible with 5 as a value
y++; //increments y by 1
document.write(y); //displays the result on the html page

var z = 10; //sets up a varible with 10 as a value
z--; //decrements z by 1
document.write(z); //displays the result on the html page

window.alert(Math.random() * 100); //displays a roandom number between 0 and 100 on page loading