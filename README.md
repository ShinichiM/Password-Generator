# Password Generator

The password generator will generate a randomized string of characters of length that is within the bounds {8, 128}!

The application creates a new randomized string of specified length using user defined characters such as the following character types:

- Uppercase
- Lowercase
- Special
- Numerical

It will take user input through the browser via expandable password criteria elements.

You can give it a test run here! https://shinichim.github.io/Password-Generator/

### Key Points

#### How it Works

- Once we obtain password criteria through user selection, we store these criteria to localstorage for future processing.
- The localstorage data goes through the `passwordScrambler()` that 'scrambles' or randomizes each character in the returned password.
- `passwordScrambler()` contains multiple dependent functions to scramble individual characters. It uses a pseudo ranking system that lowers the probability of a character type 'winning' a position in a string. This probability lowers dependending on the frequency of the character type used.

For example: We loop through each character or position in a string and pick the character type, or 'winner', and store a random character of that type into the current position in a string. Afterwards, we anihilate (in terms of probability) that character type as a choice for the next position.

We store the frequency of the character type used and send it to `randomizeArray(Arr)` which returns an array of randomized numbers that correspond to each character type.

```js
charTypeWeights = [
  Math.random() * (1 / numSpecial),
  Math.random() * (1 / numUpper),
  Math.random() * (1 / numLower),
  Math.random() * (1 / numNumeric),
];

return charTypeWeights;
```

We then choose the 'winner' or just select the index of the max number through `indexOfMax(array)` which just returns the index of the max number in an array.

After selecting the character type, its as easy as selecting a random index in an array or string of characters and adding weights to the character type. In this case, we increase the character type count += 2 (as shown below), and loop through until we get a solid password!

```
    if (index === 0) {
      if (passwordCriteria.special) {
        charTypeFreq.special+= 2;
        char = pickRandomChar(specialChar);
      }
```

This suprisingly generates a pretty strong password, man. Very cool
