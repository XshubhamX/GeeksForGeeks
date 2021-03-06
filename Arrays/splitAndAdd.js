// Split the array and add the first part to the end

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

const splitAdd = (arr, k, n) => {
  reverseArray(arr, 0, n - 1);
  reverseArray(arr, 0, n - k - 1);
  reverseArray(arr, n - k, n - 1);
  return arr;
};

console.log(splitAdd([12, 10, 5, 6, 52, 36], 2, 6));
