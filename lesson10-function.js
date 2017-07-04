'use strict'
// function

function abs(x) {
    if (typeof x != 'number') {
        throw 'Not a number!';
    }
    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
}

console.log(abs(-100));
console.log(abs()); // 0
console.log(abs('aaa')); // undefined


// arguments
function abs() {
    if (arguments.length === 0) {
        return 0;
    }
    var x = arguments[0];
    return x >= 0 ? x : -x;
}
console.log(abs());
console.log(abs(10));
console.log(abs(-99));


// rest
function foo(a, b, ...rest) {
    console.log('a = ', a);
    console.log('b = ' + b);
    console.log(rest);
}
foo(1);
foo(1, 2);
foo(1, 2, 3);
foo(1, 2, 3, 4, 5);



// return
// function foo() {
//     return /////  此处注意，会直接返回。××
//     { name: 'foo' };
// }

//由于JavaScript引擎在行末自动添加分号的机制, 所以return后需要换行时，加{}
function foo1() {
    return { // 这里不会自动加分号，因为{表示语句尚未结束
        name: 'foo'
    };
}

// 全局变量 window
var course = 'Learn JavaScript!';
console.log(course);
console.log(window.course);
window.console.log(course);
window.console.log(window.course);


// 高阶函数，参数也是函数的函数
function add(x, y, f) {
    return f(x) + f(y);
}
var s = add(-5, 6, Math.abs);
console.log(s);

// map()
function pow(x) {
    return x * x;
}

function string(x) {
    return x.toString();
}
var arr = [1, 2, 3, 4, 5];
console.log(arr.map(pow)); // [1, 4, 9, 16, 25]
console.log(arr.map(string)); // ['1', '2', '3', '4', '5']

// reduce()
function add1(x, y) {
    return x + y;
}

function calc(x, y) {
    return x * y;
}

function toNum(x, y) {
    return x * 10 + y;
}

var arr = [1, 2, 3, 4, 5];
console.log(arr.reduce(add1));
console.log(arr.reduce(calc));
console.log(arr.reduce(toNum));

// 第一个首字母大写其他小写。
function standStr(str) {
    return str.toLowerCase().replace(/\b[a-z]/g, function(s) {
        return s.toUpperCase();
    });
}
var str = ['asL', 'LNMP', 'aDLD', 'LISa', 'barT'];
console.log(str.map(standStr));


// 判断素数
function isPrime(x) {
    if (x === 1) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(x); ++i) {
        if (x % i === 0) {
            return false;
        }
    }
    return true;
}

function get_primes(arr) {
    return arr.filter(isPrime);
}

var
    x,
    r,
    arr = [];

for (x = 1; x < 100; ++x) {
    arr.push(x);
}
r = get_primes(arr);
console.log(r);
if (r.toString() === [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97].toString()) {
    console.log('测试通过！');
} else {
    console.log('测试失败！');
}