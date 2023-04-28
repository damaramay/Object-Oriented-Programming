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