const substitutionModule = (function () {
  const standardAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  
  // helper function to check array for unique characters only
  function _checkForUniqueness(array) {
    return new Set(array).size === array.length;
  }

  function substitution(input, alphabet, encode = true) {
  
    // error handling
    if (!alphabet || alphabet.length !== 26 || _checkForUniqueness(alphabet) === false) return false;
    // declaring variables
    const inputLowerCase = input.toLowerCase();
    const inputArray = inputLowerCase.split("");
    const alphabetArray = alphabet.split("");
    const result = [];

    if (encode === true) {
      // matches input's values to standardAlphabet's values and creates an array of corresponding index #'s
      inputArray.forEach((inputChar) => {
        if (!standardAlphabet.includes(inputChar)) {
          result.push(inputChar);
        } else {
          standardAlphabet.forEach((standardAlphaLetter, index) => {
            if (inputChar === standardAlphaLetter) {
              result.push(alphabetArray[index]);
            } 
          });
        } 
      });
      return result.join("")
    } else {
      // decoding (similar to if block above but in "reverse")
      inputArray.forEach((inputChar) => {
        if (!alphabetArray.includes(inputChar)) {
          result.push(inputChar);
        } else {
          alphabetArray.forEach((alphabetArrayChar, index) => {
            if (inputChar === alphabetArrayChar) {
              result.push(standardAlphabet[index]);
              
            }
          })
        }
      });
      return result.join("")
    } 
  }
  return {substitution,};
})();

substitutionModule.substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", encode = false)

module.exports = { substitution: substitutionModule.substitution };

