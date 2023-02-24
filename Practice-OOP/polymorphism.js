// EXAMPLE POLYMORPHISM
// Polymorphism adalah kemampuan untuk membuat variabel, fungsi, atau objek yang memiliki banyak bentuk.

// Analogi sederhananya seperti ini.
// Salah satu fungsi smarphone adalah sebagai alat komunikasi.
// Smartphone sebagai alat komunikasi bentuknya bisa macam — macam, bisa dengan telepon call, bisa dengan mengirim pesan text melalusi sms, bisa dengan pesan text lewat aplikasi chat, bisa dengan video call, dll.

// Jadi fungsi utamanya adalah sebagai alat komunikasi namun dengan cara atau bentuk yang berbeda.

// Polimorfisme pada Java ada dua macam:
// Static Polymorphism (Polimorfisme statis) : method overloading
// Dynamic Polymorphism (Polimorfisme dinamis) : method overriding 



class People {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello, Good Morning my name is ${this.name};`;
  }
}

class Person extends People {
  construtor(name) {
    super(name)
  }

  greet() {
    return `Hello, Selamat Sore, Nama Saya ${this.name};`;
  }
}

const axell = new Person("Axell");
console.log(axell.greet());
