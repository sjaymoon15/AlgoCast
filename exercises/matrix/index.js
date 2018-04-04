// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//  col  0    1   2  3
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  //error if !n
  if (!n || n < 2) { return; }
  //make the structure first
  let matrix = [];
  for (let row = 0; row < n; row++) {
    let row = [];
    for (let col = 0; col < n; col++ ) {
      row.push(0);
    }
    matrix.push(row);
  }

  let num = 1;
  let curCol = 0;
  let curRow = 0;
  
}

module.exports = matrix;
