// call ,apply and bind

//The call() method is a predefined JavaScript method.

//It can be used to invoke (call) a method with an owner object as an argument (parameter).

var obj= {
    num:2
};

var myFun = function(){
    return this.num;
}

console.log(myFun.call(obj));

//call fn with args

var addtoThis=function(a,b){
    return this.num+a+b;
}

console.log(myFun.call(obj,2,3));


//The apply() method is similar to the call() method ..diff is apply takes array as argument

var arr=[1,2];

console.log(myFun.apply(obj,arr));


//bind()

var bound =myFun.bind(obj);
console.dir(bound); ///returns a function

console.log(bound(1,3)); //call the bound function

// JavaScript Closures

//JavaScript variables can belong to the local or global scope.Global variables can be made local (private) with closures.

/*
closures : fns with perserved data
A closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.
*/


// lexical scope : variables that are defined outer scope will be automatically available for inner scope
var out=2;

var addTo= function() {
    var inn =1;
    return out+inn; 
};

//eg2

var addTo = function(passed){
    var add = function(inner){
        return passed+inner;
    }
    return add;
}

var addThree = new addTo(2);

console.dir(addThree);

console.log(addThree(1));

//eg 3

let f =() => {
    let i = 1;
    let j = 2;
    return () => {
        console.log(i);
        console.log(j);
    }
};

console.dir(f); // returns a anonymous function with closure inside function scope

// iife(immediate invoked function expression)

//function
function increment(i){
    return i+1;
}

// function expression
var increment = function(i){
    return i+1;
};

increment(i);

//iifa

(function(i){
    return i+1;
})(1);

//

var counter = (function(){
    var i = 0;
    
    return {
        get:function(){
            return i;
        },
        set:function(val){
            i=val;
        },
        increment:function(){
            i++;
        }
    }
})();
