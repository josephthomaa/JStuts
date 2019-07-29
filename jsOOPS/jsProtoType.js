//every consructor has a prototype method

// constructor function;
let Car = function(color){
    this.color=color;
}
//creating a new prototype method for car constuctor

Car.prototype.getColor=function(){
    return this.color;
}

let redCar = new Car("red");

console.log(redCar);
/*Car {color: "red"}
color: "red"
__proto__:             
getColor: ƒ ()          //protype reference... for every object created of car this reference will be used..
constructor: ƒ (color)
__proto__: Object*/


//creating or shadowing property for master object
// this will be now available for any object we create
//not good practice to modify root object
Object.prototype.toString=function(){ 
    return `color:${this.color}`;
};
console.log(redCar.toString());

//Object is the root object of all js object created
// Object.create(prototypeObject,propertyObject) method


//prototype chain

const Car =function(){};

Car.prototype={
    print(){
        return "i am a car";
    }
}

const ToyCar = function(){};

ToyCar.prototype= Object.create(Car.prototype);

ToyCar.prototype = {
    print(){
        return " I am a Toycar";
    }
}

const ToyTransfer = function(){};
ToyTransfer.prototype = Object.create(ToyCar.prototype);

ToyTransfer.prototype={
    print(){
        return "I am Toy Transformer";
    }
}

const optimusPrime = new ToyTransfer();
console.log(optimusPrime.print());