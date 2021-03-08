// Queries on Left and Right Circular shift on array

//TODO: imp question

//** this is sumFinder function **//

const Sum = (arr, start, end) => {
  let sum = 0;

  while (start < end) {
    sum = sum + arr[start];
    start++;
  }
  return sum;
};

//reverser
const reverser = (arr, l, r) => {
  let temp;
  while (l < r) {
    temp = arr[l];
    arr[l] = arr[r];
    arr[r] = temp;
    l++;
    r--;
  }
  return arr;
};
const rightShift = (arr, times, n) => {
  if (times === 0) {
    return arr;
  }
  times = times % n;
  reverser(arr, 0, n - times - 1);
  reverser(arr, n - times, n - 1);
  reverser(arr, 0, n - 1);

  return arr;
};

const leftShift = (arr, times, n) => {
  reverser(arr, 0, times - 1);
  reverser(arr, times, n - 1);
  reverser(arr, 0, n - 1);

  return arr;
};

const solver = (arr, q) => {
  if (q[0] === 1) {
    return rightShift(arr, q[1], 5);
  }

  if (q[0] === 2) {
    console.log(arr);
    return leftShift(arr, q[1], 5);
  }

  if (q[0] === 3) {
    return Sum(arr, q[1], q[2] + 1);
  }
};

console.log(solver([1, 2, 3, 4, 5], [2, 1]));
