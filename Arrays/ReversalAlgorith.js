//Write a function rotate(arr[], d, n) that rotates arr[] of size n by d elements.

const reverse = (arr, a, b) => {
  while (a < b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;

    a++;
    b--;
  }
};

const reverseAlgorithm = (arr, d, n) => {
  if (d < 0) {
    return arr;
  }
  d = d % n; //Eliminating Extra Loops
  if (d === 0) {
    return arr; //if d is 0 or in multiples of n no need of swaps
  }

  reverse(arr, 0, d - 1);
  reverse(arr, d, n - 1);
  reverse(arr, 0, n - 1);

  return arr;
};

console.log(reverseAlgorithm([1, 2, 3, 4, 5], 4, 5));
