//TODO An element in a sorted array can be found in O(log n) time via binary search. But suppose we rotate an ascending order sorted array at some pivot unknown to you beforehand. So for instance, 1 2 3 4 5 might become 3 4 5 1 2. Devise a way to find an element in the rotated array in O(log n) time.

// Input  : arr[] = {5, 6, 7, 8, 9, 10, 1, 2, 3};
//          key = 3
// Output : Found at index 8

var search = function (nums, target, low, high) {
  low = low || low === 0 ? low : 0;

  high = high || high == 0 ? high : nums.length - 1;

  if (low > high) return -1;

  let mid = Math.ceil((low + high) / 2);

  if (nums[mid] == target) return mid;

  if (nums[low] < nums[mid]) {
    // if key is in the left half
    if (nums[low] <= target && target <= nums[mid])
      // search the left half
      return search(nums, target, low, mid - 1);
    // search the right half
    else return search(nums, target, mid + 1, high);
  } else {
    // if the key is in the right half.
    if (nums[mid] <= target && nums[high] >= target)
      return search(nums, target, mid + 1, high);
    else return search(nums, target, low, mid - 1);
  }
};

console.log(search([3, 4, 5, 1, 2], 4));
