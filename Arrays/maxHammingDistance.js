//TODO:Given an array of n elements, create a new array which is a rotation of given array and hamming distance between both the arrays is maximum.
// Hamming distance between two arrays or strings of equal length is the number of positions at which the corresponding character(elements) are different.

//TODO: first we have to rotate the given array:)

const rotate = (arr, n) => {
  let end = arr[n - 1];
  for (let i = n - 1; i > 0; --i) {
    arr[i] = arr[i - 1];
  }
  arr[0] = end;
  return arr;
};

const distance = (arr, n) => {
  let rotatedArray = rotate(arr, n);

  // now just we have to find the index element in normal array that is diffrent in rotated array:)
  //TODO NOT DONE!!
};

console.log(distance([1, 2, 3, 4], 4));
