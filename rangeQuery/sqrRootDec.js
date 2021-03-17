let segment = new Array();

const preProcessingOfSegments = (originalArray, n) => {
  let currentSegment = -1;
  let segmentSize = Math.sqrt(n);

  for (let i = 0; i < n; i++) {
    if (i % segmentSize === 0) {
      currentSegment++;
    }
    segment[currentSegment] += originalArray[i];
  }
  return segmentSize;
};

const querySolver = (l, r, BLOCK_SIZE, block) => {
  // case 1 :=> if two block are overlaping

  let sum = 0;
  console.log(block);
  while (l + BLOCK_SIZE <= r) {
    sum += block[l / BLOCK_SIZE];
    l += BLOCK_SIZE;
  }
  return sum;
};

// console.log(preProcessingOfSegments([1, 5, 2, 4, 6, 1, 3, 5, 7], 9));

const solver = (arr, n) => {};
console.log(solver([1, 5, 2, 4, 6, 1, 3, 5, 7], 9));
