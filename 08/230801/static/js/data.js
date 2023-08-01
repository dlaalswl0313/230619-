$(function(){
    //input 태그에 키보드를 눌렀다가 떼는 경우에 동작 - keyup
    //input 태그에 키보드를 눌렀을때 동작 - keyDown
    $("#search_word").on("keyup",function(){
        var word=$(this).val();
        $("#mydata tr").filter(function(){//callback 함수안에함수
            //$("선택자").filter("선택자2") : 선택자 중에 선택자2인 태그 선택
            $(this).toggle($(this).text().indexOf(word) > -1);
            //this는 tr,여러개중에 하나 , r글자는 배열 ,배열은 0부터 시작
            //-1 이면 찾지 못한것
        });
    });
});