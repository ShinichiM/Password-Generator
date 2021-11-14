// Assignment code here


// ---- START NOTE ----
// Perhaps consolidate all these functions into one and return multiple boolean values.
// Could cause issue with readabilty but less repeating.
// ---- END NOTE ---

// Prompt user for password length (User Input)
var passwordLength = function() {
  var passLength = parseInt(window.prompt("Please enter a password length between 8 and 128 characters"));
  
  // If password length is not within 8-128 bounds, continuously prompt for correct length.
  if (passLength < 8 || passLength > 128) {
    window.alert("Please input a valid value between 8 and 128 inclusive.");
    passwordLength();
  } else {
    return passLength;
  }
}

// Prompt user if they would like to include special characters in their password, return boolean
var passwordSpecial = function() {
  var confirmSpecial = window.confirm("Would you like to include special characters in your password?");
  if (confirmSpecial){
    window.alert("You have chosen to secure your password using special characters");
  }else{
    window.alert("We understand you would not like to include special characters");
  }
  return(confirmSpecial);
}

// Prompt user if they would like to include case sensitive characters in their password, return boolean
// If false, user to keep lowercase letters. If yes, both lowercase and uppercase characters.
var passwordCaseSensitive = function() {
  var confirmCap = window.confirm("Would you like your password to be case sensitive? This includes both Uppercase and Lowercase characters");
  if (confirmCap){
    window.alert("You have chosen to secure your password using case sensitive characters");
  }else{
    window.alert("We understand you would not like to include case sensitive characters");
  }
  return(confirmCap);
}

// Prompt user if they would like to include numeric values in their password. Return boolean
var passwordNumeric = function() {
  var confirmCap = window.confirm("Would you like to include numeric values for your password?");
  if (confirmCap){
    window.alert("You have chosen to secure your password using numeric characters");
  }else{
    window.alert("We understand you would not like to include numeric characters");
  }
  return(confirmNum);
}

// Password scrambler. Taking inputs of all prompts, and return a randomized string of associated characters.
// loop through each character in password.
// Have random number generated for each prompt user selects as true.. i.e. (rand1=confirmSpecial, rand2=confirmCap, rand3=confrimNum)
// select largest random number as the one who 'wins' the character spot. 
// randomly generate a character or number for that space.
var passwordScramble = function(passLength, confirmSpecial, confirmCap, confirmNum) {
  password = "";
  for (var i=0; i < passLength; i++) {
    Math.random();
  }  
}

var generatePassword = function() {
  passwordLength = passwordLength();
  confirmSpecial = passwordSpecial();
  confirmCap = passwordCaseSensitive();
  confirmNum = passwordNumeric();
}

// List of Special characters
var specialChar = ["`", "~", "!","@","#","$", "%", "^", "&", "*", "(", ")","-","_","+","=",",","<",".",">","/","?",";",":","'","{","[","]","}", "\"","|"];
// password criteria
// Length, Capitalization, Special Characters, 



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
