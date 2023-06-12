const Controller = require('./controllers/controller.js')
let [command, ...param] = process.argv.slice(2)

// Good luck and happy coding ...


switch (command) {
    case "help":
        Controller.help()
        break;

    case "theaterList":
        Controller.theaterList()
        break;

    case "customerList":
        Controller.customerList()
        break;

    case "checkSeats":
        // console.log(+param)
        //                      1
        Controller.checkSeats(+param)
        break;
    
    case "buyTicket":
        Controller.buyTicket(+param[0], param[1], param[2], param[3], param[4])
        break;

    case "ticketInfo":
        Controller.ticketInfo(+param[0])
        break;

    case "changeTicket":
        Controller.changeTicket(+param[0], +param[1], param[2])
        break;


    case "cancelTicket":
        Controller.cancelTicket(+param[0])
        break;

    
    case "showCustomer":
        Controller.showCustomer(+param[0])
}