$(function(){

	//自动切换焦点图
	(function(){
		var oDiv=$('#fade');
		var aLiul=oDiv.find('ul li');
		var aLiol=oDiv.find('ol li');
		var oP=oDiv.find('p');
		var now=0;
		var timer=null;
		var arr=['爸爸去哪儿啦','全教育日作出重要指示','失败 今为金日成诞辰'];
		fade();
		// oLiol.click(function(){
		// aLiol.click(function(){
		// 	now=$(this).index();
		// })
		aLiol.click(function(index){
			now=$(this).index();
			fade();
		})
		autoPlay();
		function autoPlay(){
			timer=setInterval(function(){
			now++;
				now%=arr.length;
				fade();
			}, 1000)
		}
		// })
		oDiv.hover(function(){
			clearInterval(timer);
		},autoPlay)
		function fade(){
			aLiul.each(function(index){
				if(index==now){
					aLiul.eq(index).fadeIn().css('zIndex','5');
					aLiol.eq(index).attr('class','active');
				}else{
					aLiul.eq(index).fadeOut().css('zIndex','1');
					aLiol.eq(index).attr('class','');
				}
				oP.text(arr[now]);
				//aLiul(index).fadeOut().css('index',1);

			})
		}
	})();
	//options选项卡的切换
	(function(){
		tab($('.tabNav1'),$('.tabCon1'));
		tab($('.tabNav2'),$('.tabCon2'));
		function tab(oNav,oCon){
			oCon.hide().eq(0).show();
			var aElem=oNav.children();
			//aElem.each(function(){
				aElem.click(function(){
					aElem.removeClass('active').addClass('gradient');
					$(this).removeClass('gradient').addClass('active');
					aElem.find('a').attr('class','triangle_down_gray');
					$(this).find('a').attr('class','triangle_down_red');
					oCon.hide().eq($(this).index()).show();
				})
			//})
		}
	})();
	//search 搜索框
	(function(){
		var arrText=['习近平对中央政治局成员的','疫苗质量安全是不可触碰“红线”','美先进武器替菲撑腰 两国将联','朝鲜金正日诞辰发射导弹 韩','毛新宇：伟人后代不好当 压力大'];
		var oDiv=$('#search');
		var oUl=$('#menu');
		var aLi=oDiv.find('li');
		var otext=oDiv.find('.form .text');
		var now=0;
		otext.val(arrText[0]);

		aLi.click(function(){
			aLi.attr('class','gradient');
			$(this).attr('class','active');
			otext.val(arrText[$(this).index()]);
			now=$(this).index();
		})
		otext.focus(function(){
			if(otext.val()==arrText[now]){
				otext.val('');
			//alert(otext.val());
			}
		})
		otext.blur(function(){
			if(otext.val()==''){
				otext.val(arrText[now]);
			}
		})
	})();
	//update 自动轮播
	(function(){
		var arr=[
		{
			'url':'http://www.baidu.com',
			'title':'萱萱',
			'time':'5分钟前',
			'content':'那些灿烂华美的瞬间…'
		},
		{
			'url':'http://www.baidu.com',
			'title':'文文',
			'time':'7分钟前',
			'content':'那些灿烂华美的瞬间…'
		},
		{
			'url':'http://www.baidu.com',
			'title':'萱萱',
			'time':'9分钟前',
			'content':'那些灿烂华美的瞬间…'
		},
		{
			'url':'http://www.baidu.com',
			'title':'小明',
			'time':'12分钟前',
			'content':'那些灿烂华美的瞬间…'
		},
		{
			'url':'http://www.baidu.com',
			'title':'丽丽',
			'time':'15分钟前',
			'content':'那些灿烂华美的瞬间…'
		}
		];
		var oDiv=$('.update');
		var oUl=oDiv.find('ul');
		var oBtn1=$('#updateUpBtn');
		var oBtn2=$('#updateDownBtn');
		var str='';
		var now=0;
		var timer=null;
		for(var i=0;i<arr.length;i++){
			str+='<li><a href="'+arr[i].url+'"><strong>'+arr[i].title+'</strong> <span>'+arr[i].time+'</span> 写了一篇新文章：'+arr[i].content+'</a></li>';
		}
		oUl.append(str);
		//alert();
		var iH=oUl.find('li').first().height();
		//alert(arr.length);
		oBtn2.click(function(){
			//oUl.animation
			domove();

		})

		function autoplay(){
			timer=setInterval(function(){
				domove();
			}, 1500)
		}
		oDiv.hover(function(){
			clearInterval(timer);
		},autoplay)


		oBtn1.click(function(){
			//oUl.animation
			// if(Math.abs(now)<arr.length-1){
			// 	now++;
			// }else{
			// 	now=0;
			// }
			if(now>=0){
				now=-(arr.length-1);
			}else{
				now++;
			}
			oUl.animate({'top':now*iH},1000);
		})
		function domove(){
			if(Math.abs(now)<arr.length-1){
				now--;
			}else{
				now=0;
			}
			oUl.animate({'top':now*iH},1000);
		}

	})();
	//日历提示
	(function(){
		var oDiv=$('.calendar');
		var aSpan=oDiv.find('h3 span');
		var aLi=oDiv.find('li');
		var aImg=oDiv.find('.img');
		var oDiv2=oDiv.find('.today_info');
		aImg.hover(function(){
			//alert(1);
			oDiv2.show();
			oDiv2.css('left',$(this).parent().position().left+50);
			oDiv2.css('top',$(this).parent().position().top-35);
			oDiv2.find('p').text($(this).attr('info'));
			oDiv2.find('h4 strong').text(aSpan.eq($(this).parent().index()%7).text());


		},function(){
			//alert(2);
			oDiv2.hide();
		})
	})();
	//BBS高亮显示
	(function(){
		var aLi=$('.bbs').find('li');
		aLi.mouseover(function(){
			aLi.removeClass('active').eq($(this).index()).addClass('active');
		})
	})();
	//HOT区域
	(function(){
		var arr=['','用户名：2<br />人气：2','用户名：性感宝贝<br />区域：朝阳CBD<br />人气：124987',
		'用户名：3<br />人气：3','用户名：4<br />人气：4','用户名：5<br />人气：5','用户名：6<br />人气：6','用户名：7<br />人气：7','用户名：8<br />人气：8','用户名：9<br />人气：9','用户名：10<br/>人气：10'];
		var aLi=$('.hot_area').find('li');
		aLi.mouseover(function(){
			if($(this).index()==0){
				return
			}
			aLi.find('p').remove();
			//alert($(this).nodeName);
			//alert($(this).index());
			$(this).append('<p style="width:'+($(this).width()-12)+'px;height: '+($(this).height()-12)+'px;">'+arr[$(this).index()]+'</p>');
		})


	})();

})
