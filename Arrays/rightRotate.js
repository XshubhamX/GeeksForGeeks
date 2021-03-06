//TODO Reversal algorithm for right rotation of an array

const reverse = (arr, start, end) => {
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  return arr;
};

const rotate = (arr, times, n) => {
  if (times === 0) return arr;
  times = times % n;
  reverse(arr, 0, n - 1);
  reverse(arr, 0, times - 1);
  reverse(arr, times, n - 1);
  return arr;
};

console.log(rotate([1, 2, 3, 4, 5], 3, 5));
