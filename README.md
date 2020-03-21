# Homework-3

For this homework assignment, it was necessary to code JavaScript to produce a password generator.  I was able to accomplish some functionality of the application, but some aspects of the acceptance criteria does not work.

First, when the website is launched, a series of prompts and confirms are presented to the user and recorded to a variable.

I then created arrays for each of the four character types.  I also set up an if/else statement that will produce the array depending on if the user wants that particular character type in their password.  For example, if the user confirms they want to use lowercase letters, the lowercase array includes all 26 letters.  If they do not want to use lowercase letters, the lowercase array is empty.

Next, the resulting four arrays are combined into one array using the concat function.  If the user chooses to include lowercase, uppercase, symbols, but not numbers, the new array excludes numbers.

Next, a function is created to return a random character from the new array.

A for loop is then used to repeat that random function for the length the user inputs at the beginning of the application.

When the user clicks the button to generate the password, the password is displayed in the text area.



I realized after the fact that the prompts and confirm should occur after clicking the generate password button.  However, mine occur first.

I did not include restrictions on the password length prompt, so the user can input strings, decimals etc. or a number outside the 8-128 range.

It is possible for the user to not choose any character type, in which case the application returns undefined.

Also, with the way my code is written, it is possible that the user could choose to include a certain character type, but the randomizer does not choose one of those character types.

Overall, I had a lot of trouble with this homework assignement, but I am proud to at least produce this.
