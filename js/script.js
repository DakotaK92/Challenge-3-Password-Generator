// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
 
  var button = document.querySelector('#btnGeneratePassword');
  var passwordTextEl = document.querySelector('#password');

  var lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  var lowerCaseArr = lowerCaseLetters.split('');
  var upperCaseArr = lowerCaseLetters.toUpperCase().split('');
  var numbersArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var specialChars = '!@#$%^&*{}[]';
  var specialArr = specialChars.split('');

  function generatePassword() {
      var finalCharsArr = [];
      var finalPasswordArr = [];

      var userChoicePasswordLength = prompt('How many characters?');
      var userPasswordLength = parseInt(userChoicePasswordLength);

      // VALIDATE PASSWORD LENGTH
      if (!userPasswordLength || userPasswordLength < 8 || userPasswordLength > 128) {
          alert("Please enter a number between 8 and 128!");
          return false;
      }

      var userChoiceLower = confirm('Use lower case?');
      var userChoiceUpper = confirm('Use upper case?');
      var userChoiceNumbers = confirm('Use numbers?');
      var userChoiceSpecial = confirm('Use special characters?');

      // VALIDATE CHARACTER CHOICES (user must select at least one)
      if (!userChoiceLower && !userChoiceUpper && !userChoiceNumbers && !userChoiceSpecial) {
          alert("Please choose at least one of the character types!");
          return false;
      }

      if (userChoiceLower) {
          finalCharsArr = finalCharsArr.concat(lowerCaseArr)
      }

      if (userChoiceUpper) {
          finalCharsArr = finalCharsArr.concat(upperCaseArr)
      }

      if (userChoiceNumbers) {
          finalCharsArr = finalCharsArr.concat(numbersArr)
      }

      if (userChoiceSpecial) {
          finalCharsArr = finalCharsArr.concat(specialArr)
      }

      for (var i = 0; i < userPasswordLength; i++) {
          var randomIndex = Math.floor(Math.random() * finalCharsArr.length);
          finalPasswordArr.push(finalCharsArr[randomIndex]);
      }

      return finalPasswordArr.join('');
  }

  generateBtn.addEventListener('click', function () {
      var password = generatePassword();
      if (password) {
          passwordTextEl.textContent = password;
      }
});
