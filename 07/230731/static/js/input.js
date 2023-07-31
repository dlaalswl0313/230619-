$(function(){
    /*$("#setImage").click(function(){
        var data = $("#inputName").val(); //입력값을 주면
        alert(data);//알림창으로 입력값이 뜬다.

    });*/
    $(function(){
        $("#setImage").click(function(){
            var data = $("#imageName").val();
            
            $("#gallery").append("<div class='img_box'><img src='"+data+"'></div>");
        });
        $("#3n").click(function(){//한 줄에 3개씩
            //$("#gallery").css("grid-template-columns:","repeat(3,1rf)");
            $("#gallery").removeClass("grid-4n");//1줄에 4개씩 나오는 걸 지우고
            $("#gallery").addClass("grid-3n");//한 줄에 3개씩 나오는 걸로 바뀜
        });
        $("#4n").click(function(){
            $("#gallery").removeClass("grid-3n");
            $("#gallery").addClass("grid-4n");
        });
       
    });
    //https://loremflickr.com/1200/400?cat
});