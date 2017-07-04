'use strict'

var moxiao = {
    name: 'moxiao',
    birth: 2000,
    age: function() {
        var y = new Date().getFullYear();
        return y - this.birth;
    }
};
console.log(moxiao.birth);
//console.log(moxiao.age);
console.log(moxiao.age());

var count = 0;
var oldParseInt = parseInt;

window.parseInt = function() {
    count += 1;
    return oldParseInt.apply(null, arguments);
};

parseInt('10');
parseInt('20');
parseInt('30');
console.log(count);