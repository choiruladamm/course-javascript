// JS ES6 - var vs let

// var (function scope)
// let dan const (block scope)

// let nama = "Hilman";
// {
//   let nama = "Adam";
//   console.log(nama);
// }

// console.log(nama);

// function getName() {
//   if(true){
//     // var nama = 'Adam'; 
//     let nama = 'Adam';
//     console.log(nama);
//   } else {
//     console.log(nama)
//   }
// }

// getName();


const person = {
  id : 1,
  name : 'Hilman'
}

person.age = 22;

console.log(person)
