// You are given a sequence A of N values A₁, A₂, A₃, …, Aₙ. You also are given Q queries. Each query will have two values l and r. Your task is to find the number of vowels in the range Aₗ, Aₗ₊₁, …, Aᵣ₋₁, Aᵣ

//NOTE navive solution

// const naviveSolution = (string, q) => {
//   let vowelscount = 0;
//   let vowels = "aeiou";
//   let j;
//   let l, r;
//   for (let i = 0; i < q.length; i++) {
//     l = q[i][0];
//     r = q[i][1];
//     for (let x = l; x <= r; x++) {
//       if (vowels.indexOf(string.charAt(x)) >= 0) {
//         vowelscount++;
//       }
//     }
//     console.log(vowelscount);
//   }
// };

// console.log(
//   naviveSolution("jasbirrajrana", [
//     [4, 7],
//     [7, 11],
//     [1, 11],
//   ])
// );

// ANCHOR time complexity = O(n * number of queries)
//NOTE MO'S alogorithm

const moalog = (arr, n, q) => {
  let BLOCK_SIZE = Math.sqrt(n);
  // step1 SORT THE GIVEN QUERIES IN MO ORDER
  let l, r;
  for (let i = 0; i < q.length; i++) {
    l = q[i][0];
    r = q[i][1];
  }
};
console.log(
  moalog([1, 1, 2, 1, 3, 4, 5, 2, 8], 9, [
    [4, 7],
    [5, 8],
    [1, 8],
  ])
);
