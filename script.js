// Assignment Code
var generateBtn = document.querySelector("#generate");

var select =document.getElementById('dropdownlength');
var charselect =document.getElementById('dropdownchars');
// var pwlength = select.options[select.selectedIndex].value;
var charchoice = charselect.options[charselect.selectedIndex].value;
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
  var password="";
  var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var select =document.getElementById('dropdownlength');
var pwlength = $('#charInput').val();
console.log(pwlength)
var charselect =document.getElementById('dropdownchars');
var charchoice = charselect.options[charselect.selectedIndex].value;
if(charchoice === "numbers")
  chars = "0123456789";
if(charchoice === "lowercase")
  chars = "abcdefghijklmnopqrstuvwxyz";
if(charchoice === "lowercase+numbers")
  chars ="0123456789abcdefghijklmnopqrstuvwxyz";
if(charchoice === "capital")
  chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
if(charchoice === "capital+numbers")
  chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
if(charchoice === "capital+lowercase+numbers")
  chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
if(charchoice === "special characters and lowercase")
  chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()";
if(charchoice === "special characters and lowercase and numbers")
  chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()";
 if(charchoice === "special characters")
   chars = "!@#$%^&*()";
if(charchoice === "special characters and numbers")
  chars = "0123456789!@#$%^&*()"
if(charchoice === "special characters and lowercase and numbers and capitals")
  chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()";
if(charchoice === "special characters and capitals and numbers")
  chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()"
  var passwordLength = pwlength;
  for (var i = 0; i <= passwordLength-1; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber +1);
   }
   return password;
}


