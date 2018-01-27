// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// function reverseInt(n) {
//   const num = n;
//   const str = num.toString();
//   const reversedStr =
//     str[0] != '-' ?
//       str.split('').reverse().join('')
//       : str[0] + str.slice(1).split('').reverse().join('');
//   return Number.parseInt(reversedStr);
// }

function reverseInt(n) {
  const num = n;
  const str = num.toString();
  const reversedStr =
    str[0] != '-' ?
      str.split('').reduce((prev, curr) => curr + prev, '') :
      str[0] + str.slice(1).split('').reduce((prev, curr) => curr + prev, '');
  return Number.parseInt(reversedStr);
}


// I need a function to convert int to string
// a function to make int to real int?
// handle 0. 90 -> '90' -> '09' -> 9
// handle negative. check the first string?

module.exports = reverseInt;
