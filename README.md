# Password Generator
The password generator will generate a randomized string of characters of length that is within the bounds {8, 128}!

The application creates a new randomized string of specified length using user defined characters such as the following character types:
- Uppercase
- Lowercase
- Special
- Numerical

It will take user input through the browser via the ``` window.alert() ``` method. 

You can give it a test run here! https://shinichim.github.io/Password-Generator/

### Key Points
#### Issues
Anything with user input needs to be handled with caution as we never know what type of data or information will be entered. More importantly, how we handle user input for numerical values and how we can control criteria selection is a key component for the password generation.
- First things first, password length. We only want to accept numerical values and values within the bounds {8 , 128}. Any values that are alphabetical or outside the given bounds should result in an error. We handled these cases as shown below

  ```js
    var passLength = parseInt(window.prompt("Please enter a password length between 8 and 128 characters"));

    while (passLength < 8 || passLength > 128 || !passLength) {
    passLength = window.alert("Please input a valid value between 8 and 128 inclusive.");
    passLength = parseInt(window.prompt("Please enter a password length between 8 and 128 characters"));
  }
  ```
  - The user is then prompted with confirmations (yes/no) for the rest of the criteria using  ```window.confirm() ```. This allowed for an easier control flow for user inputs.
  - Towards the end of ``` criteria() ``` we check if any criteria are chosen, if not we exit cause' If they don't want what we're cookin' what the hell are they buying?
  
  ```js
    if (!confirmSpecial && !confirmUpper && !confirmLower && !confirmNumber) {
    window.alert("You did not choose a criteria. Please Try again later.");
    return false;
  }
  ```
 
#### How it Works
- Once we obtain user input through ``` window.prompts() or window.confirms() ``` and store these inputs into a 'criteria' object for further processing.
- The object then goes through the  ```passwordScrambler()``` that 'scrambles' or randomizes each character in the returned password.
- ```passwordScrambler()``` contains multiple helper functions to scramble individual characters. It uses a pseudo ranking system that lowers the probability of a character type 'winning' a position in a string. This probability lowers dependending on the frequency of the character type used. 

For example: We loop through each character or position in a string and pick the character type, or 'winner', and store a random character of that type into the current position in a string. Afterwards, we anihilate (in terms of probability) that character type as a choice for the next position. 

We store the frequency of the character type used and send it to ``` randomizeArray(Arr) ``` which returns an array of randomized numbers that correspond to each character type. (could also have used an object here for better readability).
```js
  charTypeWeights = [
    Math.random()*(1/numSpecial), 
    Math.random()*(1/numUpper),
    Math.random()*(1/numLower),
    Math.random()*(1/numNumeric),
  ];  

  return(charTypeWeights);
```
We then choose the 'winner' or just select the index of the max number through ```indexOfMax(array)``` which just returns the index of the max number in an array.

After selecting the character type, its as easy as selecting a random index in an array or string of characters and adding weights to the character type. In this case, we increase the character type count += 2 (as shown below), and loop through until we get a solid password!

```
    if (index === 0) {
      if (passwordCriteria.special) {
        charTypeFreq.special+= 2;
        char = pickRandomChar(specialChar);
      }
```
This suprisingly generates a pretty strong password, man. Very cool

