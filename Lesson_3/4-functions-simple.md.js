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
    return x*=2
}

console.log(double(6)); // logs in console => 12

// 3 task
// Create function range(x, y) that returns a sum of digits in the range of numbers [x, y];

function range(x, y) {
// your code here
    return 
}

range(1,3); // logs in console => 6


// 4 task
// Напишите функцию которая будет находить сумму простых чисел меньших переданному в нее значению. Пример работы:
//
//     function getPrimesSumBelow(x, y) {
// // your code here
//     }
//
// getPrimesSumBelow(10); // 2 + 3 + 5 + 7 = 17
// 5 task
//
// Create a function that returns true if number is odd, and false if even;
//
// 6 task
//
// Create a function that returns all odd numbers in range, use the previous function inside this one;
//
// 7 task
//
// Create a function that will call promt window that will ask for a number to user, until he enters 9;