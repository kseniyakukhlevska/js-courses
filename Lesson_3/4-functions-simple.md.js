// 1 task
// Create function "getName" that ask user his name with promt window and alerts his name to him in format: "Hello, <his_name>".

function showName(name) {
    name= prompt("Enter you name");
    return "Hello, " +name
}
alert(showName(""));


// 2 task
// Create function double(x) that returns the number passed to it as an argument, multiply with 2

function double(x) {
    return x *= 2
}
console.log(double(6)); // logs in console => 12

// 3 task
// Create function range(x, y) that returns a sum of digits in the range of numbers [x, y];

function range(x, y) {
    var lower = Math.min(x, y);
    var upper = Math.max(x, y);

    var count = 0;

    for (var i = lower; i <= upper; i++) {
        count += i;
    }
    return count;
}
console.log(range(1,3)); // logs in console => 6


// 4 task
// Напишите функцию которая будет находить сумму простых чисел меньших переданному в нее значению. Пример работы:
var sum = 0;
function getPrimesSumBelow(x) {
    for (var i = 2; i < x; i++) {
        for (var m = 2; m <= i; m++) {
            if (i === m) {
                sum = sum + i;
            }
            else if (i % m === 0) {
                break;
            }
        }
    }
    console.log(sum);
}
getPrimesSumBelow(10); // 2 + 3 + 5 + 7 = 17


// 5 task
// Create a function that returns true if number is odd, and false if even;

function number(i) {
    i = +prompt("enter number");
    if (i % 2 !== 0)
    {
        return true;
    }
    else {
        return false;
    }
}

console.log(number());


// 6 task
// Create a function that returns all odd numbers in range, use the previous function inside this one;

function range(x, y) {
    x = +prompt("enter number");
    y = +prompt("enter number");

    var arr = [];
    for (i = x; i < y; i++) {
        if (i % 2 !== 0)
        {
            arr.push(i);
        }

    }
    console.log(arr);
}

range();

// 7 task
// Create a function that will call promt window that will ask for a number to user, until he enters 9;

function callnumber(number) {
    do {
        var number = +prompt('enter number');
    }
    while (number !== 9);
}

callnumber();

