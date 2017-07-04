'use strict'
// 闭包

console.log('start');

function lazy_sum(arr) {
    var sum = function() {
        return arr.reduce(function(x, y) {
            return x + y;
        });
    }
}
var f = lazy_sum([1, 2, 3, 4, 5]);
//var r = f();
//console.log(r); // 15 , 错误

var f1 = lazy_sum([1, 2, 3]);
var f2 = lazy_sum([1, 2, 3]);
console.log(f1 === f2); //false，  实际运行返回值为true

console.log('end');

function count() {
    var arr = [];
    for (var i = 1; i <= 3; i++) {
        arr.push(function() {
            return i * i;
        });
    }
    return arr;
}

var results = count();
var f1 = results[0];
var f2 = results[1];
var f3 = results[2];
console.log(f1);
console.log(f2);
console.log(f3);


//创建一个匿名函数并立即执行
(function(x) {
    return x * x;
})(3); // 9

console.log(
    (function(x) {
        return x * x;
    })(3)
);


// 封装私有变量
function create_counter(initial) {
    var x = initial || 0;
    return {
        inc: function() {
            x += 1;
            return x;
        }
    }
}
var c1 = create_counter();
console.log(c1.inc()); // 1
console.log(c1.inc()); // 2
console.log(c1.inc()); // 3