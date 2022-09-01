// Assignment Code
var generateBtn = document.querySelector("#generate");
var nums = ["1", "2", "3", "4", "5", "6", "7", "8"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V","W", "X", "Y", "Z"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r","s", "t", "u", "v", "w", "x", "y", "z"];
var special = ["?", "!", ":", "$"];



// Write password to the #password input

function generatePassword() {
    var passwordoptions = [];
    var finalpassword = [];
    var length = prompt("How long do you want your password to be?")
    console.log(length);

    if (length < 8 || length > 128) {
        alert("Pick an appropriate length");
        return
    }

    var hasnumbers = confirm("Do you want number in your password?");
    var hasUpper = confirm("Do you want upper case letters in your password?");
    var haslower = confirm("Do you want lower case letters in your password?");
    var hasspecial = confirm("Do you want special characters in your password?");

    if (hasnumbers === true) {
        passwordoptions = passwordoptions.concat(nums);
    }

    if (hasUpper === true) {
        passwordoptions = passwordoptions.concat(upper);
    }

    if (haslower === true) {
        passwordoptions = passwordoptions.concat(lower);
    }

    if (hasspecial === true) {
        passwordoptions = passwordoptions.concat(special);
    }
    console.log(passwordoptions);

    for (var i = 0; i < length; i++) {
        finalpassword.push(passwordoptions[Math.floor(Math.random() * passwordoptions.length)]);

    };

    console.log(finalpassword);
    return finalpassword.join("");
}


function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);