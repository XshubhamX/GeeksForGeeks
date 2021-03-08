// Rearrange positive and negative numbers in O(n) time and O(1) extra space
const solver = (arr) => {
  let posArr = new Array();
  let negArr = new Array();

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      posArr.push(arr[i]);
    } else {
      negArr.push(arr[i]);
    }
  }
  let finalArray = [];
  let i,
    j = Math.min(posArr.length, negArr.length);
  for (i = 0; i < j; i++) {
    finalArray.push(posArr[i], negArr[i]);
  }
  // console.log(posArr);
  // console.log(negArr);
  // console.log(finalArray);
  // console.log("=================");
  // console.log(...posArr.slice(1));

  // this will run only j times but we also need other element present in posArr or negArr
  finalArray.push(...posArr.slice(1), ...negArr.slice(1));

  return finalArray;
};
console.log(solver([-1, 2, 3, -2, -4]));
