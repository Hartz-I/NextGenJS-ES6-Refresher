const newNumbers = [1, 2, 3, 4];

const doubleNewNums = newNumbers.map((num) => {
  //applies to all the values of new number array
  return 2 * num;
});

console.log(newNumbers);
console.log(doubleNewNums);
