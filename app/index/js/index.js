$(function () {
    // 轮播图
    var mySwiper = new Swiper ('.swiper-container', {
        loop: true,
        // 分页器
        pagination: {
            el: '.swiper-pagination'
        },
        autoplay: {
            disableOnInteraction: false
        }
    })

    // tab切换
    $(".index .tab ul").on("click","li",function () {
        console.log();
        $(this).addClass("liActive").siblings("li").removeClass("liActive");
        $(".index .tab .tabConts").eq($(this).index()).addClass("tabActive").siblings(".tabConts").removeClass("tabActive")

    })
    // var lis = document.querySelector(".tab").querySelectorAll("li");
    // for(var i = 0 ;i<lis.length;i++){
    //     $(lis[i]).on("click",function () {
    //         $(this).addClass("liActive").siblings("li").removeClass("liActive");
    //         $(" .tab .tabConts").eq($(this).index()).addClass("tabActive").siblings(".tabConts").removeClass("tabActive")
    //     })
    // }
    // console.log(lis);



    // 设置返回顶部按钮
    $(".backTop").hide();
    var height=document.documentElement.clientHeight;
    window.onscroll=function(){
        if($(window).scrollTop()> height){
            $('.backTop').show();
        }else{
            $('.backTop').hide();
        }
    };
    $(".backTop").click(function(event) {
        // $('html,body').animate({
        //     scrollTop: 0
        // },200);
        $('html,body').scrollTop(0);
        return false;
    });

    // 获取ul据顶部的高度
    var $oTop = $(".tab ul").offset().top;
    var $ulHeight = $(".tab ul").height();

    $(window).scroll(function() {
        //当时滚动条滚动到底部时，设置评论显示隐藏
        if (($(window).height() + $(window).scrollTop()) === $(document).height()) {
            $(".arguments").hide();
        }else{
            $(".arguments").show();
        }
        // 固定导航栏
        if($oTop <= $(window).scrollTop()){
            $(".tab ul").css({"position":"fixed","left":"0","top":"0.8533333333rem","zIndex":10});
            $(".tabBox").css({"paddingTop":$ulHeight});
        }else{
            $(".tab ul").css({"position":"static"});
            $(".tabBox").css({"paddingTop":0});
        }

    });
})