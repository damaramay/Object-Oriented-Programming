// const .... = require("./class.js")
const fs = require('fs')
const {Theater, Customer, Ticket, Regular, IMAX, Premiere, Factory} = require('./class.js');

// Tambahkan parameter sesuai kebutuhanmu

class Model {
  // PART 1
  //     readTheater((err, null))
  static readTheater(cb){
    // console.log(cb)
    // const a = function(b,c)
    // a(b,c)
    fs.readFile('./data/theaters.json', 'utf-8', (err,data) => {
      if(err) {
        cb(err, null);
      } else {
        let parsedTheater = JSON.parse(data)
        let theaterList = 
        (parsedTheater)
        cb(null, theaterList)
      }
    })

  }
  static readCustomer(cb){
    fs.readFile('./data/customers.json', 'utf-8', (err,data) => {
      if(err) {
        cb(err, null)
      } else {
        let parsedCustomer = JSON.parse(data)
        let customerList = Factory.generateCustomer(parsedCustomer)
        cb(null, customerList)
      }
    })

  }

  static checkSeat(param, cb){
    this.readTheater((err, theater) => {
      if(err) {
       cb(err, null)
      } else {
      //  cb(null, theater)
      //  console.log(theater)
        let theaterFiltered = theater.filter(el => el.id === param) 
        // console.log(theaterFiltered)
        if(theaterFiltered.length === 0) {
          cb(`Error : Theater Not Found`, null)
        } else {
          // console.log(dataFiltered)
          theaterFiltered = theaterFiltered[0]
          this.readCustomer((err, customer) => {
            if(err) {
              cb(err, null)
            } else {
              // let customerList = customer
              let customerFiltered = customer.filter(el => el.ticket.theaterName === theaterFiltered.name)
              // console.log(customerFiltered)
              //let a = [1, 2, 3, 4, 5] => a.find(el => el % 2 === 0)
              //let a = 2 || 4  
              theaterFiltered.customers = customerFiltered
              // console.log(theaterFiltered)
              cb(null, theaterFiltered)
            }
          })
        }
      }
    })
  }

  // PART 2
  static saveJSON(data, cb){ 
    // note jika ingin diganti atau mau menambahkan method boleh untuk method save ini
    // yang digunakan untuk writeFile
    // JSON -> Model ==== String Object -> Parsed Object -> Mapping (Biar jadi Obj Instance)
    // Model -> JSON ==== Obj Instace MAPPING (Biar menjadi object literal) -> String Object -> fs.writeFile
    const fixedData = data.map((el) => {
      let {id, name, gender, ticket} = el
      let seatNumber = ticket.seatNumber
      return {
        id,
        name,
        gender,
        ticket: {
          theaterName: ticket.theaterName,
          type: ticket.type,
          movie: ticket.movie,
          seatNumber: seatNumber
        }
      }
    })

    const stringData = JSON.stringify(fixedData, null, 2);
    fs.writeFile('./data/customers.json', stringData, (err) => {
      cb(err)
    })

  }
  static addCustomer(id_theater, name, gender, seatNumber, ticketType, cb){ // buyTicket
    this.readTheater((err, theater) => {
      if(err) {
        cb(err, null)
      }
      else {
        // cb(null, theater)
        let theaterInformationById = theater.find(el => el.id === id_theater)
        // cb(null, theaterInformationById)
        if(!theaterInformationById) {
          cb(`Theater not found, please check your input`, null)
        }
        else {
          this.readCustomer((err, customer) => {
            if(err){
              cb(err, null) 
            } else {
              // cb(null, customer[customer.length-1].id)
              let newId = customer[customer.length-1].id + 1
              // cb(null, newId)
              let newObj = [{
                id: newId,
                name: name,
                gender: gender,
                ticket: {
                  theaterName: theaterInformationById.name,
                  type: ticketType,
                  movie: theaterInformationById.movie,
                  seatNumber: seatNumber,
                }
              }]
              let customerInstance = Factory.generateCustomer(newObj)
              // cb(null, Factory.generateCustomer(newObj))
              // cb(null, customerInstance)
              let filteredCustomer = customer.filter((el) => {
               return el.ticket.theaterName === theaterInformationById.name && el.ticket.seatNumber === seatNumber
              })
              cb(null, filteredCustomer)
              if(filteredCustomer.length !== 0) {
                cb(`Seat already been booked, please choose another seat`, null)
              } else {
                customer = [...customer, ...customerInstance]
                // cb(null, customer)
                // cb(null, filteredCustomer)
                // customer.push(customerInstance)
                // cb(null, customer)
                // data = [...data, ...newCustomer];
                // cb(null, customer)
                // customer = JSON.stringify(customer, null, 2)
                this.saveJSON(customer, (err) => {
                  if(err) {
                    cb(err);
                  }
                  else {cb(null, customerInstance[0])
                  }
                })
                // console.log(customerInstance[0])
              }
            }
          })
        }
      }
    })
  }
  static findCustomer(id, cb){ // ticketInfo
    this.readCustomer((err, idCustomer) => {
      if(err) {
        cb(err)
      } else {
        let filteredCustomer = idCustomer.filter(el => el.id == id) 
        // cb(null, filteredCustomer)
        if(filteredCustomer.length === 0) {
          cb(`Customer not found, please check your input`, null)
        } else {
          filteredCustomer = filteredCustomer[0]
          cb(null, filteredCustomer)
        }
      }
    })

  }
  static updateTicket(id_penonton, id_theater, seatNumber, cb){
    this.checkSeat(id_theater, (err, data) => {
      if(err) {
        cb(`Theater not found, please check your input`)
      } else {
        // cb(null, data)
        let theater = data
        let indexCustomer = theater.customers.findIndex(el => el.ticket.seatNumber === seatNumber);
        if(indexCustomer !== -1){
          cb(`Seat already been booked, please check another seat`)
        } else {
          this.readCustomer((err, data) => {
            if(err) {
              cb(err)
            } else {
              // let customers = data
              let indexIdCustomer = data.findIndex(el => el.id === id_penonton) 
              if(indexIdCustomer === -1) {
                cb(`customer not found, check your input`)
              } else {
                let newSeat = data[indexIdCustomer]
                newSeat.ticket.seatNumber = seatNumber
                this.saveJSON(data, (err) => {
                  if(err) {
                    cb(err);
                  }
                  else {cb(null, newSeat)
                  }
                })
              }
            }
          }) 
        }
      }
    })
  }
  static deleteTicket(id_penonton, cb){
    this.readCustomer((err, data) => {
      if(err) {
        cb(err)
      } else {
        let indexCustomer = data.findIndex(el => el.id === id_penonton)
        if(indexCustomer === -1) {
          cb(`customer not found, please check your input`) 
        } else {
          let deletedCustomer = data.splice(indexCustomer, 1)
          deletedCustomer = deletedCustomer[0]
          this.saveJSON(data, (err) => {
            if(err) {
              cb(err);
            }
            else {cb(null, deletedCustomer)
            }
          })
        }
      }
    }) 

  }
  static showCustomerByTheater(id_theater, cb){  // showCustomer
    this.checkSeat(id_theater, (err, data) => {
      if(err) {
        cb(err)
      } else {
        // cb(err, data)
        this.readCustomer((err, customers) => {
          if(err) {
            cb(err)
          } else {
            // cb(err, customers)
            let filteredCustomer = customers.filter(el => el.ticket.theaterName === data.name)
            // cb(null, filteredCustomer)
            let newCustomer = Factory.generateCustomerWithNickname(filteredCustomer)
            data.customers = newCustomer
            cb(null, data)
          }
        })
      }
    })
  }
}

module.exports = Model



// function message (message) {
//   console.log(message)
// }

// function sum (a,b, cb) {
//   cb(`hasil penjumlahan =`)
//   return a+b
// }


// console.log(sum(a, b, message))