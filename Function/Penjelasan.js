//BASIC FUNCTION
/*
Function dalam JavaScript adalah sebuah blok kode yang dapat dipanggil oleh program dan dapat digunakan kembali di berbagai bagian program. Function dapat membantu mengorganisir kode dan membuat kode lebih mudah dibaca dan dimengerti.

Function terdiri dari tiga bagian utama: nama, parameter, dan body. Nama function harus unik dan mudah dipahami, sedangkan parameter adalah variabel yang berfungsi untuk menerima input ketika function dipanggil. Body function adalah blok kode yang berisi instruksi yang akan dieksekusi ketika function dipanggil.

Berikut adalah contoh sederhana sebuah function dalam JavaScript:
*/

{
    function tambah(a, b) {
        return a + b;
      }      
    console.log(tambah(1, 2)) //output 3. basically kita taruh 1 ke a dan 2 ke b.
    //ingat, parameter itu bedasarkan siapa duluan. dia tidak peduli benar atau salahnya tipe data. yang bisa jelasin kalau tipe datanya salah adalah program mu sendiri
    console.log(tambah(`bego`, 100)) //output: bego100

    //kita juga bisa buat variable jadi isi fungisnya:
    let variabelDariFungsi = tambah(100, 200)
    console.log(`ini adalah isi dari variabelDariFungsi: ${variabelDariFungsi}`)

    //ayo kita buat contoh kalau datatype parameternya gasesuai yang diharapkan menggunakan conditional.

    {
        function tambah (parameter1 = 0, parameter2 = 0){ //maksudnya kita kasih default 0 kalau parameter gak diisi.
        if (typeof parameter1 !== 'number'){
            return 'masukan Number ke parameter'
        }
        if (typeof parameter2 !== 'number'){ 
            return 'masukan Number ke parameter'
        }
        if (typeof parameter1 === 'number' && typeof parameter2 === 'number'){
            return parameter1 + parameter2
        }
    }
    console.log(tambah(2, 7)) //output 9
    console.log(tambah('string', 7)) //ouput: masukan Number ke parameter
    console.log(tambah(10, 'string')) //ouput: masukan Number ke parameter
    }
}

/////////////////////////////////////////////////////////////////////////////
//ADVANCE FUNCTION
/*
Fungsi biasanya dibuat hanya untuk operator perkalian, pertambahan, pengecekan, validasi etc. namun ada juga fungsi-fungsi yang lebih advance lagi untuk programming lebih lanjut
*/
//1. FUNGSI REKURSI
// Function rekursi adalah function yang memanggil dirinya sendiri dengan tujuan untuk menyelesaikan tugas yang kompleks atau berulang dengan lebih efisien. Istilah "rekursi" sendiri berasal dari kata "recur", yang berarti "berulang".

// Dalam JavaScript, function rekursi dapat didefinisikan dengan sintaksis seperti function biasa, tetapi dengan memanggil dirinya sendiri dalam blok kode. Sebagai contoh, berikut adalah function untuk menghitung faktorial dari sebuah angka menggunakan rekursi:
{
function faktorial(n) {
    if (n === 0) {
      return 1;
    } else {
      return n * faktorial(n - 1);
    }
  }
  
  console.log(faktorial(5)); // Output: 120
}  

//Pada function di atas, jika parameter n adalah 0, maka function akan mengembalikan 1. Jika tidak, function akan memanggil dirinya sendiri dengan parameter (n - 1) dan mengalikan nilai parameter dengan nilai kembaliannya. Proses ini akan terus berulang hingga nilai parameter sama dengan 0 dan function akan mengembalikan nilai 1.

// Namun, penggunaan function rekursi harus dilakukan dengan hati-hati dan dengan memperhatikan batasan dari stack memori karena setiap kali function memanggil dirinya sendiri, ia menambahkan sebuah frame stack ke memori, dan penggunaan rekursi yang tidak terbatas dapat menyebabkan stack overflow.

// Dalam beberapa kasus, penggunaan function rekursi mungkin tidak efisien dibandingkan dengan pendekatan non-rekursif. Namun, function rekursi tetap menjadi alat yang sangat kuat dan berguna dalam pemrograman, terutama dalam menyelesaikan masalah yang melibatkan struktur data seperti pohon atau graf.

//contoh lain:

{
    function fibonacci(n) {
        if (n <= 1) {
          return n;
        } else {
          return fibonacci(n - 1) + fibonacci(n - 2);
        }
      }
      
      console.log(fibonacci(7)); // Output: 55      
}
{
    function pangkat(angka, n) {
        if (n === 0) {
          return 1;
        } else {
          return angka * pangkat(angka, n - 1);
        }
      }
      
      console.log(pangkat(2, 5)); // Output: 32
      
}

//Function Anonim
// Anonim function adalah sebuah function dalam JavaScript yang tidak memiliki nama pada deklarasinya. Anonim function sering digunakan sebagai function yang akan dipanggil hanya satu kali atau sebagai parameter untuk function yang lain.

// Berikut adalah contoh anonim function yang digunakan sebagai parameter untuk function setTimeout:
{
    setTimeout(function() {
        console.log("Hello, world!");
      }, 1000);      
}

//catatan: intinya kalau bingung function biasa pake nama
//function namanya (param1, param2)
//kalau function anonim gapake nama:
//function(){statement}
//function anonim jarang banget dipakai

//ARROW FUNCTION
// Arrow function adalah sebuah cara untuk menuliskan function dalam JavaScript yang lebih singkat dan mudah dibaca. Arrow function diperkenalkan pada ECMAScript 6 dan sejak saat itu menjadi fitur yang populer digunakan oleh para developer JavaScript.

// Berikut adalah contoh penggunaan arrow function:
{
    const tambah = (a, b) => {
        return a + b;
      };
      
      console.log(tambah(5, 10)); // Output: 15
      
}

// Pada contoh di atas, kita mendefinisikan sebuah function tambah dengan menggunakan arrow function. Parameter function dinyatakan dengan kurung () yang diikuti dengan tanda panah (=>) dan diikuti dengan blok kode function. Dalam function ini, kita mengembalikan hasil penjumlahan antara dua parameter a dan b. Kemudian kita memanggil function ini dengan memberikan dua argumen, yaitu 5 dan 10, dan menampilkan hasilnya pada konsol.

// Perlu diperhatikan bahwa pada arrow function, tidak perlu menuliskan kata kunci function dan tanda kurung kurawal ({}) untuk mengelompokkan blok kode function, jika blok kode tersebut hanya berisi satu pernyataan. Sehingga, kode pada contoh di atas dapat dituliskan menjadi lebih singkat seperti berikut:

{
const tambah = (a, b) => a + b;

console.log(tambah(5, 10)); // Output: 15

}

//latihan arrow function:
// Buatlah sebuah arrow function dengan nama kaliDua yang menerima satu parameter dan mengembalikan hasil perkalian parameter tersebut dengan 2.

{
    let kaliDua = (a, b) => {return a * b}
    console.log(kaliDua(2, 2))
}

// Buatlah sebuah arrow function dengan nama hitungPangkat yang menerima dua parameter, yaitu angka dan pangkat, dan mengembalikan hasil pangkat dari angka dengan nilai pangkat.

{
    let hitungPangkat = (a) => {
        if (a === undefined){
            return hitungPangkat(1)
        }
        return a * a
    }
    console.log(hitungPangkat(12))
}

// Buatlah sebuah arrow function dengan nama cekBilanganPrima yang menerima satu parameter bilangan bulat positif dan mengembalikan nilai true jika bilangan tersebut merupakan bilangan prima dan false jika bukan.

{
    const cekBilanganPrima = (bilangan) => {
        // Jika bilangan kurang dari 2, bukan bilangan prima
        if (bilangan < 2) {
          return false;
        }
        
        // Periksa apakah bilangan habis dibagi selain dengan 1 dan bilangan itu sendiri
        for (let i = 2; i < bilangan; i++) {
          if (bilangan % i === 0) {
            return false;
          }
        }
        
        // Jika bilangan melewati dua kondisi di atas, maka bilangan prima
        return true;
      }
      
      console.log(cekBilanganPrima(4)); // false
      console.log(cekBilanganPrima(7)); // true
//jawaban bener      
}

/////////////////////////////////////////////////////////////////////////
//REST PARAMETER
// Rest parameter adalah fitur pada JavaScript yang memungkinkan kita untuk mengirim sejumlah argumen ke dalam sebuah fungsi sebagai sebuah array. Rest parameter ditandai dengan menggunakan tiga titik (...), diikuti dengan nama variabel yang akan menampung nilai-nilai dari argumen yang dikirimkan.

// Contoh penggunaan rest parameter:
{
    function jumlahkan(...angka) {
        let total = 0;
        for (const a of angka) {
          total += a;
        }
        return total;
      }
      
      console.log(jumlahkan(1, 2, 3)); // Output: 6
      console.log(jumlahkan(1, 2, 3, 4, 5)); // Output: 15
      console.log(jumlahkan(1, 2)); // Output: 3
      
}

// Pada contoh di atas, rest parameter digunakan untuk mengumpulkan semua nilai argumen yang dikirimkan ke dalam sebuah array angka. Kemudian, kita bisa melakukan operasi apapun pada array tersebut seperti pada contoh di atas, di mana kita menjumlahkan semua elemen pada array angka.


//contoh soal:
// Buatlah sebuah arrow function dengan nama jumlahkan yang menerima sebuah array angka dan mengembalikan hasil penjumlahan dari seluruh angka dalam array tersebut.

{
    let jumlahkan = (...angka) => {
        let total = 0
        for (let value of angka){
            total += value
        }
        return total
    }
     console.log(jumlahkan(1, 2, 3)); // Output: 6
      console.log(jumlahkan(1, 2, 3, 4, 5)); // Output: 15
      console.log(jumlahkan(1, 2)); // Output: 3
}

// Buatlah sebuah arrow function dengan nama filterGanjil yang menerima sebuah array angka dan mengembalikan array baru yang hanya berisi angka-angka ganjil dari array input tersebut.

{
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    function filterGanjil (param1) {
    let arrBaru = []
    for (let value of param1){
        // console.log(`testing ` + value)
        if (value % 3 === 0){
            arrBaru.push(value)
        }
    }
    return arrBaru
}
console.log(filterGanjil(arr))

//versi arrow function:
{
    let filterGanjil = (array) => {
        let arrayBaru = []
        for (let value of array){
            if (value % 3 === 0){
                arrayBaru.push(value)
            }
        }
        return arrayBaru
    }
    console.log(filterGanjil([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))


    let varBaru = [1293, 2139, 29299, 130]

    console.log(filterGanjil(varBaru))
}
}
