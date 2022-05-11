window.onload = function() {
	var bar = document.querySelector('.bar');
	//滑动，导航栏定位效果
	$(window).scroll(function() {
		//获取垂直滚动的距离
		var scrollTop = $(document).scrollTop();
		if (scrollTop >= 200) {
			bar.style.position = "fixed";
			bar.style.top = 0;
		} else {
			bar.style.position = "relative";
		}
	});

	var xiazaiapp_li = document.getElementById('xiazaiapp_li');
	var erweima1 = document.getElementById('erweima1');
	// 黑色导航栏 下载li的鼠标经过与离开的效果
	xiazaiapp_li.onmouseenter = function() {
		$("#erweima1").stop().slideDown();
	}
	xiazaiapp_li.onmouseleave = function() {
		$("#erweima1").stop().slideUp();
	}
	erweima1.onmouseenter = function() {
		$("#erweima1").stop();
	}
	erweima1.onmouseleave = function() {
		$("#erweima1").stop().slideUp();
	}

	//购物车下滑效果
	// hover只写一个函数的话鼠标经过了和离开都会触发function
	$("#shoppingcar_navhover").hover(function() {
		$("#gouwuchekong_show2").stop().slideToggle();
	})



	// 全部商品分类模块
	var allshangpin_li1 = document.getElementById('allshangpin_li1');
	var allshangpin = document.getElementById('allshangpin');
	allshangpin_li1.onmouseenter = function() {
		allshangpin.style.display = 'block';
	}
	allshangpin_li1.onmouseleave = function() {
		allshangpin.style.display = 'none';
	}
	allshangpin.onmouseenter = function() {
		allshangpin.style.display = 'block';
	}
	allshangpin.onmouseleave = function() {
		allshangpin.style.display = 'none';
	}
	//全部商品分类模块右侧内容切换效果
	//白色滑块内的切换效果
	var ts = document.querySelectorAll('.ts');
	var tabs1 = document.querySelectorAll('.item3');
	var tabs2 = document.querySelectorAll('.allwhite_right_style');
	for (var j = 0; j < ts.length; j++) {
		$("#allwhite_right").stop();
		ts[j].setAttribute('index1',
			j); // 给每个a添加一个data-index的自定义属性，值是它们自己在as中的下标，这个值主要让我们判断我们当前点击的是哪个a从而帮助我们后续修改它对应的div的display值
		ts[j].onmouseenter = function() {
			// 点击谁就让其对应的下属div显示出来，其他没有被点击的就隐藏
			//要先知道用户点击的是谁，然后再给对象的div设置display为block即可
			// 根据点击修改div的display属性值
			var index1 = this.getAttribute('index1'); // 获取当前被点击的a的index 
			for (var j1 = 0; j1 < ts.length; j1++) {
				tabs1[j1].style.display = 'none';
			}
			// 在tabs中锁定a的index对应的item单独将它的display值改成block
			tabs1[index1].style.display = 'block';
			//这个时候如果鼠标滑动到了右侧，依旧要显示
			tabs2[index1].onmouseenter = function() {
				allshangpin.style.display = 'block';
				tabs1[index1].style.display = 'block';
			}
			//同理，这个时候如果鼠标在右侧的时候离开，就都会隐藏
			tabs2[index1].onmouseleave = function() {
				allshangpin.style.display = 'none';
				tabs1[index1].style.display = 'none';
			}
		}
		ts[j].onmouseleave = function() {
			var index2 = this.getAttribute('index2');
			for (var j2 = 0; j2 < ts.length; j2++) {
				tabs1[j2].style.display = 'none';
			}
		}
	}



	//白色滑块
	var whiteli_s = document.querySelectorAll('.whiteli_s');
	whiteli_s.forEach(function(item1) {
		item1.onmouseenter = function() {
			$("#whitebox_s").stop().slideDown();
		}
		item1.onmouseleave = function() {
			$("#whitebox_s").stop().slideUp();
		}
	})
	var whitebox_s = document.getElementById('whitebox_s');
	whitebox_s.onmouseenter = function() {
		$("#whitebox_s").slideDown().stop();
	}
	whitebox_s.onmouseleave = function() {

		$("#whitebox_s").slideUp().stop();
	}
	//白色滑块内的切换效果
	var as = document.querySelectorAll('.as');
	var tabs = document.querySelectorAll('.item2');
	for (var i = 0; i < as.length; i++) {
		// $("#whitebox_s").stop();
		as[i].setAttribute('index',
			i); // 给每个a添加一个data-index的自定义属性，值是它们自己在as中的下标，这个值主要让我们判断我们当前点击的是哪个a从而帮助我们后续修改它对应的div的display值
		as[i].onmouseenter = function() {
			// 滑块先出
			// whitebox_s.classList.add('animate__animated', 'animate__slideInDown');
			// whitebox_s.style.setProperty('--animate-duration', '0s');
			// 点击谁就让其对应的下属div显示出来，其他没有被点击的就隐藏
			//要先知道用户点击的是谁，然后再给对象的div设置display为block即可
			// 根据点击修改div的display属性值
			var index = this.getAttribute('index'); // 获取当前被点击的a的index 
			for (var k = 0; k < as.length; k++) {
				tabs[k].style.display = 'none';
			}
			// 在tabs中锁定a的index对应的item单独将它的display值改成block
			tabs[index].style.display = 'block';
		}

	}



	//搜索模块效果
	var whitenav_search = document.getElementsByClassName('whitenav_search');
	var input1 = document.getElementById('input1');
	var button1 = document.getElementById('button1');
	//????????????????????????????????????
	var whitenav_search_list = document.querySelector('.whitenav_search_list');
	input1.onfocus = function() {
		this.parentNode.style.border = '1px solid rgb(255, 106, 0)';
		button1.style.borderLeft = '1px solid rgb(255, 106, 0)';
		whitenav_search_list.style.display = 'block';
	}
	input1.onblur = function() {
		this.parentNode.style.border = '1px solid rgb(224, 224, 224)';
		button1.style.borderLeft = '1px solid rgb(224, 224, 224)';
		whitenav_search_list.style.display = 'none';
	}

	//搜索模块k循环显示文字（失败）
	// var wl = document.querySelectorAll('.wslist_li');
	// setTimeout(function() {
	// 	for (var w = 0; w < wl.length; w++) {
	// 		wl[w].setAttribute('indexw', w);
	// 		var indexw = this.getAttribute('indexw');
	// 		input1.setAttribute("placeholder", wl[indexw]);
	// 	}
	// }, 3000)

	//底部图片自动更改
	var imgindex = 0;
	var arrimg = new Array();
	arrimg[0] = "assets/8db929caaf8cab755ae29640a8214dc6.png";
	arrimg[1] = "assets/f1ee261b96ae71e845efba398efeca02.png";
	setInterval(function() {
		var ani_footerimg = document.getElementById('ani_footerimg');
		if (imgindex == arrimg.length - 1) {
			imgindex = 0;
		} else {
			imgindex += 1;
		}
		ani_footerimg.src = arrimg[imgindex];
	}, 2000)

	//视频特效
	var videobtn = document.getElementById('mi_video_button');
	var v_b = document.getElementById('video_blackback');
	videobtn.onclick = function() {
		v_b.style.display = 'block';
	}

	var v2 = document.getElementById('video_hidden');
	var hzh = document.getElementById('huazhonghua');
	var video_111 = document.getElementById('video_111');
	var guanbi = document.getElementById('guanbi');
	video_111.onmouseover = function() {
		hzh.style.visibility = 'visible';
	}
	video_111.onmouseleave = function() {
		hzh.style.visibility = 'hidden';
	}

	guanbi.onclick = function() {
		v_b.style.display = 'none';
		hzh.style.visibility = 'hidden';
	}
	hzh.onmouseover = function() {
		this.style.cursor = 'pointer';
		this.style.visibility = 'visible';
	}
	hzh.onclick = function() {
		video_111.requestPictureInPicture(); //js封装好的进入画中画函数
	}

	//第一个轮播图
	// var ls = document.querySelectorAll('.ls');
	// var lutimgli = document.querySelectorAll('.lutimgli');
	// var lbttext_class = document.querySelectorAll('.lbttext_class');

	// setInterval(function() {
	// 	for (var ls1 = 0; ls1 < ls.length; ls1++) {
	// 		ls[ls1].setAttribute('indexls1', ls1);
	// 		lutimgli[ls1].setAttribute('indexls2', ls1);
	// 		ls[ls1].onclick = function() {
	// 			var indexls1 = this.getAttribute('indexls1');
	// 			for (var ls2 = 0; ls2 < ls.length; ls2++) {
	// 				ls[ls2].style.backgroundColor = 'rgb(34, 34, 34)';
	// 				lutimgli[ls2].style.display = 'none';
	// 				lbttext_class[ls2].style.display = 'none';
	// 			}
	// 			ls[indexls1].style.backgroundColor = 'rgb(128, 128, 128)';
	// 			lutimgli[indexls1].style.display = 'block';
	// 			lbttext_class[indexls1].style.display = 'block';
	// 		}
	// 	}
	// }, 2000)
	//自动轮播
	$(function() {
		// 实现自动播放
		var p = document.getElementsByClassName('img-g')[0];
		var button = document.querySelectorAll('.button-g');
		var lbttext_class = document.querySelectorAll('.lbttext_class');
		// 设置3秒播放
		window.timer = setInterval(move, 3000);
		// 轮播设置
		function move() {
			// bannerimage的宽度乘以图片的个数
			if (parseInt(p.style.left) > -4284) {
				// 和bannerimage的宽度保持一致即可
				p.style.left = parseInt(p.style.left) - 1071 + 'px'
				p.style.transition = 'left 1s';
				tog(-Math.round(parseInt(p.style.left) / 1071))
				if (parseInt(p.style.left) <= -4284) {
					setTimeout(function() {
						tog(0)
						p.style.left = '0px'
						p.style.transition = 'left 0s';
					}, 10)
				}
			} else {
				p.style.left = '0px'
				p.style.transition = 'left 0s';
			}
		}

		// 设置小圆点
		for (var i = 0; i < button.length; i++) {
			button[i].onclick = function() {
				p.style.left = -1071 * this.getAttribute('data-indexb') + 'px'
				tog(this.getAttribute('data-indexb'))

				clearInterval(window.timer)
			}
		}

		// 设置小圆点
		function tog(indexb) {
			if (indexb > 3) {
				tog(0);
				return;
			}
			for (var i = 0; i < button.length; i++) {
				button[i].style.backgroundColor = 'rgb(36, 35, 37)';
				lbttext_class[i].style.display = 'none';
			}
			button[indexb].style.backgroundColor = 'rgb(128, 128, 128)';
			lbttext_class[indexb].style.display = 'block';
		}

		// 鼠标移上事件
		p.onmouseover = function() {
			clearInterval(window.timer)
		}
		// 鼠标移除事件
		// p.onmouseout=function(){
		// 	window.timer=setInterval(move,3000);
		// }
	});
	//轮播2
	$(function() {
		var p2 = document.getElementsByClassName('lunbotubox2_ul')[0];
		var lbtbtn2 = document.querySelectorAll('.button_2lbtli');
		window.timer = setInterval(move2, 3000);

		function move2() {
			if (parseInt(p2.style.left) > -3210) {
				p2.style.left = parseInt(p2.style.left) - 1070 + 'px'
				p2.style.transition = 'left 1s';
				tog2(-Math.round(parseInt(p2.style.left) / 1070))
				if (parseInt(p2.style.left) <= -3210) {
					setTimeout(function() {
						tog2(0)
						p2.style.left = '0px'
						p2.style.transition = 'left 0s';
					}, 10)
				}
			} else {
				p2.style.left = '0px'
				p2.style.transition = 'left 0s';
			}
		}
		// 设置小圆点
		for (var i = 0; i < lbtbtn2.length; i++) {
			lbtbtn2[i].onclick = function() {
				p2.style.left = -1070 * this.getAttribute('data-indexlbu2') + 'px'
				tog2(this.getAttribute('data-indexlbu2'))

				clearInterval(window.timer)
			}
		}

		// 设置小圆点
		function tog2(indexlbu2) {
			if (indexlbu2 > 2) {
				tog2(0);
				return;
			}
			for (var i = 0; i < lbtbtn2.length; i++) {
				lbtbtn2[i].style.backgroundColor = 'rgb(36, 35, 37)';
			}
			lbtbtn2[indexlbu2].style.backgroundColor = 'rgb(128, 128, 128)';
		}

		// 鼠标移上事件
		p2.onmouseover = function() {
			clearInterval(window.timer)
		}
	})

	//底部二维码隐藏显示特效
	var ferweima = document.getElementById('footer_erweima');
	var fwx = document.querySelector('.icon-weixin');
	fwx.onmouseenter = function() {
		ferweima.style.display = 'block';
	}
	fwx.onmouseleave = function() {
		ferweima.style.display = 'none';
	}


	var tb_text = document.getElementById('thirdbox_buttom_text');
	window.addEventListener("scroll", handleScroll);

	function handleScroll() {
		this.currentScroll = window.pageYOffset //表示当前滚动的位置
		if (this.currentScroll >= tb_text.offsetTop - 950) {
			tb_text.classList.add('animate__animated', 'animate__slideInUp');
			tb_text.style.setProperty('--animate-duration', '1s');
		}
	}


	var img148 = document.querySelector('.img148_1');
	window.addEventListener("scroll", handleScroll1);

	function handleScroll1() {
		this.currentScroll = window.pageYOffset //表示当前滚动的位置
		if (this.currentScroll >= img148.offsetTop - 950) {
			img148.classList.add('animate__animated', 'animate__slideInUp');
			img148.style.setProperty('--animate-duration', '1s');
		}
	}
	var ancss_all = document.querySelectorAll('.animationcss_all');
	for (var a = 0; a < ancss_all.length; a++) {
		ancss_all[a].setAttribute('indexa', a);
		window.addEventListener("scroll", handleScroll2);

		function handleScroll2() {
			this.currentScroll = window.pageYOffset //表示当前滚动的位置
			var indexaa = this.getAttribute('indexa');
			for (var k = 0; k < ancss_all.length; k++) {
				if (this.currentScroll >= ancss_all[indexaa].offsetTop - 950) {
					ancss_all[indexaa].classList.add('animate__animated', 'animate__slideInUp');
					ancss_all[indexaa].style.setProperty('--animate-duration', '1s');
				}
			}

		}

	}

	// var anicss=tb_text;
	// window.addEventListener("scroll", handleScroll1(anicss));

	// function handleScroll1(anicss) {
	// 	this.currentScroll = window.pageYOffset //表示当前滚动的位置
	// 	if (this.currentScroll >= anicss.offsetTop - 950) {
	// 		alert('22');
	// 		anicss.classList.add('animate__animated', 'animate__slideInUp');
	// 		anicss.style.setProperty('--animate-duration', '1s');
	// 	}
	// }

	//页面刷新的时候回到带定位的盒子那里
	// window.addEventListener("onunload", onunload1);

	// function onunload1() {
	// 	var firstbox = document.querySelector('.firstbox');
	// 	alert('111');
	// 	// window.pageYOffset=scrollTop:firstbox.offsetTop;
	// }
	var firstbox = document.getElementById('firstbox1');
	// firstbox.focus();
	// window.addEventListener("beforeunload", function () {
	// })
}
