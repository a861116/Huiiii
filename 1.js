$(document).ready(function() {
var a_index = 0;
    $("body").click(function(e){
        var a = new Array("富强", "民主", "文明", "和谐", "自由", "平等", "公正" ,"法治", "爱国", "敬业", "诚信", "友善");
        var $i = $("<span/>").text(a[a_index]);
        a_index = (a_index + 1) % a.length;
        var x = e.pageX,y = e.pageY;
        $i.css({
            "z-index": 99999,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
            "font-size": "18px",
            "color": "white"
        });
        $("body").append($i);
        $i.animate({"top": y-180,"opacity": 0},1500,function() {
            $i.remove();
        });
    });
var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom, 'dark');
var option;


option = {
	title:{
		text:'2020年各国GDP总值',
		subtext:'单位:亿美元',
		x:'center',
		y:'top',
		textAlign: null,
	},
    xAxis: {
        type: 'category',
        data: ['美国', '中国', '日本', '德国', '印度', '法国', '英国', '巴西', '意大利', '加拿大']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
		itemStyle: {
					normal: {
					color: '#ed213a'
							}
							},
        data: [218463, 155518,52797, 42119,32248,29749,28037,24038,21602,19071],
        type: 'bar',
		
    }]
};

option && myChart.setOption(option);
var chartDom1 = document.getElementById('main1');
var myChart1 = echarts.init(chartDom1, 'dark');
var option1;

option1 = {
	title:{
		text:'中国近年GDP总值',
		subtext:'单位:亿美元',
		x:'center',
		y:'top',
		textAlign: null,
	},
    xAxis: {
        type: 'category',
        data: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
		itemStyle: {
					normal: {
					color: '#ed213a'
							}
							},
        data: [60663,75221,85703,96350,105345,112261,112321,122427,131186,142433],
        type: 'line',
		smooth:'true',
		
    }]
};

option1 && myChart1.setOption(option1);

    $('.title').animate({
        left: '-=74%'
    },
    1000);
    $('.title1').animate({
        left: '-=77%'
    },
    2000);
    var windowHeight = parseInt($(".bc").css("height")); //jq
    $('.btn').click(function() {
        $("html,body").animate({
            "scrollTop": windowHeight
        },
        500);
    });
    $(".gotop").click(function() {
        TweenMax.to(window, 1.5, {
            scrollTo: 0,
            ease: Expo.easeInOut
        });
        var huojian = new TimelineLite();
        huojian.to(".gotop", 1, {
            scale: 0.6,
            y: "+=40",
            ease: Power4.easeOut
        }).to(".gotop", 1, {
            y: -1000,
            opacity: 0,
            ease: Power4.easeOut
        },
        0.6).to(".gotop", 1, {
            y: 0,
            rotationY: 0,
            opacity: 1,
            scale: 1,
            ease: Power4.easeOut,
            clearProps: "all"
        });
    });
    $(function() {
        $.ajax({
            type: "POST",
            url: "https://api.inews.qq.com/newsqa/v1/automation/modules/list?modules=VaccineTopData",
            dataType: "json",
            success: function(data) {
            var chinatotal = data.data.VaccineTopData.中国.total_vaccinations;
            var chinanew = data.data.VaccineTopData.中国.new_vaccinations;
            var gobaltotal = data.data.VaccineTopData.全球.total_vaccinations;
            var gobalnew = data.data.VaccineTopData.全球.new_vaccinations;
            var chinaper = data.data.VaccineTopData.中国.total_vaccinations_per_hundred;
            var gobalper = data.data.VaccineTopData.全球.total_vaccinations_per_hundred;

                $("#gobaltotal").html((gobaltotal / 100000000).toFixed(1));
                $("#chinatotal").html((chinatotal / 100000000).toFixed(1));
                $("#gobalnew").html((gobalnew / 10000).toFixed(1));
                $("#chinanew").html((chinanew / 10000).toFixed(1));
                $("#chinaper").html(chinaper);
                $("#gobalper").html(gobalper);
                // 指定图表的配置项和数据
                
                 
            }
        });
    });
	$(".searchbtn").click(function() {
	    
		var name = $(".searchtext").val();
		if(name==""){
			
			name=$(".searchtext").attr('placeholder');
		}
		console.log(name);
		window.open("http://so.12371.cn/dangjian.htm?q="+name+"&t=newsmerge&client=no&sort=&time=0&searchfield=");
	});
    $("#firvideo").click(function() {
        window.open("http://www.stdaily.com/");
    });
	$("#secvideo").click(function() {
	    window.open("https://www.kylc.com/stats/global/yearly_per_country/g_gdp/chn.html");
	});
	$("#card1").click(function() {
	    window.open("https://www.bilibili.com/video/BV1sy4y1a7Ca?from=search&seid=9967379975304958682");
	});
	$("#card2").click(function() {
	    window.open("https://www.bilibili.com/video/BV13x411W78q?from=search&seid=8671399082629677424");
	});
	$("#card3").click(function() {
	    window.open("https://www.bilibili.com/video/BV1J5411G7AT?from=search&seid=15309409792701637486");
	});
	$("#card4").click(function() {
	    window.open("https://www.bilibili.com/video/BV1Wi4y1x74b?from=search&seid=2524046605068967735");
	});
	$("#card5").click(function() {
	    window.open("https://www.bilibili.com/video/BV19K411N7VK?from=search&seid=16778324478697472759");
	});
	$("#card6").click(function() {
	    window.open("https://www.bilibili.com/video/BV1wT4y1G7Et?from=search&seid=5017872587122514754");
	});


})
 $(window).scroll(function() {
        
                 if($(window).scrollTop()>  (parseInt($(".bc").css("height"))-68)){
					 $(".head").css("background", "-webkit-linear-gradient(top,#ed213a,#93291e)");
				 }else{
					 $(".head").css("background", "black");
				 }
				 var n=0;
				 if($(window).scrollTop()>  4.9*(parseInt($(".bc").css("height")))){
					
					 setTimeout(function(){
					 $(".title2").addClass("first-words");
					 },0);
				 					setTimeout(function(){
				 					$(".touming").addClass("second-words");
				 					},4000);
									
					$(".head").css("background", "black");
				 }

            });

