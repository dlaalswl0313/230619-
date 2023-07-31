$(function(){
    /*$("#setImage").click(function(){
        var data = $("#inputName").val(); //입력값을 주면
        alert(data);//알림창으로 입력값이 뜬다.

    });*/
    $(function(){
        $("#setImage").click(function(){
            var data = $("#imageName").val();
            
            $("#gallery").append("<img src='"+data+"'>");
        });
    });
});