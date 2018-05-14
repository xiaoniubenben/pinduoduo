$(function () {
    // 设置返回顶部按钮
    $(".o-back").hide();
    var height=document.documentElement.clientHeight;
    window.onscroll=function(){
        if($(window).scrollTop()> height){
            $('.o-back').show();
        }else{
            $('.o-back').hide();
        }
    };
    $(".o-back").click(function(event) {
        // $('html,body').animate({
        //     scrollTop: 0
        // },200);
        $('html,body').scrollTop(0);
        return false;
    });
})