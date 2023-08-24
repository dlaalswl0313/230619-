$(function(){
    for(var i=1; i<=5;i++){
        $("#slide").append("<li><img src='https://loremflicker.com/1000/400?random="+i+"'></li>");
    }
    $(".left").click(function(){
        if(parseInt($("#slide").css("left"))==0 )$("#slide").css("left","-5000px");//왼쪽 값이 얼마인지 나옴, 단위까지 나옴
        //덧셈은 반드시 숫자로 바꿔주는 parseInt, Number를 사용해야한다 
        //왜냐면 덧셈은 숫자만 더해주지 않기 때문이다.
        $("#slide").animate({left:"+=1000px"});
        //왼쪽버튼을 누르면 사진이 추가됨
    });
    $(".right").click(function(){
        if(parseInt($("#slide").css("left"))==-4000 )$("#slide").css("left","1000px");//왼쪽 값이 얼마인지 나옴, 단위까지 나옴
        $("#slide").animate({left:"-=1000px"});
        //오른쪽버튼을 누르면 전 사진이 나옴
    });
});