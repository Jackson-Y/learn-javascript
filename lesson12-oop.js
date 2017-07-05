'use strict'

// 面向对象编程
var Student = {
    name: 'moxiao',
    height: 180,
    run: function() {
        console.log(this.name + ' is running...');
    }
};

function createStudent(name) {
    var s = Object.create(Student);
    s.name = name;
    return s;
}

var xiaoming = createStudent('小明');
xiaoming.run();
console.log(xiaoming.__proto__ === Student); // true


// 编程模式
function Cat(name) {
    this.name = name || 'Robot';
    this.say = function() {
        return 'Hello, ' + this.name + '!';
    }
}

// 封装 new Object，以免忘记写new，返回undefined.
function createCat(props) {
    return new Cat(props || {});
}


//var kitty = new Cat('Kitty');
//var tom = new Cat('Tom');
var kitty = createCat('Kitty');
var tom = createCat('Tom');
console.log(kitty.say()); // 'Hello, Kitty!'
console.log(kitty.say === tom.say); // false


// ES6 新标准, class
class Person {
    constructor(name) {
        this.name = name;
    }
    hello() {
        console.log("Hello, " + this.name + '!');
    }
}
var xiaoxiao = new Person('xiaoxiao');
xiaoxiao.hello();

// class 继承： extends
class Teacher extends Person {
    constructor(name, grade) {
        super(name); // 调用父类的构造方法
        this.grade = grade;
    }
    myGrade() {
        console.log('I\' at grade ' + this.grade);
    }
}

var feifei = new Teacher('feifei', 5);
feifei.myGrade();