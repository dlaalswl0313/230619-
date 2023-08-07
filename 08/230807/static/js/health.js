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
    
     $("#searchWord").on("keyup",function(){
         var word=$(this).val();
         $("#section li").filter(function(){
               $(this).toggle($(this).text().indexOf(word) > -1); 
           });
        });    
});