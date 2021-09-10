// Assignment code here
// User input variables
var enter;
var confirmNumber;
var confimCharacter;
var confirmUppercase;
var confirmLowercase;

//Special Characters
characters =
    "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "~"
];

//Number Characters:
number=[,1,2,3,4,5,6,7,8,9];

//Letters
alpha=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Uppercase conversion
space=[];

//converts letters to uppercase
var toUpper = function(x){
    return x.toUpperCase();
};

//create a variable for uppercase conversion

alpha2= alpha.map(toUpper);

var get= document.querySelector("#generate");    

get.addEventListener("click", function () {
    ps= generatePassword();
    document.getElementById("password").placeholder = ps;

});






// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    enter=parseInt (
        prompt(
            "How many characters would you like in your password? Choose between 8 and 128 characters")
            ));
//validate user input
            if (!enter) {
                alert("This needs a value!");
            } else if (enter < || enter >128){
                enter=parseInt(prompt("You must choose between 8 and 128 character!"));
            } else {
                //continues once user input is validated:
                confirmNumber = confirm ("Would you like this to contain number?");
                confimCharacter = confirm("Would you like to use special characters?");
                confirmUppercase = confirm ("Would you like to include uppercase letters?");
                confirmLowercase =  confirm ("Would you like to include lowercase letters?");
            }
//Else if for negative options:
if(
    !confimCharacter &&
    !confirmNumber &&
    !confirmUppercase &&
    !confirmLowercase
) {
    choices = alert("You must choose your options!");
}

// else if for positive options
else if (
    confimCharacter &&
    confirmNumber &&
    confirmUppercase &&
    confirmLowercase

){
    choices=characters.
}
//First if statement that uses user inputs and prompts to modify choices.
          };


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);