// fs

// 异步读文件
'use strict';

var fs = require('fs');

fs.readFile('lesson6-first_node.js', 'utf-8',function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log('1. IO结果返回后执行. 1');
        console.log(data);
    }
});

console.log('2. 不等待IO直接执行! 2');

// 读二进制文件时不加字符编码参数。
fs.readFile('Smile.png', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
        console.log(data.length + ' bytes');
    }
});


// 同步读文件 readFileSync('test.txt', 'utf-8');
// use try...catch(err)


// string --> buffer
// var text = data.toString('utf-8');

// buffer --> string
// var buf = new buffer(text, 'utf-8');


// 异步写文件
var write_data = 'Hello, this is test  Async write file.';
fs.writeFile('output.txt', write_data, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('OK');
    }
});

// 同步写文件 writeFileSync('output.txt', data);

fs.stat('Smile.png', function (err, stat) {
    if (err) {
        console.log(err);
    } else {
        console.log('isFile: ' + stat.isFile());
        console.log('isDirectory: ' + stat.isDirectory());
        if (stat.isFile()) {
            console.log('size: ' + stat.size);
            console.log('Create time: ' + stat.birthtime);
            console.log('Modify time: ' + stat.mtime);
        }
    }
});