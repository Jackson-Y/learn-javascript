
NaN === NaN  // false
isNaN(NaN)   // true

false == 0   // true
false === 0  // false

Infinity  //无限大
0 / 0;   // NaN, Not a number
2 / 0;   // Infinity


// 浮点数比较
// 计算机无法精确表示无限循环小数，
// 所以要判断浮点数相等，只能计算他们之差的绝对值，
// 看是否小于某个阈值
1 / 3 === (1 - 2 / 3);  //false
Math.abs(1 / 3 - (1 - 2 / 3)) < 0.0000001  //true


// 0, null , '', undefined
null 表示 空
0    表示一个数值
''   表示一个长度为0的字符串
undefined  表示 “未定义”， 在判断函数参数是否传递的情况下有用。


// 数值
[1, 2, 3, "hello", null, true];

new Array(1, 2, 3);

var arr = [1, 2, 3, "hello", null, true];
arr[0];
arr[1];
arr[5];


// 对象
var person = {
	name: 'Tim',
	age: 20,
	tags: ['js', 'web'],
	city: 'beijing',
	hasCar: true;
	zipcode: null
};

person.name;
person.age;
person.zipcode;


// 变量
var a; // a的值为undefined
var $b = 1;  // $b的值为1
var s_009 = '00099';  //  s_009是字符串
var Answer = true;
var t = null;

// 变量只能用var声明一次，反复赋值。

// 如果变量未用var声明直接使用，则该变量自动被声明为全局变量。
i = 10;  // i现在是全局变量


// 支持'use strict'模式的浏览器，在使用未通过var声明的变量时，会报错。
// 因为在同一个页面的不同的JavaScript文件中，如果都不用var申明，
// 恰好都使用了变量i，将造成变量i互相影响，产生难以调试的错误结果。

// 启用strict模式的方法是在JavaScript代码的第一行写上：
'use strict'


