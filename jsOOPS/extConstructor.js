//Extending a Function Constructor by Calling Base Constructor from Sub Constructor and Inheriting Properties.

let Mammal = function(legs){
    this.legs=legs;
}

Mammal.prototype={
    Walk() {
        return "Walking";
    },
    Sleep(){
        return "Sleeping";
    }
}

let Bats= function(legs,isVeg){
    Mammal.call(this, legs);
    this.isVeg=isVeg;
}

Bats.prototype = Object.create(Mammal.prototype);

//Object.setPrototypeOf() takes one object method and make it available for another obj

//Object.setPrototypeOf(destObj, sourceObj)

//Use Object.assign() Method to copy methods from one object literal to another.

//js mixins : javaScript mixins to achieve multiple inheritance. By borrowing methods from multiple mixins.

const jsSkill = {
    knowsJS(){
        return true;
    }
}

const engDegree = {
    hasDegree(){
        return true;
    }    
}

const fullStack ={
    knowsBackend(){
        return true;
    }
}

const jsEngineer = Object.assign({},jsSkill,engDegree);
const fullStackEngineer = Object.assign({}, jsSkill,engDegree,fullStack);