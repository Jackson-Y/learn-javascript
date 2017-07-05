'use strict'

// window
console.log('window inner size: ' + window.innerWidth);
console.log('window inner size: ' + window.innerHeight);
console.log('window outer size: ' + window.outerWidth);
console.log('window outer size: ' + window.outerHeight);

// navigator
console.log('navigator appName: ' + navigator.appName);
console.log('navigator appVersion: ' + navigator.appVersion);
console.log('navigator language: ' + navigator.language);
console.log('navigator platform: ' + navigator.platform);
console.log('navigator userAgent: ' + navigator.userAgent);

// 浏览器兼容
// navigator内容可以被用户修改，造成判断不准确，也很难维护代码。
// 正确的方法是充分利用JavaScript对不存在属性返回undefined的特性，直接用短路运算符||计算.
var width = window.innerWidth || document.body.clientWidth;

// screen
console.log('screen width: ' + screen.width);
console.log('screen height: ' + screen.height);
console.log('screen colorDepth: ' + screen.colorDepth);


// location 当前页面的URL信息
console.log('location protocol: ' + location.protocol);
console.log('location host: ' + location.host);
console.log('location port: ' + location.port);
console.log('location pathname: ' + location.pathname);
console.log('location search: ' + location.search);
console.log('location hash: ' + location.hash);
//location.assign(); // 加载新页面
//location.reload(); // 重新加载当前页面

// document 当前页面 DOM树的根节点
document.title = '学习 JavaScript !';
console.log(document.cookie);

// 以下内容放在test.html </dl> 标签下执行
// var menu = document.getElementById('drink-menu');
// console.log(menu.tagName);

// var i, s;
// var drinks = document.getElementsByTagName('dt');
// for (i = 0; i < drinks.length; i++) {
//     s = s + drinks[i].innerHTML + ',';
// }
// console.log(s);