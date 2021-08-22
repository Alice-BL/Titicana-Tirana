// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// create variables for alpha, numeric characters and symbols


var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerChars = "abcdefghijklmnopqrstuvwxyz";
var symbol =  "!#$%&'()*+,-./:;<=>?@[\]^_`{|}";
var numberChars = "0123456789";
var allChars = upperChars + lowerChars + numberChars + symbol;

// Confirming character types
upperChars = confirm("Would you like to have at least 1 upper case letter in your password?");
lowerChars = confirm("Would you like to have at leaset 1 lower case letter in your password?");
symbol = confirm("Would you like to have at least 1 spececial character in your password?");



// Create prompt for password length
function generatePassword() {
 var passwordLength = promt("How may characters would you liek your password to be? 8-128 characters?");
    

  

}
generatePassword();