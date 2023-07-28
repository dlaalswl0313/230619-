$(function(){
    for(var i=1; i<=5; i++){
        $("#slide").append("<li><img src='https://loremflickr.com/1000/400?random="+i+"'></li>");
    }
    $(".left").click(function(){
        if(parseInt($("#slide").css("left"))==0) $("#slide").css("left","-5000px");//왼쪽 값이 얼마인지 나옴, 단위까지 나옴
        $("#slide").animate({left:"+= 1000px"});
    });
    $(".right").click(function(){
        if(parseInt($("#slide").css("left"))-=4000) $("#slide").css("left","1000px");//왼쪽 값이 얼마인지 나옴, 단위까지 나옴
        $("#slide").animate({left:"-= 1000px"});
    });
    
});