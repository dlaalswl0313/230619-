$(function(){
    $("#keyword").on("keyup",function(){
        var word=$(this).val();//input태그에 있는 걸 가져오겠다.
        $(".data img").filter(function(){
            // 줄은 "data" 클래스가 있는 요소 내부의 모든 이미지를 선택하고 
            //콜백 함수를 사용하여 필터링합니다.
            var isSearch=$(this).attr("alt").indexOf(word) > -1;
            //attr(attributName)-속성이름
            $(this).parent().toggle(isSearch);
        });
    });
});

