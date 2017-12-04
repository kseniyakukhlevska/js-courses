// Домашнее задание по JS - контексты
//
// Опеределить на какой контекст будет ссылатся this в результате выполнений следующих примеров
//
function isContextEqualTo(contextLink) {
    console.log(contextLink === this);
}

function name() {
    isContextEqualTo(window); // true - context window
}

var name = "Vasya";

var user = {
    getName: function () {
        this.getContext(window); // true - context window
        this.getContext(user); // false - context window
    },
    getContext: isContextEqualTo
}

console.log(user.getName()); // true - context window, false - context window

var getName = user.getName;

console.log(getName()); // window

user.getName = name;

console.log(user.getName()); // window