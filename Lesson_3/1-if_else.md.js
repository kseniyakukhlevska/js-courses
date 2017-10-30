// Домашнее задание по условным операторам JS.

// Относиться ко всем заданиям, все задания нужно было проверить для разных вариантов а, но что бы не копировать код можно было бы
// просто создать функцию которая будет принимать значение a и уже выполнять сравнения

// 1 задание
// Если переменная a равна нулю, то выведите 'Верно!', иначе выведите 'Неверно!'.
//Проверьте работу скрипта при a, равном 1, 0, -3.
 var a= +prompt ("Type number");
 if(a===0) {
     alert("You are right!");
 } else {
     alert("Wrong!");
 }//Любая цифра кроме 0

// 2 задание
// Если переменная a равна 'test', то выведите 'Верно!', иначе выведите 'Неверно!'.
// Проверьте работу скрипта при a, равном 'test', 'тест', 3.

 var a= prompt("You variant");
// ок можно и через switch case сделать не вопрос) но обычно если условия 2 всего лишь лучше делать через if/else или тернарный оператор ?:
 switch (a) {
    case "test":
        alert("You are right!");
        break;
     default :
        alert("Wrong!");
}

// 3 задание
// Если переменная test равна true, то выведите 'Верно!', иначе выведите 'Неверно!'.
// Проверьте работу скрипта при test, равном true, false. Напишите два варианта скрипта - с короткой записью и с длинной.
var test= confirm("True os false");
test == true ? console.log("true"): console.log("false");//short

var a= confirm("True os false");
switch (a) {
    case true:
        console.log("You are right!");
        break;
    default :
        console.log("Wrong!");//long
        break;
}

// 4 задание
// Создайте переменные a и b. Просуммируйте их, а результат запишите в переменную result.
// Если result больше 5, то присвойте переменной result значение 5. Если же она меньше 5-ти - то умножьте ее на 10.
// Выведите на экран значение переменной result. Проверьте работу скрипта при a и b, равных 2 и 5, 3 и 1.

var a= +prompt("Enter first number!");
var b= +prompt("Enter second number!");
var result=a+b;
if (result >= 5) {
    result=5;
}
else {
    result *=10;
}
console.log(result);


// 5 задание
// Если переменная a равна нулю или равна двум, то поделите ее на 10, иначе прибавьте к ней 7 и выведите ее на экран.
// Проверьте работу скрипта при a, равном 5, 0, -3, 2.

var a = +prompt("Enter number");
switch (a) {
    case 0:
    case 2:
        a /=10;
        break;
    default:
        a += 7;
        break;
}
console.log(a);

// 6 задание
// Если переменная a равна или меньше 1, а переменная b больше или равна 3, то выведите сумму этих переменных,
// иначе выведите 'Неверно!'. Проверьте работу скрипта при a и b, равном 1 и 3, 0 и 6, 3 и 5.

var a = +prompt("Type a number");
var b = +prompt("Type a number");
a <=1 && b >=3 ? alert(a+b): alert("Wrong");

// 7 задание
// Если переменная a больше 2-х и меньше 11-ти, или переменная b больше или равна 6-х и меньше 14-ти, то увеличьте a на 2,
// иначе прибавьте к a число 5. Выведите новое значение перенной на экран. Проверьте работу скрипта самостоятельно.

var a = +prompt("Type a number");
var b = +prompt("Type a number");
if((a >= 2 && a <11) || (b >=6 && b <14)) {
    console.log(a+=2);
}
else {
    console.log(a+5);
}

// 8 задание
// Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение '1',
// то в переменную result запишем 'зима', если имеет значение '2' – 'лето' и так далее. Решите задачу через switch-case.

var num = +prompt("Enter a number");
// var result; // нужно обьявить переменную
switch (num) {
    case 1:
        result="Winter";
        break;
    case 2:
        result="Summer";
        break;
    case 3:
        result="Spring";
        break;
    case 4:
        result="Autumn";
        break;
    default:
        result= ("Try again");
        break;
}
console.log(result);

//  9 задание
//  Переменная lang может принимать три значения: 'ru', 'en', 'de'. Если она имеет значение 'ru',
// то в переменную arr запишем массив дней недели на русском языке, если имеет значение 'en' – то на английском,
// если 'de' – на немецком. Решите задачу через 3 if, через switch-case и через многомерный массив
//9.1

var lang = prompt("Enter language code");
// вот тут кстатие было бы намного лучше использовать if/else это не ошибка просто так обычно делают)
arr=[];
if(lang === "ru") {
    arr.push("январь","февраль","март","апрель");
}
else if (lang === "en") {
    arr.push("January","February","March","April");
}
else if (lang === "de") {
    arr.push("Januar","Februar","März","April");
}
else {
    console.log("Try again");
}
console.log(arr);

//9.2

var lang = prompt("Enter language code");
var arr=[
    ["январь","фераль","март","апрель"],
    ["January","February","March","April"],
    ["Januar","Februar","März","April"]
];
var arr2=[];
if(lang === "ru") {
    arr2=arr[0];
}
else if (lang === "en") {
    arr2=arr[1];
}
else if (lang === "de") {
    arr2=arr[2];
}
else {
    console.log("Try again");
}
console.log(arr2);

//9.3

var lang = prompt("Enter language code");
var arr=[
  ["январь","фераль","март","апрель"],
  ["January","February","March","April"],
  ["Januar","Februar","März","April"]
];
var arr2=[];
if(arr2 === "ru") {
    arr[0];
}
else if (arr2 === "en") {
    arr[1];
}
else if (arr2 === "de") {
    arr[3];
}
else {
    console.log("Try again");
}
console.log(arr);
