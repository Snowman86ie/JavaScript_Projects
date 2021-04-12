document.write(typeof "Word"); //typeof operator to display data type string

document.write(typeof 3); //typeof perator to display data type number


function my_function4() { //Testing negative infinity
    document.getElementById("Test4").innerHTML = (-3E310);
}

function my_function5() { //Testing Infinity
    document.getElementById("Test5").innerHTML = 2E310;
}

function my_function6() { //Boolean logic TRUE
    document.getElementById("Test6").innerHTML = (10 > 2);
}

function my_function7() { //Boolean logic FALSE
    document.getElementById("Test7").innerHTML = (10 < 2);
}

function my_function8() { //Type Coerion function
    document.getElementById("Test8").innerHTML = ("10" + 5);
}

function my_function9() { //Double equals reutrns a TRUE
    document.getElementById("Test9").innerHTML = (10 == 10);
}

function my_function10() { //Double equals returns a FALSE
    document.getElementById("Test10").innerHTML = (10 == 5);
}

function my_function11() { //triple equals returns TRUE
    a = 10; //data type number
    b = 10; //data type number
    document.getElementById("Test11").innerHTML = (a === b);
}

function my_function12() { //triple equals returns FALSE
    a = "12"; //data type string
    b = 10; //data type number
    document.getElementById("Test12").innerHTML = (a === b);
}

function my_function13() { //triple equals returns FALSE
    a = "10"; //data type string
    b = 10; //data type number
    document.getElementById("Test13").innerHTML = (a === b);
}

function my_function14() { //triple equals returns FALSE
    a = 10; //data type number
    b = 100; //data type number
    document.getElementById("Test14").innerHTML = (a === b);
}

function my_function15() { //AND Boolean logic returns TRUE
    document.getElementById("Test15").innerHTML = (10 > 2 && 10 > 5);
}

function my_function16() { //AND Boolean logic returns FALSE
    document.getElementById("Test16").innerHTML = (5 > 10 && 10 > 5);
}

function my_function17() { //OR Boolean logic returns TRUE
    document.getElementById("Test17").innerHTML = (5 > 10 || 10 > 5);
}

function my_function18() { //OR Boolean logic returns FALSE
    document.getElementById("Test18").innerHTML = (5 > 10 || 1 > 5);
}

function my_function19() { //NOT Boolean logic returns TRUE
    document.getElementById("Test19").innerHTML = !(1 > 5);
}

function my_function20() { //NOT Boolean logic reutrns FALSE
    document.getElementById("Test20").innerHTML = !(5 < 10);
}