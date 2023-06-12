// /*Payroll

// Restriction
// Hanya boleh menggunakan built-in function untuk menambahkan atau mengurangi data dalam array, 
// seperti .shift(), unShift(), push(), dan pop() dan built-in function untuk mengakses 
// isi dalam object seperti for..in, for…of, Object.keys(), dll

// Objectives
// Mampu memecahkan masalah yang diberikan
// Mampu mengakses array multidimensi
// Mampu menggabungkan looping dan conditional
// Mampu menerapkan nested loop

// Directions
// Startup Doel ingin membuat sistem untuk menghitung total gaji karyawan nya 
// berdasarkan total kehadiran dalam satu bulan.
// Bantulah Startup Doel untuk merealisasikan sistem menghitung total gaji karyawan dengan ketentuan 
// sebagai berikut!

// Diberikan sebuah function bernama payroll yang memiliki satu parameter monthlyAbsen 
// berupa array multidimensi, dan memiliki output berupa string.

// Contoh parameter input monthlyAbsen:

// const januaryAbsen = [
// ["H", "H", "H", "H", "H", "H"],
// [["A", "B"], ["L", 4], "H", ["L", 3], "H", "H"],
// ["H", "H", "H", "T", ["A", "C"], ["A", "C"]],
// ["H", "T", ["A", "S"], "H", "H", "H"],
// ]

// -- Terdapat 4 status kehadiran, yaitu:

// "H" = Hadir
// "T" = Terlambat
// ["L", 4] = Lembur, beserta total jam lembur nya.
// ["A", ...] = Tidak Hadir mempunyai 3 kategori, yaitu:
// "B" = Bolos
// "S" = Sakit
// "C" = Cuti

// NOTES

// Gaji Pokok Karyawan: Rp 5.000.000

// 1. Tiap status kehadiran sangat mempengaruhi sistem penggajian, yaitu:
// Jika dalam satu bulan penuh karyawan selalu hadir atau jumlah kehadiran (H) adalah 24 hari, 
// maka mendapatkan bonus gaji sebesar Rp 500.000.

// 2. Jika karyawan terlambat [T] maka akan mendapat pengurangan gaji sebesar Rp 50.000 per hari.

// 3. Jika karyawan melakukan lembur [L], maka akan mendapatkan 
// tambahan gaji sebesar Rp 50.000 per jam.

// 4. Jika karyawan tidak hadir [A] dengan keterangan:
// Bolos [B], maka akan mendapat pengurangan gaji sebesar Rp 200.000
// Sakit [S] dan Cuti [C] tidak akan mendapat pengurangan gaji.

// 5. Jika parameter monthlyAbsen kosong/undefined/null, maka akan mengembalikan Invalid Data!.
// 6. Jika panjang array dari parameter monthlyAbsen kurang dari 4, 
// maka akan mengembalikan Data absen tidak lengkap!.

// Buatlah kode program agar sistem penggajian startup Doel berjalan dengan sesuai yang diharapkan!
// */





// // do not change this code

// let januari = [ 
//     [ "H","H","H","T","H","H" ],        
//     [ "H","H",["A","C"],"H","H","H" ],
//     [ "H","H","H","H","H","H" ],
//     [ "H","H","H","H",["A","S"],"H" ]
//     ]
// // console.log(januari.length)

// // let month = ''
// // console.log(payroll(januari));

// // function payroll (monthlyAbsen) {
//     //write your code here
//     let totalHadir = 0
//     let bolos = 0
//     let sakit = 0
//     let cuti = 0
//     let telat = 0
//     let lembur = 0


//     for (let i = 0; i < januari.length; i++){
//        for (let j = 0; j < januari[i].length;j++){
//         if (januari[i][j][0] === 'H'){
//         totalHadir++
//        }else if (januari[i][j][0] === 'A'){
//             if (januari[i][j][1] === 'B'){
//                 bolos++
//             }else if (januari[i][j][1] === 'S'){
//                 sakit++
//             }else {
//                 cuti++
//             }
//        }else if (januari[i][j][0] === 'T'){
//         totalHadir++
//         telat++
//        }else if (januari[i][j][0] === "L"){
//             lembur++
//             totalHadir++
//        }
//        }
//     }


// console.log(`hadirnya ${totalHadir}, bolosnya ${bolos}, sakitnya ${sakit}, cutinya ${cuti}, dan lemburnya ${lembur}`)

// let gajiPokok = 5_000_000

// if (totalHadir === 24){
//     let bonus = 500_000
// }else{
//     bonus = 0
// }
// gajiPokok = gajiPokok + bonus + lembur*50000 - bolos*200_000 - telat*50_000

// console.log(gajiPokok)

let januari = [ 
        [ "H","H","H","T","H","H" ],        
        [ "H","H",["A","C"],"H","H","H" ],
        [ "H",["L", 2],"H","H","H","H" ],
        [ "H","H","H","H",["A","S"],"H" ]
        ]

        console.log(januari[2][1][1])