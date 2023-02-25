const person = {
  name: "John",
  age: 20,
  isMaried: true,
};

// old versions
// const name = person.name;
// const age = person.age;
// const isMaried = person.isMaried;

// using destructuring data
// const { name, age, isMaried } = person;
// console.log(person)

// using spread operators
// change value name jack on pedro 
const person2 = {...person, name: "Pedro"}
console.log(person2);

// example in array
const animals = ["Lion", "Dragon", "Tiger"];

const animals2 = [...animals, "Snake"];

console.log(animals);
