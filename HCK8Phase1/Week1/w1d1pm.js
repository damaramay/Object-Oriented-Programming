let arrayBaru = [
    23, 98,  3, 22, 11,
    53, 45, 80,  0, 72
  ]
// contohArray.forEach(elementArray)
let result = []
arrayBaru.forEach((el) => {result.push(el * 2)})
console.log(result)
//berarti ini akses isi dari arrayBaru lalu setiap isinya bisa dimodifikasi asalkan dikeluarkan dan dipindahkan ke lemari baru

let arrayBagian2 = [
    46, 196,   6, 44,  22,
   106,  90, 160,  0, 144
 ]

 console.log(arrayBagian2.map((el) => {return el * 2}))//harus pake return. kalau misalkan gapake nanti undefined. lalu kalau ini bisa langsung modifikasi arrayBagian2