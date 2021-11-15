// Assignment code here


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

// Prompt user if they would like to include case sensitive characters in their password.
var passwordUpperCase = function() {
  var confirmCap = window.confirm("Would you like your password to include uppercase characters?");
  if (confirmCap){
    window.alert("You have chosen to secure your password using uppercase characters");
  }else{
    window.alert("We understand you would not like to include uppercase characters");
  }
  return(confirmCap);
}

// Prompt user if they would like to include lowercase characters in their password.
var passwordLowercase = function() {
  var confirmLow = window.confirm("Would you like your password to include lowercase characters?");
  if (confirmCap){
    window.alert("You have chosen to secure your password using lower characters");
  }else{
    window.alert("We understand you would not like to include lowercase characters");
  }
  return(confirmLow);
}

// Prompt user if they would like to include numeric values in their password. Return boolean
var passwordNumeric = function() {
  var confirmNum = window.confirm("Would you like to include numeric values for your password?");
  if (confirmNum){
    window.alert("You have chosen to secure your password using numeric characters");
  }else{
    window.alert("We understand you would not like to include numeric characters");
  }
  return(confirmNum);
}

// Funciton that returns the index of the maximum number in an array
var indexOfMax = function(arr) {
  if (arr.length === 0) {
      return -1;
  }

  var max = arr[0];
  var maxIndex = 0;

  for (var i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
          maxIndex = i;
          max = arr[i];
      }
  }

  return maxIndex;
}

// function that returns a random value within an array
var pickRandomChar = function(arr) {
  var randomIndex = Math.floor(Math.random()*(arr.length - 1));
  var randomChar = arr[randomIndex];
  return (randomChar);
}

// Password scrambler. Taking inputs of all prompts, and return a randomized string of associated characters
var passwordScrambler = function(passLength, confirmSpecial, confirmCap, confirmLow, confirmNum) {

  // List of Special characters
  var specialChar = ["`", "~", "!","@","#","$", "%", "^", "&", "*", "(", ")","-","_","+","=",",","<",".",">","/","?",";",":","'","{","[","]","}", "\\","|"];
  
  // List of lowercase characters
  var lowercaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r","s","t","u","v","w","x","y","z"];

  // List of uppercase characters
  var uppercaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R","S","T","U","V","W","X","Y","Z"];

  // Initialize variables used for loop
  password = "";
  // Counters for frequency of char type usage
  var numSpecial = 1;
  var numUpper = 1;
  var numLower = 1;
  var numNumber = 1;
  // placeholder for character
  var char = "";

  while (password.length < passLength) {
    // array for char type weights
    charTypeWeights = [
      Math.random()*(1/numSpecial), 
      Math.random()*(1/numUpper),
      Math.random()*(1/numLower),
      Math.random()*(1/numNumber),
    ];  

    // obtain index of max weight (winner)
    var index = indexOfMax(charTypeWeights);

    // conditionals for index winner
    if (index === 0 && confirmSpecial) {
      numSpecial++;
      char = pickRandomChar(specialChar);
    } else if (index === 1 && confirmCap) {
      numUpper++;
      char = pickRandomChar(uppercaseChar);
    } else if (index === 2 && confirmLow) {
      numLower++;
      char = pickRandomChar(lowercaseChar);
    } else if (index === 3 && confirmNum){
      numNumber++;
      char = Math.floor(Math.random()*9);
    } else {

    }
    password = password.concat(char);
  }
  return (password);
}

var generatePassword = function() {
  passwordLength = passwordLength();
  confirmSpecial = passwordSpecial();
  confirmCap = passwordUpperCase();
  confirmLow = passwordLowercase();
  confirmNum = passwordNumeric();

  password = passwordScrambler(passwordLength, confirmSpecial, confirmCap, confirmLow, confirmNum);

  window.alert("your password is: " + password);
}

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
