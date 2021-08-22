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


// creating variables for alpha, numeric characters and symbols


var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerChars = "abcdefghijklmnopqrstuvwxyz";
var symbol =  "!#$%&'()*+,-./:;<=>?@[\]^_`{|}";
var numberChars = "0123456789";
var allChars = upperChars + lowerChars + numberChars + symbol;

// Confirming character types
upperChars = confirm("Would you like to include at least 1 upper case letter in your password?");
lowerChars = confirm("Would you like to include at leaset 1 lower case letter in your password?");
symbol = confirm("Would you like to include at least 1 spececial character in your password?");
numberChars = confirm("Would you like to include at least 1 number in your password?");


// Declaring generatePassword function and creating prompt for password length 

function generatePassword() {
  var password = "";
   var passwordLength = prompt("How may characters would you like your password to be? 8-128 characters?");
      if (passwordLength < 8 || passwordLength > 128) {
        alert("Please choose at least 8 or no more than 128 characters.");
        return generatePassword();
      }
    }    
  generatePassword();

function writePassword() {
  passwordLength = 16;
  var allChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!#$%0&'()*+,-./:;<=>?@[\]^_`{|}0123456";
  for (var i=0; i<passwordLength; i++) {

  var RandomNumber = Math.floor(Math.random() * allChars.length);
  password += allChars.substring(RandomNumber, RandomNumber + 1);

}
document.querySelector("#password").value = password;

}
writePassword();

