// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  var arrayOptions = [] 
  
  var passwordL = passwordLength()
  arrayOptions.push(passwordL)
  
  while(arrayOptions.length < 5 || !arrayOptions.includes(true)){
  
    alert("Must contain at least 1 type of character")

    var alphaL = alphaLower()
    arrayOptions.push(alphaL)

    var alphaU = alphaUpper()
    arrayOptions.push(alphaU)

    var numericNum = numeric()
    arrayOptions.push(numericNum)

    var specialNum = special()
    arrayOptions.push(specialNum)
    
  }
  return arrayOptions
}

// Function to prompt for password length
function passwordLength(){
  var passwordL = prompt("Password must be at least 10 characters but no more than 64 characters long") 
  while(passwordL< 10 || passwordL > 64 || passwordL == undefined)
  {
    passwordL = prompt("Password must be at least 10 characters but no more than 64 characters long")
  } 
  return passwordL 
}

// Function to confirm lower case alphabets
function alphaLower() {
  alphaL =  confirm("Do you want to include lower case alphabets")
  if(alphaL){
    return true
  }
  else 
    return false
}

// function to confirm upper case alphabets
function alphaUpper() {
  alphaU =  confirm("Do you want to include higher case alphabets")
  if(alphaU){
    return true
  }
  else 
    return false
}

// Function to confirm numeric characters
function numeric() {
  numericNum =  confirm("Do you want to include numeric characters")
  if(numericNum){
    return true
  }
  else 
    return false
}

// Function to confirm special characters
function special() {
  specialNum =  confirm("Do you want to include special characters")
  if(specialNum){
    return true
  }
  else 
    return false
}


// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions()
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);