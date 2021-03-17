// Given an array of n elements, where each element is at most k away from its target position, devise an algorithm that sorts in O(n log k) time. For example, let us consider k is 2, an element at index 7 in the sorted array, can be at indexes 5, 6, 7, 8, 9 in the given array.

// quick sort  without involving the concept of k :)done

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
console.log(quickSort([1, 2, -1, 7, 10]));
