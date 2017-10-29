// Please write the result of statements:
//     1

var name = "Vasya";

function getData(age) {

    return {
        name: name,//из переменной name
        age: age // из getData аргумента
    };
}

var newData = getData(20);//{name: "Vasya", age: 20}
var newDataElse = getData();//{name: "Vasya", age: undefined} , поскольку не указан аргумент getData функции

console.log(newData, newDataElse);//{name: "Vasya", age: 20} {name: "Vasya", age: undefined}


// 2

function canGoToManGym(name, age, gender) {
    if (!name) {
        console.log("Please pass your name to function");
    }

    if (!age) {
        console.log("Please pass your age to function");
    }

    if (!gender) {
        console.log("Please pass your gender to function");
    }

    //check age
    var normalAge = age > 90;
    var isMan = gender === "man";
    // the upper one is the short for: var normalAge = age > 90 ? true : false;

    return normalAge && isMan;// правда если значения normalAge и isMan правдивы
}

canGoToManGym("Lily", 24, "woman"); // false не верный возраст и пол, по условию принимается только мужской пол и возраст больше 90
canGoToManGym("Vasya", 30, "man"); // false не верный возраст  var normalAge = age > 90

// 3

// Use Parameter Defaults:

    function getName( name ) {
        name = name || "Default name";// оператор или возвращает первую правду

        return name;
    }

getName("Lily"); //Lily ,  name = name это первая правда
getName(); // Default name, поскольку  name = name это не правда, "Default name" - правда


// 4
// Example of recurtion in function, when it returns itself on some condition& Example how can we use isNaN function and how to write functions, that check all of the possibility of errors in it:

function getNumberInRange( rangeStart, rangeEnd, number) {
    // check if some of our arguments is not a number return the new call of this function
    if (isNaN(rangeStart) || isNaN(rangeEnd) || isNaN(number)) {
        alert("Please try again and enter the numbers in prompt input!");//сли какое то из аргументов функции getNumberInRange явлется не числом выводится сообщение "Please try again and enter the numbers in prompt input!"

        return getNumberInRange(
            +prompt("Please enter range from"),
            +prompt("Please enter range to"),
            +prompt("Please enter number to check in range")//повторная просьба заполнить все поля верно
        );
    }

    return number > rangeStart && number < rangeEnd ? `Number ${number} is in range [${rangeStart}, ${rangeEnd}]` : `Number is not in range`;
}//если значение number больше значения rangeStart и значение number ментше значения rangeEnd отобразится `Number значение number is in range [значение rangeStart, ${значение rangeEnd}]`

getNumberInRange(
    +prompt("Please enter range from"),
    +prompt("Please enter range to"),
    +prompt("Please enter number to check in range")
);// если false то появится ссобщение `Number is not in range и нужно будет повторно ввести все значения