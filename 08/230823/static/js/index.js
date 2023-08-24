let account = data;
$(function(){
//데이터 삽입    
    $.getJSON("./data/index.json",function(data){
        //console.log(data.지출);
        let minus = data.지출;
    
         $.each(minus,function(i,item){
            $("#content").append("<tr><td>"+item.분류+"</td><td>"+item.금액+"</td><td>"
            +item.내용+"</td></tr>");
         });
         let plus = data.수입;
         
         $.each(plus,function(i,item){
            $("#content2").append("<tr><td>"+item.분류+"</td><td>"+item.금액+"</td><td>"
            +item.내용+"</td></tr>");
         });
     
     });

 //글자검색
   $("#word").on("keyup",function(){
    var word=$(this).val();
        $("#content tr").filter(function(){
          $(this).toggle($(this).text().indexOf(word) > -1);   
        });
        $("#content2 tr").filter(function(){
            $(this).toggle($(this).text().indexOf(word) > -1);   
        });
    });
//금액검색
    $("#money").on("keyup",function(){
        var money=parseInt($(this).val());
            $("#content tr").filter(function(){
              $(this).toggle($(this).text().indexOf(money) > -1);   
            });
            $("#content2 tr").filter(function(){
                $(this).toggle($(this).text().indexOf(money) > -1);   
            });
    });
//체크박스     
    $("#icon").click(function(){
        $(this).toggleClass("open");
        $("#side").toggleClass("sideopen");
    });
    $("input[name=category]").change(function(){
        var check = new Array();
        $("input[name=category]:checked").each(function(){
            check.push($(this).val());     
        });    
    });
//차트
    $("#chart").click(draw_chart);
    $("#menu").click(back);
});
function draw_chart(account){
    //alert("안녕");
    const ctx1=$("#pi")[0];
    const ctx2=$("#pi2")[0];
    new Chart(ctx1,{
        type:"pie",
        data:{
            
        }
    })

}
function back(){
    //alert("잘가");

}

   
