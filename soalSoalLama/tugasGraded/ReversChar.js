function reverseJobCharacters(arr) {
    // Your code here
let Result = []
for (let i = 0; i < arr.length; i++){
    // console.log(arr[i] + ` :berhasil, hitungan di: ` + i)
    let reversing = arr[i]
    // console.log(reversing) //aman dan setiap string ke-print
      for (let j = 0; j < reversing.length; j++){
        if (i % 2 !== 0){
        let rev = ''
        for (let x = reversing.length - 1; x >= 0; x--){
        rev += reversing[x]
        }
        Result.push(rev)
    }else {
        Result.push(reversing)
    }
}  

return Result
}
}

  
  console.log(reverseJobCharacters([ 'idaz', 'sfmutvi' ], [ 'anggara', 'sfutqji' ], [ 'dear', 'sfldbi' ]));
  // [ 'idaz', 'ivtumfs', 'anggara', 'ijqtufs', 'dear', 'ibdlfs' ]
  // console.log(reverseJobCharacters([ 'kurnia', 'sfutqji', 'adi', 'sfldbi', 'anggara', 'sfmutvi' ]));
  // [ 'kurnia', 'ijqtufs', 'adi', 'ibdlfs', 'anggara', 'ivtumfs' ]

// let str = 'sfmutvi'
// let rev = ''
//   for (let x = str.length - 1; x >= 0; x--){
//     rev += str[x]
//   }
//   // console.log(rev)

//   let ifAja = 2 % 2 === 0
//   console.log(ifAja)