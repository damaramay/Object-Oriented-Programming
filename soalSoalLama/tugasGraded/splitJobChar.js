function splitJobCharacters(str) {
    // Your code here
let splitToArray = str.split(',') //split , karena ternyata str satu string doang
  // console.log(splitToArray)
let SplittedChar = []
for (let i = 0; i < splitToArray.length; i++){
    let Result = splitToArray[i].split('-')
    SplittedChar = SplittedChar.concat(Result)
}
return SplittedChar
} 
  
  
  

  
  // console.log(splitJobCharacters('idaz-sfmutvi,anggara-sfutqji,dear-sfldbi'));
  // [ [ 'idaz', 'sfmutvi' ], [ 'anggara', 'sfutqji' ], [ 'dear', 'sfldbi' ] ]
  

  // console.log(splitJobCharacters('idaz-sfmutvi,anggara-sfutqji,dear-sfldbi'));
// [ 'idaz', 'sfmutvi', 'anggara', 'sfutqji', 'dear', 'sfldbi' ]
//   console.log(splitJobCharacters('kurnia-sfutqji,adi-sfldbi,anggara-sfmutvi'));
  // [ 'kurnia', 'sfutqji', 'adi', 'sfldbi', 'anggara', 'sfmutvi' ]

// let str = 'idaz-sfmutvi'
// let strsplit = str.split('-')
// console.log(strsplit)

let percobaan1 = ['array1', 'array2']
let percobaan2 = ['array3', 'dan array 4']
let pushing = pushing.push(percobaan1)
console.log(pushing)