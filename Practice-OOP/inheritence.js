// EXAMPLE INHERITENCE
// Inheritance dalam OOP adalah sebuah proses dimana sebuah class mewariskan property dan methodnya ke class lain atau childnya.

class People {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Person extends People {
  // subclass dari people
  constructor(name, age, job) {
    super(name, age);
    this.job = job;
  }
}

const luffy = new Person("Monkey D Luffy", 20, "Kapten Bajak Laut"); //intansiasi sebuah project baru

console.log(luffy.name);
console.log(luffy.age);
console.log(luffy.job);