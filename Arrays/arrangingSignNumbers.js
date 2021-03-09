const arrangeSort = (arr) => {
  arr.sort(function (a, b) {
    return b - a;
  });
  return arr;
};

console.log(arrangeSort([1, -1, 2, -3, 3]));
