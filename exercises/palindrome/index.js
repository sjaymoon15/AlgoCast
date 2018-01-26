// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  const reversedStr = str.split('').reduce((prev, curr) => curr + prev, '');
  return str === reversedStr;
}

// this one does unnecessary checks below
// function palindrome(str) {
//   const arr = str.split('');
//   return arr.every((element, index) => {
//     return arr[index] === arr[arr.length - index - 1];
//   })
// }

module.exports = palindrome;
