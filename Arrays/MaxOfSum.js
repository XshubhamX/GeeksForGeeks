//Find maximum value of Sum( i*arr[i]) with only rotations on given array allowed

//First BruteForce
const rotate = (arr, aux) => {
  let temp = arr[0];
  arr[0] = arr[aux];
  arr[aux] = temp;
};

const countSum = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + i * arr[i];
  }
  console.log(sum);
  return sum;
};

const arrayRotationBruteForce = (arr, n) => {
  let max = 0;
  for (i = 0; i < n; i++) {
    for (let i = 1; i <= n - 1; i++) {
      rotate(arr, i);
    }
    console.log(arr);
    let temp = countSum(arr);
    if (max < temp) {
      max = temp;
    }
  }

  return max;
};

//logical

console.log(arrayRotationBruteForce([1, 20, 2, 10], 4));
