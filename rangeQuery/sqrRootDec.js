let blockLen;
let block = new Array();

const querySolver = (arr, l, r) => {
  let sum = 0;

  while (l < r && l % blockLen !== 0 && l !== 0) {
    sum = sum + arr[l];
    l++;
  }

  while (l + blockLen <= r) {
    // two overlap block cond..
    sum = sum + block[l / blockLen];
    l = l + blockLen;
  }
  while (l <= r) {
    sum = sum + arr[l];
    l++;
  }
  console.log(sum);
};

const blockCreator = (arr) => {
  blockLen = Math.ceil(Math.sqrt(arr.length));
  let temp = 0;
  let j = 1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      temp = temp + arr[i];
      if (i / (j * blockLen - 1) === 1 || i === arr.length - 1) {
        block.push(temp);
        temp = 0;
        j++;
      }
    }
  }
};

const solver = (arr, queries) => {
  // first create block by decoposing the array in sqrt part
  blockCreator(arr);

  // traverse through the array of queries

  for (let i = 0; i < queries.length; i++) {
    querySolver(arr, queries[i][0], queries[i][1]);
  }
  return block;
};

console.log(
  solver(
    [1, 2, 3, 4, 5, 6, 7, 8],
    [
      [2, 6],
      [0, 5],
    ]
  )
);
