// Assignment Code
var generateBtn = document.querySelector("#generate");
var charSym = "!@#$%^&*()";
var charNum = "01234567890";
var charCap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charLow = "abcdefghijklmnopqrstuvwxyz";
var chars = "";
var passwordText = "";
var passwordContent = document.querySelector("#password");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  passwordContent.value = password;
  document.getElementById('password').value= passwordText;
}

// generates password
function generatePassword(passwordLength, charSymInclude, charNumInclude, charCapInclude, charLowInclude) {
  passwordText = "";
  var passwordLength = window.prompt("Enter the number of characters you would like for the Password. \n(Minimum of 8 are required. Max is 128.)");
  
  if (passwordLength < 8 || passwordLength > 128) {
    return generatePassword();
  }

  if (!parseInt(passwordLength)) {
    return;
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

  if (!charSymInclude && !charCapInclude && !charLowInclude && !charNumInclude) {
    return generatePassword();
  }
  
  for (var i = 0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    passwordText += chars.substring(randomNumber, randomNumber +1);
    }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);