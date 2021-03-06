//TODO Consider an array of distinct numbers sorted in increasing order. The array has been rotated (clockwise) k number of times. Given such an array, find the value of k.

// ***IMP***  => in a sorted array in increasing order  index of min ele is the equal to the number of rotation occur

const minEle = (arr) => {
  let min = Infinity;
  let len = arr.length;
  while (len--) {
    if (arr[len] < min) {
      min = arr[len];
    }
  }
  return min;
};
const numberOfRotation = (arr) => {
  // this gives you the number of rotation happen in sorted array

  let n = arr.indexOf(minEle(arr));
  return n;
};
console.log(numberOfRotation([3, 4, 5, 1, 2]));
