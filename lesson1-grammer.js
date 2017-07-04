'use strict'
// JavaScript 对象 
var xiaoming = {
    name: 'moxiao',
    birth: 2000,
    school: 'No.1 Middle School',
    height: 180,
    weight: 75,
    score: null
};

console.log(xiaoming.name);
console.log(xiaoming.school);

var xiaohong = {
    name: '小红',
    'middle-school': 'No.1 Middle School'
};

console.log(xiaohong['middle-school']);
console.log(xiaohong['name']);
console.log(xiaohong.name);

// xiaoming.age = 18;
// console.log(xiaohong.age);  // v8.1.3不支持动态添加属性？

console.log('toString' in xiaoming); // true, 'toString'隐藏在对象中
console.log('name' in xiaoming); // true
console.log('grade' in xiaoming); // false

console.log(xiaoming.hasOwnProperty('name')); // true
console.log(xiaoming.hasOwnProperty('grade')); // false


// JavaScript把null、undefined、0、NaN和空字符串''视为false，其他值一概视为true
var age = 20;
if (age >= 18) {
    console.log('adult');
} else if (age >= 6) {
    console.log('teenager');
} else {
    console.log('kid');
}


// for循环的控制条件：
//     i=1 这是初始条件，将变量i置为1；
//     i<=10000 这是判断条件，满足时就继续循环，不满足就退出循环；
//     i++ 这是每次循环后的递增条件，由于每次循环后变量i都会加1，
//          因此它终将在若干次循环后不满足判断条件i<=10000而退出循环。
var x = 0;
var i;
for (i = 1; i <= 100; ++i) {
    x = x + i;
}

console.log(x); // 5050

var x = 0;
for (;;) { // 将无限循环下去
    if (x > 100) {
        break; // 通过if判断来退出循环
    }
    console.log(x);
    ++x;
}

var o = {
    name: 'Jackson',
    age: 20,
    city: 'Beijing'
};
for (var key in o) {
    if (o.hasOwnProperty(key)) {
        console.log(key);
    }
    console.log(key); // 'name', 'age', 'city'
}

var a = ['a', 'b', 'c'];
for (var i in a) {
    console.log(i); // '0', '1', '2'
    console.log(a[i]); // 'a', 'b', 'c'
}


var x = 0;
var n = 99;
while (n > 0) {
    x = x + n;
    n = n - 2;
}
console.log(x); // 2500

var n = 0;
do {
    n = n + 1;
} while (n < 100);
console.log(n); // 100