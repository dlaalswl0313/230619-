$(function(){
    $("#keyword").on("keyup",function(){
        var word = $(this).val();
        
    });
    $("#category").on("change",function(){
        $(".story h3").filter(function(){
            var isSearch=$(this).indexOf("연애소설") > -1;
            $(this).parent().toggle(isSearch);
        });
        //if,switch냐 조건문필요함
    });
});

const cate =["all","romance","novel","poetry","proverb","diary"];
