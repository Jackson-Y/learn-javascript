'use strict'
var m = new Map();

var s = new Set();
console.log('Brower support Map & set！');


// Map 一系列键-值对
// 初始化一个Map需要二维数组
// var m = new Map(['Michael', 94], ['Moxiao', 100]);
m.set('Adam', 99);
m.set('Adam', 67);
m.set('Bob', 90);
console.log(m.has('Adam')); // true
console.log(m.get('Adam')); // 67
m.delete('Adam');
console.log(m.get('Adam')); // undefined

// Set 一系列键
// 初始化Set需要一维数组, 自动去重。
// var s = new Set([1, 2, 3])
var s1 = new Set([1, 2, 3, 3, '3']);
// console.log(s1); // 1, 2, 3, '3'
s1.add(4); // 1, 2, 3, 4, '3'
s1.add(4); // 1, 2, 3, 4, '3'
s1.delete(3); // 1, 2, 4, '3'


var a = ['A', 'B', 'C'];
console.log('x of array')
for (var x of a) {
    console.log(x);
}
console.log('x in array')
for (var x in a) {
    console.log(x);
}

var s2 = new Set(['a', 'b', 'c']);
// console.log('x of Set')
// for (var x of s2) {
//     console.log(x);
// }
// console.log('x in Set')
// for (var x in s2) {
//     console.log(x);
// }


var m2 = new Map([
    [1, 'x'],
    [2, 'y'],
    [3, 'z']
]);
// console.log('x of Map')
// for (var x of m2) {
//     console.log(x);
// }
// console.log('x in Map')
// for (var x in m2) {
//     console.log(x)
// }


// iterable
var a = ['O', 'P', 'Q'];
a.forEach(function(element, index, array) {
    console.log(element);
    //console.log(index);
    //console.log(array[index]);
})

s2.forEach(function(element, sameElement, set) {
    console.log(element);
})

m2.forEach(function(value, key, map) {
    console.log(' ');
    console.log(value);
    console.log(key);
})