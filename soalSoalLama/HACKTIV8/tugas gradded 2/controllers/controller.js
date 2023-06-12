const Model = require('../models/model')
const View = require('../views/view')

// Tambahkan parameter sesuai kebutuhanmu
// console.log(View.showCommandList())


class Controller {
  // PART 1
  static help(){
    return View.showCommandList()
  }

  static theaterList(){
    Model.readTheater((err, data) => {
      if(err) {
        View.showError(err)
      } else {
        View.showTheatherList(data)
        // console.log(data)
      }
    })
  }

  static customerList(){
    Model.readCustomer((err, data) => {
      if(err) {
        View.showError(err)
      } else {
        View.showCustomerList(data)
        // console.log(data)
      }
    })

  }
//                    1
  static checkSeats(param){
//                    1    
    Model.checkSeat(param, (err, data) => {
      if(err) {
        View.showError(err)
      } else {
        View.checkSeat(data)
      }
    })
  }

  // PART 2
  static buyTicket(id_theater, name, gender, seatNumber, ticketType){
    Model.addCustomer(id_theater, name, gender, seatNumber, ticketType, (err, data) => {
      if(err) {
        View.showError(err)
      } else {
        View.showAddedCustomer(data)
        // id_theater, name, gender, seatNumber, ticketType, 
      }
    })
  }
  static ticketInfo(id){
    Model.findCustomer(id, (err, customer) => {
      if(err){
        View.showError(err)
      } else {
        View.showTicketInfo(customer)
      }
    })
  }
  static changeTicket(id_penonton, id_theater, seatNumber){
    Model.updateTicket(id_penonton, id_theater, seatNumber, (err, data) => {
      if(err) {
        View.showError(err)
      } else {
        View.changeTicket(data)
      }
    })

  }
  static cancelTicket(id_penonton){ 
    Model.deleteTicket(id_penonton, (err, data) =>{
      if(err) {
        View.showError(err)
      } else {
        // console.log(data)
        View.showDeletedCustomer(data)
      }
    })

  }
  static showCustomer(id_theater){
    Model.showCustomerByTheater(id_theater , (err, data) => {
      if (err) {
        View.showError(err)
      } else {
        // console.log(data)
        View.showCustomerWithNickname(data)
      }
    })

  }
}

module.exports = Controller