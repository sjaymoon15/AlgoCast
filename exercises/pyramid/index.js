// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  const colLength = (n * 2) - 1;
  const midPoint = Math.floor(colLength / 2);

  for (let row = 0; row < n; row++) {
    let newRow = '';
    for (let col = 0; col < colLength; col++) {
      if (col >= midPoint - row && col <= midPoint + row) {
        newRow += '#';
      } else {
        newRow += ' ';
      }
    }
    console.log(newRow);
  }
}

module.exports = pyramid;
