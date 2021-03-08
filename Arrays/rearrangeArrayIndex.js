// Rearrange an array such that arr[i] = i

// brute force tech*   O(n^2)

// const rearrange = (arr) => {
//   let temp;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] === i) {
//         // swapping logic
//         temp = arr[j];
//         arr[j] = arr[i];
//         arr[i] = temp;
//         break;
//       }
//     }
//   }
//   return arr;
// };

const rearrange = (arr) => {
  let obj = {};
  let i = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      obj[arr[i]] = arr[i];
    }
  }
  for (i = 0; i < arr.length; i++) {
    if (obj[i] || obj[i] === 0) {
      arr[i] = obj[i];
    } else {
      arr[i] = -1;
    }
  }
  return arr;
};

console.log(rearrange([-1, 3, -1, 2, 5]));
