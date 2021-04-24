function validForm() {
    var first = document.forms["myForm"]["fname"].value;
    var last = document.forms["myForm"]["lname"].value;
    var email = document.forms["myForm"]["email"].value;

    if (first == "") {
        alert("First name must be filled out");
        return false;
    }
    if (last == "") {
        alert("Last name must be filled out");
        return false;
    }
    if (email == "") {
        alert("email address must be filled out");
        return false;
    }

}