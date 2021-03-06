//TODO:Write a function rotate(ar[], d, n) that rotates arr[] of size n by d elements.

const reverseArray = (arr, start, end) => {
  while (end > start) {
    // swapping logic
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  return arr;
};
const rotateArray = (arr, times, n) => {
  if (times === 0) {
    // no need of rotation /
    return arr;
  }
  // to avoid extra loop
  times = times % n;

  reverseArray(arr, 0, times - 1); // reverse from starting index 0 -> 1
  reverseArray(arr, times, n - 1); // reverse other half of arr
  reverseArray(arr, 0, n - 1); // reverse both the half
  return arr;
};

console.log(rotateArray([1, 2, 3, 4], 2, 4));
