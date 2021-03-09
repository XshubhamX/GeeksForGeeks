// Rearrange array such that even positioned are greater than odd
const solver = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 !== 0 && arr[i] < arr[i + 1]) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    } else if (i % 2 === 0 && arr[i] > arr[i + 1]) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    }
  }
  return arr;
};

console.log(solver([1, 2, 2, 1]));
