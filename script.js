const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  const result = [];
  let currentChunk = [];
  let currentSum = 0;

  for (let num of arr) {
    // If adding num exceeds max sum, start new chunk
    if (currentSum + num > n) {
      result.push(currentChunk);
      currentChunk = [];
      currentSum = 0;
    }

    currentChunk.push(num);
    currentSum += num;
  }

  // Push last chunk if not empty
  if (currentChunk.length > 0) {
    result.push(currentChunk);
  }

  return result;
};


const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
