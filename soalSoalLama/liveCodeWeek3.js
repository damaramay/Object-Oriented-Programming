var input = ['Singa:K','Kuda:H','Monyet:O']

//coba panggil masing masing index array:
console.log(input[1]) //akan ngambil kuda doang, tugasnya ilangin
//:H jika H terpilih
console.log('------------------------------')
console.log(input[1].length)
console.log('------------------------------')

let herbivor = 'Kuda:H'
console.log(herbivor)
console.log('------------------------------')

let varPercobaan = input[1]
console.log(varPercobaan.split(':')[0]) //bisa pake split untuk ambil hewannya aja
console.log('------------------------------')

// let ambilTipe = ''
// let herbivora = ''
// for (let i = input.length - 1; i >= 0; i--){  //berarti hurufnya harus dibalik dulu abis itu distore untuk dapat K H Onya
//     ambilTipe += input[i]
//     for (let j = 0; j < ambilTipe.length; j++){
//         if (ambilTipe[j] === H){
//             herbivora += 
//         }
//     }
// }//ini untuk ngambil input (array) dari belakang
// console.log('------------------------------')
// console.log(ambilTipe)//berhasil dapet stringnya
// console.log(typeof(ambilTipe))
// let coba1 = 'JS ribet tapi bisalah harusnya'
// for (let j = coba1.length; j >= 0; j--){
//     console.log(coba1[j])
// }

// function getAnimals(arr) {

// }
// console.log(getAnimals(input));