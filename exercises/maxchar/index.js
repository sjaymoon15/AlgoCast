// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let frequency = {};
  for (let char of str) {
    if (frequency[char]) {
      frequency[char]++;
    } else {
      frequency[char] = 1;
    }
  }
  let maxValue = 0
  let maxCharacter = str[0];

  for (let key in frequency) {
    if (frequency[key] > maxValue) {
      maxValue = frequency[key];
      maxCharacter = key;
    }
  }
  return maxCharacter;
}

module.exports = maxChar;
