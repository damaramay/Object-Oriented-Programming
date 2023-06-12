function splitJobCharacters(str){
    // Your code here
    let splitToArray = str.split(',') //split , karena ternyata str satu string doang
  //   console.log(splitToArray)
  let SplittedChar = []
  for (let i = 0; i < splitToArray.length; i++){
      let Result = splitToArray[i].split('-')
      SplittedChar = SplittedChar.concat(Result)
  }
  return SplittedChar
  }
  
  
  function reverseJobCharacters(arr) {
    // Your code here
    let Result = []
  for (let i = 0; i < arr.length; i++){
      // console.log(arr[i] + ` :berhasil, hitungan di: ` + i)
      let reversing = arr[i]
      // console.log(reversing) //aman dan setiap string ke-print
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
  
  
  function decryptJobCharacters(arr){
    // (ex: I -> H, A -> Z, D -> C, O -> N, S -> R, T -> S, Z -> Y)
    // Your code here
    let Result = [] //sebagai hasil push array
   
      for (let i = 0; i < arr.length; i++){
      // console.log(arr[i] + ` : index arr, angka ` + i)
      if (arr[i] === 'ivtumfs'){
          Result.push('hustler')
      }else if (arr[i] === 'ijqtufs'){
          Result.push('hipster')
      }else if (arr[i] === 'ibdlfs'){
          Result.push('hacker')
      }else{
          Result.push(arr[i])
      }  
   } 
  return Result
  }
  
  
  function makingDreamTeam (arr){
    // Your code here
    let theTeam = []
      for (let i = 0; i < arr.length - 1; i += 2){
          // console.log(arr[i] + `: ini kalau misalnya i+2, sekarang hitungan di: ` + i)
          theTeam.push([arr[i], arr[i + 1]])
              
          }
          return theTeam
  }
  
  
  function startUpMatchMaking(str){
    // Your code here
  let splittedChar = splitJobCharacters(str)
  // console.log(splittedChar)
  let reversedChar = reverseJobCharacters(splittedChar)
  // console.log(reversedChar)
  let decryptJob = decryptJobCharacters(reversedChar)
  // console.log(decryptJob)  
  let theTeam = makingDreamTeam(decryptJob)
  // console.log(theTeam)  
  
  if (theTeam.length < 3) {
          return `Minimum 3 members in the team`
      } else {
          let hustler = 0
          let hipster = 0
          let hacker = 0
          for (let i = 0; i < theTeam.length; i++) {
              if(theTeam[i][1] === `hustler`) {
                  hustler ++
              } else if (theTeam[i][1] === `hipster`) {
                  hipster ++
              } else if (theTeam[i][1] === `hacker`) {
                  hacker ++
              }
          }
          if (hustler >= 1 && hipster >= 1 && hacker >= 1) {
              return `Match your Dream Start-Up Team`
          } else {
              return `The job composition in the team is not suitable`
          }
      }
    }
  
  
  // do not change this code below
  var fs = require("fs");
  var input = fs.readFileSync(process.stdin.fd, "utf-8").trim();
  
  console.log(startUpMatchMaking(input));