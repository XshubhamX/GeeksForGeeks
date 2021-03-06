//**for unsorted && unrotated array */
// const sumX = (arr, sum) => {
//   const sortedArray = arr.sort(function (a, b) {
//     return a - b;
//   });

//   let left = 0;
//   let right = sortedArray.length - 1;
//   let totalSum = sortedArray[left] + sortedArray[right];

//   while (left < right) {
//     if (totalSum === sum) {
//       return [left, right];
//     }
//     if (totalSum < 0) {
//       left++;
//     } else {
//       right--;
//     }
//   }
//   if (totalSum !== sum) {
//     return "Not any";
//   }
// };
// console.log(sumX([1, 4, 45, 6, 10, -8]));

// for sorted && rotated array

let minEle = (arr) => {
  // FOR MIN
  let min = Infinity;
  let len = arr.length;
  while (len--) {
    if (arr[len] < min) {
      min = arr[len];
    }
  }
  return min;
};

let maxEle = (arr) => {
  // FOR MIN
  let max = -Infinity;
  let len = arr.length;
  while (len--) {
    if (arr[len] > max) {
      max = arr[len];
    }
  }
  return max;
};

const sumX = (arr, x, n) => {
  // TODO first find out the pivot element arround which this array is rotated!!
  //TODO FOR THIS YOU HAVE TO FIND THE MIN AND MAX ELEMENT INDEX IN THE ARRAY
  let l = arr.indexOf(minEle(arr));
  let r = arr.indexOf(maxEle(arr));
  // Now we have  clue about which point this array is rotated.

  while (l !== r) {
    if (arr[l] + arr[r] === x) {
      return true;
    }
    if (arr[l] + arr[r] < x) {
      l = (l + 1) % n;
    } else {
      r = (r + n - 1) % n;
    }
  }
  return false;
};

console.log(sumX([11, 15, 26, 38, 9, 10], 19, 6));
