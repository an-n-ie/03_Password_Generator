// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password


// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var uppercase = lowercase.toUpperCase()
var number = "0123456789"
var special = "!@#$%^&*"

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  var finalPwd=""

  // WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
  var size = prompt("Number of characters? (minimum 8, maximum 128)")
   console.log(size)

  if(size >=8 && size <=128){

    // WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
    var isLowercase= confirm("Include lowercase?")
    console.log(isLowercase)
    var isUppercase= confirm("Include uppercase?")
    console.log(isUppercase)
    var isNumber= confirm("Include number?")
    console.log(isNumber)
    var isSpecial= confirm("Include special characters?")
    console.log(isSpecial)

    if(isLowercase===true){
      var positionString=Math.floor(Math.random() *26) 
      console.log(positionString)
      finalPwd = finalPwd + lowercase[positionString]
    }
  }
  
    
  else{
    alert("Invalid entry")
  }

  return finalPwd
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
