const rotate = (arr, aux) => {
  //this function will swap the element on last index with i
  let temp = arr[0];
  arr[0] = arr[aux];
  arr[aux] = temp;
};

const arrayRotation = (arr, n) => {
  for (let i = 1; i <= n - 1; i++) {
    rotate(arr, i);
  }
  return arr;
};

console.log(arrayRotation([1, 2, 3, 4, 5], 5));
