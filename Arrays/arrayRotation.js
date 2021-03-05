// Write a function rotate(ar[], d, n) that rotates arr[] of size n by d elements.

const rotate = (arr, last, aux) => {
  //this function will swap the element on last index with i
  let temp = arr[last];
  arr[last] = arr[aux];
  arr[aux] = temp;
};

const arrayRotation = (arr, d, n) => {
  if (d < 0) {
    return arr;
  }
  d = d % n; //Eliminating Extra Loops
  if (d === 0) {
    return arr; //if d is 0 or in multiples of n no need of swaps
  }
  for (let j = 0; j < d; j++) {
    for (let i = n - 2; i >= 0; i--) {
      rotate(arr, n - 1, i);
    }
  }
  return arr;
};

console.log(arrayRotation([1, 2, 3, 4, 5], 1, 5));
