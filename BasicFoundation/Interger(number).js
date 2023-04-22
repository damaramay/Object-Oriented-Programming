//CHAPTER 2, INTERGER / NUMBER
/*
Integer adalah tipe data numerik di JavaScript yang merepresentasikan bilangan bulat tanpa koma desimal. Pada JavaScript versi sebelum ES6 (ECMAScript 2015), tidak ada tipe data khusus untuk integer, sehingga bilangan bulat juga direpresentasikan dengan tipe data Number. Namun, pada ES6, sebuah tipe data baru bernama BigInt diperkenalkan, yang dapat merepresentasikan bilangan bulat dengan presisi yang sangat tinggi.

Integer adalah tipe data numerik di JavaScript yang merepresentasikan bilangan bulat tanpa koma desimal. Pada JavaScript versi sebelum ES6 (ECMAScript 2015), tidak ada tipe data khusus untuk integer, sehingga bilangan bulat juga direpresentasikan dengan tipe data Number. Namun, pada ES6, sebuah tipe data baru bernama BigInt diperkenalkan, yang dapat merepresentasikan bilangan bulat dengan presisi yang sangat tinggi.
*/
{
    const num1 = 10n;
    const num2 = 9007199254740993n; // bilangan bulat yang lebih besar dari 2^53-1
    console.log(num1, num2)
}
/*

BASIC OPERATOR (Contoh menggunakan bigInt, kalau angka biasa hilangin saja "n"-nya)
Untuk melakukan operasi matematika dengan nilai BigInt, kita menggunakan operator matematika seperti biasa, seperti +, -, *, /, dan %. Namun, perlu diingat bahwa operasi matematika antara BigInt dengan Number atau BigInt dengan BigInt harus dilakukan dengan operator yang sesuai.
*/
{
    const num1 = 10n;
    const num2 = 20n;
    const num3 = num1 + num2;
    const num4 = num2 - num1;
    const num5 = num1 * num2;
    const num6 = num2 / num1;
    const num7 = num2 % num1;
    console.log(num3); // Output: 30n
    console.log(num4); // Output: 10n
    console.log(num5); // Output: 200n
    console.log(num6); // Output: 2n
    console.log(num7); // Output: 0n
}
/////////////////////////////////////////////////////////////////////////////

//2.2 Build in Function dalam Interger/Number

// toFixed(): Mengembalikan string yang mewakili bilangan dengan angka desimal tetap (fixed-point).
{
    const num = 3.14159;
    console.log(num.toFixed(2));
} // Output: "3.14"

// toPrecision(): Mengembalikan string yang mewakili bilangan dengan panjang angka signifikan tertentu.
{
    const num = 1234.56789;
    console.log(num.toPrecision(5));
} // Output: "1234.6"

// toString(): Mengembalikan string yang mewakili bilangan dalam format desimal.
{
    const num = 1234;
    console.log(num.toString());
} // Output: "1234"

// parseInt(): Mengubah string menjadi bilangan bulat.
{
    const str = "10";
    console.log(parseInt(str));
} // Output: 10

// parseFloat(): Mengubah string menjadi bilangan pecahan.
{
    const str = "3.14159";
    console.log(parseFloat(str));
} // Output: 3.14159

//isNaN(): Memeriksa apakah suatu nilai bukan angka (Not-a-Number).
{
    const num = 10;
    console.log(isNaN(num)); // Output: false

    const str = "abc";
    console.log(isNaN(str));
} // Output: true

// isFinite(): Memeriksa apakah suatu nilai terbatas (finite) atau tidak.
{
    const num1 = 10;
    console.log(isFinite(num1)); // Output: true

    const num2 = Infinity;
    console.log(isFinite(num2));
} // Output: false

// Math.abs(): Mengembalikan nilai absolut dari suatu bilangan.
{
    const num = -10;
    console.log(Math.abs(num)); // Output: 10
}

// Math.pow(): Mengembalikan hasil dari suatu bilangan yang DIPANGKATKAN dengan bilangan tertentu.
{
    const num = 2;
    console.log(Math.pow(num, 3)); // Output: 8
}

// Math.sqrt(): Mengembalikan akar kuadrat dari suatu bilangan.
{
    const num = 16;
    console.log(Math.sqrt(num)); // Output: 4
}

// Math.floor(): Mengembalikan bilangan bulat terbesar yang kurang dari atau sama dengan suatu bilangan.
{
    const num = 3.6;
    console.log(Math.floor(num)); // Output: 3
}

// Math.ceil(): Mengembalikan bilangan bulat terkecil yang lebih besar dari atau sama dengan suatu bilangan.
{
    const num = 3.6;
    console.log(Math.ceil(num)); // Output: 4
}

// Math.random(): Mengembalikan suatu bilangan acak antara 0 (inklusif) dan 1 (eksklusif). catatan: Math.random() ini sering digunakan untuk membuat hasil yang gacha, nanti ditambahin conditional dan looping
{
    console.log(Math.random()); // Output: bilangan acak antara 0 dan 1
}

// Math.round(): Mengembalikan bilangan bulat terdekat dari suatu bilangan.
//catatan: ini akan lebih sering dipakai untuk pembulatan dari pada ceil/floor
{
    const num = 3.6;
    console.log(Math.round(num)); // Output: 4
}