// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  //brute force. nested loops
  //first loop row
  //second loop column
  // for (let r = 0; r <= n; r++)
  // for (let c = 0; c <= n; c++)
  // for each row we create a new string to log
  for (let r = 0; r < n; r++) {
    let rowStr = '';
    for (let c = 0; c < n; c++) {
      if (c <= r) {
        rowStr += '#';
      } else {
        rowStr += ' ';
      }
    }
    //log after looping each row
    console.log(rowStr);
  }
}

module.exports = steps;
