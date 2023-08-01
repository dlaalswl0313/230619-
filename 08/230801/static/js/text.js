$(function(){
    $("#keyword").on("keyup",function(){
        var word = $(this).val();
       
    });
    $("#category").on("change",function(){
        $(".story").filter(function(){
            var isSearch=$(this).indexOf("연애소설") > -1;
            $(this).parent().toggle(isSearch);
        });
    });
});