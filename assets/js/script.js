
  var chars = "";
  var charSym = "!@#$%^&*()_-";
  var charNum = "0123456789";
  var charCap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var charLow = "abcdefghijklmnopqrstuvwxyz";
  var passwordLength = "";
  var passwordText = "";

function genPassword() {
  passwordLength = window.prompt("Enter the number of characters you would like for your Password. \n(Minimum of 8 characters are required. Max is 128.");
  
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Please Enter a number between 8 and 128");
    
  }

  charSymInclude = window.confirm("Would you like to include symbols? \n(i.e. %&^$)")
  if (charSymInclude) {
    chars = chars.concat(charSym)
  }

  charNumInclude = window.confirm("Would you like to include numbers?")
  if (charNumInclude) {
    chars = chars.concat(charNum)
  }

  charCapInclude = window.confirm("Would you like to include CAPITAL letters?")
  if (charCapInclude) {
    chars = chars.concat(charCap)
  }

  charLowInclude = window.confirm("Would you like to include lower case letters?")
  if (charLowInclude) {
    chars = chars.concat(charLow)
  }
  
  for (var i = 0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    passwordText += chars.substring(randomNumber, randomNumber +1);
    }
   
    document.getElementById('password').value= (passwordText);
}

var generateBtn = document.querySelector("#generate");
  generateBtn.addEventListener("click", genPassword);



