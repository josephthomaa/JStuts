// constructor class;
class Car {
    constructor(color) {
        this.color = color;
    }
    drive(){
        console.log("driving");
    }
}

let redCar = new Car("red");

console.log(redCar);

//extend class

class Mammal {
    constructor(_legs,_name='jon doe'){
        this.name = _name;
        this.legs = _legs;
    }
    walk(){
        return `${this.name} is walking`;
    }
}

class Bats extends Mammal{
    constructor(_legs,_name,_eatsMeat){
        super(_legs,_name);
        this.eatMeat=_eatsMeat;
    }
    fly(){
        return `${this.name} can fly`
    }
    walk(){
        let holding = this.eatMeat ? 'Bugs' : "carrot";
        return `${super.walk()} with a ${holding}`
    }
}

let fruitBat = new Bats(2, "pq" ,false);

console.log(fruitBat.walk());