'use strict'
// 标准对象
console.log(typeof 123); // number
console.log(typeof NaN); // number
console.log(typeof 'str'); // string
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof Math.abs); // function
console.log(typeof null); // object
console.log(typeof []); // object
console.log(typeof {}); // object
var n = new Number(123);
var v = new Boolean(true);
var s = new String('str');
console.log(n); // Number { 123 }
console.log(v); // Boolean { true }
console.log(s); // String { 0:'s',1:'t',2:'r',length:3}
console.log(typeof n); // object
console.log(typeof v); // object
console.log(typeof s); // object


console.log(n === 123); // false
console.log(v === true); // false
console.log(s === 'str'); // false

var nn = Number(123); // 123
var vv = Boolean(true); // true
var v1 = Boolean('true'); // true
var v2 = Boolean(''); // false
var ss = String(123.45); // '123.45'
console.log(nn); // 123
console.log(typeof nn); // number
console.log(vv); // true
console.log(v1); // true
console.log(v2); // false
console.log(ss); // '123.45

// console.log(123.toString()); // SyntaxError
console.log(123..toString());
console.log((123).toString());

var arr = [1, 2];
var x = null;
console.log(Array.isArray(arr)); // true
console.log(x === null); // true
console.log(typeof window.myvar === 'undefined'); // true
console.log(typeof varaa === 'undefined'); // true

// Date
var now = new Date();
console.log(now); // Wed Jun 24 2015 19:49:22 GMT+0800 (CST)
console.log(now.getFullYear()); // 2015, 年份
console.log(now.getMonth() + 1); // 5, 月份，注意月份范围是0~11，5表示六月
console.log(now.getDate()); // 24, 表示24号
console.log(now.getDay()); // 3, 表示星期三
console.log(now.getHours()); // 19, 24小时制
console.log(now.getMinutes()); // 49, 分钟
console.log(now.getSeconds()); // 22, 秒
console.log(now.getMilliseconds()); // 875, 毫秒数
console.log(now.getTime()); // 1435146562875, 以number形式表示的时间戳

var d = Date.parse(now);
console.log(d);

var x = new Date(1499151971008);
console.log(x.toLocaleString());
console.log(x.toUTCString());

// RegExp 正则表达式
var re = /^\d{3}\-\d{3,8}$/;
// 或者：
// var re = new RegExp('^\\d{3}\\-\\d{3,8}');
// 字符串中本身用反斜杠'\' 来转义，所以需要正则中用两个 '\\'。
console.log(re.test('010-12345')); // true
console.log(re.test('010 12349')); // false
console.log(re.test('010-1234x')); // false

// 分割 
console.log('a b   c'.split(' '));
console.log('a b   c'.split(/\s+/));
console.log('a,b;;c   d'.split(/[\s\,\;]+/));
// 分组 ()
var re = /^(\d{3})-(\d{3,8})$/;
console.log(re.exec('010-12345')); // ['010-12345', '010', '12345']
console.log(re.exec('010 12345')); // null
// 非贪婪匹配 ?
var re1 = /^(\d+)(0*)$/;
console.log(re1.exec('102400')); // ['102400', '102400', '']
var re2 = /^(\d+?)(0*)$/;
console.log(re2.exec('102400')); // ['102400', '1024', '00']
// 全局搜索 g
var r1 = /test/g;
// 相当于: 
// var r1 = new RegExp('test', 'g');
var s = 'JavaScript, VBScript, JScript and ECMAScript';
var re = /[a-zA-Z]+Script/g;
console.log(re.exec(s)); // JavaScript
console.log(re.lastIndex);
console.log(re.exec(s)); // VBScript
console.log(re.lastIndex);
console.log(re.exec(s)); // JScript
console.log(re.lastIndex);
console.log(re.exec(s)); // ECMAScript
console.log(re.lastIndex); // 29
console.log(re.exec(s)); // null
console.log(re.lastIndex); // 0

// 匹配电子邮件地址
var email = /^([\w-_]+(?:\.[\w-_]+)*)@((?:[a-z0-9]+(?:-[a-zA-Z0-9]+)*)+\.[a-z]{2,6})$/;
console.log(email.exec("someone@gmail.cn"));
console.log(email.exec("someone@gmail"));
console.log(email.exec("@gmail.cn"));


// JSON (JavaScript Object Notation)
// 键必须用 "", 字符串也必须用""
var xiaoming = {
    name: '小明',
    age: 14,
    gender: true,
    height: 1.65,
    grade: null,
    'middle-school': '\"W3C\" Middle School',
    skills: ['JavaScript', 'Java', 'Python', 'Lisp']
};

console.log(JSON.stringify(xiaoming)); // '{"name":"小明","age":14,"gender":true,"height":1.65,"grade":null,"middle-school":"\"W3C\" Middle School","skills":["JavaScript","Java","Python","Lisp"]}'
// 格式化输出
console.log(JSON.stringify(xiaoming, null, ' '));
// 只显示指定属性
console.log(JSON.stringify(xiaoming, ['name', 'skills'], ' '));
// 传入回调函数，修改value的值
function convert(key, value) {
    if (typeof value === 'string') {
        return value.toUpperCase();
    }
    return value;
}
console.log(JSON.stringify(xiaoming, convert, ' '));

// 反序列化 JSON.parse(), 转化为JavaScript对象。
console.log(JSON.parse('[1,2,3,true]')); // [1,2,3,true]
console.log(JSON.parse('{"name":"moxiao", "age":20}')); // {name: "moxiao", age: 20}
console.log(JSON.parse('true')); // true
console.log(JSON.parse('123.45')); // 123.45

// JSON.parse()还可以接收一个函数，用来转换解析出的属性：
var o = JSON.parse('{"name":"moxiao", "age":20}', function(key, value) {
    if (key === 'name') {
        return value + '同学';
    }
    return value;
});

console.log(o);