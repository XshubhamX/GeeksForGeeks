// pivot helper or  partition

const pivot = (arr, start, end) => {
  start = start || 0;
  end = end || arr.length - 1;
  let pivot = arr[start];
  let swapIdx = start;
  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      //counting for ele that is less than pivot
      swapIdx++;
      //swapping
      [arr[i], arr[swapIdx]] = [arr[swapIdx], arr[i]];
    }
  }
  [arr[start], arr[swapIdx]] = [arr[swapIdx], arr[start]];
  return swapIdx;
};

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotIdx = pivot(arr, left, right);
    // left
    quickSort(arr, left, pivotIdx - 1);
    //right
    quickSort(arr, pivotIdx + 1, right);
  }
  return arr;
};
console.log(quickSort([0, -1, 1]));
