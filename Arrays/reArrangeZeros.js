// Move all zeroes to end of array

// const arrange = (arr) => {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== 0) {
//       arr[count] = arr[i];
//       count++;
//     }
//   }
//   while (count < arr.length) {
//     arr[count++] = 0;
//   }
//   return arr;
// };

const arrange = (arr) => {
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      j++;
    }
  }
  return arr;
};
//TODO // Move all zeroes to end of array nOW DO IT USING SINGLE TRAVERSAL

console.log(arrange([0, 1, 2, 0, 4, 50, 0, 0, -12]));
