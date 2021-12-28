# Password Generator
The password generator will generate a randomized string of characters to set as your new password!

The application creates a new randomized string of specified length using user defined characters such as the following character types:
- Uppercase
- Lowercase
- Special
- Numerical

The application takes user input through the browser via alerts. 

You can give it a test run here! https://shinichim.github.io/Password-Generator/

Somethings that were refactored and key points of the password generator.
- Refactored code now supports object key/value pair manipulation whose source is derived from user input at prompt. This can be seen in the criteria() function.

The following image is the main intiator of the password generator.
![image](https://user-images.githubusercontent.com/62361626/141857590-c270bf52-6bd9-448c-a0fe-b6676dfab820.png)
- The criteria() function will prompt the user for all acceptable criteria and return an object with key/value pairs corresponding to each criteria. Error handling is also conducted here.
- The passwordScrambler() uses the user responses from the criteria prompts and returns a randomized string of characters (taking into consideration the values the user enters). 
- The final created password is displayed to the user via a window alert.



