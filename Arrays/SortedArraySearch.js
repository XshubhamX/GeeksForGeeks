//Binary Searcg Implementation in log n time

const BinarySearch = (arr, num, start, end) => {
  if (start > end) {
    return -1;
  }
  let mid = Math.floor((end + start) / 2);

  if (num === arr[mid]) {
    return `found at index ${mid} `;
  }

  if (num > arr[mid]) {
    return BinarySearch(arr, num, mid + 1, end);
  }
  if (num < arr[mid]) {
    return BinarySearch(arr, num, start, mid - 1);
  }
};

console.log(BinarySearch([1, 2, 3, 4, 5], 5, 0, 4));
