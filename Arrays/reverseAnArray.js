// Given an array (or string), the task is to reverse the array/string.

// iteriative way to do this
const reverse = (arr) => {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
  return arr;
};

// using inbuilt function
const reverse = (arr) => arr.reverse();

console.log(reverse([1, 2, 3]));
