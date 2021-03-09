// Given two integer arrays of same size, “arr[]” and “index[]”, reorder elements in “arr[]” according to given index array. It is not allowed to given array arr’s length.

const reOrder = (arr, idx) => {
  //swapping and mapping in index array
  // do swap idx array if arr is swapping its element so that we can traverse the arr and map into second array:idx
  let i = 0;
  let j = 0;
  while (i < arr.length) {
    if (i !== idx[i]) {
      j = idx[i];
      [arr[i], arr[idx[i]]] = [arr[idx[i]], arr[i]];

      [idx[i], idx[j]] = [idx[j], idx[i]];
    } else {
      i++;
    }
  }
  return arr;
};

console.log(reOrder([10, 11, 12], [1, 0, 2]));
