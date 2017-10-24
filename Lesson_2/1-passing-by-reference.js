//Lesson_2

//Опишите что будет в результате выполнения следующих операций
//Exercise_1

var t = {
    y: 9
};//объявляем переменную t, которая является обектом со свойством y со значением 9
var number = t.y;//number=9
number += 5;//number=number+5=9+5=14
console.log(t.y, number); // 9, 14

//Exercise_2
var t = {
    y: [1, 3, 5, 7]
};//объявляем переменную t, которая является обектом со свойством y и значение у него это массив [1, 3, 5, 7]
var number = t.y[2];//number=5, поскольку елементы в массиве считаем с 0
for(var i = 0, len = t.y.length; i < len; i++) {
    t.y[i]++;//это цикл, но я так и не поняла что с ним делать
}
console.log(number);// 5

//Exercise_3
var t = 9;//объявляем переменную t со значением 9
var obj = {
    number: t };//obj.number=9
obj.number++;//obj.number=9+1=10
console.log(obj.number, t);// 10,9

//Exercise_4
var object1 = {
    str: {
        name: "L"
    }
};//объявляем переменную object1 которая является объектом со свойством str которое тоже является объектом со свойством name со значением "L"

var obj = {
    number: 67
};//объявляем переменную obj которая является объектом со свойством number со значением 67

object1.str.number = obj.number;//назанчаем что object1.str.number = 67
obj.number++;//67+1=68 но это простой тип данных

var str = object1.str;//обявляем переменную str со значением объект{name: "L",number: 67}
object1.str.name = "Kolya";//перезаписали "L" на "Kolya"

console.log(str, object1.str.number);//{name: "Kolya", number: 67} 67

//Exercise_5
var object1 = {
    obj: {
        number: 0
    }
};//объявляем переменную object1-это объект со свойством obj значение которого является объектом со свойством number сщ значением 0

var object2 = {
    str: "Kolya"
};//объявляем переменную object2-это объект со свойством str значение которого является строка  "Kolya"

object2.str.number = object2.str.number;//undefined

object2.str.number++;//undefined+1=undefined

console.log(object2.str.number);// undefined


