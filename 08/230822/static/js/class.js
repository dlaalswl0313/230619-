let school = new Object();//json 전체 데이터 저장

$(function(){
    $("#detail_bt").click(function(){
        $(".search_detail").slideToggle(500);
    })

    $.getJSON("./data/class.json",function(data){
        school = data;
        
        var teacher= data.담임;
        $("#main_title").text(data.학교명);
        
         $.each(data.학생,function(i, std){
            var 담임="";
            for(var t in teacher){ if(teacher[t].반 == std.반){ 담임=teacher[t].이름; break;} }
            var eyes=std.시력.split(",");
            $("#list_wrap").append("<div class='info'><ul class='dt'>"+
            "<li class='name'>이름 : "+std.이름+"</li>"+
            "<li class='ban'>"+std.반+"반</li>"+
            "<li class='myteacher'> 담임 : "+담임+"</li>"+
            "<li class='t'>키 : "+std.키+"cm</li>"+
            "<li class='e'>시력 : 좌"+eyes[0]+" 우"+eyes[1]+"</li>"+
            "<li class='w'>몸무게 : "+std.몸무게+"kg</li>"+
            "</ul></div>");
         });
    });

    $("#word").on("keyup", default_search);
    $("#word").next().click(default_search);

    $(".search_detail input").on("keyup", detail_search);
    $("#cls").change(detail_search);

    $("#chartBt").click(drawChart);//상세 검색 시 반을 선택했을때 차트생성
});
function drawChart(){
    var ban = $("#cls").val();
    if(ban==''){alert("반을 선택해주세요!!"); return;}
}
function detail_search(){
    var minT=0, maxT=0, minE=0,maxE=0;
    minT = parseInt($("#minTall").val()==''? 0: $("#minTall").val());
    maxT = parseInt($("#maxTall").val()==''? 0: $("#maxTall").val());
    minE = parseFloat($("#minEyes").val()==''? 0: $("#minEyes").val());
    maxE = parseFloat($("#maxEyes").val()==''? 0: $("#maxEyes").val());
    
    var ban = $("#cls").val();//반 선택 값
    console.log(ban);
    
    $(".info").filter(function(){
        var isShow=true;
        //키 검색
        if(minT != 0 ){  //  상세 검색에서 키를 입력했다면 minT변수는 0이 아니다
            var T=parseInt( $(this).find(".t").text().slice(3) ); 
// 화면에 표시된 키는 cm단위를 가지고있는 텍스트이기때문에 parseInt를 통해 앞쪽의 숫자만 걸러온다
            if( minT > T || maxT< T )
                isShow=false;
        }
        //시력 검색
        if(minE != 0 && isShow==false){ // 키 검색 한것에 추가 검색이 되도록 할것인지  
             //  키와 시력둘중하나 검색이되게 할것인지 정해야한다.
            var text = $(this).find(".e").text();
            var temp = [ parseFloat(text.slice(text.indexOf("좌")+1)) ,parseFloat(text.slice(text.indexOf("우")+1)) ];
            var E = Math.min(...temp);
            if(minE > E || maxE < E)
                isShow=false;
            else isShow=true;
        }
        //반 검색
        if(isShow){
            if($(this).find(".ban").find().indexOf(ban) == -1)
                isShow=false;
        }
        $(this).toggle(isShow);
    });
}
function default_search(){  // 이름  만  검색
    var word = $("#word").val();

    $(".info").filter(function(){
        $(this).toggle( $(this).find(".name").text().indexOf(word) > -1 );
    });
}