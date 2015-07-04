function first(){}
function second(){}
compose.require(['mod/object/first', 'mod/object/second'], function (first, second){
	window.wfirst = {
		id: 'firstWight',
		first: first,
		second: second
	};
}, ['first', 'second'])
function wsecond(){}
compose.require('mod/page/first-page', ['mod/wight/first-wight', 'mod/wight/second-wight'], function(wfirst, wsecond){
	//该文件入口
	window.pfirst = {
		id: 'firstPage',
		wfirst: wfirst,
		wsecond: wsecond
	};
}, ['wfirst', 'wsecond']);
compose.require('mod/object/third', function (){
	return function third(){};
})
compose.require('mod/object/forth', function (){
	return function forth(){};
})
compose.require('mod/wight/third-wight', ['mod/object/third', 'mod/object/forth'], function (third, forth){
	return {
		id: 'third-wight',
		third: third,
		forth: forth
	}
})
compose.require('mod/wight/forth-wight', function (){
	return function wforth(){};
})
compose.require('mod/page/second-page', ['mod/wight/third-wight', 'mod/wight/forth-wight'], function(wthird, wforth){
	//该文件入口
	return {
		id:'secondPage',
		wthird: wthird,
		wforth: wforth
	};
});
function a(){}
function b(){}
function c (){}
function d(){}
compose.require(['mod/a','mod/b','mod/c','mod/d'], function(a, b, c, d){
	//该文件入口
	window.k = {id:'k'};
}, ['a','b','c','d']);
function first(){}
function second(){}
compose.require(['mod/object/first', 'mod/object/second'], function (first, second){
	window.wfirst = {
		id: 'firstWight',
		first: first,
		second: second
	};
}, ['first', 'second'])
function wsecond(){}
compose.require('mod/page/first-page', ['mod/wight/first-wight', 'mod/wight/second-wight'], function(wfirst, wsecond){
	//该文件入口
	window.pfirst = {
		id: 'firstPage',
		wfirst: wfirst,
		wsecond: wsecond
	};
}, ['wfirst', 'wsecond']);
compose.require('mod/object/third', function (){
	return function third(){};
})
compose.require('mod/object/forth', function (){
	return function forth(){};
})
compose.require('mod/wight/third-wight', ['mod/object/third', 'mod/object/forth'], function (third, forth){
	return {
		id: 'third-wight',
		third: third,
		forth: forth
	}
})
compose.require('mod/wight/forth-wight', function (){
	return function wforth(){};
})
compose.require('mod/page/second-page', ['mod/wight/third-wight', 'mod/wight/forth-wight'], function(wthird, wforth){
	//该文件入口
	return {
		id:'secondPage',
		wthird: wthird,
		wforth: wforth
	};
});
function a(){}
function b(){}
function c (){}
function d(){}
compose.require(['mod/a','mod/b','mod/c','mod/d'], function(a, b, c, d){
	//该文件入口
	window.k = {id:'k'};
}, ['a','b','c','d']);
/*compose.require(['mod/page/first-page', 'mod/page/second-page'], function(pfirst, psecond){
	//该文件入口
	alert(pfirst.id);
	alert(psecond.id);
}, ['pfirst']);*/
compose.require(['mod/page/first-page'], function(pfirst){
	//该文件入口
	alert(pfirst.id);
}, ['pfirst']);
compose.require(['mod/page/second-page'], function(wthird){
	//该文件入口
	alert(wthird.id);
});
compose.require(['mod/a', 'mod/b'], function(a, b){
	//该文件入口
	alert(a);
	alert(b);
}, ['a', 'b']);
compose.require(['mod/k'], function(k){
	//该文件入口
	alert(k.id);
}, ['k']);

