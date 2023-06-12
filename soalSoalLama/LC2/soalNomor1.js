let unicorn = [
    ["Q1", "Q2", "Q3", "Q4", "Start-Up"],
    [14970, 14950, 14985, 15004, "Bikilipik"],
    [14860, 14769, 14890, 15050, "Tikipidia"],
    [14780, 15010, 15002, 14630, "Triviliki"],
    [14880, 14940, 14780, 15085, "Gijik"],
  ];

  function calculateValuation(startup){
  
  let valuasiTerkecil = Infinity
  let valuasiTerbesar = 0
  let result = []
  for (let i = 1; i < startup.length;i++){
    // console.log(startup[i] + ` : indexnya, di perulangan ke: ` + i)
    let accRow = startup[i]
    let sum = 0
    for (let j = 0; j < accRow.length - 1; j++){
      sum += accRow[j]
      // console.log(`ini index j: ` + accRow[i] + ` dan ini sum: ` + sum)
    }
    let rataRata = sum / (accRow.length - 1)
    // console.log(rataRata)
    result.push(rataRata)
  
  if (rataRata < valuasiTerkecil){
    valuasiTerkecil = rataRata
    
  }else if (rataRata > valuasiTerbesar){
    valuasiTerbesar = rataRata
  }
}
return [valuasiTerkecil, valuasiTerbesar]



}





  console.log(calculateValuation(unicorn));
// [ 14855.5, 14977.25 ] ini expected outputnya
