'use strict'

// 生成器
function* foo(x) {
    yield x + 1;
    yield x + 2;
    return x + 3;
}

var f = foo(100);
console.log(f.next()); // { value: 101, done: false }
console.log(f.next()); // { value: 102, done: false }
console.log(f.next()); // { value: 103, done: true }
console.log(f.next()); // { value: undefined, done: true }


function* fib(max) {
    var
        t,
        a = 0,
        b = 1,
        n = 1;
    while (n < max) {
        yield a;
        t = a + b;
        a = b;
        b = t;
        ++n;
    }
    return a;
}
var f1 = fib(10);
var i = 0;
while (i < 10) {
    console.log(f1.next());
    ++i;
}


// 自增ID生成器 ( 异步调用next_id )
function* next_id() {
    var id = 1;
    while (true) {
        yield id;
        ++id;
    }
}
var g = next_id();
console.log("ID auto_increment()");
for (var i = 1; i < 20; ++i) {
    if (g.next().value === i) {
        console.log("Right! ", i);
    }
}