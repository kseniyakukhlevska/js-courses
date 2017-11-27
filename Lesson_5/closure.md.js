// 1 task
//
// Example:

     var makeFunction = function () {
        var addOne = function (x) {
             return x + 1;
         };
         return addOne; // return the function
     };
 // makeFunction is a function with no arguments

     var f = makeFunction();
// f is a function that takes one argument
//
     var y = f(3);
 // now y is 4
// Create a function that will always return a number multiply on 3.
function multNumber(x)  {
    if(isNaN(x)) {
        alert("Type a number")
    } else
    {
    }
    return x * 3;
}
console.log(multNumber(2));

// Write a JavaScript program to calculate the factorial of a number using 1 task, but ask user for a number to get factorial from using prompt() function.

function factorial() {
    var number = +prompt("Enter number");
    if(number === 0) {
        return 1;
    }
    if (number < 0) {
        return undefined;
    }
    for (var i = number; --i;) {
        number *= i;
    }
    return number;
}
alert(factorial());
// Then give an answer to user after calculation is finished using alert(number);



// 2 task
//
// Make this syntax possible:
// var a = add(2)(3); //5

 var add = function (x) {
     return function(y) {
         return x + y;
     };
 };

 console.log(add(2)(3)); // 5


// 3 task
//
// Transform array of numbers to array of functions that will alert that digits:


var numberArray = [1, 2, 3, 4, 10, 5, 6, 7];
var numbersToFunc = numberArray.map(function(x) {
    return function () {
        return alert(x)
    }
});
console.log(numbersToFunc);//(8) [ƒ, ƒ, ƒ, ƒ, ƒ, ƒ, ƒ, ƒ]
numbersToFunc[6]();

// // in result we will have: [function (){...}, function (){...}, function (){...}, function (){...}]


// 4 task
//
// Please write a function "double" and "doubleTripple" so the following code will be true. To create a "doubleTripple" function please use double function inside.
function double(x){
    x *= 2;
    return x;
}
console.log(double(9));
// double(9); // 18
// double(3); // 6

function doubleTripple(x) {
    return double(x) * 3;
}

console.log(doubleTripple(5));
// doubleTripple(3); // 18 = 3 * 3 * 2
// doubleTripple(2); // 12 = 2 * 3 * 2
// doubleTripple(5); // 30 = 5 * 3 * 2


// 5 task
//
// Please write a function "makeCount" so the following code will be true.
//
     function createCount () {
         var startCounter = 1;
         return function (){
             return startCounter++;
         };
 }
 var makeCount = createCount();

console.log(makeCount()); // 1
console.log(makeCount()); // 2
console.log(makeCount()); // 3
console.log(makeCount()); // 4
console.log(makeCount()); // 5
console.log(makeCount()); // 6


// 6 task
//
// Please write a function "makeCount" so the following code will be true. Use the previous function.

function createCount (startFrom) {
    var startCounter = ++startFrom;
    return function (){
        return startCounter++;
    };
}

var makeCount = createCount(4);

console.log(makeCount()); // 5
console.log(makeCount()); // 6
console.log(makeCount()); // 7
console.log(makeCount()); // 8
console.log(makeCount());// 9
console.log(makeCount()); // 10