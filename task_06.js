function init(){
	var allScreen = document.getElementById('allScreen');
	var floatBlock = document.getElementById('floatBlock');
	var all = document.getElementById('all');
	allScreen.onclick = function(){
		allScreen.style.display = 'none';
		floatBlock.style.display = 'none';
	}	
	all.onclick = function(){
		allScreen.style.display = 'block';
		floatBlock.style.display = 'block';
	}
	//单击确定或取消可以使浮层消失 懒得再取一个id了=。=
	var button = document.getElementsByTagName('input');
	var len = button.length;
	button[len-1].onclick = function(){
		allScreen.style.display = 'none';
		floatBlock.style.display = 'none';
	}
	button[len-2].onclick = function(){
		allScreen.style.display = 'none';
		floatBlock.style.display = 'none';
	}

	//实现拖放 为什么会向上跳一下呢。。
	floatBlock.onmousedown = function(e){ //当鼠标选中浮层
		var e = e || window.event; //兼容IE
		var newX = e.clientX - floatBlock.offsetLeft;//点击位置相对于浮层的坐标
		var newY = e.clientY - floatBlock.offsetTop;
		document.onmousemove = function(e){
		var e = e || window.event;
		var left = e.clientX - newX;//浮层相对于浏览器的新的坐标
		var top = e.clientY - newY;
		if(left<0){  //限制不能超出浏览器
			left= 0;
		}
		if(top<0){
			top = 0;
		}
		floatBlock.style.left = left +'px';
		floatBlock.style.top = top +'px';
	}
		document.onmouseup = function(e){
			this.onmousemove = null;
			this.onmouseup = null;
		}
	}
}
init();
