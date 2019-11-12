class Bike {
    name: string;
    price: number;
    max_speed: number;
    miles: number;
 
    constructor(name: string, price: number, max_speed: number) {
     this.name = name
     this.price = price
     this.max_speed = max_speed
     this.miles = 0
    }
 
 
    displayInfo() {
       console.log(`this ${this.name} costs ${this.price}, goes ${this.max_speed}mph and has gone ${this.miles} miles.`)
       return this
    }
 
    ride() {
       this.miles += 10;
       console.log("riding")
       return this
    }
    reverse() {
       this.miles -= 5;
       if (this.miles < 0) {
          this.miles = 0
       }
       console.log("backing up")
       return this
    }
 }
 
 const Schwinn = new Bike("schwinn", 100, 55)
 Schwinn.ride().ride().ride().reverse().displayInfo()
 const Mongoose = new Bike("mongoose", 75, 100)
 Mongoose.ride().ride().reverse().reverse().displayInfo()
 const Hurley = new Bike("hurley", 150, 75)
 Hurley.reverse().reverse().reverse().displayInfo()