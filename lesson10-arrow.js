'use strict'

// 箭头函数
x => x * x
    //相当于：
function f(x) {
    return x * x;
}

console.log('start');

var fn1 = x => x * x;
var fn2 = (x, y) => x * x + y * y;
var fn3 = () => 3.14;
var fn4 = (x, y, ...rest) => {
    var i, sum = x + y;
    for (i = 0; i < rest.length; ++i) {
        sum += rest[i];
    }
    return sum;
};
console.log(fn1(2));
console.log(fn2(1, 2));
console.log(fn3());
console.log(fn4(1, 2, 3, 4, 5));

// 返回一个对象
// var fn5 = x => { foo: x }; 
// 错误，{}表示语句块，与对象冲突，
// 所以，返回对象时，外边加小括号。
// 以下是正确返回对象的写法：
var fn5 = x => ({ foo: x });
console.log(fn5(100));


// 箭头函数完全修复了this的指向，this总是指向词法作用域，也就是外层调用者obj
var obj = {
    birth: 1990,
    getAge: function() {
        var b = this.birth; // 1990
        var fn = () => new Date().getFullYear() - this.birth; // this指向obj对象
        return fn();
    }
};
var age = obj.getAge(); // 25
console.log(age);