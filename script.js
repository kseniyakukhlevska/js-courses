//exersice_1
var str="Have a good day";
console.log(str);

//exersice_2
var age=25;
console.log(age);
age=undefined;
console.log(age);

//exersice_3
var info=
    {
        name:"Kseniya",
        age:30
    };
console.log(info.name);
console.log(info.age);
var name= info.name;
console.log (name);
delete info.name;
console.log(name);

//exersice_4
var customArray=[2,3,4];
console.log (customArray);
customArray=0;
console.log (customArray);

//exersice_5
var student="Kseniya";
console.log(student);
console.log(student="Kukhlevska Kseniya");

//exersice_6
var complex=[];
complex[0]="My name is";
complex[1]=7;
complex[2]=null;
complex[3]=info;
console.log (complex[3]);

//exersice_7
var complexObj={};
complexObj.name="Kseniya";
complexObj.age=30;
complexObj.friends=["Jay","Bob","Harry"];
complexObj.soc_links={
    facebook:`https://www.facebook.com/`,
    googleplus:`https://plus.google.com/?hl=ru`
};
console.log (`My name is ${complexObj.name},I am ${complexObj.age} I have a lot of friends, but the best one is: ${complexObj.friends[1]}. You can find me on facebook: ${complexObj.soc_links.facebook} or on goole groups: ${complexObj.soc_links.googleplus}`);



