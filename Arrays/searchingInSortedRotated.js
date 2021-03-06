//TODO An element in a sorted array can be found in O(log n) time via binary search. But suppose we rotate an ascending order sorted array at some pivot unknown to you beforehand. So for instance, 1 2 3 4 5 might become 3 4 5 1 2. Devise a way to find an element in the rotated array in O(log n) time.

// Input  : arr[] = {5, 6, 7, 8, 9, 10, 1, 2, 3};
//          key = 3
// Output : Found at index 8

var search = function (arr, target, low, high) {
  low = low || low === 0 ? low : 0;

  high = high || high == 0 ? high : arr.length - 1;

  if (low > high) return -1;

  let mid = Math.ceil((low + high) / 2);

  if (arr[mid] == target) return mid;

  if (target > arr[mid]) {
    return search(arr, target, mid + 1, high);
  }
  if (target < arr[mid]) {
    return search(arr, target, low, mid - 1);
  }
};

console.log(search([3, 4, 5, 1, 2], 0));
