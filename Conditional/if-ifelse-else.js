//chapter 1 Conditional
/*
untuk apa conditional?
Conditional statement dalam JavaScript digunakan untuk mengambil keputusan berdasarkan kondisi yang diberikan. Kondisi tersebut dievaluasi sebagai true atau false.

Di bawah ini adalah beberapa tipe conditional statement dalam JavaScript ES6:
*/

/*
if: merupakan salah satu statement yang paling dasar dalam JavaScript. if digunakan untuk menjalankan sebuah block kode jika kondisi yang diberikan bernilai true.
*/
{const nilai = 80;

    if (nilai > 75) {
      console.log("Selamat, kamu lulus ujian!");
    }
    // Selamat, kamu lulus ujian!
}

// else: merupakan bagian dari statement if. else digunakan untuk menjalankan sebuah block kode jika kondisi pada statement if yang diberikan bernilai false.
{const nilai = 60;

    if (nilai > 75) {
      console.log("Selamat, kamu lulus ujian!");
    } else {
      console.log("Maaf, kamu belum lulus ujian.");
    }
    // Maaf, kamu belum lulus ujian.
}

// else if: merupakan statement yang digunakan untuk memeriksa kondisi tambahan jika statement if yang diberikan bernilai false. Statement else if dapat digunakan berkali-kali sesuai dengan kebutuhan.
{const nilai = 60;

    if (nilai > 75) {
      console.log("Selamat, kamu lulus ujian!");
    } else if (nilai > 60) {
      console.log("Nilai kamu cukup, belajar lagi ya!");
    } else {
      console.log("Maaf, kamu belum lulus ujian."); //catatan tambahan: else akan dilakukan apabila semuanya gak mencapai kondisi
    }
    // Nilai kamu cukup, belajar lagi ya!
}

// Ternary operator (?:): merupakan salah satu bentuk conditional statement yang ringkas. Ternary operator digunakan untuk membuat suatu keputusan berdasarkan kondisi yang diberikan.
//catatan gunakan ternary jika hanya ada 2 pilihan, kalau nested jangan pake.
{
  let x = 10;
  let result = (x > 5) ? "Lebih besar dari 5" : "Kurang dari atau sama dengan 5";
  console.log(result); // Output: "Lebih besar dari 5"


// Format umum dari conditional operator adalah:
// (condition) ? (value1) : (value2)
// Ketika kondisi condition bernilai true, maka operator akan mengembalikan nilai value1. Jika kondisi condition bernilai false, maka operator akan mengembalikan nilai value2.

//contoh nested ternary
const nilai = 80;
const hasil = nilai > 90 ? "Lulus dengan nilai A" : nilai > 65 && nilai < 90 ? `Lulus, tapi kamu bisa lebih baik lagi` : "Tidak lulus";

console.log(hasil); //Lulus, tapi kamu bisa lebih baik lagi
}

// Switch statement: merupakan statement yang digunakan untuk mengevaluasi sebuah ekspresi terhadap beberapa nilai yang mungkin berbeda. Jika ekspresi yang dievaluasi sama dengan salah satu nilai yang diberikan, maka block kode yang sesuai akan dijalankan.
{
    const nilai = "A";

switch (nilai) {
  case "A":
    console.log("Nilai kamu sangat baik!");
    break;
  case "B":
    console.log("Nilai kamu baik!");
    break;
  case "C":
    console.log("Nilai kamu cukup!");
    break;
  default:
    console.log("Maaf, kamu belum lulus.");
    break;
}
//output: Nilai kamu sangat baik!
}

// Nullish Coalescing Operator (??) : operator ini digunakan untuk mengganti nilai null atau undefined dengan nilai lain yang kita tentukan. Contohnya:
{
    let name = undefined; //bisa juga pakai null
let result = name ?? "Anonymous";
console.log(result); // Output: "Anonymous"
}

// Short-Circuit Evaluation : teknik ini dapat digunakan untuk mengevaluasi dua nilai boolean. Teknik ini memanfaatkan operator logika && dan ||. Operator && digunakan untuk mengevaluasi dua nilai boolean, dan jika nilai pertama false, maka nilai kedua tidak akan dievaluasi lagi. Sedangkan operator || digunakan untuk mengevaluasi dua nilai boolean, dan jika nilai pertama true, maka nilai kedua tidak akan dievaluasi lagi. Contohnya:
/*catatan: 
true && true akan menghasilkan true
true && false akan menghasilkan false
false && true akan menghasilkan false
false && false akan menghasilkan false
true || true akan menghasilkan true
true || false akan menghasilkan true
false || true akan menghasilkan true
false || false akan menghasilkan false
*/
{
    let x = false;
let y = "Hello";

let result = x && y; // nilai result akan menjadi false, karena x sudah bernilai false
let result2 = x || y; // nilai result2 akan menjadi "Hello", karena x bernilai false, maka nilai kedua dievaluasi
}
//contoh lebih simpel:
{
    let x = true
    let z = true

    if (x === true && z === true){
        console.log(`ini adalah hasil dari true && true`) //output kesini karena true + true
    }
    if (x === true && z === false){
        console.log(`hasilnya akan false`) 
    } else {
        console.log(`dan turun kesini`) //outputnya kesini karena true + false
    }
    if (x === false && z === false){
        console.log(`gamungkin kesini karena hasilnya false. dia akan turun ke else`)
    }else {
        console.log(`turun kesini`) //output kesini
    }

    if (x === true || z === false){
        console.log('ini akan diprint, karena true + false = true dalam ||')
    }
    if (x === false || z === false){
        console.log('tidak akan keprint karena false + false dalam || akan menghasilkan output false')
    }
}
//dalam contoh tersebut kita juga memperagakan nested if, jadi apa itu nested if?
/*
Nested if adalah kondisi yang dimana terdapat beberapa kondisi if yang diletakkan satu sama lain secara bersarang (nested). Hal ini memungkinkan kita untuk melakukan beberapa kondisi dan melakukan tindakan yang berbeda tergantung pada kombinasi kondisi tersebut.

Contoh nested if: */
{
  let nilai = 80;
if (nilai >= 70) { //ini awal dari nestednya
  if (nilai >= 90) { //ini bagian dari nested
    console.log("Nilai Anda A");
  } else {
    console.log("Nilai Anda B");
  }
} else { //ini else dari if pertama
  console.log("Anda Tidak Lulus");
}
}

/*
Pada contoh di atas, terdapat dua kondisi if yang bersarang. Pertama, program akan mengevaluasi apakah nilai lebih besar atau sama dengan 70. Jika benar, program akan memeriksa apakah nilai lebih besar atau sama dengan 90. Jika kondisi ini benar, program akan mencetak "Nilai Anda A". Jika tidak, program akan mencetak "Nilai Anda B". Jika kondisi pertama salah, program akan mencetak "Anda Tidak Lulus".

Dalam contoh ini, nested if digunakan untuk mengevaluasi dua kondisi secara terpisah. Jika kita hanya menggunakan satu kondisi if, kita tidak akan dapat menentukan apakah nilai tersebut cukup tinggi untuk mendapatkan nilai A atau hanya cukup untuk mendapatkan nilai B.
*/