/*
    =========
    sumColumn
    =========
    [INSTRUCTION]
    program sumRow adalah program yang dapat menjumlahkan angka per column
    pada array multidimensi. masing - masing row bisa memiliki jumlah row yang 
    berbeda
    [EXAMPLE]
    input: 
    [
     [5],
     [2,  5, 12, 8],
     [4, 56,  3]
    ]
    cara menjumlahkannya, jumlahkan angka - angka tersebut dengan column yang sama.
    maka yang di jumlahkan adalah 
    column 1 => 5 + 2 + 4 = 11 
    column 2 => 5 + 56 = 61
    column 3 => 12 + 3 = 15 
    column 4 => 8 = 8
    hasil masing - masing penjumlahan disetiap column di masukkan kedalam 1 array
    output :
    [11, 61, 15, 8 ]
*/
// function sumColumn(arr){
//     let penampungArray = []
//     for (let i = 0; i < arr.length ; i++){ //untuk ngeakses array 1D 
//         let perElemen = arr[i] //buat per elemen 
//         for (let j = 0; j < perElemen.length; j++){
//             if (penampungArray[j] === undefined){
//                 penampungArray.push(perElemen[j]) 
//             }else {
//                 penampungArray[j] += perElemen[j]
//             }
//         }
//     }

// }

function sumColumn(arr){
    let column = []
    for (let i = 0; i < arr.length; i++){
        let row = arr[i]
        for (let j = 0; j < row.length; j++){
            if (column[j] === undefined){
                column.push([row[j]])
              
            }else{
                column[j].push(row[j])
            }
            }
        }
        console.log(column)
    }



console.log(sumColumn(
    [['manusia'], 
    ['kucing', 'kera', 'kuda', 'anjing'], 
    ['kadal', 'cicak']]
    //1           2           3
)) // [11, 61, 15, 8 ]
// console.log(sumColumn([
//     [3,5,12,6],
//     [1,7,4,3,8,4,9],
//     [8,5,8],
//     [4,7,8,2,8,3]
// ])) 
// [16, 24, 32, 11, 16, 7, 9]