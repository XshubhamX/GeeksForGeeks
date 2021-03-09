// For a given array of n integers and assume that ‘0’ as an invalid number and all other as a valid number. Convert the array in such a way that if both current and next element is valid then double current value and replace the next number with 0. After the modification, rearrange the array such that all 0’s shifted to the end.
const reArranger = (arr) => {
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      j++;
    }
  }
  return arr;
};

const solver = (arr) => {
  for (let i = 0; i < arr.length && i + 1 < arr.length; i++) {
    if (arr[i] !== 0 && arr[i + 1] !== 0) {
      arr[i] = arr[i] * 2;
      arr[i + 1] = 0;
    }
  }
  arr = reArranger(arr);
  return arr;
};

console.log(solver([2, 2, 0, 4, 0, 8]));
