// 1 задание
// Напишите функцию которая будет выводить текст на екран: "Как ваше имя?";
// После ввода имя запишите как свойство "name" для ссылки внутри функции this;
// Создайте пустой объект и вызовите эту функцию для объекта и просто для окна и посмотрите изменился ли объект,
// и создалась ли переменная name в окне браузера?

function nameId() {
    var name = prompt("What is your name?");
    this.name = name;
    return this.name;
}
var obj = {
    nameId:nameId
};
obj.nameId();
console.log(obj);
obj.nameId(window);
console.log(window);


//     2 задание
// Напишите функцию sumTo(n), которая для данного n вычисляет сумму чисел от 1 до n, например:
// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10

function sumTo(n) {
    var sum = 0;
    for (var i = 1; i <= n ; i++) {
        sum += i;
    }
    console.log(sum);
}

sumTo(1);// = 1
sumTo(2);//= 2 + 1 = 3
sumTo(3);// = 3 + 2 + 1 = 6
sumTo(4);// = 4 + 3 + 2 + 1 = 10

// 3 задание
// Напишите код, который отсортирует массив объектов people по полю age, для сортировки используем метод массива sort.
//     Например:
var vasya = { name: 'Вася', age: 23 };
var masha = { name: 'Маша', age: 18 };
var vovochka = { name: 'Вовочка', age: 6 };
var people = [ vasya , masha , vovochka ];

function compareAge(personA, personB) {
    return personA.age - personB.age;
}
people.sort(compareAge);
for(var i = 0; i < people.length; i++) {
    console.log(people[i].name);//Вовочка,Маша,Вася
}
//people: [vovochka, masha, vasya]
console.log(people[0].age) // 6
// Выведите список имён в массиве после сортировки.


// 4 задание
// Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr (arr — массив строк).

var strings = ["hi", "you", "there","now","you","there","i`m","here"];

function unique(arr) {
    var result = [];

    cycle:
        for (var i = 0; i < arr.length; i++) {
            var str = arr[i];
            for (var j = 0; j < result.length; j++) {
                if (result[j] == str) continue cycle;
            }
            result.push(str);
        }

    return result;
}

console.log( unique(strings) ); // (6) "hi", "you", "there", "now", "i`m", "here"