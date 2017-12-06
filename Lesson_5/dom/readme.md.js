// DOM
//
// Please read this before start:
//
//     https://learn.javascript.ru/document-write
//         https://learn.javascript.ru/traversing-dom
//             1 task
//
// Опишите как выглядит структура дом дерева в файле index.html
// see file DOM.png
// 2 task
//
// Read about done types: https://www.w3schools.com/jsref/prop_node_nodetype.asp
//
//     Возле каждого узла ДОМ элемента укажите тип этого узла
//      see file DOM.png
// 3 task
// Выведите количество тегов form на странице
console.log(document.querySelectorAll("form").length);
//
// 4 task
// Выведите количество дочерних элементов у тега form#main
console.log(document.getElementById("main").children.length);
//
// 5 task
// Read first: https://developer.mozilla.org/ru/docs/Web/API/Element/tagName Проверьте является ли form#main дочерним элементом для тега body
console.log(document.getElementById("main").parentNode.tagName === "BODY");
//
//     6 task
// Закрасьте body документа в зеленый цвет
document.body.style.backgroundColor = "green";
//
// 7 task
// Закрасьте body документа в черный цвет, а цвет текста сделайте белым)
 document.body.style.backgroundColor = "black";
 document.body.style.color = "white";
//
// 8 task
// Выведите через консоль background цвет body и цвет текста через запятую. Используйте встроенные JS методы
console.log(document.body.style.backgroundColor, document.body.style.color);