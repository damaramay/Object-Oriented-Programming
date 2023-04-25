//BASIC ITERATION
/*
Iterasi atau pengulangan (looping) merupakan salah satu konsep penting dalam pemrograman. Konsep ini digunakan untuk menjalankan kode program secara berulang kali, sehingga memungkinkan kita untuk memproses sejumlah besar data atau mengulangi serangkaian tugas tertentu dengan efisien.

Terdapat beberapa jenis iterasi dalam JavaScript, antara lain:

For loop
For loop adalah jenis iterasi paling umum yang digunakan dalam JavaScript. For loop digunakan untuk mengulangi serangkaian instruksi dengan jumlah iterasi yang sudah diketahui. Syntax dasar dari for loop adalah sebagai berikut:
*/

    // for (let index = 0; index < array.length; index++) {
    //     const element = array[index];
        //bagian ini adalah argument/algorithmnya. sedangkan atasnya adalah value untuk menjalankannya
// }

//contoh
{
    for (let i = 0; i < 5; i++) {
        console.log(`index ke: ${i}`);
      }//akan print i 4 kali

}
//contoh 2
{
    const fruits = ['apple', 'banana', 'cherry', 'durian'];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

}
// While loop
// While loop digunakan untuk mengulangi serangkaian instruksi selama kondisi yang diberikan bernilai true. Syntax dasar dari while loop adalah sebagai berikut:

    // while (condition) {
    // }

//contoh:
{
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
}
//contoh 2 
{
let i = 0;
let j = 0;
while (i < 5) {
  console.log("i: " + i);
  while (j < 3) {
    console.log("  j: " + j);
    j++;
  }
  j = 0;
  i++;
}
}

// Do-while loop
// Do-while loop adalah variasi dari while loop, namun akan mengeksekusi instruksi setidaknya satu kali sebelum memeriksa kondisi yang diberikan. Syntax dasar dari do-while loop adalah sebagai berikut:

// do {
//     // statements
//   } while (condition);

//contoh:
{
    let i = 0;
do {
  console.log(`ini iterasi do while ke-${i}`);
  i++;
} while (i < 5)
}

// For-in loop
// For-in loop digunakan untuk mengulangi serangkaian instruksi pada setiap properti dari sebuah objek. Syntax dasar dari for-in loop adalah sebagai berikut:

// for (variable in object) {
//     // statements
//   }
//contoh
{
    const person = { name: "John", age: 30, city: "New York" };
    for (let prop in person) {
      console.log(`${prop}: ${person[prop]}`);
    }    
}
// contoh 2:
{
    const buah = ['mangga', 'jambu', 'pir', 'melon', 'anggur'];
    const aisle = [1, 2, 3, 4, 5]
let result = {}
for (let index in buah) {
    result[aisle[index]] = buah[index];
}
console.log(result)
}   

// For-of loop
// For-of loop adalah jenis iterasi yang diperkenalkan pada ES6 dan digunakan untuk mengulangi serangkaian instruksi pada setiap elemen dari array atau iterable object lainnya. Syntax dasar dari for-of loop adalah sebagai berikut:

// for (variable of iterable) {
//     // statements
//   }
//contoh:
{
const numbers = [1, 2, 3, 4, 5];

for (let num of numbers) {
  console.log(num);
}
}
//contoh 2:
{const data = [
    [1, 2],
    [3, 4],
    [5, 6],
  ];
  
  for (let [a, b] of data) {
    console.log(a + b);
  }
}  