'use strict'

function load() {
    var js = document.getElementById('test-p');
    //var arr = document.getElementsByClassName('c-red')[1].getElementsByTagName('p');
    var arr = document.getElementsByClassName('c-green')[0].getElementsByTagName('p');

    //var haskell = document.getElementsByClassName('c-green')[1].getElementsByTagName('p')[6];
    var haskell = document.getElementById('test-div').getElementsByTagName('p')[6];


    console.log('Text: ' + js.innerText);
    console.log('HTML: ' + js.innerHTML);


    console.log('Text: ' + arr[0].innerText);
    console.log('HTML: ' + arr[1].innerText);
    console.log('HTML: ' + arr[2].innerText);

    console.log('Text: ' + haskell.innerText);
    console.log('HTML: ' + haskell.innerHTML);
}

function changecss() {
    var p = document.getElementById('input1');
    p.value = '改变后的样式';
    p.style.color = '#fff';
    p.style.fontSize = '40px';
    p.style.background = '#00bfff';
    p.style.margin = '0px';
    p.style.border = 'solid  1px';
    p.style.padding = '30px';
}


// sort 
var
    i, c,
    list = document.getElementById('test-list'),
    arr = [],
    oli = [];
for (i = 0; i < list.children.length; i++) {
    c = list.children[i];
    console.log(c.innerHTML);
    arr[i] = c;
}

arr.sort(function(li1, li2) {
    var n1 = li1.innerHTML;
    var n2 = li2.innerHTML;
    return n1 > n2;
});

console.log('----------------------------');
for (i = 0; i < arr.length; i++) {
    console.log(arr[i].innerHTML);

}


// insertBefore

var list = document.getElementsByClassName('c-red')[0];
var ref = document.getElementById('test-p');
var delParent = document.getElementById('test-list');
var delChildren = delParent.children[2];
var newNode1 = document.createElement('p');
var newNode2 = document.createElement('p');
newNode1.setAttribute('id', 'before1');
newNode1.innerHTML = '<p>C/C++</p>';
newNode2.setAttribute('id', 'before2');
newNode2.innerHTML = '<p>PHP</p>';

// appendchild()
list.appendChild(newNode1);
// insertBefore
list.insertBefore(newNode2, ref);
// delChildren
delParent.removeChild(delChildren);