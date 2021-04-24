function Color_function() {
    var Color_output;
    var Colors = document.getElementById("Color_input").value;
    var Color_string = " is a great color!";
    switch (Colors) {
        case "Red":
            Color_output = "Red" + Color_string;
            break;
        case "Yellow":
            Color_output = "Yellow" + Color_string;
            break;
        case "Green":
            Color_output = "Green" + Color_string;
            break;
        case "Blue":
            Color_output = "Blue" + Color_string;
            break;
        case "Pink":
            Color_output = "Pink" + Color_string;
            break;
        case "Purple":
            Color_output = "Purple" + Color_string;
            break;
        default:
            Color_output = "Please enter a color exactly as written on the above list.";

    }
    document.getElementById("Output").innerHTML = Color_output;
}

function Hello_function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "Change in text!";
}

var c = document.getElementById("Name");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();

var d = document.getElementById("Name2 ");
var dtx = d.getContext("2d");
var grd = dtx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "Black");
grd.addColorStop(1, "White");

dtx.fillStyle = grd;
dtx.fillRect(20, 20, 150, 100);