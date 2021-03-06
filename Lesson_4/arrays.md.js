// 1 задание
// Палиндром - это строка которая читается с обоих сторон одинаково. Например: Анна, оно, А роза упала на лапу Азора.
//  Необходимо написать функцию isPal(string) которая возвращает true или false в зависимости от того является ли
// строка палиндромом или нет.
function isPal(string) {
    var arr =  string.toLowerCase().split('');//приводим все к нижнему регистру,делим по буквенно и записывам в массив
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === ' '){
            arr.splice(i, 1);//ищем и удаляем пробелы
            i--;//сдвигаемся на 1 поскольку пр удалении все смещается
        }
    }
    string = arr.join('');//соединяем в строку без пробелов
    string === string.split('').reverse().join('') ? console.log("true"): console.log("false");//сравниваем string с ней же но с перевернутой
}
console.log(isPal('Anna')); // true
console.log(isPal('А роза упала на лапу Азора')); //true
console.log(isPal('Вася')); //false
console.log(isPal('12321')); //true
console.log(isPal('123212')); //false

// 2 задание
// Анаграммы — слова, состоящие из одинакового количества одинаковых букв, но в разном порядке. Например:
// воз - зов, киборг - гробик, корсет - костер - сектор,
// Напишите функцию anClean(arr), которая возвращает массив слов, очищенный от анаграмм.
// var arr = ['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'сектор'];
// console.log( anClean(arr) ); // 'воз,киборг,корсет' или 'ЗОВ,гробик,сектор'

var arr = ['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'сектор'];
function anClean(arr) {
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
        var sorted = arr[i].toLowerCase().split("").sort().join("");//приводим к нижнему регистру,делим побуквенно,сортируем по алфавиту буквы в елементе массива и соединяем
        obj[sorted] = arr[i];//сравниваем
    }

    var result = [];
    for (var key in obj) {
        result.push(obj[key]);//записываем результат в массив
    }

    return result;
}

console.log( anClean(arr) ); // 'ЗОВ,гробик,сектор'

// 3 задание
// Создайте программу которая соеденит массив в строку, поменяет местами буквы в словах и порядок следования слов в массиве:

var arr = [ 'rrrA', 'toboR', 'ekiL', 'dooG', 'esoR' ];
function changeString(arr) {
    var reversed = arr.join(" ").split('').reverse().join("");//оединяем в строку, делим побуквенно, меняем местами,снова соединяем в строку
    return  console.log(reversed);

}
changeString(arr)//Rose Good Like Robot Arrr


// 4 задание
// Найти сумму целых чисел от 1 до 100

function count(){
    var sum = 0;
    for (var i = 1; i <= 100 ; i++) {
        sum += i;
    }
    console.log(sum);
}

count()//5050

// Найти сумму четных чисел от 0 до 100.

function count(){
    var sum = 0;
    for (var i = 0; i <= 100 ; i++) {
        if (i % 2 === 0)
        {
            sum += i;
        }
    }
    console.log(sum);
}

count()//2550



// 5 задание
// Напишите функцию callMe которая будет принимать 3 аругумента, это будут цыфры, потом она будет суммировать их и
// выводить на екран результат их суммы!
// Если в нее передели не числа то она должна выводить сообщение об ошибке в консоль и возвращать null; (
// вывод ошибки в консоль осуществялется через console.error("Тут текст ошибки") )

function callMe(x,y,z) {
    if(!isNaN(x) && !isNaN(y) && !isNaN(z)) {
        var sum = x + y + z;
        alert(sum);
    } else {
        console.error("Error! Error!");
        return null;
    }
}
callMe(2,6,8);//16

// 6 задание
// Напишите функцию callMeAgain которая будет принимать 1 аргумент, который будет массивом.
// Она должна возвращать массив соедененный через запятые и отсортированный по алфавиту (Array.join(','));

arr = ["fff","rrrr","dddddd"];
function callMeAgain(arr) {
    var sorted = arr.sort().join(",");
    console.log(sorted);
}
callMeAgain(arr);//dddddd,fff,rrrr

// 7 задание
// Дан массив объектов:

var arr = [
    {name: "L1", age: 45},
    {name: "L1", age: 20},
    {name: "L1", age: 10},
    {name: "L1", age: 78},
    {name: "L1", age: 41},
    {name: "L1", age: 10}
];
// Отсортируйте массив по полю age
function compareAge(personA, personB) {
    return personA.age - personB.age;
}
arr.sort(compareAge);
for(var i = 0; i < arr.length; i++) {
    alert(arr[i].age);
}// 10,10,20,41,45,78

// 8 задание
// Через prompt узнайте у пользователя его имя и возраст, и запишите в отсортированный массив с 8 задания в правильную позицию,
// чтобы все элементы в массиве остались отсортированные по полю age
// Если такой пользователь уже существует в массиве верните пользователю сообщение: "Такой пользователь уже существует"

var arr = [
    {name: "L1", age: 45},
    {name: "L1", age: 20},
    {name: "L1", age: 10},
    {name: "L1", age: 78},
    {name: "L1", age: 41},
    {name: "L1", age: 10}
];
function compareAge(personA, personB) {
    return personA.age - personB.age;
}
var enterName = prompt("Enter your name");
var enterAge = +prompt("Enter you age");
var arr2 = [];
var newUser = [{name: enterName, age: enterAge}]
function createUser() {
    for(var i = 0; i < arr.length; i++) {
        if (arr[i].name === newUser[0].name) {
            alert("User already exist"); break;
        } else {
            arr2 = arr.concat(newUser).sort(compareAge);
        }
    }
    console.log(arr2);
}
createUser();

// 9 task
// Дан массив с числами. Подсчитайте количество цифр 3 в данном массиве.
//     Пример: [13, 35, 3, 443] - в массиве 4 цифры 3.

var arr = [13, 35, 3, 343,353,83];
var count = 0;
function result(x) {
    var arr2 = arr.join('').split('');
    for(var i = 0; i < arr2.length; i++) {
        if(+arr2[i] === x) {
            count++;
        }
    }
    console.log(count);
}
result(3);//8

// 10 task
// Дан массив ['1', '2', '3', '4', '5', '6']. Сделайте из него строку '16-25-34'. Массив, конечно же, может быть любым.
var arr = ['1', '2', '3', '4', '5', '6'];
var newArr = [];
function newStr() {
    for (i = 0; i < arr.length; i++) {
        var x = arr.shift();//Удаляет из массива первый элемент и возвращает первый элемент
        var y = arr.pop();//Удаляет последний элемент из массива и возвращает последний элемент
        i--;
        newArr.push(x+y);//Добавляет элемент в конец массива
    }
    var str = newArr.join('-');//соединяем в строку через '-'
    console.log(str);
}

newStr();//16-25-34



// 11 task
// Даны два массива, к примеру
//     [1,2,3]
//     [4,5,6]
// Создайте новый массив, заполненный суммами соответствующих элементов, то есть [1+4, 2+5, 3+6] = [5, 7, 9].
// Скрипт должен работать для любых массивов, даже если их длина не одинакова (подумайте, что делать в этом случае).

 var arr1 = [1,2,3];
 var arr2 = [4,5,6];
 var newArr = [];

function SumArr() {
    var newArrLength = arr1.length;
    if (arr2.length > arr1.length) {
        newArrLength = arr2.length;
    }
    for (i = 0; i < newArrLength; i++) {
        var sum = (arr1[i] || 0) + (arr2[i] || 0);
        newArr.push(sum);
    }
    console.log(newArr);
}

SumArr();


// 12 task
// Дан массив. Напишите функцию, которая будет удалять элемент из массива по его тексту.
//     Пример: arr = [1,2,3,4,3,3]. Удалим все элементы с содержимым 3: func(arr, 3).

var arr = [1,2,3,4,3,3];
var newArr = [];
function deleteAllSimilar (x) {
for (i = 0; i < arr.length; i++) {
    if (arr[i] === x) {
     arr.splice(i, 1);
     i--;
    }
}
    console.log(arr);
}
 deleteAllSimilar(3);

// 13 task
// Реализуйте функцию intersection, вернёт массив из элементов, встречающихся в каждом из переданных массивов.
//     Пример: intersection([1, 2, 3], [101, 2, 1, 10], [2, 1]) вернёт [1, 2].

arr = [];
function intersection(arr1, arr2, arr3) {
    for (i = 0; i < arr1.length; i++) {
        for (j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                for (n = 0; n < arr3.length; n++) {
                    if (arr1[i] === arr3[n]) {
                        arr.push(arr1[i]);
                    }
                }
            }
        }
    }
    console.log(arr);
}

intersection([1, 2, 3], [101, 2, 1, 10], [2, 1]);// [1, 2]

// 14 task
// Дан массив с числами, к примеру [2, 3, 1, 4]. Сделайте из него массив [2, 2, 3, 3, 3, 1, 4, 4, 4, 4].
// В массиве могут быть только целые положительные числа.

var arr = [2, 3, 1, 4];
var newArr = [];
function createMore() {
    for (i = 0; i < arr.length; i++) {
        for (k = 0; k < arr[i]; k++) {
            newArr.push(arr[i]);
        }
    }
    console.log(newArr);
}

createMore();// [2, 2, 3, 3, 3, 1, 4, 4, 4, 4]

// 15 task
// Реализуйте функцию, которая будет дополнять массив заданными элементами до заданного размера.
// Пример: [1,2,3] дополним нулями до размера 6 - [1,2,3,0,0,0].

var arr = [1,2,3];
function newArr(x, y) {
    for (i = arr.length; i < y; i++) {
        arr.push(x);
    }
    console.log(arr);
}

newArr(0, 6);//[1, 2, 3, 0, 0, 0]


// 16 task
// Дан массив с числами. Не используя цикл, выведите:

// Три самых маленьких числа в массиве (числа должны быть разные, дубли должны быть проигнорированы).

var arr = [1, 4, 6, -3, 5, 14, 4, 3, 8, 77, 3];

arr = arr.sort(function (x,y) {
    return x - y;
});
var newArr = arr.slice(0,3);
console.log(newArr);//[-3, 1, 3]

// Первые 3 отрицательных числа в массиве (по порядку следования).

var arr = [1, -4, 6, -3, 5, 14, 4, 3, -8, 77, 3];

function negativeNumber(i) {
    return i < 0;
}
var numbers = arr.filter(negativeNumber).slice(0,3);
console.log(numbers);// [-4, -3, -8]
