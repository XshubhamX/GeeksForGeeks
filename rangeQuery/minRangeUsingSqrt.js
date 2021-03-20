let block = new Array();
let BLOCK_LENGTH;

const minPreProcessing = (arr) => {
  BLOCK_LENGTH = Math.ceil(Math.sqrt(arr.length));

  let j = 1;
  let min = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      // find min in every block
      min = Math.min(min, arr[i]);
      if (i / (BLOCK_LENGTH * j - 1) === 1 || i === arr.length - 1) {
        block.push(min);
        min = Infinity;
        j++;
      }
    }
  }
};

const minSolver = (arr, l, r) => {
  let min = Infinity;
  // if l and r are present in two diffrent block
  while (l < r && l % BLOCK_LENGTH !== 0 && l !== 0) {
    min = Math.min(min, arr[l]);
    l++;
  }
  while (l + BLOCK_LENGTH <= r) {
    min = Math.min(min, block[Math.floor(1 / BLOCK_LENGTH)]);
    l = l + BLOCK_LENGTH;
  }
  //just a normal case type
  while (l <= r) {
    min = Math.min(min, arr[l]);
    l++;
  }

  console.log(min);
};

const solver = (arr, q) => {
  minPreProcessing(arr);
  console.log(block);
  for (let i = 0; i < q.length; i++) {
    minSolver(arr, q[i][0], q[i][1]);
  }
};
console.log(
  solver(
    [7, 2, 3, 5, 10, 3, 12, 18],
    [
      [4, 7],
      [2, 6],
    ]
  )
);
