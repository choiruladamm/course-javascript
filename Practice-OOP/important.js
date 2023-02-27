// OOP atau Object Oriented Programming merupakan salah satu pattern pada programming yang sangat umum digunakan oleh developer di dunia. Kalau berbicara mengenai OOP pasti kaitannya sangat erat dengan bahasa pemograman Java. Ya secara bahasa Java itu adalah bahasa yang pure mengusung pattern OOP.

//  Javascript sebagai bahasa yang terpopuler didunia saat ini tentu saja tidak mau kalah dong. Karena sekarang pada Javascript kita juga bisa menerapkan pattern OOP.

// * Object Literal VS Object Class

// object literal
{
  const car = {
    color: "red",
    racingCar: true,
    type: "suv",
    engineStart: () => {
      console.log("engine start");
    },
  };
}
// object class
class Car {
  constructor(type, color) {
    this.type = type;
    this.color = color;
    this.engineStatus = "off";
  }

  engineStart() {
    this.engineStatus = "on";
    console.log("engine start");
  }

  engingeStop() {
    this.engineStatus = "off";
    console.log("engine start");
  }

  static isEngineOn(car) {
    if (car.engineStatus === "on") {
      console.log("Engine On");
    } else {
      console.log("Engine off");
    }
  }
}

// * CONSTRUCTOR
// Adalah sebuah method/function yang di jalankan pertama kali ketika object di buat. Misalnya seperti contoh kode di atas ketika const = new Car('suv', 'red') di jalankan maka method constructor langsung di jalankan juga, yang isinya adalah memasukkan parameter suv dan red ke dalam property car this.type dan this.color .

// * PROPERTY
// Adalah data yang di simpan di dalam sebuah object. Pada contoh di atas adalah this.type dan this.color , property dapat diakses di class method manapun yang ada di dalam object. Di atas saya memasukkan string on ke dalam this.engineStatus di dalam method engineStart()

// * CLASS METHODS
// Adalah method/function yang ada di dalam sebuah object, dan untuk menggunakannya class harus di instance terlebih dahulu menjadi object baru bisa dijalankan. Contoh class mobil di atas, kita akan menggunakan method engineStart .

// * EXAMPLE
const car = new Car("suv", "red");
console.log(car.engineStart());

//  * STATIC METHOD
// Adalah method yang sama seperti class method, tetapi untuk menjalankannya tidak perlu meng instance class, cukup menggunakan NamaClass.namaMehod()
