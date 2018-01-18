require(["scripts/config.js"], function () {
    require(["jquery", "banner"], function ($, ban) {
        //加载头部的html
        $(".header").load("./header.html");
        /*轮播图*/
        $(".full_ban").banner({
            src: [
                "images/web-101-101-2-1515981584[1].jpg",
                "images/web-101-101-5-1516071154[1].jpg",
                "images/web-101-101-1-1515463753[1].jpg",
                "images/web-101-101-3-1515980168[1].jpg",
                "images/web-101-101-4-1515463779[1].jpg"
            ],
            autoplay: true,
        })
        /*左侧菜单选项显示隐藏*/
        //创建lst_detail部分

        //var $lst = $(".lst_detail");
        $(".lst_l_ul li").on({
            "mouseover": function () {
                var $lst = $(this).children("div");
                if ($lst.length == 0)
                    $lst = $("<div></div>").addClass("lst_detail").appendTo($(this));
                $lst.show();
                var $i = $(this).addClass("cur").children("a").css("color", "#ce4261").children("i");
                var str = $i.attr("class").replace("init", "hover");
                $i.attr("class", str);
            },
            "mouseout": function () {
                var $lst = $(this).children("div");
                $lst.hide();
                var $i = $(this).removeClass("cur").children("a").css("color", "#000").children("i");
                var str = $i.attr("class").replace("hover", "init");
                $i.attr("class", str);
            }
        });


    })
})