// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   return str.split('').reverse().join('');
// }

// function reverse(str) {
//   return str.split('').reduce((prev, curr) => curr + prev);
// }

function reverse(str) {
  let reversedStr = '';
  for (let character of str) {
    reversedStr = character + reversedStr;
  }
  return reversedStr;
}

module.exports = reverse;
