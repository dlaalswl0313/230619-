$(function(){
    $(".filterMore").click(function(){
        $(".filterDetail").slideToggle();
        $(this).toggleClass("moreDown");
        $(this).toggleClass("moreUp");
    });
    $.getJSON("./전국건강증진센터표준데이터.json",function(data){
        const data_list = data.records;
        var task = new Array();
        $.each(data_list, function(i,item){
            $("#section").append("<div class='item_short'><div class='item_image'><img src='https://loremflickr.com/200/200/health?random="+i+"'></div>"+
            "<div class='item_detail_box'><ul class='item_detail'>"+"<li>"+item.건강증진센터명+"</li><li>"+item.소재지도로명주소+"</li>"+
            "<li>"+item.건강증진업무내용+"</li><li>"+item.건강증진센터구분+"</li>"+
            "<li>"+item.운영기관명+"</li><li>"+item.운영기관전화번호+"</li></ul></div></div>");
        });
    });

//검색
    $("#searchWord").on("keyup",function(){ 
         const word=$(this).val();
        //  소재지주소와 업무내용에 한해서만  검색이 가능하게 변경하시오
         $(".item_short").filter(function(){
            var addr = $(this).find(".item_detail").children("li:eq(1)");
            var task = $(this).find(".item_detail").children("li:eq(2)");
            var hasAddr = addr.text().indexOf(word) > -1;
            var hasTask = task.text().indexOf(word) > -1;
            $(this).toggle( hasAddr || hasTask );
        });
    });    
    
    $(".centerName").click(function(){
        $(this).toggleClass("asc");
        $(this).toggleClass("desc");
    });
    $(".addr").click(function(){
        $(this).toggleClass("asc");
        $(this).toggleClass("desc");
    });
    $(".nurseCount").click(function(){
        $(this).toggleClass("asc");
        $(this).toggleClass("desc");
    });
    $(".doctorCount").click(function(){
        $(this).toggleClass("asc");
        $(this).toggleClass("desc");
    });
});