// OVERRIDE 
// Override adalah fitur yang memungkinkan kamu membuat method di dalam kelas child yang nama methodnya sama dengan method di class parentnya.

// Misal di classparent kamu membuat method dengan nama getDetail.
// Kemudian di subclassnya kamu membuat method dengan nama yang sama yaitu getDetail.

// Mengapa membuat method dengan nama yang sama?
// Ini bisa menjadi solusi ketika kamu membutukan fungsi dengan perilaku yang berbeda antara parent class dan subclassnya.

// FYI

// OVERLOAD
// Selain overriding, ada satu lagi yang disebut dengan overload.
// Overload ini adalah fitur untuk membuat dua fungsi atau lebih yang memiliki nama yang sama namun berbeda argument atau parameternya.

// NAMUN JAVASCRIPT TIDAK MENDUKUNG FITUR OVERLOADING

class Product {
  constructor(name) {
    this.name = name;
  }

  getDetail() {
    return `product ${this.name}`;
  }
}

class Laptop extends Product {
  constructor(name, brand) {
    super(name);
    this.brand = brand;
  }

  getDetail() {
    return `product name is ${this.name} with brand ${this.brand}`;
  }
}

const thinkpad = new Laptop("Thinkpad", "IBM");
console.log(thinkpad.getDetail());