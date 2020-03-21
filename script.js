var passwordLength = parseInt(prompt("How many characters would you like your password to be?"));
var lowerCaseConfirm = confirm("Would you like to include lowercase letters?");
var upperCaseConfirm = confirm("Would you like to include uppercase letters?");
var numbersConfirm = confirm("Would you like to include numbers?");
var symbolsConfirm = confirm("Would you like to include symbols?");

if (lowerCaseConfirm == true) {
  var lowerArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
}else{
  lowerArr = []
}

if (upperCaseConfirm == true) {
  var upperArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
}else{
  upperArr = []
}

if (numbersConfirm == true) {
  var numbersArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
}else{
  numbersArr = []
}

if (symbolsConfirm == true) {
  var symbolsArr = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', '{', ']', '}', ';', ':', ',', '<', '.', '>', '/', '?']
}else{
  symbolsArr = []
}

var finalArr = lowerArr.concat(upperArr).concat(numbersArr).concat(symbolsArr);

var generatedPassword = ''; 
function randomChar() {
  return (finalArr[Math.floor(Math.random() * finalArr.length)]);
}

for (var i = 0; i < passwordLength; i++) {
  generatedPassword += randomChar()
}

var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  return generatedPassword
}



