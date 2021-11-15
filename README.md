# Password Generator Starter Code
An employee would like to create a secure password but does not want to think of their own. That's where we come in. This is the password generator.

The password generator will generate a randomized string of characters to set as your new password!

The user can specify their own password constraints: password length, use of special characters, use of uppercase characters, user of lowercase characters, and numerical values.

You can give it a test run here! https://shinichim.github.io/Password-Generator/

Somethings that were refactored and key points of the password generator.
- Refactored code now supports object key/value pair manipulation whose source is derived from user input at prompt. This can be seen in the criteria() function.

The following image is the main intiator of the password generator.
![image](https://user-images.githubusercontent.com/62361626/141857590-c270bf52-6bd9-448c-a0fe-b6676dfab820.png)
- The criteria() function will prompt the user for all acceptable criteria and return an object with key/value pairs corresponding to each criteria. Error handling is also conducted here.
- The passwordScrambler() uses the user responses from the criteria prompts and returns a randomized string of characters (taking into consideration the values the user enters). 
- The final created password is displayed to the user via a window alert.



