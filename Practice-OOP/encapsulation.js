// EXAMPLE ENCAPSULATION
// Encapsulation atau enkapsulasi adalah cara untuk membatasi akses langsung ke properti atau method dari sebuah objek.
function Ongkir(berat) {
  // public properties
  // this.pajak = 500;
  // this.biaya = function() {
  //   return berat * 1000;
  // }

  // private properties
  let pajak = 500;
  let biaya = function () {
    return berat * 1000;
  };

  this.totalBiaya = function () {
    return biaya() + pajak;
  };
}

const laptop = new Ongkir(4);
laptop.pajak = 800; // tidak adak mempengaruhi variable pajak dalam constructor function nya

console.log(laptop.totalBiaya()); // 4800