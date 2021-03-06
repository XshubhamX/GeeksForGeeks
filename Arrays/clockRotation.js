//TODO: Given an array, cyclically rotate the array clockwise by one.

// Input:  arr[] = {1, 2, 3, 4, 5}
// Output: arr[] = {5, 1, 2, 3, 4}

const rotate = (arr, n) => {
  let end = arr[n - 1];

  for (var i = n - 1; i > 0; --i) {
    arr[i] = arr[i - 1];
  }
  arr[0] = end;

  return arr;
};
console.log(rotate([1, 2, 3, 4], 4));
