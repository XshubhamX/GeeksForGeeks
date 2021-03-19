// number of row in sparse table is arr.length 0->arr.length-1
// number of column in sparse table is log2(arr.length)+1 0->log2(arr.length)
let ans;

const solver = (arr, queries) => {
  let largestPower = Math.floor(Math.log2(arr.length)); //largestPower+1=>number of column
  // logic === for making two-dimensional array
  let columnArray = new Array(arr.length);
  let s_table = new Array(largestPower + 1).fill(columnArray);
  //   we know when we compare element to itself s_table[0]=>first column remains same
  s_table[0] = arr;
  let tempArray = [];
  //NOTE =>in sparse table each cell (i,j) represents the answer of range [j,j+2^i)** inside the orignal array
  for (let row = 1; row <= largestPower; row++) {
    let range = Math.pow(2, row);
    for (let column = 0; column + range < arr.length + 1; column++) {
      tempArray.push(Math.min(...arr.slice(column, column + range)));
    }
    s_table[row] = tempArray;
    tempArray = [];
  }
  console.log(s_table);
  for (let i = 0; i < queries.length; i++) {
    let l = queries[i][0],
      r = queries[i][1];
    let j = Math.floor(Math.log2(r - l + 1));
    if (r - l + 1 === Math.pow(2, j)) {
      ans = s_table[j][l];
    } else {
      ans = Math.min(s_table[j][l], s_table[j][r - Math.pow(2, j) + 1]);
    }
    console.log(ans);
  }
};

console.log(
  solver(
    [5, 2, 4, 7, 6, 3, 1, 2],
    [
      [0, 6],
      [0, 3],
    ]
  )
);
