// Given an array of size N which is initialized with all zeros. We are given many ranges add queries, which should be applied to this array. We need to print the final updated array as our result.

const updateProcessing = (arr, l, r, u) => {
  // logic for update
  arr[l] = arr[l] + u;
  if (r + 1 !== arr.length) {
    // to cancel the effect of adding u
    arr[r + 1] = arr[r + 1] - u;
  }
  return arr;
};

const solver = (arr, q) => {
  for (let i = 0; i < q.length; i++) {
    updateProcessing(arr, q[i][0], q[i][1], q[i][2]);
  }

  // perform prefix sum
  for (let i = 1; i < arr.length; i++) {
    arr[i] = arr[i] + arr[i - 1];
  }
  console.log(arr);
};

console.log(
  solver(
    [0, 0, 0, 0, 0, 0],
    [
      [0, 2, 100],
      [1, 5, 100],
      [2, 3, 100],
    ]
  )
);
