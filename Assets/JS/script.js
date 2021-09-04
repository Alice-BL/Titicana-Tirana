// Assignment Code
var generateBtn = document.querySelector("#generate");

// creating variables for alphabets, numeric characters and symbols


var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerChars = "abcdefghijklmnopqrstuvwxyz";
var symbol =  "!#$%&'()*+,-./:;<=>?@[\]^_`{|}";
var numberChars = "0123456789";
var passChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!#$%0&'()*+,-./:;<=>?@[\]^_`{|}0123456";



// Declaring generatePassword function and creating prompts for password length 

function generatePassword() {
  
  var password = "";
  var passLength = prompt("How may characters would you like? 8-128 characters?");
    // alert if the length of password  is not between 8-128 characters 
      if (passLength < 8 || passLength > 128) {
        alert("Please choose at least 8 or no more than 128 characters.");
        return generatePassword();
      }
      // alert if value entered is not number
      if(isNaN(passLength)) {
        alert("Please enter numbers only.");
        return generatePassword();
      }

      
    
  //  confirm character types that user wants to select
  var upperChars = confirm("Would you like to include at least 1 upper case letter in your password?");
      if (upperChars) {
        password += upperChars;
      }
  var lowerChars = confirm("Would you like to include at leaset 1 lower case letter in your password?");
      if (lowerChars) {
        password += lowerChars;
      }
  var symbol = confirm("Would you like to include at least 1 special character in your password?");
      if (symbol) {
        password += symbol;
      }
  var numberChars = confirm("Would you like to include at least 1 number in your password?");
      if (numberChars) {
        password += numberChars;
      }
  
  for (var i = 0; i < passLength; i++) {
        password += passChars.charAt(Math.floor(math.random() * passChars.length));
        
      }
          
  }

// Write password to the #password input (placeholder)
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
