$(function(){
    $("#soju").click(function(){
        $("#soju_list").slideToggle(); 
    });
    $("#beer").click(function(){
        $("#beer_list").slideToggle(1000);
    });
    $("#liquor").click(function(){
        $("#liquor_list").slideToggle("slow");
    });
    $(".image").mouseover(function(){
        $(this).find('.big').show();
    });//마우스 올릴때
    $(".image").mouseleave(function(){
        $(this).find('.big').hide();
    });//마우스 떠날때
});
