
//regular js function
let add = function(a,b){
    return a+b;
}

let sum = add(1,2);

// constructor function;
let Car = function(color){
    this.color=color;
}

let redCar = new Car("red");



// constructor class;
class Bike {
    constructor(color) {
        this.color = color;
    }
}

let redBike = new Bike("red");

console.log(redBike);
// will display a bike object with property color set to red
// all properties inside constructor will be public
