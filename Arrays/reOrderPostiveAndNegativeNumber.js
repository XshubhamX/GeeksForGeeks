// Rearrange positive and negative numbers with constant extra space

const solver = (arr) => {
  let i = 0;
  let j = 0;

  let n = arr.length;
  while (j < n && i < n) {
    if (arr[i] > 0 && arr[j] < 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    if (arr[i] < 0) {
      i++;
    }
    if (arr[j] > 0) {
      j++;
    }
  }
  return arr;
};

console.log(solver([2, 3, -2, -3, -4]));
