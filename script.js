// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = [0,1,2,3,4,5,6,7,8,9];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "_", "=", "+", "-", "/", ".", "?", "<", ">"];


function generatePassword(){
  var pwLength = prompt( " Please select passwork length (between 8-128 characters) ")
  var pwChrctrs = [];
  var pwResult = [];

  if(pwLength > 8) {
    prompt = (" Password needs to be greater than 8 characters. ")
    return;
  } 
  else if(pwLength < 128) {
    prompt = (" Password needs to be lower than 128 characters. ")
  }
  var numPrompt = confirm(" Would you like to include numbers? ")
  var lwrPrompt = confirm(" would you like to include lowercase letters? ")
  var uprPrompt = confirm(" Would you like to inlude uppercase letters? ")
  var spclPrompt = confirm("would you like to include special characters? ")
}



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
