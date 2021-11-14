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
  var confirmCap = window.confirm("Would you like your password to be case sensitive? This will include both Uppercase and Lowercase characters");
  if (confirmCap){
    window.alert("You have chosen to secure your password using case sensitive characters");
  }else{
    window.alert("We understand you would not like to include case sensitive characters");
  }
  return(confirmCap);
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

// Password scrambler. Taking inputs of all prompts, and return a randomized string of associated characters.
// loop through each character in password.
// Have random number generated for each prompt user selects as true.. i.e. (rand1=confirmSpecial, rand2=confirmCap, rand3=confrimNum)
// select largest random number as the one who 'wins' the character spot. 
// randomly generate a character or number for that space.
var passwordScrambler = function(passLength, confirmSpecial, confirmCap, confirmNum) {

  // List of Special characters
  var specialChar = ["`", "~", "!","@","#","$", "%", "^", "&", "*", "(", ")","-","_","+","=",",","<",".",">","/","?",";",":","'","{","[","]","}", "\\","|"];
  
  // List of lowercase characters
  var lowercaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r","s","t","u","v","w","x","y","z"];

  // List of uppercase characters
  var uppercaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R","S","T","U","V","W","X","Y","Z"];


  password = "";

  var i = 0;
  while (password.length < passLength) {
    randomNumbers = [
      Math.random(), 
      Math.random(), 
      Math.random(),
      Math.random()
    ];

    var index = indexOfMax(randomNumbers);

    if (index === 0 && confirmSpecial) {
      passowrd = password.concat(pickRandomChar(specialChar));
    } else if (index === 1 && confirmCap) {
      password = password.concat(pickRandomChar(uppercaseChar));
    } else if (index === 2 && !confirmCap) {
      password = password.concat(pickRandomChar(lowercaseChar));
    } else{
      password = password.concat(Math.floor(Math.random()*1000));
    }
  }
  return (password);
}

// Function that returns an array the size of the password length with values indicating Special, Uppercase, Lowercase, and numbers
var testing = function(passLength, confirmSpecial, confirmCap, confirmNum) {

  // Initialize an array of weights for each character in the password.
  var weights = new Array(passLength).fill(0);

  // randomize 4 numbers to select which number 'wins' the character slot for password. 
  // 0: special, 1: Uppercase, 2: lowercase, 3: numbers
  var criteriaWeight = [Math.random(), Math.random(), Math.random(), Math.random()];


  for (var i=0; i < weights.length; i++) {
    var placeHolder = indexOfMax(criteriaWeight);

    if (placeHolder === 0 && confirmSpecial) {
      weights[i] = placeHolder;
    } else if (placeHolder === 1 && confirmCap) {
      weights[i] = placeHolder;
    } else if (placeHolder === 2 && !confirmCap) {
      weights[i] = placeHolder;
    } else if (placeHolder === 3 && confirmNum){
      weights[i] = placeHolder;
    }
  }
  return(weights);
}

var generatePassword = function() {
  passwordLength = passwordLength();
  confirmSpecial = passwordSpecial();
  confirmCap = passwordCaseSensitive();
  confirmNum = passwordNumeric();

  password = passwordScrambler(passwordLength, confirmSpecial, confirmCap, confirmNum);
  console.log(password);
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
