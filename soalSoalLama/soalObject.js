// /**
//  * generateMatchResult
//  * adalah sebuah fungsi yang akan menerima 2 parameter 
//  * - data string berisi nama sebuah club dan 
//  * - satu buah array multi dimensi berisi kumpulan pertandingan yang telah dilaksanakan. 
//  * Function ini akan menentukan hasil pertandingan dari sebuah team.
//  * 
//  * Array multi dimensi yang dikirimkan akan memiliki format:
// Index 0 => merupakan club yang tanding dengan status team home
// Index 1 => merupakan jumlah score yang didapatkan dengan team home
// Index 2 => merupakan club yang tanding dengan status team away
// Index 3 => merupakan jumlah score yang didapatkan dengan team away
//  * 

// Output dari function ini akan mengembalikan sebuah object dengan key sebuah club yang merupakan lawan tanding dari club tersebut 
// dan memiliki value status hasil pertandingan yang dilaksanakan oleh club tersebut, status pertandingannya adalah:

// W => Win jika club tersebut memiliki jumlah score lebih dari team lawannya
// L => Lose jika club tersebut memiliki jumlah score lebih kecil dari team lawannya

// CONTOH:
// input:
// club: 'clippers',
// matches: input

// output:
// { suns: 'L', gsw: 'W', mavericks: 'W' }
//  */

// const input = [
//     ["Team 1", "ScoreHome", "Team 2", "ScoreAway"],
//     ["clippers", 113, "suns", 115],
//     ["lakers", 122, "mavericks", 112],
//     ["gsw", 97, "clippers", 118],
//     ["suns", 131, "lakers", 101],
//     ["mavericks", 104, "gsw", 105],
//     ["clippers", 120, "mavericks", 93],
//     ["lakers", 101, "gsw", 106],
//     ["suns", 121, "mavericks", 119]
// ]

// function generateMatchResult(club, matches) {
//     // code here
// }

// /**
//  * matchStatus
//  * Function ini menerima 1 parameter berupa objek hasil result pertandingan sebuah club
//  * Function ini akan mengembalikan output berupa objek dengan 2 property
//  * - W (berisi jumlah result W dari sebuah tim)
//  * - L (berisi jumlah result L dari sebuah tim)
//  * 
//  * CONTOH
//  * input:
//  * result: { suns: 'L', gsw: 'W', mavericks: 'W' }
//  * 
//  * output: 
//  * { W: 2, L: 1 }
//  */
// function matchStatus(result) {
//     // code here
// }

// /* 
// Function ini merupakan main function yang akan memanggil kedua function yang sudah dibuat sebelumnya. Function ini akan menerima dua buah parameter berupa sebuah string berisi nama club, dan array multi dimensi merupakan kumpulan pertandingan yang terlaksana.

// Ketika tidak ada club yang dikirimkan sebagai parameter pada function ini, maka tampilkan sebuah pesan:
// "Tidak ada klub yang akan di proses"

// Function ini akan mengembalikan sebuah object yang memiliki properti:

// name => nama dari club
// match => kumpulan pertandingan yang sudah pernah dilakukan oleh club
// message => informasi mengenai hasil report club
// message yang akan ditampilkan akan memilki format:

// [nama club] berhasil menang [total menang] kali, dan kalah [total kalah] kali.
// */
// function clubReport(club, matches) {
//     // code here
// }

// console.log(clubReport('clippers', input));
// // {
// //     name: 'clippers',
// //     match: { suns: 'L', gsw: 'W', mavericks: 'W' },
// //     message: 'clippers berhasil menang 2 kali, dan kalah 1 kali.'
// // }

function groupingAnimals(arr) {
    let result = {};
    for (let i = 0; i < arr.length; i++) {
        if (result[arr[i][0]] === undefined) {
            result[arr[i][0]] = [];
        }
        result[arr[i][0]].push(arr[i]);
    }
}

let animals = ['kambing', 'ayam', 'badak', 'kucing', 'angsa', 'kuda', 'bebek'];
console.log(groupingAnimals(animals));