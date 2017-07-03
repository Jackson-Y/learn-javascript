'use strict';
var s = 'Great';

function greet(name){
    console.log(s + ',' + name + '!');
}

function hello(name){
    console.log('Hello' + ',' + name);
}


// module.exports = hello;

module.exports = {
    hello: hello,
    greet: greet
};