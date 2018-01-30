// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const alphabetLetters = 'abcdefghijklmnopqrstuvwxyz';
  let letterCount = {};
  for (let elem of stringA) {
    const elemLowered = elem.toLowerCase();
    if (alphabetLetters.includes(elemLowered)) {
      if (letterCount[elemLowered]) {
        letterCount[elemLowered]++;
      } else {
        letterCount[elemLowered] = 1;
      }
    }
  }

  for (let elem of stringB) {
    const elemLowered = elem.toLowerCase();
    if (alphabetLetters.includes(elemLowered)) {
      if (!letterCount[elemLowered]) {
        return false;
      } else {
        letterCount[elemLowered]--;
      }
    }
  }

  for (let letter in letterCount) {
    if (letterCount[letter] !== 0) {
      return false;
    }
  }
  return true;
}

module.exports = anagrams;
