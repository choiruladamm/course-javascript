// ABSTRACTION
// Abstraction adalah sebuah teknik untuk menyembunyikan detail tertentu dari sebuah objek dan hanya menampilkan fungsionalitas atau fitur penting dari objek tersebut.

function Ongkir(berat) {
  var berat;
  var totalBiaya = function() {
    return berat * 1000;
  }

  this.tampilBiaya = function() {
    return totalBiaya();
  }
}

const laptop = new Ongkir(2);
console.log(laptop.tampilBiaya());