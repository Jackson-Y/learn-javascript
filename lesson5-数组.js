var arr = [1, 2, 3.14, 'hello', null, true];
arr.length; //  6

var arr = [1, 2, 3];
arr.length; // 3
arr.length = 6;
arr; // arr变为[1, 2, 3, undefined, undefined, undefined]
arr.length = 2;
arr; // arr变为[1, 2]


// array可以通过索引赋值，改变arry的值
var arr = [1, 2, 3];
arr[0] = 5;
arr; // arr = [5, 2, 3]

// 赋值时，索引超过了范围，自动增长。
var arr = [1, 2, 3];
arr[5] = 'X';
arr; // arr变为[1, 2, 3, undefined, undefined, 'X'];

// indexOf() 返回元素位置
var arr = [1, 2, 3, undefined, undefined, 'X'];
arr.indexOf(1);    // 0
arr.indexOf('X');  // 5


// slice()  截取数组的一部分
var arr = ['A', 'B', 'C', 'D','E'];
arr.slice(0,3);  // ['A', 'B', 'C']
arr.slice(3);    // ['D', 'E']


// push() 在末尾添加
// pop() 在末尾删除
var arr = [1, 2];
arr.push('a', 'b');
arr; // [1, 2, 'a', 'b']

arr.pop(); // pop() 返回 'b'
arr; // [1, 2, 'a']
arr.pop(); arr.pop(); arr.pop();
arr; // []
arr.pop(); //空数组 pop() 不会报错，而是返回 undefined
arr; // []

// unshift() 在数组头部添加元素
// shift() 在数组头部移除元素
var arr = [1, 2];
arr.unshift('a', 'b');
arr; // ['a', 'b', 1, 2]
arr.shift(); // 'a'
arr;  // ['b', 1, 2]
arr.shift();arr.shift(); arr.shift();
arr; // []
arr.shift(); // 返回undefined，不报错
arr; // []


// sort()
var arr = ['B', 'C', 'A'];
arr.sort();
arr; // ['A', 'B', 'C']

// reverse() 翻转
var arr = ['NMP', 'Axure', '123']
arr.reverse(); // ['123', 'Axure', 'NMP' ]


// splice();
var arr = ['Microsoft', 'Apple', 'Yahoo', 'AOL', 'aaa', 'bbb'];
// 从索引2开始删除3个元素，并添加两个元素
arr.splice(2, 3, 'Microsoft', 'Apple',);  // 返回删除的元素['Yahoo', 'AOL', 'aaa']
arr;   // ['Microsoft', 'Apple', 'Microsoft', 'Apple', 'bbb']
// 只删除，不添加
arr.splice(2, 2);
// 只添加，不删除
arr.splice(2, 0, 'Google', 'anything');


// concat  连接数组
var arr = [1, 2, 3];
var add = arr.concat(['a', 'b']);
add; // [1, 2, 3, 'a', 'b']
arr; // [1, 2, 3]

var add1 = arr.concat('x', 4, [5, 6]);
add1; // [1, 2, 3, 'x', 4 ,5, 6]


// join() 
var arr = ['A', 'B', 'C', 1, 2, 3];
arr.join('-'); // 'A-B-C-1-2-3'

var arr = [[1, 2, 3], [400, 500, 600], '-'];
var x = arr[1][1]; // 500