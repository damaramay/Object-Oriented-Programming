class View {
  static showCommandList(){
    return console.log(`node app.js\nnode app.js help\nnode app.js theaterList\nnode app.js customerList\nnode app.js checkSeat <id_theater>\nnode app.js buyTicket <id_theater> <nama_penonton> <gender_penonton> <seat_number> <tipe_ticket>\nnode app.js ticketInfo <id_penonton>\nnode app.js changeTicket <id_penonton> <id_theater> <nomor_kursi>\nnode app.js cancelTicket <id_penonton>\nnode app.js showCustomer <id_theather>`)
    
  }
  // Tambahkan sendiri method yang kamu butuhkan

  static showTheatherList(data) {
    const viewData = data.map(el =>{
      return {
        'Theater ID': el.id,
        'Theater Name': el.name,
        'Movie': el.movie
      }
    })
    console.table(viewData)
  }

  static showCustomerList(data){
    const viewData = data.map(el => {
      return {
        'ID': el.id,
        'Name': el.name,
        'Gender': el.gender,
        'Theater Name': el.ticket.theaterName
      }
    })
    console.table(viewData)
  }

  static checkSeat(data) {
    // console.log(data)
    console.log(`========================`)
    console.log(`ID       : ${data.id}`)
    console.log(`Name     : ${data.name}`)
    console.log(`Movie    : ${data.movie}`)
    console.log(`========================`)
    console.log(`       Seating Plan    \n`)
    
    let table = [[`A`, `B`, `C`, `D`, `E`, `F`]]
    
    for(let i = 0; i < 8; i++) {
      let row = []
      for(let j = 0; j < 6; j++) {
        row.push(' ')
      }
      table.push(row)
    }
    
    // console.log(data.customers[0])
    // console.log(data.customers[0].ticket.seatNumber.split('-'))
    data.customers.forEach((el) => {
      let seatNumber = el.ticket.seatNumber.split('-')
      // console.log(seatNumber)

      let col = table[0].findIndex(el => el === seatNumber[0]) 

      table[+seatNumber[1]][col] = `X`
    })
    console.table(table)
  }

  static showAddedCustomer(customer) {
    console.log(`Success buy ticket for seat ${customer.ticket.seatNumber} for ${customer.ticket.theaterName} to watch ${customer.ticket.movie}`)
  }

  static showTicketInfo(customer) {
    console.log(`This is ${customer.ticket.type} ticket are booked for ${customer.name} to watch ${customer.ticket.theaterName} to watch ${customer.ticket.movie} with seat number ${customer.ticket.seatNumber}`)
  }

  static showChangeTicket(data) {
    console.log(`Ticket has been change to ${data.ticket.theaterName} with seat ${data.ticket.seatNumber}`)
  }

  static showDeletedCustomer(data) {
    console.log(`Ticket for ${data.name} has been canceled`)
  }

  static showCustomerWithNickname(data) {
     // console.log(data)
     console.log(`========================`)
     console.log(`ID       : ${data.id}`)
     console.log(`Name     : ${data.name}`)
     console.log(`Movie    : ${data.movie}`)
     console.log(`========================`)
     console.log(`       Seating Plan    \n`)
     
     let table = [[`A`, `B`, `C`, `D`, `E`, `F`]]
     
     for(let i = 0; i < 8; i++) {
       let row = []
       for(let j = 0; j < 6; j++) {
         row.push(' ')
       }
       table.push(row)
     }
  
     data.customers.forEach((el) => {
       let seatNumber = el.ticket.seatNumber.split('-')
 
       let col = table[0].findIndex(el => el === seatNumber[0]) 
 
       table[+seatNumber[1]][col] = el.name
     })
     console.table(table)
  }

  static showError(err) {
    console.log(err)
  }
}

module.exports = View