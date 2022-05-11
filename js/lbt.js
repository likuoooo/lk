window.onload = function() {
	var oBox = document.getElementById('lunbotuimgs_box');
	var oUl = document.getElementById('lunbotu_ul');
	var cur = 0; //定义一个变量用于设置left值
	var timer = null; //定义一个计时器
	var target = 0;
	var timer1 = null;
	var i = 0;
	timer = setInterval(autoPlay, 2000); // 定义计时器每25毫秒执行一次

	function autoPlay() { //执行每次执行函数，left值减1
		if (target <= -400) {
			cur = 0;
			target = -100;
		} else {
			target -= 100;
		}
		btnBottom();
	}
	// var timer1 = null;
	timer1 = setInterval(autoPlay, 30); //设置定时器每30毫秒执行一次
	function autoPlay() {
		if (cur == target) {
			clearInterval(timer1) //大于目标值时，清空计时器
		} else {
			speed = (target - cur) / 7; //计算速度
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed); //取整
			cur = cur + speed;
			oUl.style.left = cur + "%";

		}
	}
	// 增加下标显示效果
	btnBottom(i)

	function btnBottom() {
		i = -(target / 100);
		i == 4 ? i = 0 : i;
		var oOl = document.getElementById("ol");
		var oLi = oOl.getElementsByTagName("li");
		for (j = 0; j < oLi.length; j++) {
			oLi[j].style.background = '';
		}
		oLi[i].style.background = '#fff';
	}
	oBox.onmouseover = function() { //移出时清除计时器
		clearInterval(timer);
	}
	oBox.onmouseout = function() { //移入时开始计时器
		timer = setInterval(autoPlay, 2000);
	}
}
