//OBJECT
/*
Di dalam JavaScript, objek adalah struktur data yang berisi kumpulan pasangan key-value atau properti. Properti dapat berisi tipe data apapun, termasuk tipe data primitif seperti angka dan string, atau tipe data lain seperti array dan bahkan objek lain.

Contohnya, berikut adalah sebuah objek dalam JavaScript yang mewakili seorang mahasiswa:
*/
{
    const mahasiswa = {
        nama: 'John Doe',
        umur: 21,
        alamat: {
          jalan: 'Jl. Puri Indah',
          kota: 'Jakarta Barat'
        },
        mataKuliah: ['Web Programming', 'Database', 'Data Science']
      };
      console.log(mahasiswa) //outputnya akan object itu sendiri
      //cara mengaksesn value adalah pakai dot notation (variable.key)
      console.log(mahasiswa.nama)
      //tampilkan (variable.key) output: value


//Objek mahasiswa memiliki empat properti yang terdiri dari nama, umur, alamat, dan mataKuliah. Properti alamat adalah objek lagi yang memiliki dua properti lagi di dalamnya yaitu jalan dan kota. Properti mataKuliah adalah array yang berisi tiga nilai string. Untuk mengakses nilai dari sebuah properti pada objek, kita bisa menggunakan notasi titik atau notasi kurung siku.

//contoh penggunaan:

console.log(mahasiswa.nama); // Output: 'John Doe'
console.log(mahasiswa.alamat.jalan); // Output: 'Jl. Puri Indah'
console.log(mahasiswa['umur']); // Output: 21
console.log(mahasiswa.mataKuliah[0]); // Output: 'Web Programming'

//contoh yang diberikan ini sudah sangat ringkas. perhatikan tipe tipe data yang ada di dalam object tersebut ya

//testing ground:

console.log(mahasiswa[`nama`]) //hasilnya sama kayak .nama
}

/*
berikut ini adalah beberapa hal yang juga harus dimengerti tentang object.

Property: Seperti yang sudah dijelaskan sebelumnya, properti adalah pasangan key-value dalam sebuah objek. Cara mengaksesnya juga sudah dijelaskan diatas ya.

Method: Method adalah fungsi yang terdapat dalam sebuah objek. Method dapat diakses dan digunakan untuk memanipulasi nilai properti pada objek tersebut.

Constructor: Constructor adalah sebuah fungsi yang digunakan untuk membuat sebuah objek. Fungsi constructor biasanya didefinisikan dengan awalan huruf kapital, dan digunakan dengan operator new untuk membuat sebuah objek baru.

Inheritance: Inheritance atau pewarisan adalah konsep yang memungkinkan sebuah objek untuk mengambil properti dan method dari objek lain yang menjadi parent-nya. Hal ini memungkinkan kamu untuk membuat objek dengan kode yang lebih efisien dan terstruktur.

Prototype: Prototype adalah mekanisme yang digunakan untuk membuat pewarisan antar objek di JavaScript. Setiap objek di JavaScript memiliki sebuah prototype, dan ketika kamu mencoba mengakses properti atau method yang tidak ditemukan pada objek tersebut, JavaScript akan mencari properti atau method tersebut pada objek prototype-nya.

JSON: JSON atau JavaScript Object Notation adalah format data yang digunakan untuk mengirim dan menerima data di aplikasi web. JSON sangat mirip dengan objek di JavaScript, dan sering digunakan untuk bertukar data antar server dan aplikasi klien.
*/
//dibawah ini adalah pembahasan ringkas satu persatunya:


//catatan: sebelum ke bawah belajar dulu function
/////////////////////////////////////////////////////////////////////////////
//METHOD
// Dalam konteks objek, method adalah sebuah fungsi yang terdapat sebagai properti pada suatu objek. Method digunakan untuk mengakses atau memanipulasi data yang ada pada objek, serta melakukan tindakan atau operasi tertentu terhadap objek tersebut.

// Contoh penggunaan method pada objek adalah sebagai berikut:
{
    const mobil = {
    merek: 'Toyota',
    model: 'Avanza',
    tahun: 2018,
    hidupkanMesin: function() {
      console.log('Mesin mobil dinyalakan');
    },
    matikanMesin: function() {
      console.log('Mesin mobil dimatikan');
    }
  };
  
  // Memanggil method pada objek mobil
  mobil.hidupkanMesin(); // Output: "Mesin mobil dinyalakan"
  mobil.matikanMesin(); // Output: "Mesin mobil dimatikan"
} 
//penjelasan: 
//dalam object tidak hanya bisa membawa array atau object juga di dalamnya. tapi juga bisa membawa function juga. cara nyalain functionnya adalah dipanggil seperti ngambil isi dari object.

//nantinya method akan bisa dipakai juga di class.

/////////////////////////////////////////////////////////////////////////
//CONSTRUCTOR
/*
Constructor adalah sebuah fungsi khusus dalam sebuah objek yang digunakan untuk menginisialisasi objek yang baru dibuat. Fungsi constructor biasanya dinamai dengan nama yang sama seperti nama kelas objeknya.

Dalam JavaScript, constructor biasanya dibuat dengan menggunakan fungsi constructor, yaitu sebuah fungsi biasa yang ditulis menggunakan kata kunci function. Pada fungsi constructor, properti dan method dapat ditambahkan ke objek dengan menggunakan this.

Berikut ini contoh penggunaan constructor pada objek JavaScript:
*/

{
  function Mahasiswa(nama, jurusan, ipk) {
    this.nama = nama;
    this.jurusan = jurusan;
    this.ipk = ipk;
    
    this.tampilkanInfo = function() {
      console.log("Nama: " + this.nama + ", Jurusan: " + this.jurusan + ", IPK: " + this.ipk);
    }
  }
  
  var andi = new Mahasiswa("Andi", "Teknik Informatika", 3.5);
  andi.tampilkanInfo(); // output: Nama: Andi, Jurusan: Teknik Informatika, IPK: 3.5  
}

