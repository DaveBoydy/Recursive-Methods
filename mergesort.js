/**
 *  Step Two recursive merge-sort algorithm
 *  Merge the sorted sub arrays until the final sorted array
 */
const mergeArray = (leftArr, rightArr) => {
  const outputArr = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Assign the smaller value for sorted output
  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      outputArr.push(leftArr[leftIndex]);
      leftIndex++;
    } else {
      outputArr.push(rightArr[rightIndex]);
      rightIndex++;
    }
  }

  // Update the remaining elements
  while (leftIndex < leftArr.length) {
    outputArr.push(leftArr[leftIndex]);
    leftIndex++;
  }

  while (rightIndex < rightArr.length) {
    outputArr.push(rightArr[rightIndex]);
    rightIndex++;
  }

  return outputArr;
};

/**
 *  Step One recursive merge-sort algorithm
 *  Recursively split input array until one element is left
 */
const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;

  const middleIndex = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, middleIndex);
  const rightArr = arr.slice(middleIndex);

  return mergeArray(mergeSort(leftArr), mergeSort(rightArr));
};

console.log(mergeSort([]));
console.log(mergeSort([33, 55, 9, 5, 60, 71]));
console.log(mergeSort([1, 4, 3, 7, 345, 121, 4563, 69, 1256, 45, 57, 2, 253]));
