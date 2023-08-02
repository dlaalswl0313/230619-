let re =0;
$(function(){
    $.getJSON("http://krdrive.ipdisk.co.kr:8000/test/data.php", function(){
        chat_show(data);
    });
    re=setTimeout(function(){
        location.reload();
    },10000);
});
$(document).op("keyup",function(){
   if(re!=0)
        clearTimeout(re);
});

function send(){
    var send_data={ writer:$("#writer").val(), content:$("#content").val()};//json 변환이 필요없다.
    send_data = JSON.stringify(send_data);

    var xmlHttp = new XMLHttpRequest();
    //서버와 주고받고 할때 사용되는 객체, 새로고침없이 데이터를 받아올수있다.
    
    xmlHttp.open("POST","http://krdrive.ipdisk.co.kr:8000/test/data.php");//get 인지 post인지 정하고 작성
    xmlHttp.onload=function(){
        var data = this.response;
        if(data==="fail")
            alert("다시 입력하세요");
        else  chat_show(JSON.parse(data));    
    };
    xmlHttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xmlHttp.send("x="+send_data);
    //send() - 서버에 데이터 보내는 곳
    re=setTimeout(function(){
        location.reload();
    },10000);
}
function chat_show(data){
    var out="";
    $.each(data,function(i,item){
        out += "<li class=chat><div class='write_info'><b class='name'>"+item.writer+
        "</b><span class='date'>"+item.date+"</span></div><div class='content'>"+item.content+
        "</div></li>";
    });

    $("#chat_list").html(out);
    $("#content").val('');
    $("#content").focus();
   
}