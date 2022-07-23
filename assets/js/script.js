// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordContent = document.querySelector("#password");
var charSym = "!@#$%^&*()";
var charNum = "01234567890";
var charCap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charLow = "abcdefghijklmnopqrstuvwxyz";
var chars = "";
var passwordText = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  passwordContent.value = password;
  document.getElementById('password').value= passwordText;
}

// generates password
function generatePassword() {
  passwordText = "";
  chars = "";
  var passwordLength = window.prompt("Enter the number of characters you would like for the Password. \n\n(Minimum of 8 are required. Max is 128)");
  if (passwordLength === null) {
    var passGenExit = window.confirm("Quit?");
    if (passGenExit) {
      return;
    }
    else {
      return generatePassword();
    }
  }
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Not a vaild entry! Please enter a number between 8 and 128.");
    return generatePassword();
  }
  
  if (isNaN(passwordLength)) {
    window.alert("Not a vaild entry!");
    return generatePassword();
  }
   
  charSymInclude = window.confirm("OK to include symbols(i.e. % & ! $))? ")
  if (charSymInclude) {
    chars = chars.concat(charSym);
  }

  charNumInclude = window.confirm("OK to include numbers?")
  if (charNumInclude) {
    chars = chars.concat(charNum);
  }

  charCapInclude = window.confirm("OK to include capital LETTERS?")
  if (charCapInclude) {
    chars = chars.concat(charCap);
  }

  charLowInclude = window.confirm("OK to include lowercase letters?")
  if (charLowInclude) {
    chars = chars.concat(charLow);
  }

  if (!charCapInclude && !charLowInclude && !charNumInclude && !charSymInclude) {
    window.alert("Please try again and be sure to select at least one character type.")
    return generatePassword();
  }
  
  for (var i = 0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    passwordText += chars.substring(randomNumber, randomNumber +1);
    }
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);