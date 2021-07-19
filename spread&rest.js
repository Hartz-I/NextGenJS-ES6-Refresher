const numbers = [1, 2, 3];

const new_numbers = [...numbers, 4, 6]; // the ... is the spread operator. adds all the values from the mensioned array

console.log(new_numbers);

const Operson = {
  name: "max",
  parent: "god",
};

const newOperson = {
  ...Operson,
  age: 15,
};

console.log(newOperson);

//rest

const filter = (...args) => {
  return args.filter((el) => el % 2 == 0); //returns the value that is true to the logic
};

console.log(filter(1, 2, 4, 5));
