// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  let arrChunk = [];
  let output = [];
  let sizeIndex = 1;
  for(let i = 0; i < array.length; i++) {
    if (sizeIndex <= size) {
      arrChunk.push(array[i]);
      sizeIndex++;
    } else {
      output.push(arrChunk);
      arrChunk = [];
      arrChunk.push(array[i]);
      sizeIndex = 2;
    }
  }
  if (arrChunk.length != 0) {
    output.push(arrChunk);
  }
  return output;
}

module.exports = chunk;
