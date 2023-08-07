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
            task.push(item.건강증진업무내용);
            console.log(item.건강증진업무내용);
        });
    });
});