// CHAPTER 1 'STRING & BASIC FUNCTION STRING'

/*
string adalah tipe data di Javascript yang digunakan untuk menjelaskan sesuatu atau ya bisa dibilang bentuk data untuk representasi teks atau urutan karakter. String dapat ditulis di dalam tanda kutip tunggal ('...') atau tanda kutip ganda ("..."). biasanya yang sering dipakai adalah backtick (`...`) karena backtic bisa memasukan value yang ada.
*/

let nama = 'John';  // menggunakan tanda kutip tunggal
let pesan = "Halo, apa kabar?";  // menggunakan tanda kutip ganda

//string bisa langsung digabung, nama penggabungan string dengan string disebut concat. contoh:  (perhatikan ada spasi di Doe)
let namaLengkap = nama + ' Doe'; // hasilnya: 'John Doe'

//string bisa dicaritahu panjangnya. ini berguna untuk mendapatkan index string. contoh:
let panjangPesan = pesan.length; // hasilnya: 18

//string mempunyai index, yang dihitung dari 0:
// 'damara'
// '012345'
// tapi panjang dari 'damara' adalah 6
// jadi harus dibedakan ya, panjang teks dan panjang index
let karakterPertama = pesan[0]; // hasilnya: 'H'

// Memotong (substring) String menggunakan method '.substring()':
//ingat: pesan = "Halo, apa kabar?"
let kataPertama = pesan.substring(0, 4); // hasilnya: 'Halo'

// Mengubah case huruf menggunakan method '.toUpperCase()' atau '.toLowerCase()':
let pesanKecil = pesan.toLowerCase(); // hasilnya: 'halo, apa kabar?'
let pesanBesar = pesan.toUpperCase(); // hasilnya: 'HALO, APA KABAR?'
//catatan: anda bisa buat satu kalimat atau kalimat keberapa jadi uppercase semua atau lowercase semua dengan substring. atau campur dengan conditional atau loop (akan dipelajari di chapter berikutnya)

// Mencari indeks pertama kemunculan suatu karakter atau String menggunakan method '.indexOf()':
let indeksKata = pesan.indexOf('apa'); // hasilnya: 6

////////////////////////////////////////////////////////////////////////////

//CHAPTER 2, ADVANCE BUILT IN FUNCTION STRING
// charAt(): Mengembalikan karakter pada indeks tertentu dalam String.
let str = "Hello World!";
let char = str.charAt(1); // Mengembalikan karakter pada indeks 1 (huruf e).
console.log(char); // Output: e
//nah ini sama kayak char = str[1] outputnya. tapi bedanya pakai index dan charAt adalah kalau kita pakai str[12] output = undefined sedangkan str.charAt(12) outputnya "" (string kosong)

// includes(): Memeriksa apakah sebuah String mengandung karakter tertentu atau tidak.
let string = "Hello World!";
let result = string.includes("World"); // Memeriksa apakah str mengandung kata "World".
console.log(result); // Output: true
let resultSalah = string.includes("bapuk") 
console.log(resultSalah) //output: false

// replace(): Mengganti karakter atau substring tertentu dalam sebuah String dengan karakter atau substring lain.
let str2 = "Hello World!";
let newStr = str2.replace("World", "Universe"); // Mengganti kata "World" dengan kata "Universe".
console.log(newStr); // Output: "Hello Universe!"

// split(): Memecah sebuah String menjadi sebuah array.
let str3 = "Hello World!";
let arr = str3.split(" "); // Memecah str3 berdasarkan spasi menjadi sebuah array.
console.log(arr); // Output: ["Hello", "World!"]
//catatan: array adalah tipe data non primitive, nanti akan dipelajari di array

// trim(): Menghapus karakter kosong (spasi, tab, newline) di awal dan akhir sebuah String.
let str4 = "   Hello World!   ";
let trimmedStr = str4.trim(); // Menghapus karakter kosong di awal dan akhir String.
console.log(trimmedStr); // Output: "Hello World!"

// lastIndexOf(): Mengembalikan indeks dari karakter atau substring tertentu dalam sebuah String, dimulai dari akhir String.
let str5 = "Hello World!";
let index = str5.lastIndexOf("o"); // Mengembalikan indeks terakhir dari huruf "o".
console.log(index); // Output: 7

// slice(): Mengembalikan sebuah bagian dari sebuah String.
let str6 = "Hello World!";
let newStr2 = str6.slice(0, 5); // Mengambil karakter dari indeks 0 hingga 4.
console.log(newStr2); // Output: "Hello"
//catatan: perbedaan substring dan slice: jika kedua argumen yang diberikan sama, maka hasilnya akan sama antara metode slice() dan substring(). Namun, pada kasus di mana argumen kedua tidak diberikan, maka slice() akan memotong bagian String dari indeks awal hingga akhir String, sedangkan substring() akan memotong bagian String dari indeks awal hingga akhir String (tanpa argumen kedua). Namun, disarankan untuk menggunakan metode slice() daripada substring(), karena substring() memiliki perilaku yang ambigu jika argumen kedua lebih kecil dari argumen pertama.

////////////////////////////////////////////////////////////////////////////////