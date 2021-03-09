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
  let j = arr.length-1,i=0;
  while (i < j) {
    let leftValue = a[i];
    let rightValue = a[j];
    if (leftValue !== 0 && rightValue !== 0) {
      i++;
    } else if (leftValue === 0 && rightValue === 0) {
      j--;
    } else if (leftValue === 0) {
      [a[i], a[j]] = [a[j], a[i]];
      i++;
      j--;
    } else if (rightValue === 0) {
      j--;
      i++;
    }
  }
  return arr;
};
//TODO // Move all zeroes to end of array nOW DO IT USING SINGLE TRAVERSAL

console.log(arrange([0, 1, 2, 0, 4, 50, 0, 0, -12]));
