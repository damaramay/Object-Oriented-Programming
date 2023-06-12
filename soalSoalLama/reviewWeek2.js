//built in function

// function hello(){
//     return 'hi jing'
// }

// console.log(hello()) //untuk console.log harus pakai function()

//soal nomor 2

// function myName(name){
// //code block to be executed = ini isinya adalah statement

// console.log(`hi my name is ${name}, dan ini adalah function yang saya buat:`)

// }
// myName('damara')

// function resultDariAverage (parameternama, num1, num2, num3){
// let averageKelas1 = (num1+num2+num3) / 3
// let averagenya = averageKelas1 > 75 ? true : false
// return `nilai dari ${parameternama} adalah : ${Math.floor(averageKelas1)}`
// }



// let hasilDamara = resultDariAverage('damara', 75, 60, 89)

// console.log(hasilDamara)
// function testing (num1, num2, num3){
// return average = (num1+num2+num3) / 3
// }

// let konstanta1 = testing(5, 4, 7)
// let kontanta2 = testing(7,2,10)

// function cetakif (perhitungan1, perhitungan2){

// return yangDiPrint = (perhitungan1 + perhitungan2) / 2 >= 75 ? `selamat ya!` : `waduh nilai masih kurang`
// }

// console.log(cetakif(konstanta1, kontanta2))

// let num1 = 'lah'
// let num2 = 7
// let konstanta = num1 === num2 ? `berarti sama` : num1 > num2 ? `num1 berarti lebih besar`
// : num1 < num2 ? `berarti num1 lebih kecil` : 'selain itu gaada lagi';

// console.log(konstanta)
// let num1 = 0
// let kata = 'palindrome'

// for (let i = kata.length - 1; i >= 0; i--){
//     console.log(kata[i])
// }

// let student = {
//     name : 'damara'
//     kelas: '3'
//     hobbies: ['baca', 'coding']
// }

// console.log(student)

// function groupByAge(arr) {

// }

// console.log(groupByAge([2004, 1992, 1822, 2004, 1822, 1996, 1996]));

// /*
//     { '19': 2, '27': 2, '31': 1, '201': 2 }
// */
// soal tadi
// function groupByAge(arr) {
//     let groupAge = {};
//     for(let i = 0 ; i < arr.length ; i++){
//         if(groupAge.hasOwnProperty(2023-arr[i])){
//             groupAge[2023-arr[i]]++;
//         }else{
//             groupAge[2023-arr[i]] = 0;
//             groupAge[2023-arr[i]]++;
//         }
//     }return groupAge;
// }

// console.log(groupByAge([2004, 1992, 1822, 2004, 1822, 1996, 1996]));

// let film = ['titanic', 'lion king', 'simba', 'little mermaid', 'sundel bolong']
// //gua mau ambil masing masing index

// for (let i = 0; i < film.length; i++){
//     console.log(film[i])
// }

// let i = 0
// while (i < film.length){
//     console.log(film[i])
//     i++
// }

//coba buat function yang bisa menghitung masing masing score anak ipa 1


//buatlah function yang liat average masing-masing. kalau ada yang kurang dari
//6 nilai maka galulus

function averageScoreIpa1(scorenya){
    let i = 0 ; averagenya = 0;
    if (scorenya.length < 6){
        console.log(`maaf anda tidak lulus dan membutuhkan ${6 - scorenya.length} ulangan lagi untuk lulus`)
    }else{
        while (i < scorenya.length){
            averagenya += scorenya[i]
            i++
        }
        return `anda lulus dengan nilai ${Math.floor(averagenya / scorenya.length)}`
    }
}

let scoredamara = averageScoreIpa1([97, 55, 69, 77, 89, 98])
let scoreputri = averageScoreIpa1([77, 54, 66, 89, 87, 36])
let scorewilly = averageScoreIpa1([45,25,38])

console.log(scoredamara)
console.log(scoreputri)
// console.log(scorewilly)
