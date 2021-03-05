// ❤ lovely way to do this :)

const arrayRotation = (arr, times) =>
  arr.concat(arr).slice(times, times + arr.length);

console.log(arrayRotation([1, 2, 3, 4, 5, 6, 7], 2));
