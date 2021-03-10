// Given an array of integers, task is to print the array in the order – smallest number, Largest number, 2nd smallest number, 2nd largest number, 3rd smallest number, 3rd largest number and so on….

const solver = (arr) => {
  let result = [];
  arr = arr.sort();

  let l = 0;
  let r = arr.length - 1;
  while (l <= r) {
    if (l === r) {
      result.push(arr[l]);
      l++;
    } else {
      result.push(arr[l]);
      result.push(arr[r]);
      l++;
      r--;
    }
  }
  return result;
};

console.log(solver([1, 2, 1]));
