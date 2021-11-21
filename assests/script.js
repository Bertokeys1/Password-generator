// Assignment Code
var generateBtn = document.querySelector("#generate");

// arrays with numbers, lower/uppercase letters, and special characters.
var numeric = [0,1,2,3,4,5,6,7,8,9];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "_", "=", "+", "-", "/", ".", "?", "<", ">"];

// statement to generate password.
function generatePassword(){
  // variables for password length and password characters to then come together to create a password.
  var pwLength = prompt( " Please select password length between 8-128 characters. ")
  var pwChrctrs = []
  var password = []

  // these are if statements for if the password legth is greater or lower than the required length.
  if(pwLength < 8 ) {
    prompt (" Password needs to be greater than 8 characters. ");
    return "";
  } 
  else if(pwLength > 128 ) {
    prompt (" Password needs to be lower than 128 characters. ");
    return "";
  } else {
    // variables to reference the prompts for the password requirements.
    var numPrompt = confirm(" Would you like to include numbers? ")
    var lwrPrompt = confirm(" would you like to include lowercase letters? ")
    var uprPrompt = confirm(" Would you like to inlude uppercase letters? ")
    var spclPrompt = confirm("would you like to include special characters? ")

    // if statment to make sure each prompt is true in order to generate a password that meets requirements.
    if (!numPrompt && !lwrPrompt && !uprPrompt && !spclPrompt) {
      prompt("Please choose an option.");
      return "";
    }
      // if statement to start adding array values using math.floor/random to create password from confirmation of prompts using 5-8 variable arrays.
      if (numPrompt) {
        var geNum = Math.floor(Math.random() * numeric.length)
        password.push(numeric[geNum]);
        // for loop to add arrays from array with characters.
        for (var i=0; i<numeric.length; i++)  {
          pwChrctrs.push(numeric[i])
        }
      }
      if (lwrPrompt) {
        var gelow = Math.floor(Math.random() * lowercase.length)
        password.push(lowercase[gelow]);
        
        for (var i=0; i<lowercase.length; i++)  {
          pwChrctrs.push(lowercase[i])
        }
      }
      if (uprPrompt) {
        var geUpper = Math.floor(Math.random() * uppercase.length)
        password.push(uppercase[geUpper]);
        
        for (var i=0; i<uppercase.length; i++)  {
          pwChrctrs.push(uppercase[i])
        }
      }
      if (spclPrompt) {
        var geSpcl = Math.floor(Math.random() * special.length)
        password.push(special[geSpcl]); 
        for (var i=0; i<special.length; i++)  {
          pwChrctrs.push(special[i])
        }
      } 
      // for loop adds all charactors that were added on prompts above to the genereat the password.
      for (var i=0; i< pwLength; i++) {
        var random = Math.floor(Math.random() * pwChrctrs.length)
        password.push(pwChrctrs[random]);
    }
    // this is the code to reference what was genereated on function statement into join together into a sting text. 
    return password.join("");

    }
}
 



// this is to add value to html html. the value is the password generated from function above.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
