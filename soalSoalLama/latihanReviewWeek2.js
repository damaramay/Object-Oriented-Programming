let nilai = [
    ['andi', 78, 86, 77],
    ['budi', 87, 90, 100],
    ['anton', 76, 80, 72],
    ['acong', 100, 81, 73],
    ['rendy', 67, 98, 99]
]

console.log(nilai[0][0])


    let penampungArray = []
    let counter = 0
    for (i = 0; i < nilai.length; i++){
        if (counter < nilai.length){
            penampungArray.push(nilai[counter][counter])
        }
    }
