//test.js
'use strict';

process.nextTick(function () {
    console.log('nextTick callback!');
});

process.on('exit', function (code) {
    console.log('about exit with code: ' + code);
});

console.log('nextTick was set!');

// console.log('Bye');

if (typeof(window) === 'undefined') {
    console.log('nodejs');
} else {
    console.log('browser');
}

// process.exit(100);
