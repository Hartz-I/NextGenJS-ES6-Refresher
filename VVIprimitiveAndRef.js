// in primitive we simply copy value

//primitive type
let work = "dev";
const work2 = work;

work = "teacher";
console.log(work2); //will print dev as logic as it simply copies

const obj = {
  name: "Hartz",
  age: 21,
};

//ref type
const obj2 = obj;

obj.name = "Inan";
//this effect on obj goes onto oj 2!!! cuz it only copies the pointer on memory not the whole thing!
console.log(obj2);

//solution??
//use spread!!!!!!!!
