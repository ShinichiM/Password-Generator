var criteria = function() {

  // prompt user for password length
  var passLength = parseInt(window.prompt("Please enter a password length between 8 and 128 characters"));

  // If password length is not within 8-128 bounds, continuously prompt for correct length.
  // If password is null or empty, they did not enter a number for length or they refused and cancelled, continously ask for password length.
  // If they input a valid number, proceed for criteria prompts.
  if (passLength < 8 || passLength > 128) {
    window.alert("Please input a valid value between 8 and 128 inclusive.");
    criteria();
  }
  if (!passLength){
    window.alert("Please input a value between 8 and 128 inclusive.");
    criteria();
  } 

  // prompt user if they would like to include special characters.
  var confirmSpecial = window.confirm("Would you like to include special characters in your password?");
  if (confirmSpecial){
    window.alert("You have chosen to secure your password using special characters");
  }else{
    window.alert("We understand you would not like to include special characters");
  }


  // prompt user if they would like to include uppercase characters.
  var confirmUpper = window.confirm("Would you like your password to include uppercase characters?");
  if (confirmUpper){
    window.alert("You have chosen to secure your password using uppercase characters");
  }else{
    window.alert("We understand you would not like to include uppercase characters");
  }

  // prompt user if they would like to include lowercase characters.
  var confirmLower = window.confirm("Would you like your password to include lowercase characters?");
  if (confirmLower){
    window.alert("You have chosen to secure your password using lower characters");
  }else{
    window.alert("We understand you would not like to include lowercase characters");
  }

  // prompt user if they would like to include numeric values.
  var confirmNumber = window.confirm("Would you like to include numeric values for your password?");
  if (confirmNumber){
    window.alert("You have chosen to secure your password using numeric characters");
  }else{
    window.alert("We understand you would not like to include numeric characters");
  }

  // Error handling, if user refused all criteria.
  if (!confirmSpecial && !confirmUpper && !confirmLower && !confirmNumber) {
    window.alert("You did not choose a criteria. Please confirm at least one criteria.");
    criteria();
  }

  // object to hold password criteria values.
  var passwordCriteria = {
    len: passLength,
    special: confirmSpecial,
    upper: confirmUpper,
    lower: confirmLower,
    numeric: confirmNumber
  };
  
  return(passwordCriteria);
}

// Function that returns the index of the maximum number in an array
var indexOfMax = function(arr) {
  // check if array is empty.
  if (arr.length === 0) {
      return false;
  }
  // set the max value to 1st index and max index to 1st index
  var max = arr[0];
  var maxIndex = 0;

  // Loop through array until a larger number appears, if so set it as new max value and new max index.
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
  // create a random number between 0 and 1, multiply that number by the length of the array - 1 (for 0 indexing array), then round to nearest integer (low bound).
  var randomIndex = Math.floor(Math.random()*(arr.length - 1));

  // retrieve the value of array at index used from above.
  var randomChar = arr[randomIndex];

  return (randomChar);
}

// function that returns an array of randomized numbers
var randomizeArray = function(charTypeFreq) {
  // Obtain attributes that hold frequency of character usage in password
  numSpecial = charTypeFreq.special;
  numUpper = charTypeFreq.upper;
  numLower = charTypeFreq.lower;
  numNumeric = charTypeFreq.numeric;

  // array that holds randomized numbers times the character weight
  // character weight = (1/frequency)
  charTypeWeights = [
    Math.random()*(1/numSpecial), 
    Math.random()*(1/numUpper),
    Math.random()*(1/numLower),
    Math.random()*(1/numNumeric),
  ];  

  return(charTypeWeights);
}

// Password scrambler. Taking inputs of all prompts, and return a randomized string of associated characters
var passwordScrambler = function(passwordCriteria) {

  // List of Special characters
  var specialChar = ["`", "~", "!","@","#","$", "%", "^", "&", "*", "(", ")","-","_","+","=",",","<",".",">","/","?",";",":","'","{","[","]","}", "\\","|"];
  
  // List of lowercase characters
  var lowercaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r","s","t","u","v","w","x","y","z"];

  // List of uppercase characters
  var uppercaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R","S","T","U","V","W","X","Y","Z"];

  // Object with counters for frequency of character type usage
  var charTypeFreq = {
    special: 1,
    upper: 1,
    lower: 1,
    numeric: 1
  };

  // Initialize empty password for usage
  var password = "";
  // placeholder for character
  var char = "";

  // Loop while the password is less than the minimum length user is prompted for
  while (password.length < passwordCriteria.len) {
    // weighted array for character types
    charTypeWeights = randomizeArray(charTypeFreq); 

    // obtain index of max weight (winner)
    var index = indexOfMax(charTypeWeights);
    
    // Check if 'winning' index is 0
    if (index === 0) {
      // check if user wants special characters, if so increment frequency by 2 and select a random character from list of special characters
      if (passwordCriteria.special) {
        charTypeFreq.special+= 2;
        char = pickRandomChar(specialChar);
      } else {
        continue;
      }
    } 
    // Check if 'winning' index is 1
    if (index === 1) {
      // check if user wants uppercase characters, if so increment frequency by 2 and select a random character from list of uppercase characters
      if (passwordCriteria.upper) {
        charTypeFreq.upper+= 2;
        char = pickRandomChar(uppercaseChar);
      } else {
        continue;
      } 
    }
    // Check if 'winning' index is 2
    if (index === 2) {
      // check if user wants lowercase characters, if so increment frequency by 2 and select a random character from list of lowercase characters
      if (passwordCriteria.lower) {
        charTypeFreq.lower+= 2;
        char = pickRandomChar(lowercaseChar);
      } else {
        continue;
      }
    }
    // check if 'winning' index is 3
    if (index === 3) {
      // check if user wants numeric characters, if so increment frequency by 2 and select a random number from 0 to 9.
      if (passwordCriteria.numeric) {
        charTypeFreq.numeric+= 2;
        char = Math.floor(Math.random()*9);
      } else {
        continue;
      }
    } 
    
    password = password.concat(char);
  }
    return (password);
}

var generatePassword = function() {
  // Get password criteria from user prompts.
  var passwordCriteria = criteria();

  // 'Scramble' a password, returns randomized set of characters
  password = passwordScrambler(passwordCriteria);

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
