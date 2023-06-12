// Create all class for instantiate here

// Hal yang perlu di pertimbangkan setelah membuat class sesuai requirement :
// - Composition & Aggregation
// - Factory Method

class Theater {
    constructor(id, name, movie, customers = []) {
        this.id = id,
        this.name = name,
        this.movie = movie,
        this.customers = customers
    }
}


class Customer {
    constructor(id, name, gender, ticket) {
        this.id = id,
        this.name = name,
        this.gender = gender,
        this.ticket = Factory.generateTicket(ticket)
    }

    title() {
        if(this.gender === `Male`) {
            this.name = `Mr. ` + this.name
        } else if (this.gender === `Female`) {
            this.name = `Mrs. ` + this.name
        }
    }
}


class Ticket {
    #seatNumber
    constructor(theaterName, type, movie, seatNumber){
        this.theaterName = theaterName,
        this.type = type,
        this.movie = movie,
        this.#seatNumber = seatNumber
    }
    
    get seatNumber(){
        return this.#seatNumber
    }

    set seatNumber(value){
        this.#seatNumber = value
        return this
    }

}

class Regular extends Ticket {
    constructor(theaterName, movie, seatNumber) {
        super(theaterName, `Regular`, movie, seatNumber)
    }
}

class IMAX extends Ticket {
    constructor(theaterName, movie, seatNumber) {
        super(theaterName, `IMAX`, movie, seatNumber)
    }
}

class Premiere extends Ticket {
    constructor(theaterName, movie, seatNumber) {
        super(theaterName, `Premiere`, movie, seatNumber)
    }
}

class Factory {
    static generateTicket(ticket) {
        let {theaterName, type, movie, seatNumber} = ticket
        switch (type) {
            case "Regular":
                return new Regular(theaterName, movie, seatNumber)
            
            case "IMAX":
                return new IMAX(theaterName, movie, seatNumber)

            case "Premiere":
                return new Premiere(theaterName, movie, seatNumber)
        }
    }

    static showTheater(array) {
        let theaterList = array.map((el) => {
            // let {id, name, movie} = el
            return new Theater (el.id, el.name, el.movie)
        })
        return theaterList
    }

    static generateCustomer(array){
        // console.log(array)
        let customerList = array.map((el) => {
            // let {id, name, gender, ticket} = el
            return new Customer (el.id, el.name, el.gender, el.ticket)
        })
        return customerList
    }

    static generateCustomerWithNickname(array){
        // console.log(array)
        let customerList = array.map((el) => {
            // let {id, name, gender, ticket} = el
            let customers = new Customer (el.id, el.name, el.gender, el.ticket)
            customers.title()
            return customers
        })
        return customerList
    }
}

module.exports = {Theater, Customer, Ticket, Regular, IMAX, Premiere, Factory} 


// m sole.log(Factory.generateCustomer(list))
