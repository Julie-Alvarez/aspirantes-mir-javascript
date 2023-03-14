function max(numbers) {
    if (numbers.length === 0) {
      return undefined;
    }
    let maxNumber = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > maxNumber) {
        maxNumber = numbers[i];
      }
    }
    return maxNumber;
  }
const numbers = [1, 5, 3, 7, 2];
const result = max(numbers);
console.log(result); // Output: 7