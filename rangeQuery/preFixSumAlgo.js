// prefixsum algo

const preProcessing = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    arr[i] = arr[i] + arr[i - 1];
  }
  return arr;
};

const solver = (arr, q) => {
  arr = preProcessing(arr);
  let l, r;
  for (let i = 0; i < q.length; i++) {
    l = q[i][0];
    r = q[i][1];
    if (l === 0) {
      console.log(arr[r]);
    } else {
      console.log(arr[r] - arr[l - 1]);
    }
  }
};

console.log(
  solver(
    [1, 2, 3, 4],
    [
      [1, 2],
      [0, 3],
    ]
  )
);
