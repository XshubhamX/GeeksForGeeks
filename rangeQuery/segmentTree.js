// segment tree implementation

let segmentTree = new Array();
const build = (s_tree, arr, start, end, idx) => {
  // if start===end => we have hit the leaft node recursive base condn..
  if (start === end) {
    s_tree[idx] = arr[start];
    return;
  }
  // We haven't reached the leaf nodes so we need to traverse left and right recursively
  let mid = Math.floor((start + end) / 2);

  //NOTE the left child node of a parent at "idx" has its index at "2*idx+1"
  //left side result
  // build(s_tree, arr, start, mid, 2 * idx + 1)
  //NOTE the right child node of a parent at "idx" has its index at "2*idx+2"
  // right side result
  // build(s_tree, arr, mid + 1, end, 2 * idx + 2)

  s_tree[idx] =
    build(s_tree, arr, start, mid, 2 * idx + 1) +
    build(s_tree, arr, mid + 1, end, 2 * idx + 2);
  return segmentTree[idx];
};

build(segmentTree, [1, 2, 5, 6, 7, 9], 0, 5, 0);
console.log(segmentTree);
