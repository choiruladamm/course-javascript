// Setter adalah method yang fungsinya khusus untuk mengubah nilai sebuah property.
// Getter adalah method yang fungsinya khusus untuk mengambil nilai sebuah property.

// setter
// class Product {
//   constructor(name) {
//     this.name = null;
//   }

//   set setName(value) {
//     // chek data sebelum mengubah property name
//     if (typeof value == "string") {
//       this.name = value;
//     } else {
//       this.name = null;
//     }
//   }
// }

// const thinkpad = new Product();
// thinkpad.setName = "Thinkpad Setter";
// console.log(thinkpad);


// Getter
class Product {
  constructor(name) {
    this.name = null;
  }

  set setName(value) {
    // chek data sebelum mengubah property name
    if (typeof value == "string") {
      this.name = value;
    } else {
      this.name = null;
    }
  }

  get getName() {
    if (this.name === null) {
      return `value belum di set`;
    }
    return this.name;
  }
}

const thinkpad = new Product();
console.log(thinkpad.getName);
thinkpad.setName = `thinkpad l900`;
console.log(thinkpad.getName);






