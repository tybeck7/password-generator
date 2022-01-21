// Assignment Code
var generateBtn = document.querySelector("#generate");
generatePassword=()=>{
  var lower="qwertyuiopasdfghjklzxcvbnm"
  var upper= lower.toUpperCase()
  var num="1234567890"
  var spec="!@#$%^&*()_+"
  var charBase=""
  var generatedPassword=""

  var passwordLength=prompt("enter a password length of 8-128 characters")
  if (passwordLength >128 || passwordLength < 8){
    alert("Read the instructions...")
    return generatedPassword()
  }
  var lowerConfirm= confirm("would you like lowercase characters?")
  if (lowerConfirm){
    charBase+=lower
    charBase = charBase + lower
  }
  var upperConfirm= confirm("would you like UPPERCASE characters?")
  if (upperConfirm){
    charBase+=upper
  }
  var numConfirm= confirm("would you like numbers?")
 if (numConfirm){
    charBase+=num
  }
  var specConfirm= confirm("would you like special characters?")
  if (specConfirm){
    charBase+=spec
  }
  if (!lowerConfirm && !upperConfirm && !numConfirm && !specConfirm) {
    alert ("you have to pick a criteria")
    return generatedPassword()
  }
  
  
  for (let i = 0; i < 128; i++) {
    generatedPassword+=charBase.charAt(Math.floor(Math.random()*charBase.length))
  }
  return generatedPassword


}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
