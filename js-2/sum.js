function sum(numbers) {
    let result = 0;
    for (let i = 0; i < numbers.length; i++) {
      result += numbers[i];
    }
    return result;
  }

const numbers = [1, 2, 3, 4, 5];
const result = sum(numbers);
console.log(result); // Output: 15