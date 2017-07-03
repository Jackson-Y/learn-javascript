// 转义
// 字符串内容 I'm "OK"!
'I\'m \"OK\"!';

\\  \n  \t 
'\x41'  // 16进制，等于字母‘A’
'\u4e2d\u6587'  // Unicode字符， 等于 '中文'

// 多行字符串  `...`
alert(`这是一个
多行字符串
`);


// +  用于字符串连接
var name = 'xiaoming';
var age = 20;
var message = '你好，' + name + ',你今年' + age + '岁了。';
alert(message);

// 连接多个变量，用${..} 引用变量
var name = '小明';
var age = 30;
alert(`你好，${name}, 你今年${age}岁了！`);


// length
var s = 'Hello world!';
s.length; // 12

var s = 'hello world!';
s[0];  // 'h'
s[2];  // 'l'
s[5];  // ' '
s[11]; // '!'
s[12]; // undefined


// 字符串是不可变的，对字符串的某个索引赋值，不报错，但是也没有任何效果。
var s = 'test';
s[0] = 'X';
alert(s);  //  s依然为'test'


// toUpperCase()
var s = 'Hello';
s.toUpperCase();  // 'HELLO'

// toLowerCase
s. toLowerCase(); // 'hello'


// indexOf
var s = 'hello, world';
s.indexOf('world'); // 7
s.indexOf('World'); // undefined

// substring
var s = 'hello, world';
s.substring(0,5); // 从索引0-5（不包括5）,返回'hello'
s.substring(7);  // 从索引7开始到结束，返回'world'



