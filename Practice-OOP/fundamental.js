//** */ OBJECT
// const barang = {
//   nama: "Lenovo Thinkpad x230",
//   harga: 2399999,
//   warna: "Putih",
//   berat: "2kg",
//   detail: function () {
//     return this.nama + " " + this.harga;
//   },
// };

// console.log(barang.detail);
// document.writeln(`${barang.berat}`);

// Disebut properti ketika value atau nilainya bukan function dan disebut method ketika valuenya adalah sebuah function.
// Value dari sebuah property bisa apa aja.
// Bisa data primitif, bisa function, atau bisa objek itu sendiri.

//** */ FUNCTION CONSTRUCTOR
// Biasanya untuk membedakan function contructor dengan function declaration biasa adalah dengan memakai huruf besar pada kata pertama nama function tersebut.

//function Person() {} // function constructor
//function person() {} // function deklaration biasa

// {
//   function Barang(name, price) {
//     this.name = name;
//     this.price = price;
//     this.detail = function () {
//       return `${this.name} ${this.price}`;
//     };
//   }

//   const barang1 = new Barang("Lenovo", "10 jt");
//   console.log(barang1);

//   const barang2 = new Barang("Asus", "15 jt");
//   console.log(barang2);
// }

// Sebuah objek baru yang di buat dari sebuah constructor disebut sebagai instance.
// Barang1, barang2, adalah instance dari Barang.

//** */ CLASSES
// Class adalah salah satu fitur baru yang di perkenalkan di javascript versi 2015 atau ES6.

// Fitur class menyediakan syntax yang lebih sederhana dan rapi untuk membuat blueprint sebuah objek.

// Perlu di catat bahwa di javascript, class sebenarnya adalah sebuah function namun dengan sintax yang berbedah.

// class Barang {
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//   }

//   details() {
//     return `${this.name} (${this.price}`;
//   }
// }

// const barangSatu = new Barang("Dell", 200000);
// const barangDua = new Barang("Robot", 300000);
// const barangTiga = new Barang("MSI", 400000);

// console.log(barangSatu);
// console.log(barangDua);
// console.log(barangTiga);

//** */ THIS KEYWORD

// This adalah sebuah keyword khusus yang merujuk pada pada objek pemiliknya.

// Maksudnya adalah nilai dari this sangat bergantung pada di mana keyword this ini diletakkan atau di panggil.

// Jika this di gunakan dalam sebuah method maka ia merujuk pada objek pemiliknya.

// Jika this di dalam sebuah function maka ia merujuk pada global objek atau window.

// Dalam kasus function constructor dan class maka keyword this ini mengacu pada objek instannya.

//** */ PRIVATE, PUBLIC PROPERTIES AND METHODS

// Apa itu access modifier ?
// Access modifier atau visibility adalah sebuah konsep yang di gunakan untuk mengatur tingkat akses terhadap property atau method dalam sebuah objek.

// Ada 2 access modifier yang akan kita perlajari disini, yaitu private dan public.

// TODO: Private adalah ketika property atau methodnya hanya dapat diakses atau di gunakan dalam fungsi tersebut.

// TODO: Dengan kata lain instance objeknya tidak dapat menggunakan property atau method tersebut.

// TODO: Public adalah ketika property atau methodnya dapat di akses dari luar fungsi tersebut.

// EXAMPLE

function Laptop(name, price, weight, color) {
  // public property
  this.name = name;
  this.price = price;

  // private property
  var weight = weight;
  var color = color;

  // public method
  this.detail = function () {
    return this.name + " " + this.price;
  };

  // private method
  function showWeightColor() {
    return `${weight} ${color}`;
  }
}

const laptopOne = new Laptop("MSI", 100, 2, "BLUE");

console.log(laptopOne.name);
console.log(laptopOne.weight);
console.log(laptopOne.detail);
// console.log(laptopOne.showWeightColor()) // error message

// PILAR KONSEP OOP
// Ada 4 konsep dasar yang perlu di pahami saat belajar objek oriented programing.

// Encapsulation
// Inheritence
// Polymorphism
// Abstraction

