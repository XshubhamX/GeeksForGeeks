// Rearrange an array such that arr[i] = i

// brute force tech*   O(n^2)
const rearrange = (arr) => {
  let temp;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === i) {
        // swapping logic
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
        break;
      }
    }
  }
  return arr;
};

console.log(rearrange([-1, -1, 6, 1, 9, 3, 2, -1, 4, -1]));
