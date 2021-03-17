const solve = (arr, i) => {
  let max;
  while (true) {
    if (arr[i * 2 + 1] || arr[i * 2 + 2]) {
      if (arr[2 * i + 1] < arr[2 * i + 2]) {
        max = 2 * i + 2;
      } else {
        max = 2 * i + 1;
      }
      if (arr[max] > arr[i]) {
        [arr[i], arr[max]] = [arr[max], arr[i]];
        i = max;
      } else {
        break;
      }
    } else {
      break;
    }
  }
  return arr;
};

const solver = (arr, n, k) => {
  let i = Math.floor(n / 2 - 1);
  for (i; i >= 0; i--) {
    solve(arr, i);
  }
  for (i = k; i < arr.length; i++) {
    if (arr[0] > arr[i]) {
      [arr[0], arr[i]] = [arr[i], arr[0]];
      solve(arr, 0, k);
    }
  }
  return arr[0];
};
console.log(solver([7, 10, 4, 3, 20, 15], 6, 4));
