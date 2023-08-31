// question.js
let isLogin = false;

$(function(){
    isLogin=getCookie("isLogin")=="true"? true:false;
    var id = getCookie("id");

    var login='';
    if(isLogin){//로그인 성공
        login=`<div class="user">
        <p>${id}</p> <a href="/?part=logout">로그아웃</a>
        </div>`;
    }else{// 로그인 실패 또는 로그인 안한 상태
        login='<div class="login_bt"><a href="/login">로그인</a></div>';
    }
    $("#side").append(login);
    list();
});
function list(){
    $.getJSON("./data/question.json",function(data){
        $.each(data,function(i,item){
            $("tbody").append("<tr><td>"+item.id+"</td><td>"+
            item.title+"</td><td>"+
            item.write+"</td><td>"+item.date
            +"</td><td>"+item.to+"</td></tr>");
        });
    });
    //검색기능
    $("#word").on("keyup",function(){
        var word = $(this).val();
        $("tbody tr").filter(function(){
            $(this).toggle($(this).text().indexOf(word)>-1);
        });
    }); 
    $(".modalBackground").click(function(){
        $(this).parseInt.hide(); 
        //모달창 바깥부분 배경을 클릭하면 문의글 작성 모달창 닫힘
    });
}
function qsSave(){
    $("#qsModal").hide(); //문의글 작성 모달창 닫기
    //json 형식으로 값 전달하기 만들기 
}
function questionWrite(){ //문의하기 버튼 클릭 시 실행되는 함수 
    if(isLogin){//로그인 성공
        $("#qsModal").show();
    }else{//로그인 안한 상태
        var isOk = confirm("로그인 후 문의 할 수 있습니다."); //로그인을 할거니 안할거니
        if(isOk){
            //location.href="/login"; //주소영역변경
            location.href="/?sub=question"; //다른페이지에서로그인을해야하는경우
        }
    }
}
