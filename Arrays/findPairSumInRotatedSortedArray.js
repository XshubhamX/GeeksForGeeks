//Given a sorted and rotated array, find if there is a pair with a given sum

const finder = (arr, pairSum, n) => {
  let i = 0;
  for (i = 0; i < n - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      break;
    }
  }

  let leftMax = i;
  let rightMin = (i + 1) % n;

  while (leftMax !== rightMin) {
    if (arr[leftMax] + arr[rightMin] === pairSum) {
      return true;
    }
    if (arr[leftMax] + arr[rightMin] > pairSum) {
      leftMax = (n + leftMax - 1) % n;
    } else {
      rightMin = (rightMin + 1) % n;
    }
  }
  return false;
};

console.log(finder([16, 16, 16, 16, 16, 0], 16, 7));
