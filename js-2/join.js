function join(array) {
    let result = "";
    for (let i = 0; i < array.length; i++) {
      result += array[i];
      if (i !== array.length - 1) {
        result += " ";
      }
    }
    return result;
  }
const array = ["Hola", "mundo!"];
const result = join(array);
console.log(result); // Output: "Hola mundo!"

