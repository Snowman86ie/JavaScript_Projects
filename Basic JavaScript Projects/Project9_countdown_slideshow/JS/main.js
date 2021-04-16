function countdown() { //create function called countdown
    var seconds = document.getElementById("seconds").value; //value assigned to seconds gotten from user

    function tick() { // cretes tick function
        seconds = seconds - 1; //reduces the value in seconds by -1
        timer.innerHTML = seconds; //shows codown on screen
        setTimeout(tick, 1000); //sets a delay of 1 second between ticks
        if (seconds == -1) { //once the countdown reachs -1 sets alarm off
            alert("Times up!"); //notice to user of alarm 
        }
    }
    tick(); //calls the tick function
}

//Slideshow JS
var slideIndex = 1; //sets a gobal variable slideindex to 1
showSlides(slideIndex); //sets a gobal variable showSlides to slideindex

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n); //changes the slide forward/backward depending on button pressed
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n); //displays the image assign to the number
}

function showSlides(n) {
    var i; //creates local variable
    var slides = document.getElementsByClassName("mySlides"); //creates local variable and assigns mySlides value
    var dots = document.getElementsByClassName("dot"); //creates local variable and assigns dot value
    if (n > slides.length) { slideIndex = 1 } //if n goes above number of picture, resets to first
    if (n < 1) { slideIndex = slides.length } //if n goes below number of picture, resets to last
    for (i = 0; i < slides.length; i++) { //once i is less then number of slide loop for i
        slides[i].style.display = "none"; //displays current picture over old image
    }
    for (i = 0; i < dots.length; i++) { //once i is less then number of dots loop for i
        dots[i].className = dots[i].className.replace(" active", ""); //displays cuurent active dot
    }
    slides[slideIndex - 1].style.display = "block"; //changes active picture
    dots[slideIndex - 1].className += " active"; //changes active dot
}