/*File ini adalah catatan pre-requisite dan tempat untuk mencoba basic operator dan assigment
Menguasai basic data type: string - interger - boolean - operator - assignment
*/
//*catatan: buka console.log dari komen untuk melihat di terminal
//komen adalah "//" atau "/*  ...   */" hapus keduanya untuk menjalankan codingnya

//contoh
let abcdfe = 10
//diatas adalah contoh coding yang belum dikomen, sedangkan di bawah adalah contoh coding yang sudah dikomen
//let abcdfe = 10
/*
let abcdfe = 10
*/

///////////////////////////////////////////////////////////////////////////////////////////////////

/*ASSIGNMENT
Dalam JavaScript, assignment atau penugasan adalah proses memberikan nilai pada sebuah variabel atau konstanta. Nilai yang diberikan dapat berupa nilai variabel lain, ekspresi, atau nilai literal. Assignment dilakukan menggunakan operator penugasan (=).*/

//buka untuk mencoba
/*
let x;
x = 10;
console.log(x); // Output: 10

let y = x;
console.log(y); // Output: 10

let z = x + y;
console.log(z); // Output: 20

const nama = "John";
console.log(nama); // Output: John

nama = "Doe"; // akan error karena nilai konstanta tidak dapat diubah
*/
///////////////////////////////////////////////////////////////////////////////////////////////////
/*
Selain menggunakan operator penugasan =, JavaScript juga memiliki beberapa operator penugasan lain yang dapat mempersingkat penulisan kode. Misalnya, operator += untuk menambahkan nilai pada variabel dan menyimpan hasilnya kembali pada variabel tersebut.

Contoh penggunaan operator penugasan +=:
*/
//buka untuk mencoba
/*
let x = 5;
x += 3;
console.log(x); // Output: 8
*/
///////////////////////////////////////////////////////////////////////////////////////////////////
/*
JavaScript juga memiliki operator penugasan lain seperti -=, *=, /=, dan %= yang masing-masing berfungsi untuk mengurangi, mengalikan, membagi, dan menghitung sisa bagi pada sebuah variabel.

Contoh penggunaan operator penugasan lain:
*/
//buka untuk coba
/*
let x = 10;
x -= 5;
console.log(x); // Output: 5

let y = 3;
y *= 4;
console.log(y); // Output: 12

let z = 25;
z /= 5;
console.log(z); // Output: 5

let a = 7;
a %= 3;
console.log(a); // Output: 1
*/

///////////////////////////////////////////////////////////////////////////////////////////////////

//VARIABLE
/*
1. Variable atau variabel dalam JavaScript adalah tempat untuk menyimpan nilai yang dapat diakses dan digunakan di dalam program. Variabel di deklarasikan dengan menggunakan kata kunci let atau var (untuk versi JavaScript sebelum ES6) atau const (untuk variabel konstan yang nilainya tidak dapat diubah).
*/
//Contoh penggunaan variabel: (buka untuk mencoba)
/*
let nama = "John";
let umur = 30;
let tinggi = 175.5;

console.log(nama); // Output: John
console.log(umur); // Output: 30
console.log(tinggi); // Output: 175.5
*/
///////////////////////////////////////////////////////////////////////////////////////////////////
/*
2. Variabel juga dapat diinisialisasi dengan nilai yang berasal dari hasil ekspresi atau fungsi.
*/
// Contoh penggunaan variabel dengan ekspresi dan fungsi:(buka untuk mencoba)
/*
let a = 10;
let b = 5;
let c = a + b;
console.log(c); // Output: 15

function tambah(x, y) {
  return x + y;
}
let d = tambah(3, 7);
console.log(d); // Output: 10
*/
//catatan: function akan dipelajari nanti di function.
///////////////////////////////////////////////////////////////////////////////////////////////////
// 3. Variabel juga dapat diubah nilainya setelah deklarasi, sehingga memungkinkan pengembangan program yang lebih dinamis.

// Contoh penggunaan variabel yang nilai diubah: (Buka untuk dicoba)
/*
let x = 5;
console.log(x); // Output: 5

x = 10;
console.log(x); // Output: 10

x = x * 2;
console.log(x); // Output: 20
*/
///////////////////////////////////////////////////////////////////////////////////////////////////
// 4. Selain itu, variabel juga dapat digunakan untuk menyimpan nilai dari tipe data lain, seperti objek, array, atau boolean.

// Contoh penggunaan variabel dengan tipe data lain:
/*
let mahasiswa = { nama: "John", jurusan: "Teknik Informatika", angkatan: 2022 };
console.log(mahasiswa.nama); // Output: John
console.log(mahasiswa.jurusan); // Output: Teknik Informatika
console.log(mahasiswa.angkatan); // Output: 2022

let warna = ["merah", "biru", "hijau"];
console.log(warna[1]); // Output: biru

let isLulus = true;
console.log(isLulus); // Output: true
*/
//catatan: value = [] adalah array, value = {} adalah object. keduanya akan dipelajari nanti.

///////////////////////////////////////////////////////////////////////////////////////////////////