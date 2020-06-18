// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;



}

function generatePassword() {
  alert("Please select your password criteria from the following. Press OK to use the criteria, or Cancel to exclude it.");
  const lowL=confirm("Lowercase Letters?");
  const uppL=confirm("Uppercase Letters?");
  const num=confirm("Numbers?");
  const spec=confirm("Special Characters?");
  const pwLength=parseInt(prompt("Please select your password length: must be a minimum of 8 and a maximum of 128 characters."));
  
  //could use an array of strings, each of the strings consisting of a complete list of characters of a type
  //would be using a for loop to generate a random character of a random index of the master array
  const characters = ["abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "0123456789", "!@#$%^&*()-="]
  let masterStr = "";
  if(lowL) {
    masterStr += characters[0];
  }
  if(uppL) {
    masterStr += characters[1];
  }
  if(num) {
    masterStr += characters[2];
  }
  if(spec) {
    masterStr += characters[3];
  }

  console.log(masterStr)
  
  //would be using a for loop to generate a random index of a random index of the master array
  //an array called characters, where the items are arrays consisting of characters of that type
  //how to reference the specific arrays based on the confirm choices?
  //could use if statement. if these confirms return true, use these sub-arrays
  let finalPW =""
  for (let i = 0; i < pwLength; i++) {
    // random number
    finalPW += masterStr.charAt(Math.floor(Math.random() * masterStr.length));
    // choose a random character from master string using random number (charAt)

    // concat that character to finalPW
    
  }
  return finalPW
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);