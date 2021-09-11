// User input variables
var enter;
var confirmNumber;
var confimCharacter;
var confirmUppercase;
var confirmLowercase;

//Special Characters
characters =
   [ "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "~"
];

//Number Characters:
number=[0,1,2,3,4,5,6,7,8,9];

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


// Add event listener to generate button

var get= document.querySelector("#generate");   

get.addEventListener("click", function () {
    ps= writePassword();
    document.getElementById("password").placeholder = ps;

});

// Write password to the #password input
function writePassword() {
  //ask for user input
    enter = parseInt (
        prompt(
            "How many characters would you like in your password? Choose between 8 and 128 characters")
            );

//validate user input
            if (!enter) {
                alert("This needs a value!");
            } else if (enter < 8|| enter > 128){
                enter = parseInt(prompt("You must choose between 8 and 128 character!"));
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

) {
    choices=characters.concat(number,alpha,alpha2);
  }

//First if statement that uses user inputs and prompts to make choices.
  // Else if for 3 positive options
  else if (confirmCharacter && confirmNumber && confirmUppercase) {
    choices = character.concat(number, alpha2);
  } else if (confirmCharacter && confirmNumber && confirmLowercase) {
    choices = character.concat(number, alpha);
  } else if (confirmCharacter && confirmLowercase && confirmUppercase) {
    choices = character.concat(alpha, alpha2);
  } else if (confirmNumber && confirmLowercase && confirmUppercase) {
    choices = number.concat(alpha, alpha2);
  }
  // Else if for 2 positive options
  else if (confirmNumber && confirmCharacter) {
    choices = character.concat(number);
  } else if (confirmLowercase && confirmCharacter) {
    choices = character.concat(alpha);
  } else if (confirmUppercase && confirmCharacter) {
    choices = character.concat(alpha2);
  } else if (confirmLowercase && confirmNumber) {
    choices = alpha.concat(number);
  } else if (confirmUppercase && confirmLowercase) {
    choices = alpha.concat(alpha2);
  } else if (confirmUppercase && confirmNumber) {
    choices = number.concat(alpha2);
  }
  //Else if for 1 positive input.
  else if (confirmLowercase) {
    choices = alpha;
  } else if (confirmCharacter) {
    choices = character;
  } else if (confirmNumber) {
    choices = number;
  }
  //Uppercase conversion variable to fill uppercase:
  else if (confirmUppercase) {
    choices = space.concat(alpha2);
  }


//password variable is an array placeholder for user generated amount of length
var password = [];

//start random selection of variables

for (var i = 0; i< enter; i++) {
    var pickChoices = choices[Math.floor(Math.random() * choices.length)];
    password.push(pickChoices);
}
// this joins password array and converts it to string
var ps =password.join("");
UserInput(ps);
return ps;
}

//this places the password into the HTML text area
function UserInput(ps) {
    document.getElementById("password").textContent=ps;
}


