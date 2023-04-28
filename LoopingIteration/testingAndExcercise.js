// // For Loop:

// // Level 1: Loop dengan jumlah iterasi tetap (menggunakan angka)
// // Buatlah sebuah program yang melakukan loop sebanyak 5 kali menggunakan for loop dan mencetak pesan "Ini adalah iterasi ke-n", dimana n adalah nomor iterasi saat ini.
{
    for (let i = 0; i < 5; i++) {
        console.log(`ini adalah iterasi ke-${i}`);
    }
}
// // Level 2: Loop dengan jumlah iterasi berubah (menggunakan variabel)
// // Buatlah sebuah program yang meminta inputan user berupa angka n, kemudian melakukan loop sebanyak n kali menggunakan for loop dan mencetak pesan "Ini adalah iterasi ke-n", dimana n adalah nomor iterasi saat ini.
{
    let input = 5;
    const userInput = input;
    for (let i = 0; i < userInput; i++) {
        console.log(`ini adalah iterasi ke-${i}`)        
    }
}
// // Level 3: Loop dengan operator increment/decrement yang berbeda
// // Buatlah sebuah program yang melakukan loop sebanyak 10 kali menggunakan for loop dan mencetak angka dari 10 sampai dengan 1.
{
    for (let i = 10; i > 0; i--) {
        console.log(`decrement, index ke-${i}`)
    }
}
// // Level 4: Nested Loop (for dalam for)
// // Buatlah sebuah program yang melakukan nested loop sebanyak 3x3 menggunakan for loop dan mencetak koordinat (x, y) dari setiap iterasi. Contoh output yang diharapkan:
// // (0, 0)
// // (0, 1)
// // (0, 2)
// // (1, 0)
// // (1, 1)
// // (1, 2)
// // (2, 0)
// // (2, 1)
// // (2, 2)
{
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++){
            console.log(`(${i}), (${j})`)
        }
    }
}
// // Level 5: Loop dengan penggunaan break dan continue
// // Buatlah sebuah program yang melakukan loop sebanyak 10 kali menggunakan for loop, namun jika nomor iterasi tersebut merupakan bilangan genap, maka program akan melakukan continue, dan jika nomor iterasi tersebut merupakan bilangan ganjil, maka program akan mencetak pesan "Ini adalah iterasi ke-n", dimana n adalah nomor iterasi saat ini.
{
    for (let i = 0; i <= 10; i++){
        if (i % 2 === 0){
            continue;
        }else {
            console.log(`ini adalah iterasi ke-${i}`)
        }
    }
}
// // While Loop:

// // Level 1: Loop dengan jumlah iterasi tetap (menggunakan angka)
// // Buatlah sebuah program yang melakukan loop sebanyak 5 kali menggunakan while loop dan mencetak pesan "Ini adalah iterasi ke-n", dimana n adalah nomor iterasi saat ini.

{
    let i = 0
    while (i < 5) {
        console.log(`ini adalah iterasi ke-${i}`)
        i++
    }
}

// // Level 2: Loop dengan jumlah iterasi berubah (menggunakan variabel)
// // Buatlah sebuah program yang meminta inputan user berupa angka n, kemudian melakukan loop sebanyak n kali menggunakan while loop dan mencetak pesan "Ini adalah iterasi ke-n", dimana n adalah nomor iterasi saat ini.

{
    let userInput = 10
    let i = 0
    while (i < userInput) {
        console.log(`ini adalah iterasi ke-${i}`)
    i++
    }
}

// // Level 3: Loop dengan operator increment/decrement yang berbeda
// // Buatlah sebuah program yang melakukan loop sebanyak 10 kali menggunakan while loop dan mencetak angka dari 10 sampai dengan 1.
{
    let i = 10
    while (i > 0) {
        console.log(`ini adalah iterasi ke-${i}`);
        i--;
    }
}
// // Level 4: Nested Loop (while dalam while)
// // Buatlah sebuah program yang melakukan nested loop sebanyak 3x3 menggunakan while loop dan mencetak koordinat (x, y) dari setiap iterasi. Contoh output yang diharapkan:
// // (0, 0)
// // (0, 1)
// // (0, 2)
// // (1, 0)
// // (1, 1)
// // (1, 2)
// // (2, 0)
// // (2, 1)
// // (2, 2)

{
    let i = 0
    while (i < 3){
        let j = 0;
        while (j < 3){
            console.log(`(${i}), (${j})`)
            j++
        }
    i++
    }
}

// // Level 5: Loop dengan penggunaan break dan continue
// // Buatlah sebuah program yang melakukan loop sebanyak 10 kali menggunakan while loop, namun jika nomor iterasi tersebut merupakan bilangan genap, maka program akan melakukan continue, dan jika nomor iterasi tersebut merupakan bilangan ganjil, maka program akan mencetak pesan "Ini adalah iterasi ke-n", dimana n adalah nomor iterasi saat ini.
{

    let i = 0
    while (i < 10){
        i % 2 === 0 ? i++ : (() => {console.log(`a: ini adalah iterasi ke-${i}`); i++;})();
        }        
}

//contoh biasa:
{
    let i = 0;
    while (i < 10){
        if (i % 2 === 0){
            i++
            continue;
        }else {
            console.log(`b: ini adalah iterasi ke-${i}`)
        }
    i++
    }
}


// // Do While:

// // Level
// 1: Loop dengan jumlah iterasi tetap (menggunakan angka)
// Buatlah sebuah program yang melakukan loop sebanyak 5 kali menggunakan do while loop dan mencetak pesan "Ini adalah iterasi ke-n", dimana n adalah nomor iterasi saat ini.
{
    let i = 0
    do {
        console.log(`do while ini adalah iterasi ke-${i}`)
        i++
    } while (i < 5)
}

// Level 2: Loop dengan jumlah iterasi berubah (menggunakan variabel)
// Buatlah sebuah program yang meminta inputan user berupa angka n, kemudian melakukan loop sebanyak n kali menggunakan do while loop dan mencetak pesan "Ini adalah iterasi ke-n", dimana n adalah nomor iterasi saat ini.
{
    let userInput = 5
    let index = 0
    do {
        console.log(`lvl 2 do while, ini adalah iterasi ke-${index}`)
        index++
    } while (index < 5)
}

// Level 3: Loop dengan operator increment/decrement yang berbeda
// Buatlah sebuah program yang melakukan loop sebanyak 10 kali menggunakan do while loop dan mencetak angka dari 10 sampai dengan 1.
{
    let index = 10
    do {
        console.log(`lvl 3 do while, ini adalah iterasi ke-${index}`)
        index--
    } while (index > 0)
}
// Level 4: Nested Loop (do while dalam do while)
// Buatlah sebuah program yang melakukan nested loop sebanyak 3x3 menggunakan do while loop dan mencetak koordinat (x, y) dari setiap iterasi. Contoh output yang diharapkan:
// (0, 0)
// (0, 1)
// (0, 2)
// (1, 0)
// (1, 1)
// (1, 2)
// (2, 0)
// (2, 1)
// (2, 2)

{ //ini lebih tepatnya kayak while trus dikasih do while
    let i = 0
    let j = 0
    while (i < 3){
        do {
            console.log(`lvl 4 do while (${i}), (${j})`)
            j++
        } while (j < 3)
        j = 0
        i++
    }
}
//jawaban yang lebih mudah dimengerti versi chatGPT
{
    {
        let i = 0;
        let j = 0;
        do {
            do {
                console.log(`(${i}, ${j})`);
                j++;
            } while (j < 3);
            j = 0; // reset j ke 0 setelah loop bagian dalam selesai
            i++;
        } while (i < 3);
    }
    
}

// Level 5: Loop dengan penggunaan break dan continue
// Buatlah sebuah program yang melakukan loop sebanyak 10 kali menggunakan do while loop, namun jika nomor iterasi tersebut merupakan bilangan genap, maka program akan melakukan continue, dan jika nomor iterasi tersebut merupakan bilangan ganjil, maka program akan mencetak pesan "Ini adalah iterasi ke-n", dimana n adalah nomor iterasi saat ini.

{
    let index = 0
    do {
        if (index % 2 === 0) {
            index++
            continue; //harus dikasih continue agar dia jalan setelah dapet hasilnya. inget kenapa di continue karena ini pakenya do.
        }
        console.log(`lvl 5 do while. ini adalah iterasi ke-${index}`)
        index++
    } while (index < 10)
}

// For Of:

// Level 1: Loop array sederhana
// Buatlah sebuah program yang melakukan loop pada array [1, 2, 3, 4, 5] menggunakan for of dan mencetak setiap elemen array.
{
    let arr = [1, 2, 3, 4, 5]
    // console.log(`ini arr: ${arr}`)
    for (let x of arr){
        console.log(`ini adalah isi dari iterasi array di x: ${x}`)
    }
}
// Level 2: Loop array dengan object sebagai isinya
// Buatlah sebuah program yang melakukan loop pada array [{name: "John", age: 25}, {name: "Jane", age: 30}, {name: "Bob", age: 35}] menggunakan for of dan mencetak setiap object beserta propertinya.
{
    let arrayOfObject = [{name: "John", age: 25}, {name: "Jane", age: 30}, {name: "Bob", age: 35}]

    for (let objEach of arrayOfObject){
        console.log(objEach)
    }
}
//testing coba coba:
{
    let arrayOfObject = [{name: "John", age: 25}, {name: "Jane", age: 30}, {name: "Bob", age: 35}]

    let tampung = []
    for (let objEach of arrayOfObject){
        objEach.Mobil = "honda"
        tampung.push(objEach)
    }
    // console.log(tampung)
    for (let keys of tampung){
        if (keys.age <= 30){
            keys.Mobil = `Problably lCGC`
        }
    }
    console.log(tampung)
}
// Level 3: Loop array dengan operator break dan continue
// Buatlah sebuah program yang melakukan loop pada array [1, 2, 3, 4, 5] menggunakan for of, namun jika elemen array tersebut merupakan bilangan genap, maka program akan melakukan continue, dan jika elemen array tersebut merupakan bilangan ganjil, maka program akan mencetak pesan "Ini adalah angka ganjil ke-n", dimana n adalah nomor urut elemen tersebut.

{
    let arr = [1, 2, 3, 4 ,5]
    for (let value of arr){
        if (value % 2 === 0){
            continue;
        }else {
            console.log(`Ini adalah angka ganjil ke-${value}`)
        }
    }
}

// Level 4: Nested Loop (for of dalam for of)
// Buatlah sebuah program yang melakukan nested loop pada array [[1, 2], [3, 4], [5, 6]] menggunakan for of dan mencetak setiap elemen pada array yang ada di dalamnya.

{
    let arrMult = [[1, 2], [3, 4], [5, 6]]
    for (let value of arrMult){
        for (let insideValue of value){
            console.log(insideValue)
        }
    }
}

// Level 5: Loop array multidimensional
// Buatlah sebuah program yang melakukan loop pada array [[1, 2, 3], [4, 5], [6, 7, 8, 9]] menggunakan for of dan mencetak setiap elemen pada array yang ada di dalamnya.

{
    let arr = [[1, 2, 3], [4, 5], [6, 7, 8, 9]]
    for (let value of arr){
        // console.log(value)
        for (let insideValue of value){
            console.log(insideValue)
        }
    }
}

// Level 1:

// Buatlah sebuah fungsi yang menerima parameter sebuah objek dan menggunakan iterasi for...in untuk mencetak semua properti dari objek tersebut ke dalam konsol.
{
    let obj = {
        nama : `damara`,
        age : 26,
        hobby : `tidur`            
    }
    for (let keys in obj){
        console.log(obj[keys])
    }
}
// Level 2:
// 2. Buatlah sebuah program yang meminta user memasukkan data diri (nama, usia, dan jenis kelamin) dalam sebuah objek. Program tersebut kemudian menggunakan iterasi for...in untuk mencetak semua data yang dimasukkan oleh user ke dalam konsol.
{
  let userInput = {nama : `zara`, age : 22, hobby: `nyetir`}
  for (let value in userInput){
  console.log(value + ' : ' + userInput[value])}
}

// Level 3:
// 3. Buatlah sebuah program yang menerima sebuah array yang berisi objek-objek mahasiswa (masing-masing objek memiliki properti nama dan nilai-nilai ujian). Program tersebut kemudian menggunakan iterasi for...in untuk mencetak nama dan nilai ujian dari setiap mahasiswa ke dalam konsol.

{
    const mahasiswa = [
        { nama: 'Andi', nilai: 80 },
        { nama: 'Budi', nilai: 90 },
        { nama: 'Cindy', nilai: 85 }
      ];

      for (let value in mahasiswa){
        for (let keys in mahasiswa[value]){
            console.log(keys + " : " + mahasiswa[value][keys])
        }
      }
}

// Level 4:
// 4. Buatlah sebuah program yang menerima sebuah objek yang berisi daftar belanjaan (masing-masing properti objek adalah nama barang dan nilainya adalah harga barang tersebut). Program tersebut kemudian menggunakan iterasi for...in untuk menghitung total harga belanjaan dan mencetaknya ke dalam konsol.

{
    const daftarBelanja = [{nama : 'molto', harga : 2_500}, {nama : 'molto', harga : 2_500}, {nama : 'daia', harga : 3_500}, {nama : 'pingiwi', harga : 2_500}]

    let totalBelanjaan = 0
    for (let item in daftarBelanja){
        // console.log(daftarBelanja[item].harga)
        totalBelanjaan = totalBelanjaan + daftarBelanja[item].harga
    }
    console.log(totalBelanjaan)
}

// Level 5:
// 5. Buatlah sebuah program yang menerima sebuah array yang berisi objek-objek buah (masing-masing objek memiliki properti nama, harga, dan jumlah). Program tersebut kemudian menggunakan iterasi for...in untuk menghitung total harga dari semua buah yang ada dalam array dan mencetaknya ke dalam konsol.

{
    let buahBuahan = [{nama : 'apel', harga: 1_000, jumlah: 2}, {nama: `pir`, harga: 2000, jumlah: 3}, {nama: 'melon', harga: 15000, jumlah: 1}
    ]

    
    let jumlahHarga = 0 //nanti jumlahHarga = harga * jumlah buah
    for (let value in buahBuahan){
        // console.log(buahBuahan[value].jumlah)
        jumlahHarga += buahBuahan[value].harga * buahBuahan[value].jumlah

    }
    console.log(jumlahHarga)
}