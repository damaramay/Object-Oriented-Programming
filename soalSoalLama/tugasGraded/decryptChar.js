function decryptJobCharacters(arr) {
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


  
  console.log(decryptJobCharacters([ 'idaz', 'ivtumfs', 'anggara', 'ijqtufs', 'dear', 'ibdlfs' ]));
  // [ 'idaz', 'hustler', 'anggara', 'hipster', 'dear', 'hacker' ]
  console.log(decryptJobCharacters([ 'kurnia', 'ijqtufs', 'adi', 'ibdlfs', 'anggara', 'ivtumfs' ]));
  // [ 'kurnia', 'hipster', 'adi', 'hacker', 'anggara', 'hustler' ]