let exercise = '<>>>>>'
let userInput = '<<><>>'

// Your code here
console.log(exercise.length)
console.log(userInput.length)


if (exercise.length !== userInput.length){
    console.log('Input yang anda masukkan tidak lengkap!')
}else {
    let hasil = 0
    for (i = 0; i < userInput.length; i++){
        if (exercise[i] === userInput[i]){
            hasil++}
       }console.log(hasil)

       if (hasil === exercise.length){
        console.log('nilai anda perfect!')
       }else if (hasil < 8 && hasil > 3)
console.log('yaa ini mah b aja')
    }