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