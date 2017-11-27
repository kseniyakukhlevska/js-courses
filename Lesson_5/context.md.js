// Домашнее задание по JS - контексты
//
// Опеределить на какой контекст будет ссылатся this в результате выполнений следующих примеров
//
// function isContextEqualTo(contextLink) {
//     console.log(contextLink === this);
// }
//
// function name() {
//     isContextEqualTo(window); // ??
// }
//
// var name = "Vasya";
//
// var user = {
//     getName: function () {
//         this.getContext(window); // ??
//         this.getContext(user); // ??
//     },
//     getContext: isContextEqualTo
// }
//
// console.log(user.getName()); // ??
//
// var getName = user.getName;
//
// console.log(getName()); // ??
//
// user.getName = name;
//
// console.log(user.getName()); // ??