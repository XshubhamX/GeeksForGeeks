// Move all zeroes to end of array

const arrange = (arr) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[count] = arr[i];
      count++;
    }
  }
  while (count < arr.length) {
    arr[count++] = 0;
  }
  return arr;
};

console.log(arrange([1, 2, 0, 4, 50, 0]));
