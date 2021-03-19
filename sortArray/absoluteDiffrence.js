// Given an array of n distinct elements and a number x, arrange array elements according to the absolute difference with x, i. e., an element having minimum difference comes first, and so on.
// Note: If two or more elements are at equal distance arrange them in the same sequence as in the given array.

// NODE CLASS
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// class BinaryT {
//   constructor() {
//     this.root = null;
//   }
//   insert(value) {
//     let newNode = new Node(value);
//     // check for the root node
//     if (this.root === null) {
//       this.root = newNode;
//       return this;
//     } else {
//       let curr = this.root;
//       while (true) {
//         if (value === curr.value) {
//           return undefined;
//         }
//         if (value < curr.value) {
//           // go left
//           if (curr.left === null) {
//             curr.left = newNode;
//             return this;
//           } else {
//             // go further left
//             curr = curr.left;
//           }
//         } else if (value > curr.value) {
//           if (curr.right === null) {
//             curr.right = newNode;
//             return this;
//           } else {
//             // go further right
//             curr = curr.right;
//           }
//         }
//       }
//     }
//   }
//   dfs_inOrder() {
//     let data = [];
//     let current = this.root;
//     function traverse(node) {
//       if (node.left) traverse(node.left);
//       data.push(node.value);
//       if (node.right) traverse(node.right);
//     }
//     traverse(current);
//     return data;
//   }
// }

// let tree = new BinaryT();

// const solver = (arr, x) => {
//   for (let i = 0; i < arr.length; i++) {
//     tree.insert(arr[i]);
//   }
//   console.log(tree.dfs_inOrder());
// };

// solver([10, 5, 3, 9, 2], 7);

const solver = (arr, x) => {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = Math.abs(arr[i] - x);
  }
  for (let [key, value] of Object.entries(obj)) {
    console.log(key, value);
  }
};

console.log(solver([10, 5, 3, 9, 2], 7));
