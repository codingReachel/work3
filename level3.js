//继承
// function Animal() {
//     this.species = "动物";
// }

// function Cat(name, color) {
//     this.name = name;
//     this.color = color;
// }
// Cat.prototype = new Animal();
// //new一个猫的对象cat1也拥有了“动物”的species属性
// var cat1 = new Cat("大毛", "黄色");
// console.log(cat1.species); // 动物

//浅拷贝 会丢失其本身属性
function Animal() {
    this.species = "动物";
}
const ani = new Animal();

function Cat(name, color) {
    this.name = name;
    this.color = color;
}

//new一个猫的对象cat1也拥有了“动物”的species属性
var cat1 = new Cat("大毛", "黄色");
cat1 = Object.assign({}, ani)
console.log(cat1.species); // 动物

