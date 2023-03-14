function maxIndex(numbers) {
    if (numbers.length === 0) {
      return -1;
    }
    let maxNumber = numbers[0];
    let maxIndex = 0;
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > maxNumber) {
        maxNumber = numbers[i];
        maxIndex = i;
      }
    }
    return maxIndex;
  }
const numbers = [1, 5, 3, 7, 2];
const result = maxIndex(numbers);
console.log(result); // Output: 3