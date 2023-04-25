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

{
    let i = 0
    let j = 0
    while (i < 3){
        do {
            console.log(`lvl 4 do while (${i}), (${j})`)
            j++
        } while (j < 3)
        i++
    }
}

// Level 5: Loop dengan penggunaan break dan continue
// Buatlah sebuah program yang melakukan loop sebanyak 10 kali menggunakan do while loop, namun jika nomor iterasi tersebut merupakan bilangan genap, maka program akan melakukan continue, dan jika nomor iterasi tersebut merupakan bilangan ganjil, maka program akan mencetak pesan "Ini adalah iterasi ke-n", dimana n adalah nomor iterasi saat ini.

{
    let 
}

// For Of:

// Level 1: Loop array sederhana
// Buatlah sebuah program yang melakukan loop pada array [1, 2, 3, 4, 5] menggunakan for of dan mencetak setiap elemen array.

// Level 2: Loop array dengan object sebagai isinya
// Buatlah sebuah program yang melakukan loop pada array [{name: "John", age: 25}, {name: "Jane", age: 30}, {name: "Bob", age: 35}] menggunakan for of dan mencetak setiap object beserta propertinya.

// Level 3: Loop array dengan operator break dan continue
// Buatlah sebuah program yang melakukan loop pada array [1, 2, 3, 4, 5] menggunakan for of, namun jika elemen array tersebut merupakan bilangan genap, maka program akan melakukan continue, dan jika elemen array tersebut merupakan bilangan ganjil, maka program akan mencetak pesan "Ini adalah angka ganjil ke-n", dimana n adalah nomor urut elemen tersebut.

// Level 4: Nested Loop (for of dalam for of)
// Buatlah sebuah program yang melakukan nested loop pada array [[1, 2], [3, 4], [5, 6]] menggunakan for of dan mencetak setiap elemen pada array yang ada di dalamnya.

// Level 5: Loop array multidimensional
// Buatlah sebuah program yang melakukan loop pada array [[1, 2, 3], [4, 5], [6, 7, 8, 9]] menggunakan for of dan mencetak setiap elemen pada array yang ada di dalamnya.