let ans;
const makingSparseTable = (arr) => {
  let maxPower = Math.floor(Math.log2(arr.length));
  let columnArray = new Array(arr.length);

  let s_table = new Array(maxPower + 1).fill(columnArray);
  s_table[0] = arr;
  let currentRange;
  let tempArray = [];
  let sum = 0;
  for (let row = 1; row <= maxPower; row++) {
    currentRange = Math.pow(2, row);
    for (let col = 0; col + currentRange < arr.length + 1; col++) {
      //  1.sequence ->sum of first two element and so on up to arr.length
      // --------> 2.sequence ->sum of first 4 element and so on up............
      // ...
      sum = s_table[row - 1][col] + s_table[row - 1][col + (1 << (row - 1))];
      tempArray.push(sum);
    }
    s_table[row] = tempArray;
    tempArray = [];
  }
  return s_table;
};

const solver = (arr, q) => {
  let Table = makingSparseTable(arr);
  let l, r, j;
  for (let i = 0; i < q.length; i++) {
    l = q[i][0];
    r = q[i][1];
    // now find the boundnace of the given query by  => length of query
    j = Math.floor(Math.log2(r - l + 1));
    // if query is availbe directly
    if (r - l + 1 === Math.pow(2, j)) {
      ans = Table[j][l];
    } else {
      // slight modification =>bcz we dont have that range pre calculated
      ans = 0;
      let auxSum = 0;
      //k+Math.pow(2,6) =so that our loop will not exceed the given range
      for (let k = l; k + Math.pow(2, j) <= r + 1; k++) {
        ans = ans + Table[j][k] - auxSum;
        auxSum = Table[j][k] - arr[k];
      }
    }
    console.log(ans);
  }
};

console.log(solver([5, 2, 3, 8, 6, 1], [[0, 4]]));

// sequence
//          0 1  2  3  4  5
// 0 , 2^0  5, 2, 3, 8, 6, 1
// 0 , 2^1  7*, 5**, 11*, 14**, 7, $
// 0 , 2^2  18, 19, 18, $, $
