const caesarModule = (function () {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  function caesar(input, shift, encode = true) {
    // error handling
    if (!shift || shift === 0 || shift < -25 || shift > 25) return false;
    if (!encode) shift *= -1
    // create variables
    let shiftedIndexArr = [];
    const letterAsIndexNumArr = [];
    const correctIndexNumArr = [];
    const lowerCaseInput = input.toLowerCase().split("");
    // pushes non-alphabet characters into array (e.g. spaces)
    lowerCaseInput.forEach((inputLetter) => {
      if (!alphabet.includes(inputLetter)) {
        letterAsIndexNumArr.push(inputLetter);
      } else {
    // converts input characters to index numbers according to alphabet array
        alphabet.forEach((alphabetLetter, index) => {
          if (inputLetter === alphabetLetter) {
            letterAsIndexNumArr.push(index);
          }
        });
      }
    });
    // checks for non-number characters and pushes into array as-is
    letterAsIndexNumArr.forEach((letterIndex) => {
      if (typeof letterIndex === "number") {
        shiftedIndexArr.push(letterIndex + shift);
      } else {
    // adds shift amount to each value
        shiftedIndexArr.push(letterIndex);
      }
      return shiftedIndexArr;
    });
    // enables "wrapping" around beginning and end of alphabet
    shiftedIndexArr.forEach((shiftedIndex) => {
      if (typeof shiftedIndex != "number") {
        correctIndexNumArr.push(shiftedIndex);
      } else if (shiftedIndex > 25) {
        correctIndexNumArr.push(shiftedIndex - 26);
      } else if (shiftedIndex < 0) {
        correctIndexNumArr.push(shiftedIndex + 26);
      } else if (shiftedIndex >= 0 && shiftedIndex <= 25) {
        correctIndexNumArr.push(shiftedIndex);
      }
    });
    // map shifted values to alphabet and return encoding/decoding
    return correctIndexNumArr.map((indexToLetter) => {
        return typeof indexToLetter != "number" ? indexToLetter : alphabet[indexToLetter];
      }).join("");
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
