function displayType(character) {
    var chartype = character.getAttribute("data-character-type");
    alert(chartype + " is in the " + character.innerHTML + " universe!");
}