//Lesson_2
//Exercise_1

var t = {
    y: 9
};
var number = t.y;//number=9
number += 5;//number=number+5=9+5=14
console.log(t.y, number); // 9, 14

//Exercise_2
var t = {
    y: [1, 3, 5, 7]
};
var number = t.y[2];//number=5
for(var i = 0, len = t.y.length; i < len; i++) {
    t.y[i]++;
}
console.log(number);// 5

//Exercise_3
var t = 9;
var obj = {
    number: t };//obj.number=9
obj.number++;//obj.number=9+1=10
console.log(obj.number, t);// 10,9

//Exercise_4
var object1 = {
    str: {
        name: "L"
    }
};

var obj = {
    number: 67
};

object1.str.number = obj.number;
obj.number++;

var str = object1.str;

object1.str.name = "Kolya";

console.log(str, object1.str.number);//{name: "Kolya", number: 67}

//Exercise_5
var object1 = {
    obj: {
        number: 0
    }
};

var object2 = {
    str: "Kolya"
};

object2.str.number = object2.str.number;

object2.str.number++;

console.log(object2.str.number);// undefined


