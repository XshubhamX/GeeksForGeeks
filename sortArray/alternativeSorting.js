// Given an array of integers, print the array in such a way that the first element is first maximum and second element is first minimum and so on.

// using pointers

const solver = (arr) => {
  let result = [];
  arr = arr.sort(function (a, b) {
    return a - b;
  });
  let l = 0;
  let r = arr.length - 1;
  while (l <= r) {
    if (l === r) {
      result.push(arr[l]);
      l++;
    } else {
      result.push(arr[r]);

      result.push(arr[l]);
      l++;
      r--;
    }
  }
  return result;
};

console.log(solver([1, 6, 9, 4, 3, 7, 8, 2]));
