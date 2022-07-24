// variable declarations needed for password generating and writing
// the variables generateBtn and passwordContent are set to the contents the of the elements with IDs of generate and password, respectively
var generateBtn = document.querySelector("#generate");
var passwordContent = document.querySelector("#password");
// library of characters used to generate the password
var charSym = "!@#$%^&*()";
var charNum = "01234567890";
var charCap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charLow = "abcdefghijklmnopqrstuvwxyz";
// empty variables declared such that it could be 'filled' based on user input 
var chars = "";
var passwordText = "";

// this is the function that writes the generated password to the text area (has ID of #password)
function writePassword() {
  var password = generatePassword();
  passwordContent.value = password;
  document.getElementById('password').value= passwordText;
}

// this is the function that generates the password
function generatePassword() {
  passwordText = "";
  chars = "";
  var passwordLength = window.prompt("Enter the number of characters you would like for the Password. \n\n(Minimum of 8 are required. Max is 128)");
  if (passwordLength === null) {
    // this allows the user to quit the password generation process
    var passGenExit = window.confirm("Quit?");
    if (passGenExit) {
      return;
    }
    else {
      return generatePassword();
    }
  }
  // if a number outside the required range is inputted, the user recieves an alert
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Not a vaild entry! Please enter a number between 8 and 128.");
    return generatePassword();
  }
  // if text is inputted instead of a number, the user recieves an alert
  if (isNaN(passwordLength)) {
    window.alert("Not a vaild entry!");
    return generatePassword();
  }
  /* these variables correlate to each possible character type, if selected, the list of available characters increase using the concat method; otherwise if the user selects no to one or more character type then that character type is excluded */
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
  // if no character type is selected, then the user is alerted and asked to select at least one type
  if (!charCapInclude && !charLowInclude && !charNumInclude && !charSymInclude) {
    window.alert("Please try again and be sure to select at least one character type.")
    return generatePassword();
  }
  
  // randomization needed to create a more secure password
  for (var i = 0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    passwordText += chars.substring(randomNumber, randomNumber +1);
    }
  
}

// Add event listener to generate button such that when a user clicks the button the function starts
generateBtn.addEventListener("click", writePassword);