let wahana = "Wahana barat daya"
let usia = 51
let saldo = 150000

// code here

if (usia < 2){
    console.log('anda bocil')
}

if (wahana !== "Wahana Utara" || wahana !== 'Wahana Selatan'){
    console.log('lu kemana bos?')
}

if (wahana === 'Wahana Utara'){
    if (usia >= 2 && usia <= 12){
        if (saldo > 85000){
            console.log(`Sisa saldo anda adalah RP ${saldo - 85000},00. Selamat bermain.`)
        }else if (saldo < 85000){
            console.log(`Saldo anda kurang RP ${85_000 - saldo},00. Tidak cukup untuk membeli tiket.`)
        }
    }else if (usia > 12 && usia < 50){
        if (saldo > 125_000){
            console.log(`Sisa saldo anda adalah RP ${saldo - 125000},00. Selamat bermain.`)
        }else if (saldo < 125000){
            console.log(`Saldo anda kurang RP ${125_000 - saldo},00. Tidak cukup untuk membeli tiket.`)
        }
    }else if (usia >= 50){
        if (saldo > 125_000){
            console.log(`Sisa saldo anda adalah RP ${saldo - 125000},00. Selamat bermain.`)
        }else if (saldo < 125000){
            console.log(`Saldo anda kurang RP ${125_000 - saldo},00. Tidak cukup untuk membeli tiket.`)
        }
    }
        
    }if (wahana === 'Wahana Selatan'){
        if (usia >= 2 && usia <= 12){
            if (saldo > 85000){
                console.log(`Sisa saldo anda adalah RP ${saldo - 85000},00. Selamat bermain.`)
            }else if (saldo < 85000){
                console.log(`Saldo anda kurang RP ${85_000 - saldo},00. Tidak cukup untuk membeli tiket.`)
            }
        }else if (usia > 12 && usia < 50){
            if (saldo > 125_000){
                console.log(`Sisa saldo anda adalah RP ${saldo - 125000},00. Selamat bermain.`)
            }else if (saldo < 125000){
                console.log(`Saldo anda kurang RP ${125_000 - saldo},00. Tidak cukup untuk membeli tiket.`)
            }
        }else if (usia >= 50){
            if (saldo > 125_000){
                console.log(`Sisa saldo anda adalah RP ${saldo - 125000},00. Selamat bermain.`)
            }else if (saldo < 125000){
                console.log(`Saldo anda kurang RP ${125_000 - saldo},00. Tidak cukup untuk membeli tiket.`)
            }
        }
    }


