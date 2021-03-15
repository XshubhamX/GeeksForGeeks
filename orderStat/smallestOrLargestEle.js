// Given an array and a number k where k is smaller than size of array, we need to find the k’th smallest element in the given array. It is given that all array elements are distinct.

// NOTE :USING INBUILT SORT
// const solver = (arr, k) => {
//   arr = arr.sort(function (a, b) {
//     return a - b;
//   });
//   return arr[k - 1];
// };
// console.log(solver([7, 10, 4, 3, 20, 15], 3));

//ANCHOR using selection sort

// const pivot = (arr, start, end) => {
//   start = start || 0;
//   end = end || arr.length - 1;
//   let pivot = arr[start];
//   let swapIdx = start;
//   for (let i = start + 1; i < arr.length; i++) {
//     if (pivot > arr[i]) {
//       //counting for ele that is less than pivot
//       swapIdx++;
//       //swapping
//       [arr[i], arr[swapIdx]] = [arr[swapIdx], arr[i]];
//     }
//   }
//   [arr[start], arr[swapIdx]] = [arr[swapIdx], arr[start]];
//   return swapIdx;
// };

// const solver = (arr, left = 0, right = arr.length - 1, k) => {
//   if (left < right) {
//     let pivotIdx = pivot(arr, left, right);
//     // left
//     solver(arr, left, pivotIdx - 1);
//     //right
//     solver(arr, pivotIdx + 1, right);
//   }
//   return arr[k - 1];
// };
// console.log(solver([7, 10, 4, 3, 20, 15], 0, 5, 3));

// (Using Min Heap – HeapSelect)
//NOTE :note done yet
