// 1 task
// Дана строка 'aaa@bbb@ccc'. Замените все @ на '!' с помощью глобального поиска и замены.
var str = 'aaa@bbb@ccc';

var result = str.replace( /@/gi, "!");
alert(result);//'aaa!bbb!ccc'


// 2 task
// Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb' тремя разными способами (через substr, substring, slice).

var str = 'aaa bbb ccc';
var sub = str.substr(4,3);
console.log(sub);
var str = 'aaa bbb ccc';
var subtr = str.substring(4, 7);
console.log(subtr);
var sl = str.slice(4, 7);
console.log(sl);


// 3 task
// В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31/12/2025'.

var date = '2025-12-31';
var arr = date.split('-');
var str = arr[2] + '/' + arr[1] + '/'+arr[0];
alert(str);//'31/12/2025'


// 4 task
// Дана строка 'js'. Сделайте из нее строку 'JS'.


var str = "js";
var n = str.toUpperCase();
console.log(n);//JS

// 5 task
// Дана строка 'я учу javascript!'. Найдите количество символов в этой строке.

var str = 'я учу javascript!';
console.log(str.length);//17


// 6 task
// Дана переменная str, в которой хранится какой-либо текст.
// Реализуйте обрезание длинного текста по следующему принципу:
// если количество символов этого текста больше заданного в переменной n,
// то в переменную result запишем первые n символов строки str и добавим в конец троеточие '...'.
// В противном случае в переменную result запишем содержимое переменной str.

function enterValue (str,n) {
    if (str.length <= n) {
        alert (str);
    }else {
        var result = str.slice(0,n) + "...";
        alert(result);
    }
}
enterValue("hello,there",5);//hello...

// 7 task
// Дана строка 'я учу javascript!'. С помощью метода split запишите каждое слово этой строки в отдельный элемент массива.

var str = 'я учу javascript!';
var str1=str.split(" ");
console.log(str1);// ["я", "учу", "javascript!"]



// 8 task
// Дан массив ['я', 'учу', 'javascript', '!']. С помощью метода join преобразуйте массив в строку 'я+учу+javascript+!'.

var arr = ['я', 'учу', 'javascript', '!'];
var str = arr.join("+");
console.log(str);//я+учу+javascript+!

// 9 task
// Преобразуйте первую букву строки в верхний регистр.

var str = 'я учу javascript!';
var newStr = str.slice(0,1).toUpperCase() + str.slice(1);
console.log(newStr);


// 10 task
// Преобразуйте первую букву каждого слова строки в верхний регистр.

var str = 'я учу javascript!';
var arr = str.split(" ");
for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].replace(arr[i].charAt(0),arr[i].charAt(0).toUpperCase());
}
var result = arr.join(" ");
console.log(result);//Я Учу Javascript!



// 11 task
// Преобразуйте строку 'var_test_text' в 'varTestText'. Скрипт, конечно же, должен работать с любыми аналогичными строками.

var str = 'var_test_text';
var arr = str.split('_');
for (var i = 1; i < arr.length; i++) {
    arr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1);
}
var result = arr.join('');
console.log(result);//varTestText


// 12 task
// Преобразуйте строку 'varTestText' в 'var_test_text'. Скрипт, конечно же, должен работать с любыми аналогичными строками.


var str = "varTestText";
for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) === str.charAt(i).toUpperCase()) {
        str = str.replace(str.charAt(i), "_" + str.charAt(i).toLowerCase())
    }
}
console.log(str);//var_test_text

// 13 task
// Дано число, например '12345678'. Отделите пробелом каждую тройку чисел с конца.
// То есть у нас должно получится '12 345 678'. Число, конечно же, может быть любым.

var str = "1234567865";
var str1 = "";
for (var i = str.length - 3; i > 0; i = i - 3) {
    if (i > 3) {
        str1 = " " + str.slice(i, i + 3) + str1;
    }
    else {
        str1 = str.slice(0, i) + " " + str.slice(i, i + 3) + str1;
    }

}
console.log(str1);//1 234 567 865