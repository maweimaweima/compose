function a(){}
function b(){}
compose.require(['mod/a', 'mod/b'], function(a, b){
	//该文件入口
	alert(a + '--------');
	return {id:'firstIndex'};
}, ['a', 'b']);